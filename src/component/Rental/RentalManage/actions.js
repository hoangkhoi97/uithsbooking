import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import {SORT_BY_USER_RENTALS} from 'actions/types';
import {orderByDesc,orderByAsc} from 'helpers'

const axiosInstance = axiosService.getInstance();

export const FETCH_USER_RENTALS_SUCCESS = 'FETCH_USER_RENTALS_SUCCESS'

const fetchUserRentalsSuccess = (data) => {
    return {
        type: FETCH_USER_RENTALS_SUCCESS,
        data
    }
}
export const fetchUserRentals = () => {
    return dispatch => {
        dispatch(showLoading());
        axiosInstance.get('/rentals/manage')
        .then(res => {
            dispatch(hideLoading())
            dispatch(fetchUserRentalsSuccess(res.data))
        })
        .catch(({response}) => {
             toast.error(response.data.detail)
            dispatch(hideLoading());
        })
    }
}
const sortByOrders = (data) => {
    return {
        type: SORT_BY_USER_RENTALS,
        data
    }
}
export const sortBy = (array, sort) => {
    return dispatch => {
        let data = []
        switch (sort) {
            case 'priceAsc':
                data = orderByAsc(array, 'price');
                return dispatch(sortByOrders(data));
            default:
                data = orderByDesc(array, sort);
                return dispatch(sortByOrders(data))
        }
    }
}