import { GET_BANNER,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILURE,
    GET_BANNER_PROGRAM,
    GET_BANNER_PROGRAM_SUCCESS,
    GET_BANNER_PROGRAM_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/banner/list`;

export function fetchBanner(token) {
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
            dispatch(getBannerSuccess(res.data.data));
        })
        .catch(err => {
            dispatch(getBannerFailure(err));
            console.log(err)
        });
    };
};

export function fetchBannerProgram(token) {
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
                    },
                    // {
                    //     field: "tag",
                    //     keyword: `${tag}`
                    // }
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
            dispatch(getBannerProgramSuccess(res.data.data));
        })
        .catch(err => {
            dispatch(getBannerProgramFailure(err));
            console.log(err)
        });
    };
};

// Get Banner
const getBannerSuccess = (payload) => ({
    type: GET_BANNER_SUCCESS,
    payload
});

const getBannerFailure = () => ({
    type: GET_BANNER_FAILURE
});

const getBanner = () => ({
    type: GET_BANNER
});


// Get Banner
const getBannerProgramSuccess = (payload) => ({
    type: GET_BANNER_PROGRAM_SUCCESS,
    payload
});

const getBannerProgramFailure = () => ({
    type: GET_BANNER_PROGRAM_FAILURE
});

const getBannerProgram = () => ({
    type: GET_BANNER_PROGRAM
});