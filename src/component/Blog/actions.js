import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import authService from 'services/auth-service';
export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_BY_ID_SUCCESS = 'GET_BLOG_BY_ID_SUCCESS';
export const RESET_BLOG_DETAIL='RESET_BLOG_DETAIL'
const getBlogSuccess = (data) => {
    return {
        type: GET_BLOG_SUCCESS,
        data
    }
}
const getBlogByIdSuccess = (data) => {
    return {
        type: GET_BLOG_BY_ID_SUCCESS,
        data
    }
}
const axiosInstance = axiosService.getInstance();

export const resetBlogDetail = () => {
    return {
        type: RESET_BLOG_DETAIL
    }
}
export const createBlog = (data, ownProps) => {
    return dispatch => {
        dispatch(showLoading())
        axiosInstance.post('/blog/post', data)
            .then(async res => {
                dispatch(hideLoading())
                toast.success(res.data.detail);
                ownProps.history.push('/blog')
            })
            .catch(({ response }) => {
                dispatch(hideLoading())
                console.log(response)
            })
    }
}

export const getBlog = () => {
    return dispatch => {
        axiosInstance.get('/blog/get')
            .then(res => {
                dispatch(getBlogSuccess(res.data))
            })
            .catch(({ response }) => {
                console.log(response)
            })
    }
}

export const getBlogById = (blogId) => {
    return dispatch => {
        dispatch(showLoading())
        axiosInstance.post('/blog/getBlogById', { blogId: blogId })
            .then(res => {
                dispatch(hideLoading())
                dispatch(getBlogByIdSuccess(res.data))
            })
            .catch(({ response }) => {
                dispatch(hideLoading())
                console.log(response)
            })
    }
}