import { GET_BENEFICARIES,
    GET_BENEFICARIES_SUCCESS,
    GET_BENEFICARIES_FAILURE,
    GET_BENEFICARIES_ID_SUCCESS,
    GET_BENEFICARIES_ID_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/beneficaries/list`;
const URL_GET = `${process.env.REACT_APP_BASE_URL}/beneficaries/`;


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
export function getBeneficariesId(token, id) {
    console.log(id, 'id action')
    return (dispatch) => {
        axios(URL_GET + `${id}`, {
            method: 'GET',
            headers: {
                "pp-token": `${token}`,
                "Content-type": "application/json"
            }
        })
            .then(res => {
                dispatch(getBeneficariesIdSuccess(res.data.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(getBeneficariesIdFailure(err));
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
const getBeneficariesIdSuccess = (payload) => ({
    type: GET_BENEFICARIES_ID_SUCCESS,
    payload
});

const getBeneficariesIdFailure = () => ({
    type: GET_BENEFICARIES_ID_FAILURE
});

const getBeneficaries = () => ({
    type: GET_BENEFICARIES
});