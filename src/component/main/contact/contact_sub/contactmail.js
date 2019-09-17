import React, { Component, Fragment } from 'react';
import {toast, ToastContainer} from 'react-toastify'
import {postContact} from '../actions'
import {connect} from 'react-redux'
class Contactmail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email:'',
			message:''
		};
	}
	 
	handleChange = (e) => {
		this.setState({[e.target.name]:e.target.value})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const data = this.state;
		if(!data.name || !data.email || !data.message)
			toast.error('Hay nhap day du noi dung')
		else this.props.postContact(data)
	}
	render() {
		return (
			<Fragment>
				<h3>Hãy để lại lời nhắn cho chúng tôi</h3>
				<ToastContainer/>
				{/* Contact Us Form */}
				<div style={{ marginTop: 30 }}>
					<form id="reply_form">
						<div style={{ width: '100%' }}>
							<input onChange={this.handleChange} value={this.state.name} name="name" id="contact_form_name" className="form-control contact_form_name" placeholder="Tên" required="required" data-error="Bắt buộc nhập tên" />
							<br />
							<input onChange={this.handleChange} value={this.state.email} type="email" name="email" id="contact_form_email" className="form-control contact_form_email" placeholder="Email" required="required" data-error="Bắt buộc nhập email hợp lệ" />
						</div>
						<br />
						<textarea onChange={this.handleChange} value={this.state.message} name="message" style={{ padding: 8, width: '100%', height: 90, borderRadius: 5 }} id="contact_form_message" className="text_field contact_form_message" name="message" placeholder="Message" required data-error="Please, write us a message."/>
						<br />
						{/* Submit*/}
						<button onClick={this.handleSubmit} id="contact_form_submit" type="submit" className="b b1 center_button" value="Submit" style={{ marginLeft: '54%', width: 200 }}>Gửi</button>
					</form>
				</div>
			</Fragment>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		postContact: (data) => dispatch(postContact(data))
	}
}
export default connect(null,mapDispatchToProps)(Contactmail);