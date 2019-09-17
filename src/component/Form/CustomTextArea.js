import React, { Fragment, Component } from 'react';

class CustomTextArea extends Component {
    render() {
        
        return (
            <Fragment>
                <label htmlFor={this.props.input.name}>{this.props.label}</label>{this.props.label && <br />}
                <textarea {...this.props.input}
                    type={this.props.type}
                    name={this.props.input.name}
                    className={`${this.props.className} ${this.props.meta.error && ' error-form'}`}
                    placeholder={this.props.placeholder}
                    maxLength={this.props.maxLength}
                    disabled={this.props.disabled}
                    rows={this.props.rows}
                />
            </Fragment>
        );
    }
}

export default CustomTextArea;