import { SORT_BY_RENTALS, RESET_BOOKING_STATE} from 'actions/types';
import {orderByDesc,orderByAsc} from 'helpers'

const sortByOrders = (data) => {
    return {
        type: SORT_BY_RENTALS,
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
export const resetBookState = () => {
    return {
        type: RESET_BOOKING_STATE
    }
}