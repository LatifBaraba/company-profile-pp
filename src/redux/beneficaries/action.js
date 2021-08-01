import { GET_BENEFICARIES,
    GET_BENEFICARIES_SUCCESS,
    GET_BENEFICARIES_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/beneficaries/list`;

export function fetchBeneficaries(token) {
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
            dispatch(getBeneficariesSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getBeneficariesFailure(err));
        });
    };
};

// Get Beneficaries
const getBeneficariesSuccess = (payload) => ({
    type: GET_BENEFICARIES_SUCCESS,
    payload
});

const getBeneficariesFailure = () => ({
    type: GET_BENEFICARIES_FAILURE
});

const getBeneficaries = () => ({
    type: GET_BENEFICARIES
});