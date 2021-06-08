import { GET_ACHIEVEMENT, 
    GET_ACHIEVEMENT_SUCCESS, 
    GET_ACHIEVEMENT_FAILURE,
    } from '../actionTypes';
import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/achievement/list`;

export function fetchAchievement(token) {
    return (dispatch) => {
        axios(URL, {
            method: 'POST',
            data: {
                limit: "4",
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
            dispatch(getAchievementSuccess(res.data.data));
            console.log(res.data.data, 'achievement')
        })
        .catch(err => {
            console.log(err)
            dispatch(getAchievementFailure(err));
        });
    };
};

// Get Achievement
const getAchievementSuccess = (payload) => ({
type: GET_ACHIEVEMENT_SUCCESS,
payload
});

const getAchievementFailure = () => ({
type: GET_ACHIEVEMENT_FAILURE
});

const getAchievement = () => ({
type: GET_ACHIEVEMENT
});