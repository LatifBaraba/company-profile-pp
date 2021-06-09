import {
    GET_TESTIMONI,
    GET_TESTIMONI_SUCCESS,
    GET_TESTIMONI_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    testimoni: [],
    error: null
};

export default function testimoniReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TESTIMONI:
            return {
                ...state,
                loading: true
            };
        case GET_TESTIMONI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                testimoni: action.payload
            };
        case GET_TESTIMONI_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}