import React, { Component, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import _ from 'lodash'
import './style.scss'
class Datepicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: props.selected
        }
    }
    handleChange = (date) => {
        this.setState({ startDate: date });
        this.props.input.onChange((date));
    }
    
    render() {
        const {
            input, 
            meta: { touched, error }
        } = this.props
        return (
            <div>
                <label htmlFor={this.props.input.name}>{this.props.label}</label><br />
                <DatePicker
                    {...input}
                    placeholderText="dd-mm-yyyy"
                    name={this.props.input.name}
                    className={`${this.props.className} ${error && ' error-form'}`}
                    selected={this.state.startDate}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={this.handleChange}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    filterDate={(date) => {
                        return !_.includes(this.props.filterDate, moment(date).format('YYYY-MM-DD'))
                    }}
                />
            </div>);
    }
}

export default Datepicker;