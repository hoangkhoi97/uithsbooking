import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux'
import * as actions from 'actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {register} from './actions'
class Signup extends Component {
    registerUser = (userData) => {
        this.props.register(userData)
    }
    render() {
        return (
            <div style={{marginBottom:"20px"}}>
                <ToastContainer autoClose={3500}/>
                <div className="bg">
                    <img src="/img/bg.jpg" alt="bg"/>
                </div>
                <div className="container">
                    <br/>
                    <div>
                        <div  className="dbox slide-in-bottom">
                            <h3 style={{textAlign:"center"}}>Đăng ký</h3>
                            <hr/>
                            <div>
                    <RegisterForm submitCb={this.registerUser}/>
                    </div></div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        register: (userData) => dispatch(register(userData))
    }
}
export default connect(null, mapDispatchToProps)(Signup);