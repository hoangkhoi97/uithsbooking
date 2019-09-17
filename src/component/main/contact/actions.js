
import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

const axiosInstance = axiosService.getInstance();
export const postContact = (data) => {
    return dispatch => {
        dispatch(showLoading())
        axiosInstance.post('/comments/createContact',data)
        .then((res) => {
            toast.success(res.data.detail)
            dispatch(hideLoading())
        })
        .catch(({response}) => {
            console.log(response)
        })
    }
}