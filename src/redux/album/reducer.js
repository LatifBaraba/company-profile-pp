import {
    GET_ALBUM,
    GET_ALBUM_SUCCESS,
    GET_ALBUM_FAILURE,
} from '../actionTypes';

const initialState = {
    loading: false,
    album: [],
    error: null
};

export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALBUM:
            return {
                ...state,
                loading: true
            };
        case GET_ALBUM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                album: action.payload
            };
        case GET_ALBUM_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}