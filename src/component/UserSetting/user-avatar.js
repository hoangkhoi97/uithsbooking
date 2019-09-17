import React, { Component } from 'react';
import 'react-image-picker/dist/index.css'
import PhotoSelector from 'component/PhotoSelector'
import { Field, reduxForm, change } from 'redux-form';
import './style.scss'
import { validate2 } from './validate'
import Imagepicker from 'component/Form/ImagePicker'
import {connect} from 'react-redux'

class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFiles: [],
            imgSrc: '',
            isUpLoading: false,
            isSuccess: false,
        }
    }
    render() {
        const { valid, pristine, submitting, handleSubmit, submitCb } = this.props
        const imageList = this.props.imageList
        return (

            <form onSubmit={handleSubmit(submitCb)}>
                <div className="col-md-6 col-lg-6 col-xs-12">

                    <Field
                        className="photo-selector"
                        name="avatar"
                        image={this.props.img}
                        component={PhotoSelector}
                        action= {()=>{this.props.changeFieldValue("oldAvatar","")}}
                    />
                </div>

                <div className="col-md-6 col-lg-6 col-xs-12">
                    <Field
                        name="oldAvatar"
                        imageList={imageList}
                        component={Imagepicker}
                        action= {()=>{this.props.changeFieldValue("avatar","")}}
                    />
                </div>
                <button type="submit" className="b b1 center_button" disabled={!valid || submitting}>
                    {submitting ?
                        <span>
                            <i className="fa fa-spin fa-spinner" /> Đang lưu...
                                        </span>
                        :
                        <span>Lưu</span>
                    }
                </button>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        form: state.form
    }
}
const form = 'editAvatarForm'
const mapDispatchToProps = (dispatch) =>{
    return {
        changeFieldValue: (field, value) => {
            dispatch(change(form, field, value))
        }
    }
}
export default reduxForm({
    form: 'editAvatarForm',
    // destroyOnUnmount: true,
    // enableReinitialize: true,
    validate: validate2
})(connect(mapStateToProps,mapDispatchToProps)(UserAvatar));