import moment from 'moment'

export const validate = (values) => {
  const errors = {}
  if (!values.email)
    errors.email = 'Hãy nhập email!'
  if (values.email && !values.email.includes("@"))
    errors.email = 'Email không hợp lệ'
  if (!values.password)
    errors.password = 'Hãy nhập mật khẩu'
  if (values.password && values.password.length < 6)
    errors.password = 'Mật khẩu phải có tối thiểu 6 ký tự'
  if (values.password && values.password.length > 15)
    errors.password = 'Mật khẩu chỉ chứa tối đa 15 ký tự'
  if (!values.username)
    errors.username = 'Hãy nhập tên tài khoản'
  if (values.username && values.username.length < 6)
    errors.username = 'Tên người dùng phải có tối thiểu 6 ký tự'
  if (values.username && values.username.length > 15)
    errors.username = 'Tên người dùng chỉ chứa tối đa 15 ký tự'
  if (!values.passwordConfirmation)
    errors.passwordConfirmation = 'Hãy nhập lại mật khẩu'
  if (values.passwordConfirmation && values.passwordConfirmation.length < 6)
    errors.passwordConfirmation = 'Mật khẩu xác nhận phải có tối thiểu 6 ký tự'
  if (values.passwordConfirmation && values.passwordConfirmation.length > 15)
    errors.passwordConfirmation = 'Mật khẩu xác nhận chỉ chứa tối đa 15 ký tự'
  if (!values.newPassword)
    errors.newPassword = 'Hãy nhập mật khẩu mới'
  if (values.newPassword && values.newPassword.length < 6)
    errors.newPassword = 'Mật khẩu mới phải có tối thiểu 6 ký tự'
  if (values.newPassword && values.newPassword.length > 16)
    errors.newPassword = 'Mật khẩu mới chỉ có tối đa 15 ký tự'
  if (!values.newPasswordConfirmation)
    errors.newPasswordConfirmation = 'Hãy nhập lại mật khẩu mới'
  if (values.newPasswordConfirmation && values.newPasswordConfirmation.length < 6)
    errors.newPasswordConfirmation = 'Mật khẩu mới phải có tối thiểu 6 ký tự'
  if (values.newPasswordConfirmation && values.newPasswordConfirmation.length > 15)
    errors.newPasswordConfirmation = 'Mật khẩu mới chỉ có tối đa 15 ký tự'
  if (values.password && values.passwordConfirmation && values.passwordConfirmation != values.password)
    errors.passwordConfirmation = 'Mật khẩu xác nhận không trùng khớp'
  if(!values.captcha)
    errors.captcha = "Hãy xác nhận Captcha"
  return errors;
}
export const bookValidate = (values, props) => {
  const errors = {}
  if (!values.startAt)
    errors.startAt = 'Hãy chọn ngày đặt phòng'
  if(values.startAt && moment(values.startAt).valueOf() - moment().valueOf() < 0)
    errors.startAt = 'Ngày đặt phòng không hợp lệ'
  if(!values.endAt)
    errors.endAt = 'Hãy chọn ngày trả phòng'
  if(values.endAt && !values.startAt)
    errors.endAt = 'Hãy chọn ngày đặt phòng'
  if(values.endAt && moment(values.endAt).valueOf() - moment().valueOf() < 0)
    errors.endAt = 'Ngày trả phòng không hợp lệ'
  if(values.endAt && moment(values.endAt).valueOf() - moment(values.startAt).valueOf() <= 0)
    errors.endAt = 'Ngày trả phòng không hợp lệ'
  if(values.guests && values.guests > props.people)
    errors.guests = 'Đã vượt số khách tối đa'

  return errors
}
export const updateUserValidate = (values) => {
  const errors = {}
  if (values.fullname && values.fullname < 6)
    errors.fullname = 'Họ tên phải nhiều hơn 6 ký tự'
  if(values.phone && !/(09|01[2|6|8|9])+([0-9]{8})\b/.test(values.phone))
    errors.phone = 'Số diện thoại không hợp lệ'
  return errors
}