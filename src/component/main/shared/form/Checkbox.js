import React from 'react';

export const Checkbox = ({
    input,
    label,
    type,
    symbol,
    meta: { touched, error, warning }
}) => (
        <div>
            
                {symbol &&
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>{symbol}</div>
                    </div>
                }
                <input {...input} type={type} /><label>&ensp;{label}</label>
            {touched &&
                ((error && <div className='validation'>{error}</div>))}
        </div>
    )
