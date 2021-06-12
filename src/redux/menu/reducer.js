import {
    GET_MENU,
    GET_MENU_SUCCESS,
    GET_MENU_FAILURE,
} from '../actionTypes';

const initialState = {
    loading: false,
    menu: [],
    error: null
};

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MENU:
            return {
                ...state,
                loading: true
            };
        case GET_MENU_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                menu: action.payload
            };
        case GET_MENU_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}