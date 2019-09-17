import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import {orderByDesc,orderByAsc} from 'helpers'
import {FETCH_USER_BOOKINGS_SUCCESS, SORT_BY_BOOKINGS} from 'actions/types'

const axiosInstance = axiosService.getInstance();
const fetchUserBookingsSuccess = (userBookings) => {
    return {
        type: FETCH_USER_BOOKINGS_SUCCESS,
        userBookings
    }
}

const sortByOrders = (data) => {
    return {
        type: SORT_BY_BOOKINGS,
        data
    }
}

export const fetchUserBookings = () => {
    return dispatch => {
        dispatch(showLoading());
        axiosInstance.get('/bookings/manage')
            .then(res => res.data)
            .then(userBookings => {
                dispatch(hideLoading());
                dispatch(fetchUserBookingsSuccess(userBookings))
            })
            .catch(({ response }) => {
                dispatch(hideLoading());
                toast.error(response.data.detail)
            })
    }
}
export const sortBy = (array, sort) => {
    return dispatch => {
        let data = []
        switch (sort) {
            case 'totalPriceAsc':
                data = orderByAsc(array, 'totalPrice');
                return dispatch(sortByOrders(data));
            default:
                data = orderByDesc(array, sort);
                return dispatch(sortByOrders(data))
        }
    }
}