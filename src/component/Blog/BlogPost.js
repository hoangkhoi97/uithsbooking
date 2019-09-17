import React, { Component } from "react";
// import { ImageDrop } from 'quill-image-drop-module';
import "react-quill/dist/quill.snow.css";
import BlogPostForm from './BlogPostForm';
import {createBlog} from './actions'
import { connect} from 'react-redux'
import { ToastContainer } from 'react-toastify'
import './style.scss'
class Editor extends Component {
	blogPost = (data) => {
		this.props.createBlog(data)
	}
	render() {
		return (
			<div style={{marginBottom:"20px"}} id="blog_post mg-top-20">
				<ToastContainer/>
				<div className="container-fluid">
					<h3 className="text-left title_h3 type1 animated fadeInLeft mg-top-20">Đăng bài viết</h3>
					<BlogPostForm submitCb={this.blogPost} />
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		createBlog: (data) => dispatch(createBlog(data,ownProps))
	}
}
export default connect(null,mapDispatchToProps)(Editor);
