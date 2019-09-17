import React, { Component } from 'react';
import {Redirect } from 'react-router-dom'
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastify";
import {login} from './actions'
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            errors: []
        }
    }
    componentDidMount(){
        window.scrollTo({top:18,behavior: 'smooth'})
    }
    loginUser = (userData) => {
        this.props.login(userData);
    }
    render() {
        const { isAuth } = this.props.auth;
        if (isAuth) {
            return <Redirect to={{ pathname: '/' }} />
        }
        return (
            <div style={{paddingBottom:"20px"}}>
                <ToastContainer autoClose={2000} />
                <div className="bg">
                    <img src="/img/bg.jpg" alt="bg" />
                </div>
                <div className="fg">
                    <div className="container">
                        <br />
                        <br />
                        <br />
                        <div className="dbox slide-in-bottom">
                            <h3 style={{ textAlign: "center" }}>Đăng nhập</h3>
                            <br />
                            <LoginForm submitCb={this.loginUser}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (userData) => dispatch(login(userData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);