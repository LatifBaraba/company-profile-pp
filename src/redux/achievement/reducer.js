import {
    GET_ACHIEVEMENT,
    GET_ACHIEVEMENT_SUCCESS,
    GET_ACHIEVEMENT_FAILURE,
} from '../actionTypes';

const initialState = {
    loading: false,
    achievement: [],
    error: null
};

export default function achievementReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACHIEVEMENT:
            return {
                ...state,
                loading: true
            };
        case GET_ACHIEVEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                achievement: action.payload
            };
        case GET_ACHIEVEMENT_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}