import React from 'react';

export const BwmTextArea = ({
  input,
  label,
  type,
  rows,
  className,
  meta: { touched, error, warning }
}) => (
  <div className='form-group'>
    <label>{label}</label>
      <textarea {...input} type={type} style={{ resize: "none" }} rows={rows} className={className}></textarea>
      {touched &&
        ((error && <div className='alert alert-danger'>{error}</div>))}
  </div>
)
