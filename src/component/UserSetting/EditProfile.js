import React, { Fragment, Component } from 'react';
import './style.scss'
import CustomSelect from 'component/Form/CustomSelect';
import CustomTextArea from 'component/Form/CustomTextArea';
import { CustomInput } from 'component/Form/CustomInput'
import DatePicker from 'component/Form/DatePicker'
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate'
import {formatDate} from 'helpers'
import moment from 'moment'
class EditProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { valid, submitting, handleSubmit, submitCb } = this.props
        const dateOfBirth = (moment(this.props.initialValues.dateOfBirth).isValid() && this.props.initialValues.dateOfBirth) ? 
        new Date(this.props.initialValues.dateOfBirth):new Date(moment(this.props.initialValues.dateOfBirth,'DD/MM/YYYY'))
        return (
            <Fragment>
                <div className="edit-profile-form">
                    <form onSubmit={handleSubmit(submitCb)}>
                        <div className="edit-profile-fields">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-xs-12">
                                    <div className="field-container">
                                        <Field
                                            label="Email"
                                            type="text"
                                            name="email"
                                            component={CustomInput}
                                            className="custom-input" />
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Họ và tên"
                                            type="text"
                                            name="fullname"
                                            maxLength={30}
                                            component={CustomInput}
                                            className="custom-input" />
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Ngày sinh"
                                            component={DatePicker}
                                            name="dateOfBirth"
                                            selected={dateOfBirth}
                                            className="custom-input"
                                        />
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Địa chỉ"
                                            name="address"
                                            component={CustomInput}
                                            className="custom-input"
                                        />
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Giới thiệu bản thân"
                                            name="description"
                                            component={CustomTextArea}
                                            rows={4}
                                            className="custom-textarea"
                                            maxLength={120}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-xs-12">
                                    <div className="field-container">
                                        <Field
                                            component={CustomInput}
                                            name="username"
                                            label="Tên người dùng"
                                            type="text"
                                            className="custom-input" />
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Số điện thoại"
                                            name="phone"
                                            component={CustomInput}
                                            className="custom-input"
                                        />
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Giới tính"
                                            name="gender"
                                            component={CustomSelect}
                                            className="custom-input">
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                        </Field>
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Số chứng minh thư"
                                            name="identityCard"
                                            maxLength={9}
                                            component={CustomInput}
                                            className="custom-input"
                                        />
                                    </div>
                                    <div className="field-container">
                                        <Field
                                            label="Đôi lời nhắn nhủ"
                                            name="message"
                                            rows={4}
                                            maxLength={120}
                                            component={CustomTextArea}
                                            className="custom-textarea"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button style={{marginTop:"50px",marginBottom:"30px"}} type="submit" className="b b1 center_button" disabled={!valid || submitting}>
                            {submitting ?
                                <span>
                                    <i className="fa fa-spin fa-spinner" /> Đang lưu...
                                        </span>
                                :
                                <span>Lưu</span>
                            }
                        </button>
                    </form>
                </div>
            </Fragment>
        );
    }
}
export default reduxForm({
    form: 'editProfileForm',
    destroyOnUnmount: true,
    enableReinitialize: true,
    validate,
    
})(EditProfile);