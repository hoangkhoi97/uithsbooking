import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import "./style.scss"
import { getComment, removeComment,removeOneComment } from 'component/Comment/actions'
import { connect } from "react-redux";
import _ from "lodash"
import moment from 'moment'
import StarRatingComponent from 'react-star-rating-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CommentDisplay extends Component {
    loadMore = () => {
        const notiMenu = document.getElementById('comment-list')
        if (notiMenu.clientHeight + notiMenu.scrollTop >= notiMenu.scrollHeight) {
            this.props.getComment(this.props.page, this.props.hasMore, this.props.rentalId);
        }
    }
    componentDidMount() {
        if (this.props.rentalId) {
            this.props.getComment(this.props.page, this.props.hasMore, this.props.rentalId)
        }
        ReactDOM.findDOMNode(this.refs.commentList).addEventListener('scroll', this.loadMore);
    }
    componentWillUnmount() {
        this.props.removeComment();
    }
    render() {
        const currentUserId = (this.props.user.data && this.props.user.data._id) || ''
        const commentList = this.props.commentList;
        return (
            <div id="comment-display" >
                <div className="comment-header">
                    Đánh giá của khách hàng
                    </div>
                <div ref="commentList" id="comment-list" className="comment-list-container">
                    {
                        !_.isEmpty(commentList) ? (
                            commentList.map((i, index) =>
                                <div key={index} className="comment-cell">
                                    <div className="user-avatar">
                                        <img src={i.user.image}></img>
                                    </div>
                                    <div className="comment-content">
                                        {
                                            _.isEqual(i.user._id,currentUserId) && 
                                            <button onClick={()=> this.props.removeOneComment(i._id)}className="delete-cmt-btn">Xóa</button>
                                        }
                                        <div className="content-container">
                                            <div className="name-star-container">
                                                <div className="user-comment-name">{i.user.username}</div>
                                                <StarRatingComponent
                                                    name="rating"
                                                    starCount={5}
                                                    value={i.rating}
                                                />
                                            </div>
                                            {i.comment && i.comment}
                                        </div>
                                        <div className="comment-time">
                                            {moment(i.createdAt).fromNow()}
                                        </div>
                                    </div>
                                </div>)) : <img className="empty-comment" src="/img/empty-message.svg"></img>
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        page: state.comment.page,
        hasMore: state.comment.hasMore,
        user: state.users
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getComment: (page, hasMore, rentalId) => dispatch(getComment(page, hasMore, rentalId)),
    removeComment: () => dispatch(removeComment()),
    removeOneComment: (id) => dispatch(removeOneComment(id, ownProps.commentList))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentDisplay);