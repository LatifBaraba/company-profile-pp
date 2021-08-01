import { GET_PROGRAM,
    GET_PROGRAM_SUCCESS,
    GET_PROGRAM_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/program-kami/list`;

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

// Get Program
const getProgramSuccess = (payload) => ({
    type: GET_PROGRAM_SUCCESS,
    payload
});

const getProgramFailure = () => ({
    type: GET_PROGRAM_FAILURE
});

const getProgram = () => ({
    type: GET_PROGRAM
});