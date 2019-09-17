import React, { Component } from 'react';
import {formatDate} from 'helpers'
class BookingCell extends Component {
    render() {
        const booking = this.props.booking || {};
        const rental = this.props.booking.rental || {}
        return (
            <div className="booking-cell-container">
                <div className="booking-cell-image">
                    <img alt="rentalImg" src={rental.image && rental.image[0]}></img>
                </div>
                <div className="booking-detail">
                    <div className="rental-title">
                        {rental.title && rental.title}
                    </div>
                    <div className="booking-time">
                        {booking.startAt && formatDate(booking.startAt,"DD/MM/YYYY")} ~ {booking.endAt &&formatDate(booking.endAt,"DD/MM/YYYY")}
                        {booking.guests && (", "+booking.guests+" khách")}
                        {booking.days &&(", "+booking.days+" ngày")}
                        {booking.totalPrice && <b>{(", "+booking.totalPrice.toLocaleString()+" VND")}</b>}
                    </div>
                </div>
                <div className={`rental-total-price`}>
                    {
                        booking.status === 'pending' && <button className="status-btn pending-status">Chưa thanh toán</button>}{
                        booking.status.toLowerCase() === 'paid' && <button className="status-btn approved-status">Đã thanh toán</button>}{
                        rental.status === 'forbid' && <button className="status-btn forbid-status">Đã xóa</button>

                    }
                </div>
            </div>
        );
    }
}

export default BookingCell;