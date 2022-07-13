import { GET_BERITA,
    GET_BERITA_SUCCESS,
    GET_BERITA_FAILURE,
    GET_BERITA_BYTAG_SUCCESS,
    GET_BERITA_BYTAG_FAILURE,
    GET_TAG_SUCCESS,
    GET_TAG_FAILURE,
    GET_HEADLINE_SUCCESS,
    GET_HEADLINE_FAILURE,
    GET_LOADING
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/berita/list`;
const URL_TAG = `${process.env.REACT_APP_BASE_URL}/berita/list-tag`;
const URL_HEADLINE = `${process.env.REACT_APP_BASE_URL}/berita/list-headline`;


export function fetchBerita(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "200",
                offset: "1",
                filters: [
                    {
                        field: "is_headline",
                        keyword: "true",
                    },
                    {
                        field: "is_deleted",
                        keyword: "false",
                    },
                ],
                order: "created_at",
                sort: "DESC",
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
            dispatch(getBeritaSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getBeritaFailure(err));
        });
    };
};
export function fetchBeritaHeadline(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "200",
                offset: "0",
                filters: [
                    {
                        field: "is_headline",
                        keyword: "true",
                    },
                    {
                        field: "is_deleted",
                        keyword: "false",
                    }
                ],
                order: "created_at",
                sort: "DESC",
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
                dispatch(getHeadlineSuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getHeadlineFailure(err));
            });
    };
};
export function fetchBeritaByTag(token, field, tag) {
    return (dispatch) => {
        dispatch(getLoading())
        axios(URL, {
            method: 'POST',
            data: {
                limit: "100",
                offset: "0",
                filters: [
                    {
                        field: field,
                        keyword: tag,
                    },
                    {
                        field: "is_deleted",
                        keyword: "false",
                    }
                ],
                order: "created_at",
                sort: "DESC",
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
                dispatch(getBeritabyTagSuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getBeritabyTagFailure(err));
            })
            .finally(() => {
                dispatch(getLoading());
            });
    };
};
export function fetchTagBerita(token) {
    return (dispatch) => {
        axios(URL_TAG, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                dispatch(getTagSuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getTagFailure(err));
            });
    };
};

const getLoading = () => ({
    type: GET_LOADING
})
// Get Berita
const getBeritaSuccess = (payload) => ({
    type: GET_BERITA_SUCCESS,
    payload
});

const getBeritaFailure = () => ({
    type: GET_BERITA_FAILURE
});
const getBeritabyTagSuccess = (payload) => ({
    type: GET_BERITA_BYTAG_SUCCESS,
    payload
});
const getBeritabyTagFailure = () => ({
    type: GET_BERITA_BYTAG_FAILURE
});
const getTagSuccess = (payload) => ({
    type: GET_TAG_SUCCESS,
    payload
});
const getTagFailure = () => ({
    type: GET_TAG_FAILURE
});
const getHeadlineSuccess = (payload) => ({
    type: GET_HEADLINE_SUCCESS,
    payload
});
const getHeadlineFailure = () => ({
    type: GET_HEADLINE_FAILURE
});
