import React, { Component } from 'react';
import { getBlogById, resetBlogDetail } from './actions'
import { connect } from 'react-redux'
import moment from 'moment'
import BlogSlideBar from './BlogDetail/BlogSlideBar'
import './style.scss'
class BlogDetail extends Component {
  componentDidMount() {
    window.scrollTo(0,0)
    this.props.getBlogById(this.props.match.params.id)
  }
  componentWillUnmount(){
    this.props.resetBlogDetail()
  }
  render() {
    const blog = this.props.blog || {}
    return (
      <div className="container mg-top-80">
        <div className="row blog-entries">
          <div className="col-md-12 col-lg-8 main-content">
            <h1 className="mb-4">{blog.title}</h1>
            <div className="post-meta">
              Tác giả:
              {/*<span className=""><img className="blog-avatar" alt="avatar" src={blog.author.image} /></span>*/}
              <span className="category">{blog.author && blog.author.username}</span>
              <span> • </span>
              Ngày đăng: <span className="mr-2">{moment(blog.createdAt).format('DD/MM/YYYY')}</span>
            </div>
            <div className="content-container" style={{width:"100%"}} dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            <div className="pt-5">
              <p>Danh mục: <a href="#"> Du lịch</a> Tags: <a
                href="#">#dalat</a>, <a href="#">#dulich</a></p>
            </div>
          </div>
          <div className="mg-top-80">
            <BlogSlideBar />
          </div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogById: (id) => dispatch(getBlogById(id)),
    resetBlogDetail: () => dispatch(resetBlogDetail())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);