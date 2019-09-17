import { UPLOAD_AVATAR_SUCCESS, UPDATE_USER_SUCCESS } from 'actions/types'
import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import { reset } from 'redux-form'
import authService from 'services/auth-service';

const axiosInstance = axiosService.getInstance();
const uploadSuccess = (data) => {
  return {
    type: UPLOAD_AVATAR_SUCCESS,
    data
  }
}
export const uploadAvatar = (file) => {
  return dispatch => {
    dispatch(showLoading())
    return axiosInstance.post('/users/avatar', file)
      .then(res => {
        dispatch(hideLoading())
        dispatch(uploadSuccess(res.data))
        dispatch(reset('editAvatarForm'))
        toast.success('Đăng ảnh lên thành công')
      })
      .catch(({ response }) => {
        dispatch(hideLoading())
        toast.error(response.data.detail)
      })
  }
}
const updateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    data
  }
}
export const updateUserInfo = (userData) => {
  return dispatch => {
    // dispatch(resetUserState())
    dispatch(showLoading())
    return axiosInstance.post('/users/updateinfo', userData)
      .then(res => {
        dispatch(hideLoading())
        dispatch(updateUserSuccess(res.data))
        toast.success('Cập nhật thông tin thành công')
      })
      .catch(({ response }) => {
        dispatch(hideLoading())
        toast.error(response.data.detail)
      })
  }
}
export const uploadOldAvatar = (url) => {
  return dispatch => {
    dispatch(showLoading())
    return axiosInstance.post('/users/oldAvatar', url)
      .then(res => {
        dispatch(hideLoading())
        authService.changeImage(res.data.image)
        dispatch(reset('editAvatarForm'))
        dispatch(uploadSuccess(res.data))
        const temp = document.getElementsByClassName('responsive selected')
        temp[0] && temp[0].classList.remove('selected');
        const temp2 = document.getElementsByClassName('thumbnail selected')
        temp2[0] && temp2[0].classList.remove('selected')
        toast.success('Đổi ảnh thành công')
      })
      .catch(({ response }) => {
        dispatch(hideLoading())
        toast.error(response.data.detail)
      })
  }
}