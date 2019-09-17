import React, { Component } from 'react';
import {createBlog} from './actions'
import {connect} from 'react-redux'
import {ToastContainer} from 'react-toastify'
class BlogReview extends Component {
    postBlog = (data) => {
        this.props.createBlog(data)
    }
    render() {
        const data = this.props.location.state.data
        return (
            <div>
                <ToastContainer/>
                <p>{data.title}</p>
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                <button onClick={() => this.postBlog(data)}>Đăng</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createBlog: (data) => dispatch(createBlog(data))
    }
}
export default connect(null,mapDispatchToProps)(BlogReview);