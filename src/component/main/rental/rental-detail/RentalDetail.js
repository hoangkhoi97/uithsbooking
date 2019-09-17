import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import RentalImages from './RentalImages';
import { RentalAssets } from './RentalAssets';
import _ from 'lodash'
import * as actions from 'actions';
import RentalDateForm from './RentalDateForm'
import { Link, Redirect } from 'react-router-dom'
import authService from 'services/auth-service';
import { Modal, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comment from 'component/Comment'
import "./style.scss"
import moment from 'moment'
import CommentDisplay from 'component/Comment/CommentDisplay'
import { getDates } from 'helpers'
class RentalDetail extends Component {
  componentDidMount() {
    // Dispatch action
    window.scrollTo(0, 0);
    if (authService.isAuthenticated())
      this.props.fetchUserBookings();
    const rentalId = this.props.match.params.id;
    this.props.fetchRentalById(rentalId);
  }
  constructor(props) {
    super(props);
    this.state = {
      booked: false,
      errors: [],
      show: false,
      redirect: false
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  deleteRental = (rentalId) => {
    this.props.deleteRental(rentalId)
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
  }
  book = async (bookData) => {
    if (authService.isAuthenticated()) {
      const booking = {
        startAt: bookData.startAt,
        endAt: bookData.endAt,
        guests: bookData.guests,
        id: this.props.match.params.id,
        price: this.props.rental.price
      }
      const isValid = await this.isValid(this.props.booking.data, booking)
      if (isValid) {
        this.props.createBooking(booking)
      }
      else toast.error("Bạn không thể đặt thêm nhà trong khoảng thời gian này")
    } else this.setRedirect()
  }
  isValid(data, booking) {
    let flag = true;
    const bStartAt = +moment(booking.startAt,'DD/MM/YYYY')
    const bEndAt = +moment(booking.endAt,'DD/MM/YYYY') 
    for (let i = 0; i < data.length; i++) {
      if ((bStartAt <= +moment(data[i].endAt) && bStartAt >= +moment(data[i].startAt)) || (bEndAt <= +moment(data[i].endAt) && bEndAt >= +moment(data[i].startAt))) {
        flag = false;
      }
    }
    return flag
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }
  render() {
    const commentList = this.props.commentList
    const bookings = (this.props.rental && this.props.rental.bookings) || []
    let filterDates = []
    bookings.map((i) => {
      filterDates = filterDates.concat(getDates(i.startAt, i.endAt))
    })
    const owner = (this.props.rental && this.props.rental.user) || {}
    const errors = this.props.booking.errors || {}
    const rental = this.props.rental || {}
    // if (this.props.isDeleted) {
    //   this.handleClose()
    //   this.props.dispatch(actions.resetRentalState())
    //   return <Redirect to={{ pathname: "/rental/manage", state: { isDeleted: true } }} />
    // }
    const image = rental.image || ['/img/default-img.jpg', '/img/default-img.jpg']
    return (
      <div id="rent">
        {this.renderRedirect()}
        <RentalImages image={image} />
        <br />
        <div className="container">
          <ToastContainer />
          <div className="col-sm-8">
            <div className="infobox slide-in-left row" style={{ marginBottom: "20px", marginLeft: "0", marginRight: "0" }}>
              <div className="col-lg-8">
                <img src={owner.image ? owner.image : '/img/default-img.jpg'} className="ravatar" alt="none" />
                <h4 className="rname">{owner.username && owner.username}</h4>
              </div>
              {(authService.isAuthenticated() && (authService.getId() === owner._id)) &&
                <div className="col-lg-4">
                  <Link to={{ pathname: `/edit/${rental._id && rental._id}`, state: { rental: rental } }}>
                    <button className="b b1 rbutton"><span><i className="fa fa-edit" />   Sửa</span></button>
                  </Link>
                  <button onClick={this.handleShow} className="b b1 rbutton"><span><i className="fa fa-close" />   Xóa</span></button>
                  <Modal style={{ opacity: 1 }} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>Bạn có chắc muốn xóa?</Modal.Body>
                    <Modal.Footer>
                      <Button className="b b1" onClick={() => { this.handleClose(); this.deleteRental(this.props.rental._id) }}>
                        Xóa
                      </Button>
                      <Button className="b b1" onClick={this.handleClose}>
                        Đóng
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              }
              {(authService.isAuthenticated() && (authService.getId() !== owner._id)) &&
                <Comment rentalId={rental._id && rental._id} />}
            </div>
            <div className="infobox slide-in-left" style={{ backgroundImage: "linear-gradient( 90.2deg, rgba(75,68,229,1) 2%, rgba(97,212,202,1) 98.3% )" }}>
              <h3 id="null" style={{ fontWeight: "bold", color: "white", fontSize: "25px" }}>{rental.title && rental.title}</h3>
              <h5 style={{ color: "white" }}>{rental.address && rental.address}</h5>

            </div>
            <div className="infobox slide-in-left" style={{ borderRadius: "0", marginBottom: "50px" }}>
              <div>
                <div style={{ width: "100%", height: "20px", borderBottom: "2px solid", borderImage: "conic-gradient(rgba(97,212,202,1) 2%, rgba(75,68,229,1) 98.3%) 1", marginTop: "30px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "25px", backgroundColor: "white", padding: "0 10px", marginLeft: "20px" }}><i className="fa fa-question-circle" style={{ marginLeft: "10px", marginRight: "20px" }} />Mô tả</span>
                </div>
                <div>
                  <br />
                  <p style={{ whiteSpace: "pre-line", whiteSpace: "pre-wrap" }}>{rental.description && rental.description}</p>
                </div>
                <div style={{ width: "100%", height: "20px", borderBottom: "2px solid", borderImage: "conic-gradient(rgba(97,212,202,1) 2%, rgba(75,68,229,1) 98.3%) 1", marginTop: "30px", marginBottom: "30px" }}>
                  <span style={{ fontSize: "25px", backgroundColor: "white", padding: "0 10px", marginLeft: "20px" }}><i className="fa fa-info-circle" style={{ marginLeft: "10px", marginRight: "20px" }} />Thông tin</span>
                </div>
                <div>
                  <div className="block">
                    <i className="fa fa-bed"> {rental.bedrooms && rental.bedrooms} giường</i> <br />
                  </div>
                  <div className="block">
                    <i className="fa fa-male"> Tối đa {rental.people && rental.people} người ở</i> <br />
                  </div>
                  <div className="block">
                    <i className="fa fa-bath"> {rental.bathrooms && rental.bathrooms} phòng tắm</i> <br />
                  </div>
                </div>
                <div style={{ width: "100%", height: "20px", borderBottom: "2px solid", borderImage: "conic-gradient(rgba(97,212,202,1) 2%, rgba(75,68,229,1) 98.3%) 1", marginTop: "30px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "25px", backgroundColor: "white", padding: "0 10px", marginLeft: "20px" }}><i className="fa fa-check-circle" style={{ marginLeft: "10px", marginRight: "20px" }} />Tiện nghi</span>
                </div>
                <RentalAssets rental={this.props.rental} />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            {
              (!authService.isAuthenticated() || (authService.isAuthenticated() && !(authService.getId() === owner._id))) &&
              <div className="divide" style={{ marginBottom: "20px" }}>
                <div className="infobox slide-in-right" style={{ backgroundImage: "linear-gradient( 90.2deg, rgba(75,68,229,1) 2%, rgba(97,212,202,1) 98.3% )" }}>
                  <h3 style={{ color: "white" }}>Giá: <b>{rental.price && rental.price.toLocaleString()}</b> đ/ngày</h3>
                </div>
                <div className="infobox slide-in-right">
                  <RentalDateForm filterDates={filterDates} price={rental.price && rental.price} submitCb={this.book} people={rental.people && rental.people} errors={errors} />
                  <br />
                </div>
              </div>
            }
            <CommentDisplay commentList={commentList} rentalId={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );

  }
}
function mapStateToProps(state) {
  return {
    isDeleted: state.rentals.isDeleted,
    booking: state.userBookings,
    rental: state.rental.data,
    rentals: state.rentals.data,
    errors: state.rental.errors,
    auth: state.auth,
    commentList: state.comment.commentList,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserBookings: () => dispatch(actions.fetchUserBookings()),
    fetchRentalById: (id) => dispatch(actions.fetchRentalById(id)),
    deleteRental: (id) => dispatch(actions.deleteRental(id, ownProps)),
    createBooking: (data) => dispatch(actions.createBooking(data, ownProps))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RentalDetail)