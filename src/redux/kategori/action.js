import { GET_KATEGORI,
    GET_KATEGORI_SUCCESS,
    GET_KATEGORI_FAILURE,  
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/kategori/program-donasi-rutin/list`;

export function fetchKategori(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: '100',
                offset: '0',
                filters: [],
                order: "id",
                sort: "ASC"
            },
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getKategoriSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getKategoriFailure(err));
        });
    };
};

// Get Kategori
const getKategoriSuccess = (payload) => ({
    type: GET_KATEGORI_SUCCESS,
    payload
});

const getKategoriFailure = () => ({
    type: GET_KATEGORI_FAILURE
});

const getKategori = () => ({
    type: GET_KATEGORI
});