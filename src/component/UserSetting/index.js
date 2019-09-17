import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import authService from 'services/auth-service';
import UserAvatar from './user-avatar';
import * as actions from 'actions'
import { connect } from 'react-redux'
import ChangNewPass from 'component/ChangeNewPass'
import _ from 'lodash'
import EditProfile from 'component/UserSetting/EditProfile'
import { isEmpty } from 'helpers/index'
import { updateUserInfo, uploadAvatar, uploadOldAvatar } from './actions'
import moment from 'moment';
import { ToastContainer } from 'react-toastify'
// import {uploadAvatar} from './actions'
class userSetting extends Component {
  updateInfo = (userData) => {
    let user = this.props.users.data;
    user = _.omit(user, ['bookings', 'rentals', 'searchHistory', 'role', 'isVerified', 'status'])
    if (!_.isEqual(user, userData)) {
      const dateOfBirth = (moment(userData.dateOfBirth, 'DD/MM/YYYY').format('MM/DD/YYYY'))
      userData = Object.assign(userData, { dateOfBirth: dateOfBirth })
      this.props.updateUserInfo(userData)
    }
  }
  componentDidMount() {
    const userId = authService.getId();
    if (_.isEmpty(this.props.users.data))
      this.props.fetchUserById(userId);
  }
  uploadAvatar = (file) => {
    if (file.avatar)
      this.props.uploadAvatar(file)
    if (file.oldAvatar)
      this.props.oldAvatar(file.oldAvatar)

  }
  useAvatar = (url) => {
    if (!isEmpty(url))
      this.props.oldAvatar(url.oldAvatar)
  }
  render() {
    let user = this.props.users.data || {}
    const dateOfBirth = moment(user.dateOfBirth).isValid() ? moment(user.dateOfBirth).format('DD/MM/YYYY') : user.dateOfBirth
    user = Object.assign(user, { dateOfBirth: dateOfBirth })
    user = _.omit(user, ['bookings', 'rentals', 'searchHistory', 'role', 'isVerified', 'status'])
    return (
      <div id="user-setting-container" className="container" style={{ marginTop: "50px" }}>
        <ToastContainer />
        <div className="user">
          <Tabs defaultTab="basic-tab-one">
            <TabList>
              <Tab tabFor="basic-tab-one" className="tabc"><i className="fa fa-user" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Thông tin</h4></Tab>
              <Tab tabFor="basic-tab-two" className="tabc"><i className="fa fa-image" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Ảnh đại diện</h4></Tab>
              {/* <Tab tabFor="basic-tab-three" className="tabc"><i className="fa fa-check-circle" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Xác thực</h4></Tab> */}
              <Tab tabFor="basic-tab-four" className="tabc"><i className="fa fa-lock" style={{ fontSize: "20px" }} /><h4 style={{ display: "inline-block", marginLeft: "10px" }}>Đổi mật khẩu</h4></Tab>
            </TabList>
            <TabPanel tabId="basic-tab-one">
              <EditProfile initialValues={user} submitCb={this.updateInfo} />
            </TabPanel>
            <TabPanel tabId="basic-tab-two">
              <div className="usercontent">
                <div>
                  <h3 style={{ textAlign: "center" }}>Upload ảnh đại diện</h3>
                </div>
                <br />
                <hr />
                <div className="row">
                  <UserAvatar imageList={user.oldImages && user.oldImages} submitCb={this.uploadAvatar} img={user.image && user.image} />
                </div>
                <hr />
                <br />
                <br />
              </div>
            </TabPanel>
            <TabPanel tabId="basic-tab-four">
              <br />
              <ChangNewPass />
              <br />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = (dispatch, ) => {
  return {
    updateUserInfo: (data) => dispatch(updateUserInfo(data)),
    fetchUserById: (id) => dispatch(actions.fetchUserById(id)),
    uploadAvatar: (file) => dispatch(uploadAvatar(file)),
    oldAvatar: (url) => dispatch(uploadOldAvatar(url))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(userSetting);