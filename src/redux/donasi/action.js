import { GET_DONASI,
    GET_DONASI_SUCCESS,
    GET_DONASI_FAILURE,
    GET_DONASI2,
    GET_DONASI2_SUCCESS,
    GET_DONASI2_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/program-donasi/list`;

export function fetchDonasi(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "3",
                offset: "0",
                filters: [
                    {
                        field: "is_deleted",
                        keyword: "false"
                    },
                    {
                        field: "donasi_type",
                        keyword: "Rutin"
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
            dispatch(getDonasiSuccess(res.data.data));
            console.log(res.data.data, "Donasi Rutin")
        })
        .catch(err => {
            console.log(err)
            dispatch(getDonasiFailure(err));
        });
    };
};

export function fetchDonasi2(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "3",
                offset: "0",
                filters: [
                    {
                        field: "is_deleted",
                        keyword: "false"
                    },
                    {
                        field: "donasi_type",
                        keyword: "One Time"
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
            dispatch(getDonasi2Success(res.data.data));
            console.log(res.data.data, "Donasi Rutin")
        })
        .catch(err => {
            console.log(err)
            dispatch(getDonasi2Failure(err));
        });
    };
};

// Get Donasi
const getDonasiSuccess = (payload) => ({
    type: GET_DONASI_SUCCESS,
    payload
});

const getDonasiFailure = () => ({
    type: GET_DONASI_FAILURE
});

const getDonasi = () => ({
    type: GET_DONASI
});

// Get Donasi2
const getDonasi2Success = (payload) => ({
    type: GET_DONASI2_SUCCESS,
    payload
});

const getDonasi2Failure = () => ({
    type: GET_DONASI2_FAILURE
});

const getDonasi2 = () => ({
    type: GET_DONASI2
});