import {
    GET_HUBUNGI,
    GET_HUBUNGI_SUCCESS,
    GET_HUBUNGI_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    hubungi: [],
    error: null
};

export default function hubungiReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HUBUNGI:
            return {
                ...state,
                loading: true
            };
        case GET_HUBUNGI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                hubungi: action.payload
            };
        case GET_HUBUNGI_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}