import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RentalCell extends Component {
    render() {
        const rental = this.props.rental || {}
        return (
            <div className="rental-cell-container">
                <div className="rental-cell-image">
                    <img alt="rental-img" src={rental.image && rental.image[0]}></img>
                </div>
                <div className="rental-detail">
                    <div className="rental-title">
                        {rental.title && rental.title}
                    </div>
                    <div className="rental-time">
                        {rental.address && rental.address + ', '}<b>{rental.price && rental.price.toLocaleString() +' VND'}</b>
                    </div>
                </div>
                <div className={`rental-total-price`}>
                    {
                        rental.status === 'pending' && <button className="status-btn pending-status">Đang duyệt</button>}{
                        rental.status === 'approved' && <button className="status-btn approved-status">Đã duyệt</button>}{
                        rental.status === 'forbid' && <button className="status-btn forbid-status">Đã bị loại</button>

                    }
                </div>
            </div>
        );
    }
}

export default RentalCell;