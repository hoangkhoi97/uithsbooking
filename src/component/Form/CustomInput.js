import React, { Fragment, Component } from 'react';

// class CustomInput extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <label htmlFor={this.props.name}>{this.props.label}</label><br />
//                 <input {...this.props.input}
//                     type={this.props.type}
//                     name={this.props.name}
//                     // value={this.props.defaultValue}
//                     /*${this.props.meta.error && ' error-form'} */
//                     className={`${this.props.className } ` }
//                     placeholder={this.props.defaultValue}
//                     maxLength={this.props.maxLength}
//                     disabled={this.props.disabled} 
//                 />
//             </Fragment>
//         );
//     }
// }

// export default CustomInput;

export const CustomInput = ({
    input,
    label,
    type,
    defaultValue,
    name,
    className,
    maxLength,
    disabled,
    meta: { touched, error, warning }
}) => (
        <Fragment>
            <label htmlFor={name}>{label}</label><br />

            {input.name === 'email' || input.name === 'username' ?
                <input {...input}
                    type={type}
                    name={input.name}
                    // value={this.props.defaultValue}
                    /*${this.props.meta.error && ' error-form'} */
                    className={`${className} ${error && ' error-form'}`}
                    placeholder={defaultValue}
                    maxLength={maxLength}
                    readOnly
                />
                : <input {...input}
                    type={type}
                    name={input.name}
                    // value={this.props.defaultValue}
                    /*${this.props.meta.error && ' error-form'} */
                    className={`${className} ${error && ' error-form'}`}
                    placeholder={defaultValue}
                    maxLength={maxLength}
                    disabled={disabled}
                />}
            {touched &&
                ((error && <p className="error-text" >{error}</p>))}
        </Fragment>)
