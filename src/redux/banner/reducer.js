import {
    GET_BANNER,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILURE,
    GET_BANNER_PROGRAM,
GET_BANNER_PROGRAM_SUCCESS,
GET_BANNER_PROGRAM_FAILURE
    
} from '../actionTypes';

const initialState = {
    loading: false,
    banner: [],
    bannerProgram: [],
    error: null
};

export default function bannerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BANNER:
            return {
                ...state,
                loading: true
            };
        case GET_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                banner: action.payload
            };
        case GET_BANNER_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_BANNER_PROGRAM:
            return {
                ...state,
                loading: true
            };
        case GET_BANNER_PROGRAM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                bannerProgram: action.payload
            };
        case GET_BANNER_PROGRAM_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}