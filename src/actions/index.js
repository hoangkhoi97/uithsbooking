import authService from 'services/auth-service';
import axiosService from 'services/axios-service';
import { startSubmit, stopSubmit } from 'redux-form';
import { reset } from 'redux-form';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";

import {
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTALS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BOOKINGS_SUCCESS,
  CREATE_BOOKING_SUCCESS,
  RESET_BOOKING_STATE,
  RESET_RENTAL_ERRORS,
  DELETE_BOOKING_SUCCESS,
  RESET_USER_STATE,
  DELETE_RENTAL_SUCCESS,
  RESET_RENTAL_STATE,
  FETCH_BOOKING_BY_ID_SUCCESS,
  SORT_BOOKING
} from './types';

const axiosInstance = axiosService.getInstance();

export const verifyRentalOwner = (rentalId) => {
  return axiosInstance.get(`/rentals/${rentalId}/verify-user`);
}

// RENTALS ATIONS ---------------------------

const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  }
}
const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
}
const fetchRentalsSuccess = (rentals) => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    rentals
  }
}
export const fetchRentals = (city) => {
  const url = city ? `/rentals?city=${city}` : '/rentals';
  return dispatch => {
    dispatch(showLoading())
    axiosInstance.get(url)
      .then(res => res.data)
      .then(rentals => {
        dispatch(hideLoading())
        dispatch(fetchRentalsSuccess(rentals))
      })
      .catch((response) => {
        toast.error(response.data.detail)
        dispatch(hideLoading());
      })
  }
}
export const fetchRentalById = (rentalId) => {
  return function (dispatch) {
    dispatch(showLoading())
    dispatch(fetchRentalByIdInit());

    axiosInstance.get(`/rentals/${rentalId}`)
      .then(res => res.data)
      .then(rental => {
        dispatch(hideLoading())
        dispatch(fetchRentalByIdSuccess(rental))
      });
  }
}
export const resetRentalsState = () => {
  return {
    type: RESET_RENTAL_ERRORS
  }
}
export const resetRentalState = () => {
  return {
    type: RESET_RENTAL_STATE
  }
}
// USER BOOKINGS ACTIONS ---------------------------
export const sortBooking = (data) => {
  return {
    type: SORT_BOOKING,
    data
  }
}
const createBookingSuccess = (data) => {
  return {
    type: CREATE_BOOKING_SUCCESS,
    data
  }
}
export const createPayment = (data) => {
  return dispatch => {
    dispatch(showLoading());
    axiosInstance.post("/payments/create", data)
      .then(res => {
        console.log(res.data)
        dispatch(hideLoading())
        toast.success("Thanh toán thành công")
        dispatch(fetchBookingByIdSuccess(res.data));
      })
      .catch(({ response }) => {
        dispatch(hideLoading());
        toast.error(response.data.detail)
      })
  }
}
const fetchUserBookingsSuccess = (userBookings) => {
  return {
    type: FETCH_USER_BOOKINGS_SUCCESS,
    userBookings
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

export const deleteBooking = (bookingId, ownProps) => {
  return dispatch => {
    dispatch(showLoading())
    axiosInstance.delete(`bookings/${bookingId}`)
      .then(res => {
        toast.success('Đã xóa thành công')
        dispatch(createBookingSuccess(res.data))
        dispatch(hideLoading())
        ownProps.history.push('/history')
      })
      .catch(({ response }) => {
        dispatch(hideLoading())
        toast.error(response.data.detail)
      })
  }
}
export const resetBookState = () => {
  return { type: RESET_BOOKING_STATE }
}
// export const resetBookState = () => {
//   return dispatch => {
//     dispatch(resetBooking())
//   }
// }
// USER RENTALS ACTIONS ---------------------------

const deleteRentalSuccess = (data) => {
  return {
    type: DELETE_RENTAL_SUCCESS,
    data
  }
}
export const deleteRental = (rentalId, ownProps) => {
  return dispatch => {
    dispatch(showLoading());
    return axiosInstance.delete(`/rentals/${rentalId}`)
      .then(res => {
        dispatch(hideLoading())
        toast.success("Xóa thành công");
        ownProps.history.push('/rental/manage')
        // dispatch(deleteRentalSuccess(res.data))
      })
      .catch(({ response }) => {
        toast.error(response.data.detail)
        dispatch(hideLoading());
      })
  }
}

// AUTH ACTIONS ---------------------------

const loginSuccess = () => {
  const username = authService.getUsername();
  return {
    type: LOGIN_SUCCESS,
    username
  }
}

export const checkAuthState = () => {
  return dispatch => {
    if (!authService.isAuthenticated())
      localStorage.getItem('auth_token') && localStorage.removeItem('auth_token')
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const fetchUserById = (userId) => {
  return dispatch => {
    dispatch(showLoading());
    axiosInstance.get(`/users/info/${userId}`)
      .then(res => {
        dispatch(hideLoading());
        dispatch(fetchUserByIdSuccess(res.data))
      })
      .catch(({ response }) => {
        toast.error(response.data.detail);
        dispatch(hideLoading());
      })
  }
}

const fetchUserByIdSuccess = (user) => {
  return {
    type: FETCH_USER_BY_ID_SUCCESS,
    user
  }
}

export const logout = () => {
  authService.invalidateUser();
  return {
    type: LOGOUT
  }
}
export const sendMail = (email) => {
  return dispatch => {
    dispatch(showLoading())
    return axiosInstance.post('/users/forgotpass', email)
      .then(response => {
        toast.success('Hãy kiểm tra email của bạn')
        dispatch(hideLoading())
      })
      .catch(({ response }) => {
        toast.error(response.data.detail)
        dispatch(hideLoading())
      })
  }
}
export const confirmAccount = (id) => {
  return axiosInstance.get(`/users/confirm/${id}`)
    .then(res => toast.success("Xác thực tài khoản thành công. Hãy đăng nhập ngay"))
    .catch(({ response }) => {
      toast.error(response.data.detail)
    })
}

export const addSearchHistory = (key) => {
  return dispatch => {
    return axiosInstance.post("/users/searchHistory", { "key": key })
      .then(res =>
        dispatch(fetchUserByIdSuccess(res.data))
      )
  }
}

export const resetUserState = () => {
  return {
    type: RESET_USER_STATE
  }
}


const fetchBookingByIdSuccess = (data) => {
  return {
    type: FETCH_BOOKING_BY_ID_SUCCESS,
    data
  }
}
export const fetchBookingById = (bookingId) => {
  return dispatch => {
    dispatch(showLoading())
    axiosInstance.get(`/bookings/booking/${bookingId}`)
      .then(res => {
        dispatch(hideLoading());
        dispatch(fetchBookingByIdSuccess(res.data))
      })
      .catch(({ response }) => {
        dispatch(hideLoading());
        toast.error(response.data.detail)
      })
  }
}
export const resetBookingState = () => {
  return {
    type: RESET_BOOKING_STATE
  }
}
export const createBooking = (booking, ownProps) => {
  return (dispatch) => {
    // dispatch(resetBookingState())
    dispatch(showLoading())
    return axiosInstance.post('/bookings/book', booking)
      .then((res) => {
        toast.success('Đặt phòng thành công')
        dispatch(createBookingSuccess(res.data))
        dispatch(hideLoading())
        ownProps.history.push('/history')
      })
      .catch(({ response }) => {
        console.log(response)
        dispatch(hideLoading());
        toast.error(response.data.detail)
      })
  }
}