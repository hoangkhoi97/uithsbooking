import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getBookmark} from './actions'
import './style.scss'
import BookmarkCell from './BookmarkCell';
import {Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify' 

class BookmarkPage extends Component {
	componentDidMount() {
		window.scrollTo(0,0)
	}
	render() {
		const bookmark = this.props.bookmark || []
		return (
			<div className="user-bookmark-history" style={{ backgroundColor: "#f5f5f5" }}>
				<ToastContainer/>
				<div className="bookmark-history-container">
					<div className="bookmark-history-title">
						Danh sách ưa thích
					</div>
					<div className="bookmark-history-content">
						{

							bookmark.map((i,index) =>
								<Link key={index} to={`/detail/${i._id}`}>
									<BookmarkCell bookmark={i} />
								</Link>
							)
						}
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		bookmark: state.users.data.bookmark
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getBookmark: () => {
			dispatch(getBookmark())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(BookmarkPage);