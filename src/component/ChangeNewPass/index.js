import React, { Component } from 'react';
import NewPass from './ChangeNewPassForm'
import { connect } from 'react-redux';
import * as actions from 'actions';
import {updatePass} from './actions';

class ChangeNewPass extends Component {
  constructor(props) {
    super(props);
    this.updatePass = this.updatePass.bind(this);
    this.state = {
      redirect: false,
      errors: ''
    }

  }
  updatePass = (userData) => {
    this.props.updatePass(userData);
  }
  render() {
    return (
      <main>
        <div className="edit-profile-fields">
          <div className="scale-in-center">
            <NewPass submitCb={this.updatePass} />
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updatePass: (data) => dispatch(updatePass(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangeNewPass);