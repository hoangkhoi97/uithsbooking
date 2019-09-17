import {
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTALS_SUCCESS,
  FETCH_RENTALS_INIT,
  FETCH_RENTALS_FAIL,
  UPDATE_RENTAL_SUCCESS,
  UPDATE_RENTAL_FAIL,
  RESET_RENTAL_ERRORS,
  DELETE_RENTAL_SUCCESS,
  DELETE_RENTAL_FAILURE,
  RESET_RENTALS_STATE,
  RESET_RENTAL_STATE,
  CREATE_RENTAL_SUCCESS,
  CREATE_RENTAL_FAILURE,
  SORT_BY_RENTALS,
  SORT_BY_USER_RENTALS
} from 'actions/types';

const INITIAL_STATE = {
  rentals: {
    data: [],
    errors: [],
    isDeleted: false,
    topRentals: [],
    userRentals: []
  },
  rental: {
    data: {},
    errors: [],
    isUpdated: false,
    isCreated: false
  }
}

export const rentalReducer = (state = INITIAL_STATE.rentals, action) => {
  switch (action.type) {
    case FETCH_RENTALS_INIT:
      return { ...state, data: [], errors: [] };
    case FETCH_RENTALS_SUCCESS:
      return { ...state, data: action.rentals };
    case FETCH_RENTALS_FAIL:
      return Object.assign({}, state, { errors: action.errors, data: [] });
    case DELETE_RENTAL_SUCCESS:
      return { ...state, data: action.data, isDeleted: true }
    case DELETE_RENTAL_FAILURE:
      return { ...state, errors: action.errors }
    case RESET_RENTALS_STATE:
      return { ...state, isDeleted: false, erros: [] }
    case 'FETCH_TOP_RENTALS_SUCCESS':
      return { ...state, topRentals: action.data }
    case 'FETCH_USER_RENTALS_SUCCESS':
      return { ...state, userRentals: action.data }
    case SORT_BY_RENTALS:
      return { ...state, data: action.data }
    case SORT_BY_USER_RENTALS:
      return { ...state, userRentals: action.data }
    default:
      return state;
  }
}


export const selectedRentalReducer = (state = INITIAL_STATE.rental, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_INIT:
      return { ...state, data: {} };
    case FETCH_RENTAL_BY_ID_SUCCESS:
      return Object.assign({}, state, { data: action.rental });
    case UPDATE_RENTAL_SUCCESS:
      return { ...state, data: action.data, isUpdated: true };
    case UPDATE_RENTAL_FAIL:
      return { ...state, errors: action.errors };
    case RESET_RENTAL_ERRORS:
      return { ...state, errors: [], isUpdated: false };
    case CREATE_RENTAL_SUCCESS:
      return { ...state, data: action.data, isCreated: true }
    case CREATE_RENTAL_FAILURE:
      return { ...state, errors: action.errors }
    case RESET_RENTAL_STATE:
      return INITIAL_STATE
    default:
      return state;
  }
}
