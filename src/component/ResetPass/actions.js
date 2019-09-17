import axiosService from 'services/axios-service';
// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {RESET_PASSWORD_SUCCESS} from 'actions/types'
const axiosInstance = axiosService.getInstance();
export const resetSuccess = () => {
	return {
		type: RESET_PASSWORD_SUCCESS
	}
}

export const resetPass = (userData, id) => {
	return (dispatch) => {
		dispatch(showLoading())
		return axiosInstance.post(`/users/reset/${id}`, userData)
			.then(() => {
				dispatch(hideLoading())
				toast.success('Thay đổi mật khẩu thành công')
			})
			.catch(({response}) => {
				dispatch(hideLoading())
				toast.error(response.data.detail)
			})
	}
}