import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import {orderByDesc,orderByAsc} from 'helpers'
import {ADD_BOOKMARK_SUCCESS} from 'actions/types'

const axiosInstance = axiosService.getInstance();

const addBookmarkSuccess = (data) => {
    return {
        type : ADD_BOOKMARK_SUCCESS,
        data
    }
}
export const addBookmark = (rentalId) => {
    return dispatch => {
        axiosInstance.post('/users/addBookmark',{rentalId})
        .then( res => {
            toast.success('Đã thêm vào mục ưa thích')
            dispatch(addBookmarkSuccess(res.data))
        })
        .catch(({response}) =>{
            console.log(response)
        })
    }
}
export const removeBookmark = (rentalId) => {
    return dispatch => {
        axiosInstance.post('/users/removeBookmark',{rentalId})
        .then( res => {
            toast.success('Đã xóa khỏi mục ưa thích')
            dispatch(addBookmarkSuccess(res.data))
        })
        .catch(({response})=>{
            console.log(response)
        })
    }
}
export const getBookmark = () => {
    return dispatch => {
        axiosInstance.get('/users/getBookmark')
        .then(res =>{
            dispatch(showLoading());
            dispatch(addBookmarkSuccess(res.data))
        })
        .catch(({response}) =>{
            dispatch(hideLoading())
            console.log(response)
        })
    }
}