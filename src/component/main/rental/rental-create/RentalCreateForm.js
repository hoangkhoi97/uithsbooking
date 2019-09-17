import { Field, reduxForm } from 'redux-form';
import { Checkbox } from 'component/main/shared/form/Checkbox';
import { validate } from './validate';
import React, { Component } from 'react';
import ProfilePhoto from "component/Form/ProfilePhoto"
import { CustomInput } from 'component/Form/CustomInput'
import CustomSelect from 'component/Form/CustomSelect'
import CustomTextArea from 'component/Form/CustomTextArea'
import './style.scss'

class RentalCreateForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting, submitCb, valid, errors, options, user } = this.props
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit(submitCb)}>
                    <div className="create-rental-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="field-container">
                                    <Field
                                        name="title"
                                        type="text"
                                        label='Tiêu đề'
                                        className='custom-input'
                                        id='title'
                                        component={CustomInput}
                                    />
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="field-container">
                                            <Field
                                                name="bedrooms"
                                                type="number"
                                                label='Số phòng ngủ'
                                                className='custom-input'
                                                id='bedrooms'
                                                component={CustomInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="field-container">
                                            <Field
                                                name="bathrooms"
                                                type="number"
                                                label='Số phòng tắm'
                                                className='custom-input'
                                                id='bathrooms'
                                                component={CustomInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="field-container">
                                            <Field
                                                name="people"
                                                type="number"
                                                label='Số người'
                                                className='custom-input'
                                                id='people'
                                                component={CustomInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="field-container">

                                    <Field
                                        name="city"
                                        type="text"
                                        label='Tỉnh thành'
                                        className='custom-input'
                                        id='city'
                                        component={CustomInput}
                                    />
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="field-container">

                                    <Field
                                        name="price"
                                        type="number"
                                        label='Giá'
                                        className='custom-input'
                                        id='price'
                                        component={CustomInput}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="field-container">

                                            <Field
                                                name="address"
                                                type="text"
                                                label='Địa chỉ'
                                                className='custom-input'
                                                id='address'
                                                component={CustomInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="field-container">

                                            <Field
                                                name="category"
                                                type="select"
                                                label='Loại hình'
                                                className='custom-input'
                                                id='category'
                                                component={CustomSelect}
                                            ><option disabled></option>
                                                <option value='Biệt thư'>Biệt thự</option>
                                                <option value='Chung cư'>Chung cư</option>
                                                <option value='Khách sạn'>Khách sạn</option>
                                                <option value='Nhà riêng'>Nhà riêng</option>
                                                <option value='Căn hộ dịch vụ'>Căn hộ dịch vụ</option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <br />

                            </div>
                            <div className="col-lg-6">
                                <div className="col-lg-12"><label>Tiện ích</label></div>
                                <div className="field-container">

                                    <div className="col-lg-4">

                                        <Field
                                            name="isWifi"
                                            type="checkbox"
                                            label='Wifi'
                                            id='description'
                                            component={Checkbox}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="isTv"
                                            type="checkbox"
                                            label='TV'
                                            id='TV'
                                            component={Checkbox}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="isFridge"
                                            type="checkbox"
                                            label='Tủ lạnh'
                                            id='isFirdge'
                                            component={Checkbox}
                                        />
                                    </div>
                                    <br className='create-rent-br'/>
                                    <div className="col-lg-4">
                                        <Field
                                            name="isElevator"
                                            type="checkbox"
                                            label='Thang máy'
                                            id='isElevator'
                                            component={Checkbox}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="isWashing"
                                            type="checkbox"
                                            label='Máy giặt'
                                            id='description'
                                            component={Checkbox}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <Field
                                            name="isConditioner"
                                            type="checkbox"
                                            label='Máy điều hòa'
                                            id='isConditioner'
                                            component={Checkbox}
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="row rental-create-form-img">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Field
                                    name='image'
                                    component={ProfilePhoto}
                                />

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Field
                                    name="description"
                                    type="text"
                                    label='Giới thiệu chung'
                                    className='custom-textarea'
                                    id='description'
                                    rows='8'
                                    component={CustomTextArea}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="col-lg-4">
                            </div>
                            <div className="col-lg-4">
                                <button type="submit" disabled={!valid || pristine} className="b b1 center_button" >
                                    Đăng tải</button>
                            </div>
                            <div className="col-lg-4">
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                    {}
                    {/* <BwmResError errors={errors} /> */}
                </form >
            </React.Fragment>
        );
    }
}
export default reduxForm({
    form: 'rentalCreateForm',
    enableReinitialize: true,
    validate
})(RentalCreateForm)
