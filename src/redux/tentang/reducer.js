import {
    GET_TENTANG,
    GET_TENTANG_SUCCESS,
    GET_TENTANG_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    tentang: [],
    error: null
};

export default function tentangReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TENTANG:
            return {
                ...state,
                loading: true
            };
        case GET_TENTANG_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tentang: action.payload
            };
        case GET_TENTANG_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}