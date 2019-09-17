import React, { Component } from 'react';
import authService from '../../../services/auth-service';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import * as actions from 'actions';
import LoginForm from "../../Login/LoginForm";


class User2 extends Component {
    render() {
        return (
            <div>
              
                <div className="container" style={{marginTop:"100px",marginBottom:"50px"}}>
                    <div className="dbox3">
                        <div className="row">
                            <div className="col-lg-6" id="rent">
                                <div className="centered1 cont ex">
                                    <img src={"./img/img_bookhouse/house.jpg"} className="image1" alt="none" style={{marginTop:"-100px"}}/>
                                    
                                </div>
                                
                            </div>

                            <div className="col-lg-6">
                                <div className="row">
                                    <button type="submit" className="b b1" style={{display:"inline-block",float:"right",marginRight:"10px"}}><i className="fa fa-edit"/> Sửa thông tin</button>
                                    <p style={{fontSize:"25px",marginLeft:"10px"}}>Username</p>
                                </div>
                                <br/>
                                <div>
                                    <label>Email:</label>
                                    <p>placeholder@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <label>Họ và Tên:</label>
                                    <p>Place Thị Holder</p>
                                </div>
                                <br/>
                                <div>
                                    <label>Số điện thoại:</label>
                                    <p>123456789</p>
                                </div>
                                <br/>
                                <div>
                                    <label>Giới tính:</label>
                                    <p>Gay</p>
                                </div>
                                <br/>
                                <div>
                                    <label>Ngày sinh:</label>
                                    <p>12/34/5678</p>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <label>Địa chỉ:</label>
                                    <p>Trái Đất</p>
                                </div>
                                <br/>
                                <div>
                                    <label>Số chứng minh thư:</label>
                                    <p>123456789</p>
                                </div>
                                <br/>
                                <div>
                                    <label>Đôi điều về bạn:</label>
                                    <p>Placebolder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default (User2);