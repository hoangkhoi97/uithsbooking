import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from 'component/main/shared/form/BwmInput';
import { BwmResError } from 'component/main/shared/form/BwmResError';
import { validate } from 'component/main/shared/form/validators';

const RegisterForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <React.Fragment>        
            <form onSubmit={handleSubmit(submitCb)}>
                <Field
                    name="email"
                    type="email"
                    label='Email'
                    className="field__input a-field__input"
                    component={BwmInput}
                />
                <br />
                <Field
                    name="username"
                    type="text"
                    label='Tên tài khoản'
                    className="field__input a-field__input"
                    component={BwmInput}
                />
                <br />
                <Field
                    name="password"
                    type="password"
                    label='Mật khẩu'
                    className="field__input a-field__input"
                    component={BwmInput}
                />
                <br />

                <Field
                    name="passwordConfirmation"
                    type="password"
                    label='Xác nhận mật khẩu'
                    className="field__input a-field__input"
                    component={BwmInput}
                />
                <br />
                <div className="text-center">
                    <p>Qua việc click <strong className="label label-primary">Đăng ký</strong>, bạn đã đồng ý với <a href="#" data-toggle="modal" data-target="#t_and_c_m">Điều khoản dịch vụ</a> của chúng tôi, bao gồm cả việc sử dụng Cookie.</p>
                </div>
                <button className="b b1 center_button" type="submit" disabled={!valid || pristine || submitting}>
                    {submitting ?
                        <span>
                            <i className="fa fa-spin fa-spinner" /> Đang đăng ký...
                        </span>
                        :
                        <span>Đăng ký</span>
                    }
                </button>
                {/* {errors.length > 0 &&
                <div className='alert alert-danger bwm-res-errors'>
                    {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
                </div>} */}
            </form>
        </React.Fragment>
    )
}


export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)

