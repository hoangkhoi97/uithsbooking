import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { BwmInput } from 'component/main/shared/form/BwmInput'
import { validate } from 'component/main/shared/form/validators'
import { Link } from "react-router-dom"
import Captcha from 'component/Captcha'

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid } = props
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submitCb)}>
        <Field
          name="email"
          type="email"
          label='Email'
          className="field__input a-field__input"
          id='email'
          component={BwmInput}
        />
        <br />
        <br />
        <Field
          name="password"
          type="password"
          label='Password'
          className="field__input a-field__input"
          component={BwmInput}
        />


          <center>
            <Link to="/forgot_pass" className="btn btn-link"
            >Quên mật khẩu?</Link>
          </center>

        {process.env.NODE_ENV === "production" &&
          <Field
            name="captcha"
            component={Captcha}
          />}
        <button type="submit" className="b b1 center_button" disabled={!valid || pristine || submitting}>
          Đăng nhập
      </button>
      </form>
    </React.Fragment>
  )
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)
