import {
    GET_DONASI,
    GET_DONASI_SUCCESS,
    GET_DONASI_FAILURE,
    GET_DONASI2,
    GET_DONASI2_SUCCESS,
    GET_DONASI2_FAILURE,
} from '../actionTypes';

const initialState = {
    loading: false,
    donasi: [],
    donasi2: [],
    error: null
};

export default function donasiReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DONASI:
            return {
                ...state,
                loading: true
            };
        case GET_DONASI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasi: action.payload
            };
        case GET_DONASI_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_DONASI2:
            return {
                ...state,
                loading: true
            };
        case GET_DONASI2_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                donasi2: action.payload
            };
        case GET_DONASI2_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}