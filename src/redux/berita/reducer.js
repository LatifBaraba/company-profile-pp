import {
    GET_BERITA,
    GET_BERITA_SUCCESS,
    GET_BERITA_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    berita: [],
    error: null
};

export default function beritaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BERITA:
            return {
                ...state,
                loading: true
            };
        case GET_BERITA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                berita: action.payload
            };
        case GET_BERITA_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}