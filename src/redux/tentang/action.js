import { GET_TENTANG,
    GET_TENTANG_SUCCESS,
    GET_TENTANG_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/tentang-kami/list`;

export function fetchTentang(token) {
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
            dispatch(getTentangSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getTentangFailure(err));
        });
    };
};

// Get Tentang
const getTentangSuccess = (payload) => ({
    type: GET_TENTANG_SUCCESS,
    payload
});

const getTentangFailure = () => ({
    type: GET_TENTANG_FAILURE
});

const getTentang = () => ({
    type: GET_TENTANG
});