import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import { BwmResError } from 'component/main/shared/form/BwmResError';
import Datepicker from 'component/Form/DatePicker'
import CustomSelect from 'component/Form/CustomSelect'
import { subtractTwoDates } from 'helpers/index'
// import { bookValidate } from 'component/main/shared/form/validators'
import { validate } from './validate'
import { addDays } from 'date-fns'

let RentalDateForm = props => {
   const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
   const { price, startAt, endAt, handleSubmit, pristine, submitting, submitCb, valid, errors } = props
   const totalPrice = (subtractTwoDates(startAt, endAt) * price);
   return (
      <React.Fragment>
         <BwmResError errors={errors} />
         <form onSubmit={handleSubmit(submitCb)} autoComplete='off'>
            <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="start-date">
                     <Field
                        name="startAt"
                        label='Ngày đến'
                        className="custom-input"
                        placeholder="dd/mm/yy"
                        component={Datepicker}
                        minDate={addDays(new Date, 1)}
                        filterDate={props.filterDates}
                     // validate={[required]}
                     />
                  </div>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="end-date">
                     <Field
                        name="endAt"
                        label='Ngày đi'
                        placeholder="dd/mm/yy"
                        className="custom-input"
                        component={Datepicker}
                        minDate={addDays(new Date, 2)}
                        filterDate={props.filterDates}
                     />
                  </div>
               </div>
            </div>
            <br />
            <Field
               name="guests"
               label='Số người'
               className="custom-input"
               component={CustomSelect}
            >{[(<option disabled key='null'></option>)].concat(options.map((item) => {
               return <option value={item} key={item}>{item}</option>;
            }))}</Field>
            <hr />
            <h4 style={{ fontWeight: "bold", marginLeft: "5px" }}>Tổng cộng: {(totalPrice > 0) ? totalPrice.toLocaleString() : "---"} đồng</h4>
            <hr />
            <button type="submit" className="b b1 center_button" style={{ width: "60%" }} disabled={!valid || pristine || submitting}>
               {submitting ?
                  <span>
                     <i className="fa fa-spin fa-spinner" /> Đang đặt phòng...
                        </span>
                  :
                  <span><i className="fa fa-check-circle" />   Đặt phòng</span>
               }
            </button>
            {}
            <hr />
            <p className="text-center">Điện thoại hỗ trợ: <span style={{ fontWeight: "bold" }}>08089508</span></p>
         </form>
      </React.Fragment>
   )
}
const selector = formValueSelector('rentalDateForm')
RentalDateForm = connect(
   state => {
      // can select values individually
      const startAt = selector(state, 'startAt')
      const endAt = selector(state, 'endAt')
      // or together as a group
      return {
         startAt,
         endAt,
      }
   }
)(RentalDateForm)
export default reduxForm({
   form: 'rentalDateForm',
   validate
})(RentalDateForm)
