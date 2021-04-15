import {
    GET_BENEFICARIES,
    GET_BENEFICARIES_SUCCESS,
    GET_BENEFICARIES_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    beneficaries: [],
    error: null
};

export default function beneficariesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BENEFICARIES:
            return {
                ...state,
                loading: true
            };
        case GET_BENEFICARIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                beneficaries: action.payload
            };
        case GET_BENEFICARIES_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}