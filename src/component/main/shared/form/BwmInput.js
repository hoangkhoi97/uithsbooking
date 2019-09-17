import React from 'react';

export const BwmInput = ({
  input,
  label,
  type,
  symbol,
  className,
  meta: { touched, error, warning }
}) => (
    <div>
      <label style={{ fontSize: "17px" }} className="field a-field a-field_a2 page__field">
        {symbol &&
          <div className='input-group-prepend'>
            <div className='input-group-text'>{symbol}</div>
          </div>
        }
        <input {...input} type={type} className={className} placeholder={"Nhập "+ label} />
        <span className="a-field__label-wrap">
          <span className="a-field__label">{label}</span>
        </span></label>
      {touched &&
        ((error && <div className="validation" style={{ display: 'block' }} >{error}</div>))}
    </div>
  )
