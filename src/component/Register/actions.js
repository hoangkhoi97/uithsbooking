import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
const axiosInstance = axiosService.getInstance();

export const register = (userData) => {
    return dispatch => {
      dispatch(showLoading())
      return axiosInstance.post('/users/register', userData)
        .then(res => {
          dispatch(hideLoading());
          toast.success("Hãy kiểm tra email xác nhận")
        })
        .catch(({ response }) => {
          toast.error(response.data.detail)
          dispatch(hideLoading())
        })
    }
  }