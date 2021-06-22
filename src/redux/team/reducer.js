import {
    GET_TEAM,
    GET_TEAM_SUCCESS,
    GET_TEAM_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    team: [],
    error: null
};

export default function teamReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TEAM:
            return {
                ...state,
                loading: true
            };
        case GET_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                team: action.payload
            };
        case GET_TEAM_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}