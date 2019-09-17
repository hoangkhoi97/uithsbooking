import React, { Component, Fragment } from 'react';
import './style.scss'
import { addBookmark, removeBookmark } from './actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
class BookmarkButton extends Component {
  state = {
    redirect: false
  }
  setRedirect = () =>{
    this.setState({
      redirect: true
    })
  }
  addBookmark = () => {
    if (this.props.auth.isAuth)
      this.props.addBookmark(this.props.rentalId)
    else this.setRedirect()
  }
  removeBookmark = () => {
    if (this.props.auth.isAuth)
      this.props.removeBookmark(this.props.rentalId)
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }
  render() {
    const { bookmark } = this.props
    const rentalId = this.props.rentalId
    return (
      <Fragment>
        {this.renderRedirect()}
        {bookmark ?
          (<div id="bookmark-container">
            <button onClick={this.removeBookmark} className="bookmark-btn">
              <img className="bookmark-img" src="/img/bookmarked-red.png" />
            </button>
          </div>)
          : (<div id="bookmark-container">
            <button onClick={this.addBookmark} className="bookmark-btn">
              <img className="bookmark-img" src="/img/bookmarked.png" />
            </button>
          </div>)
        }
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    users: state.users.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: (rentalId) => dispatch(addBookmark(rentalId)),
    removeBookmark: (rentalId) => dispatch(removeBookmark(rentalId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);