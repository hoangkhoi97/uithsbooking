import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchUserBookings } from './actions'
import BookingCell from './BookingCell'
import _ from 'lodash'
import {sortBy} from './actions'
import './style.scss'
import { ToastContainer } from 'react-toastify';

class BookingHistory extends Component {
    componentDidMount() {
        window.scrollTo(0,0)
        if (_.isEmpty(this.props.userBookings))
            this.props.fetchUserBookings();
    }
    sortBy = (e) => {
        this.props.sortBy(this.props.userBookings, e.target.value)
    }
    render() {
        return (
            <div className="user-booking-history" style={{ backgroundColor: "#f5f5f5" }}>
                <ToastContainer/>
                <div className="booking-history-container">
                    <div className="booking-history-title">
                        Lịch sử thuê phòng
                        <select style={{fontWeight:'400', width:'180px', fontSize:'14px'}} defaultValue="createdAt" onChange={this.sortBy} className="list-sort-selector f-right">
                            <option value="createdAt">Mới nhất</option>
                            <option value="totalPriceAsc">Tổng chi phí ít nhất</option>
                            <option value="totalPrice">Tổng chi phí cao nhất</option>
                            <option value="days">Số ngày</option>
                            <option value="guests">Số khách</option>
                            <option value="status">Trạng thái</option>                            
                        </select>
                        <span className="list-sort-span f-right span-near-sort-user">Lọc theo:</span>
                    </div>

                    <div className="booking-history-content mg-top-20">
                        {
                            this.props.userBookings.map((i,index) =>
                                <Link key={index} to={`/booking/${i._id}`}>
                                    <BookingCell booking={i} />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userBookings: state.userBookings.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserBookings: () => dispatch(fetchUserBookings()),
        sortBy: (data, field) => dispatch(sortBy(data, field))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingHistory);