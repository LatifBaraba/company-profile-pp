import { GET_HUBUNGI,
    GET_HUBUNGI_SUCCESS,
    GET_HUBUNGI_FAILURE,  
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/hubungi-kami/list`;

export function fetchHubungi(token) {
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
            dispatch(getHubungiSuccess(res.data.data));
            console.log(res.data.data, 'testimoni')
        })
        .catch(err => {
            console.log(err)
            dispatch(getHubungiFailure(err));
        });
    };
};

// Get Hubungi
const getHubungiSuccess = (payload) => ({
    type: GET_HUBUNGI_SUCCESS,
    payload
});

const getHubungiFailure = () => ({
    type: GET_HUBUNGI_FAILURE
});

const getHubungi = () => ({
    type: GET_HUBUNGI
});