import {
    GET_BERITA,
    GET_BERITA_SUCCESS,
    GET_BERITA_FAILURE,
    GET_BERITA_BYTAG_SUCCESS,
    GET_BERITA_BYTAG_FAILURE,
    GET_TAG_SUCCESS,
    GET_TAG_FAILURE,
    GET_HEADLINE_SUCCESS,
    GET_HEADLINE_FAILURE,
    GET_LOADING
} from '../actionTypes';

const initialState = {
    getLoading: false,
    loading: false,
    berita:[],
    tagList: [],
    beritaTag: [],
    beritaHeadline: [],
    error: null
};

export default function beritaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOADING:
            return {
                ...state,
                getLoading: !state.getLoading
            };
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
        case GET_BERITA_BYTAG_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                beritaTag: action.payload
            };
        case GET_BERITA_BYTAG_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_TAG_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tagList: action.payload
            };
        case GET_TAG_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case GET_HEADLINE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                beritaHeadline: action.payload
            };
        case GET_HEADLINE_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}