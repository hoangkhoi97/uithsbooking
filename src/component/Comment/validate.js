
export const validate = (values, props) => {
    const errors = {}
    if(!values.comment)
        errors.comment = "Hãy nhập đánh giá của bạn"
    if(values.comment && values.comment.length < 5)
        errors.comment = "Đánh giá dài hơn 4 ký tự"
    return errors
}