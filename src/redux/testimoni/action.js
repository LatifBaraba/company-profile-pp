import { GET_TESTIMONI,
    GET_TESTIMONI_SUCCESS,
    GET_TESTIMONI_FAILURE,  
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/testimoni/list`;

export function fetchTestimoni(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "6",
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
            dispatch(getTestimoniSuccess(res.data.data));
            console.log(res.data.data, 'testimoni')
        })
        .catch(err => {
            console.log(err)
            dispatch(getTestimoniFailure(err));
        });
    };
};

// Get Testimoni
const getTestimoniSuccess = (payload) => ({
    type: GET_TESTIMONI_SUCCESS,
    payload
});

const getTestimoniFailure = () => ({
    type: GET_TESTIMONI_FAILURE
});

const getTestimoni = () => ({
    type: GET_TESTIMONI
});