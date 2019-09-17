import {
  FETCH_USER_BOOKINGS_SUCCESS,
  FETCH_USER_BOOKINGS_FAIL,
  FETCH_USER_BOOKINGS_INIT,
  CREATE_BOOKING_SUCCESS,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILURE,
  FETCH_BOOKING_BY_ID_SUCCESS,
  SORT_BY_BOOKINGS,
  FETCH_CUSTOMER_BOOKINGS_SUCCESS,
  SORT_BY_CUSTOMER_BOOKINGS
} from 'actions/types';
import { RESET_BOOKING_STATE} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  booking: [],
  errors: [],
  customerBookings: [],
  isFetching: false,
  isSuccess: false,
  isDeleted: false
}

export const userBookingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_BOOKINGS_INIT:
      return { ...state, data: [], errors: [], isFetching: true };
    case FETCH_USER_BOOKINGS_SUCCESS:
      return { ...state, data: action.userBookings, errors: [], isFetching: false };
    case FETCH_USER_BOOKINGS_FAIL:
      return { ...state, errors: [], data: [], isFetching: false };
    case DELETE_BOOKING_SUCCESS:
      return { ...state, isDeleted: true, data: action.data }
    case DELETE_BOOKING_FAILURE:
      return { ...state, errors: action.errors }
    case RESET_BOOKING_STATE:
      return { ...state, isSuccess: false, isDeleted: false}
    case FETCH_BOOKING_BY_ID_SUCCESS:
      return { ...state, booking: action.data }
    case SORT_BY_BOOKINGS:
      return {...state, data: action.data }
    case FETCH_CUSTOMER_BOOKINGS_SUCCESS:
      return {...state, customerBookings: action.data}
    case CREATE_BOOKING_SUCCESS:
      return {...state, data: action.data}
    case SORT_BY_CUSTOMER_BOOKINGS:
      return {...state, customerBookings :action.data}
    default:
      return state;
  }
}
