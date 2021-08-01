import { GET_BERITA,
    GET_BERITA_SUCCESS,
    GET_BERITA_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/berita/list`;

export function fetchBerita(token) {
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
            dispatch(getBeritaSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getBeritaFailure(err));
        });
    };
};

// Get Berita
const getBeritaSuccess = (payload) => ({
    type: GET_BERITA_SUCCESS,
    payload
});

const getBeritaFailure = () => ({
    type: GET_BERITA_FAILURE
});
