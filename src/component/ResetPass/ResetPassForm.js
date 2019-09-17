import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from 'component/main/shared/form/BwmInput';
import { BwmResError } from 'component/main/shared/form/BwmResError';
import { validate } from 'component/main/shared/form/validators';

const ForgotForm = props => {
	const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
	return (

		<form onSubmit={handleSubmit(submitCb)}>
			<div className="form-group">
				<Field
					name="newPassword"
					type="password"
					label='Mật Khẩu Mới'
					className='field__input a-field__input'
					id='newPassword'
					component={BwmInput}
				/>
				<Field
					name="newPasswordConfirmation"
					type="password"
					label="Nhập Lại Mật Khẩu Mới"
					className='field__input a-field__input'
					id='newPasswordConfirmation'
					component={BwmInput}
				/>
			</div>
			<button className='b b1 center_button' type="submit" disabled={!valid || pristine || submitting}>
				{submitting ?
					<span>
						<i className="fa fa-spin fa-spinner" /> Đang gửi...
                        </span>
					:
					<span>Gửi</span>
				}
			</button>
		</form>
	)
}

export default reduxForm({
	form: 'forgotForm',
	validate
})(ForgotForm)
