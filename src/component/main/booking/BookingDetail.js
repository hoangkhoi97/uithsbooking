import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RentalImages from 'component/main/rental/rental-detail/RentalImages';
import { RentalAssets } from 'component/main/rental/rental-detail/RentalAssets';
import { RentalInfo } from 'component/main/rental/rental-detail/RentalDetailInfo';
import * as actions from 'actions';
import { toUSD } from 'helpers/index'
import authService from 'services/auth-service';
import { Modal, Button } from 'react-bootstrap'
import { formatDate, isEmpty } from 'helpers/index'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import './style.scss'

class BookingDetail extends Component {
	componentWillMount() {
		// Dispatch action
		window.scrollTo(0, 0)
		const bookingId = this.props.match.params.id;
		this.props.fetchBookingById(bookingId);
		// this.props.dispatch(actions.fetchBookingById(this.props.location.state.id))
		// this.props.dispatch(action.fetchBookingById())
	}
	constructor(props) {
		super(props);
		this.state = {
			booked: false,
			errors: [],
			show: false
		}
	}
	handleClose = () => {
		this.setState({ show: false });
	}

	handleShow = () => {
		this.setState({ show: true });
	}
	delete = (bookingId) => {
		this.props.dispatch(actions.deleteBooking(bookingId))
	}

	render() {
		const booking = this.props.booking || {}
		const owner = this.props.booking.owner || {};
		const rental = this.props.booking.rental || {};
		const onSuccess = (payment) => {
			console.log("The payment was succeeded!");
			const data = {
				toUser: owner._id,
				booking: booking._id,
				totalPrice: booking.totalPrice,
				payerID: payment.payerID,
				paymentID: payment.paymentID,
				paymentToken: payment.paymentToken,
			}
			this.props.createPayment(data)
		}

		const onCancel = (data) => {
			// User pressed "cancel" or close Paypal's popup!
			console.log('The payment was cancelled!', data);
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		}

		const onError = (err) => {
			// The main Paypal's script cannot be loaded or somethings block the loading of that script!
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		}

		let env = 'sandbox'; // you can set here to 'production' for production
		let currency = 'USD'; // or you can set this value from your props or state
		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

		const client = {
			sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
			production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
		}
		return (
			<div id="rent">
				<RentalImages image={rental.image ? rental.image : ['/img/default-img.jpg', '/img/default-img.jpg']} />
				<br />
				<div className="container">
					<div className="col-sm-8">
						<div className="infobox slide-in-left row" style={{ marginBottom: "20px", marginLeft: "0", marginRight: "0" }}>
							<div className="col-lg-8">
								<img src={owner.image ? owner.image : '/img/default-img.jpg'} className="ravatar" alt="none" />
								<h4 className="rname">{owner.username}</h4>
							</div>

						</div>
						<div className="infobox slide-in-left" style={{ backgroundImage: "linear-gradient( 90.2deg, rgba(75,68,229,1) 2%, rgba(97,212,202,1) 98.3% )" }}>
							<h3 id="null" style={{ fontWeight: "bold", color: "white", fontSize: "25px" }}>{rental.title}</h3>
							<h5 style={{ color: "white" }}>{rental.address}</h5>

						</div>
						<div className="infobox slide-in-left" style={{ borderRadius: "0", marginBottom: "50px" }}>
							<div>
								<div className="title">
									<span className="titletext"><i className="fa fa-question-circle titleicon" />Mô tả</span>
								</div>
								<div>
									<br />
									<p style={{ whiteSpace: "pre-line", whiteSpace: "pre-wrap" }}>{rental.description}</p>
								</div>
								<div className="title">
									<span className="titletext"><i className="fa fa-info-circle titleicon" />Thông tin</span>
								</div>
								<div>
									<div className="block">
										<i className="fa fa-bed"> {rental.bedrooms} giường</i> <br />
									</div>
									<div className="block">
										<i className="fa fa-male"> Tối đa {rental.people} người ở</i> <br />
									</div>
									<div className="block">
										<i className="fa fa-bath"> {rental.bathrooms} phòng tắm</i> <br />
									</div>
								</div>
								<div className="title">
									<span className="titletext"><i className="fa fa-check-circle titleicon" />Tiện nghi</span>
								</div>
								<RentalAssets rental={rental} />
							</div>
						</div>
					</div>

					<div className="col-sm-4">
						{
							!(authService.getId() === owner._id) &&
							<div className="divide">
								<div className="infobox slide-in-right" style={{ backgroundImage: "linear-gradient( 90.2deg, rgba(75,68,229,1) 2%, rgba(97,212,202,1) 98.3% )" }}>
									<h3 style={{ color: "white" }}>Giá: <b>{rental.price && rental.price.toLocaleString()}</b> đ / ngày</h3>
								</div>
								<div className="infobox" style={{ padding: "20px", marginBottom: "50px" }}>
									<h4 className="bookingdetail">Số ngày: {booking.days}</h4>
									<h4 className="bookingdetail">Ngày đặt: {formatDate(booking.createdAt, "DD/MM/YYYY")}</h4>
									<h4 className="bookingdetail">Ngày bắt đầu: {formatDate(booking.startAt, "DD/MM/YYYY")}</h4>
									<h4 className="bookingdetail">Ngày kết thúc: {formatDate(booking.endAt, "DD/MM/YYYY")}</h4>
									<h4 className="bookingdetail">Tổng giá: {booking.totalPrice && booking.totalPrice.toLocaleString()} đ</h4>
									<h4 className="bookingdetail">Số khách: {booking.guests}</h4>
									<h4 className="bookingdetail">Trạng thái: {booking.status && (booking.status.toLowerCase() === 'pending' ? 'Chưa thanh toán' : 'Đã thanh toán')}</h4>
									<hr />
									{(booking.status && booking.status === "pending") &&
										<Fragment>
											<div className="paypalb">
												<PaypalExpressBtn env={env} client={client} currency={currency} total={toUSD(booking.totalPrice)} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
											</div>
											<button onClick={this.handleShow} className="b b1 center_button"><span><i className="fa fa-close" />   Xóa</span></button>
										</Fragment>
									}
									<Modal style={{ opacity: 1 }} show={this.state.show} onHide={this.handleClose}>
										<Modal.Body>Bạn có chắc muốn xóa?</Modal.Body>
										<Modal.Footer>
											<Button className="b b1" onClick={() => { this.handleClose(); this.props.deleteBooking(booking._id) }}>
												Xóa
                      </Button>
											<Button className="b b1" onClick={this.handleClose}>
												Đóng
                      </Button>
										</Modal.Footer>
									</Modal>
								</div>

							</div>
						}
					</div>
				</div>
			</div>

		)

	}
}
function mapStateToProps(state) {
	return {
		isCreated: state.rental.isCreated,
		isDeleted: state.userBookings.isDeleted,
		deleteError: state.rentals.errors,
		isUpdated: state.rental.isUpdated,
		// booking: state.userBookings,
		rental: state.rental.data,
		errors: state.rental.errors,
		auth: state.auth,
		booking: state.userBookings.booking
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		deleteBooking: (id) => dispatch(actions.deleteBooking(id, ownProps)),
		fetchBookingById: (id) => dispatch(actions.fetchBookingById(id)),
		createPayment: (data) => dispatch(actions.createPayment(data))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail)