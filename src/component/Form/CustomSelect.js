import React, { Fragment, Component } from 'react';

class CustomSelect extends Component {
    render() {
        return (
            <Fragment>
                <label htmlFor={this.props.input.name}>{this.props.label}</label><br />
                <select name={this.props.input.name} className={`${this.props.className} ${this.props.meta.error && ' error-form'}`}
                    {...this.props.input} >
                    {this.props.children}
                </select>
                {this.props.meta.touched &&
                    ((this.props.meta.error && <p className="error-text">{this.props.meta.error}</p>))}
            </Fragment>
        );
    }
}

export default CustomSelect;