import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate';
import StarRating from 'component/Form/StarRating'
import Textarea from 'component/Form/CustomTextArea'
const CommentForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <React.Fragment>        
            <form onSubmit={handleSubmit(submitCb)}>
                <Field
                    className="comment-rental"
                    name="rating"
                    component={StarRating}
                />
                <br />
                <Field
                    name="comment"
                    type="text"
                    className="custom-textarea"
                    component={Textarea}
                />
                
                <button onClick={props.close} className="b b1 center_button" type="submit" disabled={!valid || pristine || submitting}>
                    {submitting ?
                        <span>
                            <i className="fa fa-spin fa-spinner" /> Đang đăng tải
                        </span>
                        :
                        <span>Bình luận</span>
                    }
                </button>
            </form>
        </React.Fragment>
    )
}
export default reduxForm({
    form: 'commentForm',
    validate
})(CommentForm)

