import React from 'react';

export const BwmSelect = ({
  input,
  label,
  options,
  className,
  meta: { touched, error, warning }
}) => {

  function renderOptions() {
    return options.map((option, index) => {
      if (index === 0)
        return <option defaultValue key={index} value={option}> {option} </option>
      else
        return <option key={index} value={option}> {option} </option>
    });
  }

  return (
    <div className='form-group'>
      <label>{label}</label>
      <select {...input} className={className} type="select" >
        {renderOptions()}
      </select>
      {touched &&
        ((error && <div className="validation" style={{ display: 'block' }} >{error}</div>))}
    </div>
  )
}
