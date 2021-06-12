import { GET_MENU, 
    GET_MENU_SUCCESS, 
    GET_MENU_FAILURE,
    } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/menu-extras/list`;

export function fetchMenu(token) {
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
            dispatch(getMenuSuccess(res.data.data));
            console.log(res.data.data, 'menu')
        })
        .catch(err => {
            console.log(err)
            dispatch(getMenuFailure(err));
        });
    };
};

// Get Menu
const getMenuSuccess = (payload) => ({
type: GET_MENU_SUCCESS,
payload
});

const getMenuFailure = () => ({
type: GET_MENU_FAILURE
});

const getMenu = () => ({
type: GET_MENU
});