import moment from 'moment'
import { isValidDate } from 'helpers/index';
export const validate = (values, props) => {
    const errors = {}

    if (!values.startAt)
        errors.startAt = 'Hãy chọn ngày đặt phòng'
    if (!values.endAt)
        errors.endAt = 'Hãy chọn ngày trả phòng'
    if(!values.guests)
        errors.guests ="Cần có số người"

    if (values.guests && values.guests > props.people)
        errors.guests = 'Đã vượt số khách tối đa'

    return errors
}