import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from 'component/main/shared/form/BwmInput';
import { validate } from 'component/main/shared/form/validators';

const ForgotForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid } = props
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(submitCb)}>
                <div className="form-group">

                    <Field
                        name="email"
                        type="email"
                        label='Email'
                        className='field__input a-field__input'
                        id='email'
                        component={BwmInput}
                    /></div>

                <button className='b b1 center_button' type="submit" disabled={!valid || pristine || submitting}>
                   Gửi
                </button>

                <br />
                <br />

            </form>
        </React.Fragment>
    )
}

export default reduxForm({
    form: 'forgotForm',
    validate
})(ForgotForm)
