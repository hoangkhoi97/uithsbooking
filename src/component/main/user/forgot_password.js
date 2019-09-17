import React, { Component } from 'react';
import ForgotPass from './forgot_pass_form';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { stopSubmit, startSubmit } from "redux-form";
import { ToastContainer } from 'react-toastify'
class ForgotPassword extends Component {
    constructor() {
        super();
        this.sendMail = this.sendMail.bind(this);
        this.state = {
            isLoading: false
        }
    }

    sendMail(userData) {
        this.props.dispatch(actions.sendMail(userData))
    }
    render() {
        const { isSend, errors } = this.props;
        // const sendSuccess = this.props.location.state || false;
        return (
            <div className="container">
                <ToastContainer />
                <div>
                    <h3>Quên mật khẩu</h3>
                </div>
                <div className="col-lg-2">
                </div>
                <div className="col-lg-8 infobox scale-in-center">
                    <div>
                        <p>Nhập email để chúng tôi có thể gửi thư xác nhận và giúp bạn khôi phục lại mật
                            khẩu</p>
                        <ForgotPass submitCb={this.sendMail} />
                    </div>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        errors: state.users.errors,
        isSend: state.users.isSend
    }
}

export default connect(mapStateToProps)(ForgotPassword);
