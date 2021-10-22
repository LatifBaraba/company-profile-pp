import { GET_PROGRAM,
    GET_PROGRAM_SUCCESS,
    GET_PROGRAM_FAILURE,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILURE,
    GET_PROGRAM_INCIDENTAL_SUCCESS,
    GET_PROGRAM_INCIDENTAL_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/program-kami/list`;
const URL_INCD = `${process.env.REACT_APP_BASE_URL}/program-incidental/list`;
const URL_BANNER = `${process.env.REACT_APP_BASE_URL}/banner/list`;

export function fetchProgram(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "0",
                filters: [
                    {
                        field: "is_deleted",
                        keyword: "false"
                    }
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                publish_at_from: "",
                publish_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getProgramSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getProgramFailure(err));
        });
    };
};

export function fetchProgramIncidental(token) {
    return (dispatch) => {
        axios(URL_INCD, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "0",
                filters: [
                    {
                        field: "is_deleted",
                        keyword: "false"
                    }
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                publish_at_from: "",
                publish_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                dispatch(getProgramIncidentalSuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getProgramIncidentalFailure(err));
            });
    };
};
export function fetchBanner(token, tag) {
    return (dispatch) => {
        axios(URL_BANNER, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "0",
                filters: [
                    {
                        field: "is_deleted",
                        keyword: "false"
                    },
                    {
                        "field": "tag",
                        "keyword": tag
                    }
                ],
                order: "created_at",
                sort: "ASC",
                created_at_from: "",
                created_at_to: "",
                publish_at_from: "",
                publish_at_to: ""
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                dispatch(getBannerSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(getBannerFailure(err));
                console.log(err)
            });
    };
};
// GET BANNER
const getBannerSuccess = (payload) => ({
    type: GET_BANNER_SUCCESS,
    payload
});

const getBannerFailure = () => ({
    type: GET_BANNER_FAILURE
});
// Get Program
const getProgramSuccess = (payload) => ({
    type: GET_PROGRAM_SUCCESS,
    payload
});

const getProgramFailure = () => ({
    type: GET_PROGRAM_FAILURE
});
const getProgramIncidentalSuccess = (payload) => ({
    type: GET_PROGRAM_INCIDENTAL_SUCCESS,
    payload
});

const getProgramIncidentalFailure = () => ({
    type: GET_PROGRAM_INCIDENTAL_FAILURE
});

const getProgram = () => ({
    type: GET_PROGRAM
});