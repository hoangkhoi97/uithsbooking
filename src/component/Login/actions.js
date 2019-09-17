import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import authService from 'services/auth-service';
import { LOGIN_SUCCESS } from 'actions/types'
const axiosInstance = axiosService.getInstance();
const loginSuccess = () => {
    const username = authService.getUsername();
    return {
        type: LOGIN_SUCCESS,
        username
    }
}
export const login = (userData) => {
    return dispatch => {
        dispatch(showLoading());
        return axiosInstance.post('/users/login', userData)
            .then(res => res.data)
            .then(token => {
                authService.saveToken(token);
                dispatch(loginSuccess());
                dispatch(hideLoading());
            })
            .catch(({ response }) => {
                toast.error(response.data.detail);
                dispatch(hideLoading());
            })
    }
}