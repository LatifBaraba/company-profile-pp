import { GET_KONTAK,
    GET_KONTAK_SUCCESS,
    GET_KONTAK_FAILURE,  
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/kontak-kami/list`;

export function fetchKontak(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "1",
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
            dispatch(getKontakSuccess(res.data.data));
            console.log(res.data.data, 'testimoni')
        })
        .catch(err => {
            console.log(err)
            dispatch(getKontakFailure(err));
        });
    };
};

// Get Kontak
const getKontakSuccess = (payload) => ({
    type: GET_KONTAK_SUCCESS,
    payload
});

const getKontakFailure = () => ({
    type: GET_KONTAK_FAILURE
});

const getKontak = () => ({
    type: GET_KONTAK
});