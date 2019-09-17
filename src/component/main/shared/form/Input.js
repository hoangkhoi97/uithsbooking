import React from 'react';

export const Input = ({
    input,
    label,
    type,
    defaultValue,
    symbol,
    name,
    values,
    className,
    meta: { touched, error, warning }
}) => (
        <div className='form-group'>
            <label>{label}</label>
            {symbol &&
                <div className='input-group-prepend'>
                    <div className='input-group-text'>{symbol}</div>
                </div>
            }
            {input.name === 'email' || input.name === 'username' ?
                <input {...input} readOnly name={input.name} placeholder={defaultValue} type={type} className={className} />
                : <input {...input} name={name} type={type} className={className} placeholder={defaultValue}/>}
            {touched &&
                ((error && <div className='validation' >{error}</div>))}
        </div>
    )
