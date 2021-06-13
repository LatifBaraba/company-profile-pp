import {
    GET_KONTAK,
    GET_KONTAK_SUCCESS,
    GET_KONTAK_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    kontak: [],
    error: null
};

export default function kontakReducer(state = initialState, action) {
    switch (action.type) {
        case GET_KONTAK:
            return {
                ...state,
                loading: true
            };
        case GET_KONTAK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                kontak: action.payload
            };
        case GET_KONTAK_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}