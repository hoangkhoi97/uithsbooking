
export const validate = (values, props) => {
    const errors = {}
    if (!values.title)
        errors.title = "Hãy nhập tên"
    else if (values.title.length < 6)
        errors.title = "Tên quá ngắn"
    else if (values.title.length > 100)
        errors.title = "Tên quá dài"
    if (!values.city)
        errors.city = "Hãy nhập thành phố"
    if (!values.address)
        errors.address = "Hãy nhập địa chỉ"
    else if (values.address.length < 6)
        errors.address = "Địa chỉ quá ngắn"
    else if (values.address.length > 100)
        errors.address = "Địa chỉ quá dài"
    if (!values.category)
        errors.category = "Hãy chọn loại hình"
    if (!values.bedrooms)
        errors.bedrooms = "Hãy nhập số phòng"
    else if (values.bedrooms > 10 || values.bedrooms < 0)
        errors.bedrooms = "Không hợp lệ"
    if (!values.bathrooms)
        errors.bathrooms = "Hãy nhập số phòng"
    else if (values.bathrooms > 10 || values.bathrooms < 0)
        errors.bathrooms = "Không hợp lệ"
    if (!values.people)
        errors.people = "Hãy nhập số người"
    else if (values.people > 30 || values.people < 0)
        errors.people = "Không hợp lệ"
    if (!values.price)
        errors.price = "Hãy nhập giá tiền"
    else if (values.price < 0)
        errors.price = "Không hợp lệ"
    if (!values.description)
        errors.description = "Hãy nhập mô tả"
    else if (values.description.length < 6)
        errors.description = "Mô tả quá ngắn"
    if (!values.image)
        errors.image = "Hãy chọn hình"

    return errors
}