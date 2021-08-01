import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/token`;
// const URLREF = `${process.env.REACT_APP_BASE_URL}/refresh-token`;
const SERVICENAME = `${process.env.REACT_APP_SERVICE_NAME}`;
const SECRETKEY = `${process.env.REACT_APP_SECRET_KEY}`;

let min = 1;
let max = 100;
const randomId = Math.floor(Math.random() * (max - min));
const randomType = Math.floor(Math.random() * (max - min));

export function fetchToken() {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                name:`${SERVICENAME}`,
                secret_key:`${SECRETKEY}`,
                // device_id:"1",
                device_id: `${randomId}`,
                device_type: `${randomType}`
            },
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => {
            dispatch(getTokenSuccess(res.data.data));
            localStorage.setItem("token", res.data.data.token);
        })
        .catch(err => {
            console.log(err)
            dispatch(getTokenFailure(err));
        });
    };
};

// export function fetchRefreshToken(token) {
//     return (dispatch) => {
//         axios(URLREF, {
//             method: 'POST',
//             headers: {
//                 "pp-token": `${token}`,
//                 "Content-type": "application/json"
//             }
//         })
//         .then(res => {
//             dispatch(getTokenSuccess(res.data.data));
//             localStorage.setItem("token", res.data.data.token);
//             console.log(res)
//         })
//         .catch(err => {
//             console.log(err)
//             dispatch(getTokenFailure(err));
//         });
//     };
// };

const getTokenSuccess = (payload) => ({
    type: GET_TOKEN_SUCCESS,
    payload
});

const getTokenFailure = () => ({
    type: GET_TOKEN_FAILURE
});

const getToken = () => ({
    type: GET_TOKEN
});