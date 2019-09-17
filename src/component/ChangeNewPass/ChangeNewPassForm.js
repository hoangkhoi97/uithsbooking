import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput } from 'component/Form/CustomInput';
import { BwmInput } from 'component/main/shared/form/BwmInput';
import { validate } from 'component/main/shared/form/validators';

const newPassForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submitCb)}>
        <div className="form-group">
          <Field
            name="password"
            type="password"
            label='Mật Khẩu Cũ'
            className='custom-input'
            id='password'
            component={CustomInput}
          />
          <br /><br />
          <Field
            name="newPassword"
            type="password"
            label='Mật Khẩu Mới'
            className='custom-input'
            id='newPassword'
            component={CustomInput}
          />
          <br /><br />
          <Field
            name="newPasswordConfirmation"
            type="password"
            label="Xác Nhận Mật Khẩu Mới"
            className='custom-input'
            id='newPasswordConfirmation'
            component={CustomInput}
          />
        </div>

        <button className='b b1 center_button' type="submit" disabled={!valid || pristine || submitting}>
          Gửi
        </button>

      </form>
    </React.Fragment>
  )
}

export default reduxForm({
  form: 'newPassForm',
  validate
})(newPassForm)
