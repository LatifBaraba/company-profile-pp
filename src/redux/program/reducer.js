import {
    GET_PROGRAM,
    GET_PROGRAM_SUCCESS,
    GET_PROGRAM_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    program: [],
    error: null
};

export default function programReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROGRAM:
            return {
                ...state,
                loading: true
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
        default:
            return state;
    }
}