import React from 'react';
export function BwmResError(props) {
  
  const errors = props.errors;

  return (
    errors === undefined ? (
      <div className="boxfalse" style={{ display: 'block' }}>
      <p>Đã có lỗi xảy ra. Thử kiểm tra lại kết nối mạng.</p>
    </div>
    ):(
      errors.length > 0 &&
      <div className="boxfalse" style={{ display: 'block' }}>
        {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
      </div>
    )
  )

}
