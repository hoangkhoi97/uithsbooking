import React, { Component } from 'react';
import ResetPassForm from './ResetPassForm'
import { connect } from 'react-redux';
import { resetPass } from './actions'
import { ToastContainer } from 'react-toastify'
class ResetPass extends Component {
	resetpass = (userData) => {
		const rsid = this.props.match.params.id;
		this.props.resetPass(userData, rsid)
	}
	render() {
		const { errors } = this.props
		return (
			<main>
				<div style={{paddingBottom:"20px"}} className="container">
					<ToastContainer />
					<h3>Đổi mật khẩu</h3>
					<div className="col-lg-2">
					</div>
					<div className="col-lg-8 infobox scale-in-center">
						<ResetPassForm submitCb={this.resetpass} errors={errors} />
					</div>
					<div className="col-lg-2">
					</div>
				</div>
			</main>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetPass: (data, id) => dispatch(resetPass(data, id))
	}
}
export default connect(null, mapDispatchToProps)(ResetPass);