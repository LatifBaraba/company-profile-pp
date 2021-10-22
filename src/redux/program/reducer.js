import {
    GET_PROGRAM,
    GET_BANNER_SUCCESS,
    GET_BANNER_FAILURE,
    GET_PROGRAM_SUCCESS,
    GET_PROGRAM_FAILURE,
    GET_PROGRAM_INCIDENTAL_SUCCESS,
    GET_PROGRAM_INCIDENTAL_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    program: [],
    incidental: [],
    banner: [],
    error: null
};

export default function programReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROGRAM:
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
        case GET_PROGRAM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                program: action.payload
            };
        case GET_PROGRAM_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_PROGRAM_INCIDENTAL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                incidental: action.payload
            };
        case GET_PROGRAM_INCIDENTAL_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}