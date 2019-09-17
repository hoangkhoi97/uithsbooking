
export const validate = (values) => {
    const error = {};
    if (!values.title) {
        error.title = 'Hãy nhập tên bài viết';
    }
    else if (values.title.length < 4)
        error.title = "Tên bài viết phải dài hơn 4 ký tự"
    else if (values.title.length > 60)
        error.title = "Tên bài viết phải ngắn hơn 100 ký tự"
    if (!values.image)
        error.image = "Hãy chọn ảnh"
    if (!values.content)
        error.content = "Hãy nhập nội dung"
    else if (values.content.length < 100)
        error.content = "Nội dung bài việt quá ngắn"
    return error;
}