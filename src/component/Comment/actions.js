import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
const axiosInstance = axiosService.getInstance();

export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS"
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS"
export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS'
const commentSuccess = (comment) => {
    return {
        type: 'POST_COMMENT_SUCCESS',
        comment
    }
}
export const comment = (commentData, rentalId) => {
    return dispatch => {
        dispatch(showLoading())
        const { rating, comment } = commentData
        axiosInstance.post("/comments/post", { rating, comment, rentalId })
            .then(res => {
                dispatch(hideLoading())
                dispatch(commentSuccess(res.data));
                toast.success("Cảm ơn bạn đã đánh giá!")
            })
            .catch(({response}) => {
                toast.error(response.data.detail)
                dispatch(hideLoading());
            })
    }
}

const getCommentSuccess = (commentList) => {
    return {
        type: GET_COMMENT_SUCCESS,
        commentList
    }
}
export const getComment = (page, hasMore, rentalId) => {
    return dispatch => {
        const limit = 5
        if (hasMore === true) {
            axiosInstance.post("/comments/get", { page, limit, rentalId })
                .then(res => {
                    dispatch(getCommentSuccess(res.data))
                })
                .catch(({response}) => {
                    console.log(response)
                    toast.error(response.data.detail)
                    dispatch(hideLoading());
                })
        }
    }
}
const removeOneCommentSuccess = (id, data) => {
    return {
        type: REMOVE_COMMENT_SUCCESS,
        data,
        id
    }
}
export const removeOneComment = (cmtId, commentList) => {
    return dispatch => {
        axiosInstance.delete(`/comments/${cmtId}`)
        .then(res => {
            toast.success(res.data.detail)
            dispatch(removeOneCommentSuccess(cmtId,commentList))
        })
        .catch(({response}) =>{
            console.log(response)
        })
    }
}

export const removeComment = () => {
    return {
        type: REMOVE_COMMENT
    }
}
