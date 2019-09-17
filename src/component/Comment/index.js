import React, {  Component } from 'react';
import { Modal } from "react-bootstrap"
import CommentForm from './CommentForm'
import {connect} from "react-redux"
import {comment} from './actions'

import './style.scss'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    handleChange = () => {
        this.setState({ show: !this.state.show })
    }
    comment = (commentData) => {
        const rentalId = this.props.rentalId;
        this.props.Comment(commentData, rentalId)
    }
    render() {
        return (
            <div id="comment-rental-container">
                <button className="b b1 rbutton" onClick={this.handleChange}>
                    Đánh giá
                </button>
                <Modal className="comment-rental-container" style={{ opacity: 1 }} show={this.state.show}>
                    <Modal.Header>
                        <img alt="quit" className="close-img" onClick={this.handleChange} src="/img/Quit.svg"></img>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="comment-text">Hãy để lại đánh giá của bạn</div>
                        <CommentForm close={this.handleChange} submitCb={this.comment} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Comment: (commentData, rentalId) => dispatch(comment(commentData,rentalId)) 
    }
}
export default connect(null,mapDispatchToProps)(Comment);