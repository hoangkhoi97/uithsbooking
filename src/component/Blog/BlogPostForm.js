import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { CustomInput } from 'component/Form/CustomInput'
import CustomQill from './CustomQuill'
import PhotoSelector from './BlogPhotoSelector'
import {validate} from './validate'
import {ToastContainer} from 'react-toastify'
class BlogPostForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting, submitCb, valid } = this.props
        return (
            <form onSubmit={handleSubmit(submitCb)}>
                <div className="col-sm-8 blog-post-mg-special" style={{paddingLeft:0}}>
                <Field
                    name="title"
                    type="text"
                    label='Tên bài viết:'
                    className=" custom-input "
                    placeholder="Tên tiêu đề"
                    component={CustomInput}
                />
                </div>
                <div className="col-sm-offset-1 blog-post-input-img col-sm-3 " style={{paddingLeft:0}}>
                    <span><b> Ảnh đại diện bài viết: </b></span>
                <Field
                    className="photo-selector "
                    name="image"
                    component={PhotoSelector}
                />
                </div>
                
                <br/>
                <Field
                    name="content"
                    type="text"
                    // label='Password'
                    component={CustomQill}
                />
                <button className="btn btn-info f-right">Đăng bài</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'blogPostForm',
    validate
})(BlogPostForm)