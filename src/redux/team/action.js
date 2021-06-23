import { GET_TEAM,
    GET_TEAM_SUCCESS,
    GET_TEAM_FAILURE,  
        } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/team/list`;

export function fetchTeam(token) {
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
            dispatch(getTeamSuccess(res.data.data));
            console.log(res.data.data, 'team')
        })
        .catch(err => {
            console.log(err)
            dispatch(getTeamFailure(err));
        });
    };
};

// Get Team
const getTeamSuccess = (payload) => ({
    type: GET_TEAM_SUCCESS,
    payload
});

const getTeamFailure = () => ({
    type: GET_TEAM_FAILURE
});

const getTeam = () => ({
    type: GET_TEAM
});