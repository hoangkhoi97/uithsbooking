import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import "./_style_blog.scss"
import moment from 'moment'
class BlogItem extends Component {
    render() {
        const blog = this.props.blog;
        return (
            <div className="col-md-6">
                <Link  className="blog-entry"  to={`blog_detail/${blog._id}`}>
                    <img src={`${blog.image}`} alt="Image placeholder"/>
                        <div className="blog-content-body">
                            <div className="post-meta">
                                {/* <span className="category">{blog.author && blog.author.username}</span> */}
                                <span className=""><img className="blog-avatar" alt="avatar" src={blog.author.image} /></span>
                                <span style={{color:'#000000a6'}}> {blog.author.username} </span>
                                <span> • </span>
                                <span className="mr-2">{moment(blog.createdAt).format('DD/MM/YYYY')}</span>
                                <span> • </span>
                                <span className="ml-2"><span className="fa fa-eye"/> {blog.viewCount}</span>
                            </div>
                            <h2 className="text-truncate">{blog.title}</h2>
                            <p>Nhấn vào để đọc thêm...</p>
                        </div>
                </Link>
            </div>

        );

    }
}

export default BlogItem;