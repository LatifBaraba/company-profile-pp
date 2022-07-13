import { GET_PARTNER,
    GET_PARTNER_SUCCESS,
    GET_PARTNER_FAILURE,
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/partner-kami/list`;

export function fetchPartner(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "200",
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
            dispatch(getPartnerSuccess(res.data.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getPartnerFailure(err));
        });
    };
};

// Get Album
const getPartnerSuccess = (payload) => ({
    type: GET_PARTNER_SUCCESS,
    payload
});

const getPartnerFailure = () => ({
    type: GET_PARTNER_FAILURE
});

const getPartner = () => ({
    type: GET_PARTNER
});