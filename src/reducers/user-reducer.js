import {
    SEND_MAIL_SUCCESS, SEND_MAIL_FAILURE,
    RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
    UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPLOAD_AVATAR_SUCCESS,
    FETCH_USER_BY_ID_INIT,
    FETCH_USER_BY_ID_SUCCESS,
    RESET_USER_STATE,
    ADD_BOOKMARK_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    isSend: false,
    isReset: false,
    isChanged: false,
    isUpdated: false,// Cập nhật thông tin
    isUploaded: false,//Cập nhật avatar
    isError: false,
    data: [],
    errors: []
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_MAIL_SUCCESS:
            return { ...state, isSend: true, errors: [] };
        case SEND_MAIL_FAILURE:
            return { ...state, isSend: false, errors: action.errors };
        case RESET_PASSWORD_SUCCESS:
            return { ...state, isReset: true, errors: [] }
        case RESET_PASSWORD_FAILURE:
            return { ...state, isReset: false, errors: action.errors }
        case FETCH_USER_BY_ID_INIT:
            return { ...state, data: {} };
        case FETCH_USER_BY_ID_SUCCESS:
            return Object.assign({}, state, { data: action.user });
        case UPDATE_PASSWORD_SUCCESS:
            return {...state, isChanged: true};
        case UPLOAD_AVATAR_SUCCESS:
            return {...state, isUploaded: true, data:action.data}
        case UPDATE_PASSWORD_FAILURE:
            return {...state, errors:action.errors, isError: true};
        case UPDATE_USER_SUCCESS:
            return {...state, data: action.data, isUpdated: true}
        case UPDATE_USER_FAILURE:
            return {...state, errors:action.errors}
        case RESET_USER_STATE:
            return {INITIAL_STATE}
        case ADD_BOOKMARK_SUCCESS:
            return Object.assign({}, state, {data: Object.assign({}, state.data,action.data)})
        default:
            return state;
    }
}
