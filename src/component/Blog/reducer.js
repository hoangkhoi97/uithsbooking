import {
    GET_BLOG_SUCCESS,
    GET_BLOG_BY_ID_SUCCESS,
    RESET_BLOG_DETAIL
} from './actions';
import _ from 'lodash'
const initState = {
    blogList: [],
    blog: {}
};

export function blogReducer(state = initState, action) {
    switch (action.type) {
        case GET_BLOG_SUCCESS:
            return { ...state, blogList: action.data }
        case GET_BLOG_BY_ID_SUCCESS:
            return { ...state, blog: action.data};
        case RESET_BLOG_DETAIL:
            return {...state, blog: {}}
        default:
            return state;
    }
}
