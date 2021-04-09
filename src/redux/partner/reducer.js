import {
    GET_PARTNER,
    GET_PARTNER_SUCCESS,
    GET_PARTNER_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    partner: [],
    error: null
};

export default function partnerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARTNER:
            return {
                ...state,
                loading: true
            };
        case GET_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                partner: action.payload
            };
        case GET_PARTNER_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}