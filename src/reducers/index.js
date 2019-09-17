import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import { authReducer } from './auth-reducer';
import { rentalMapReducer } from './map-reducer';
import { userBookingsReducer } from './booking-reducer';
import { userReducer} from './user-reducer';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar'
import {commentReducer} from 'component/Comment/reducer'
import { blogReducer } from '../component/Blog/reducer';
export const init = () => {
  const reducer = combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer,
    form: formReducer,
    auth: authReducer,
    userBookings: userBookingsReducer,
    users: userReducer,
    map: rentalMapReducer,
    loadingBar: loadingBarReducer,
    comment: commentReducer,
    blog: blogReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
