import {
    GET_KATEGORI,
    GET_KATEGORI_SUCCESS,
    GET_KATEGORI_FAILURE,
    
} from '../actionTypes';

const initialState = {
    loading: false,
    kategori: [],
    error: null
};

export default function kategoriReducer(state = initialState, action) {
    switch (action.type) {
        case GET_KATEGORI:
            return {
                ...state,
                loading: true
            };
        case GET_KATEGORI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                kategori: action.payload
            };
        case GET_KATEGORI_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}