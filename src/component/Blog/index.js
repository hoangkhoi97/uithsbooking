import React, { Component } from 'react';
import { getBlog } from './actions'
import { connect } from 'react-redux'
import BlogSlideBar from './BlogDetail/BlogSlideBar'
import BlogItem from './BlogItem'
import { Link } from "react-router-dom";
import _ from "lodash";
import Pagination from "../BookingHome/Pagination";
import PaginationMobile from "../BookingHome/PaginationMobile";
import { ToastContainer } from 'react-toastify'

class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageOfItems: []
		};
	}
	onChangePage = (pageOfItems) => {
		// update state with new page of items
		this.setState({ pageOfItems: pageOfItems });
	}

	componentDidMount() {
		this.props.getBlog();
	}

	render() {
		return (
			<div id="blog-container">
				<ToastContainer/>
				<div className="container list-rentals-container">
					<h3 className="text-left title_h3 type1 animated fadeInLeft mg-top-20">Blog chia sẻ</h3>

					<Link to="/blog_post">
						<button className="btn btn-info f-right blog-btn-add animated fadeInRight "><i className="fa fa-plus" /> Tạo bài viết mới</button>
					</Link>

					<div className="row blog-entries mg-top-20">
						<div className="col-md-12 col-lg-8 main-content">
							<div className="row">
								{
									this.state.pageOfItems.map((blog, index) => {
										return <BlogItem key={index} blog={blog} />
									}
									)
									// this.props.blogList.map((blog, index) => {
									//     return <BlogItem key={index} blog={blog}/>
									// })
								}

							</div>
							<Pagination items={this.props.blogList} onChangePage={this.onChangePage} />
							<PaginationMobile items={this.props.blogList} onChangePage={this.onChangePage} />
						</div>
						<BlogSlideBar />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		blogList: state.blog.blogList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getBlog: () => dispatch(getBlog())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);