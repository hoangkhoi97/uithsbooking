import React, { Component } from 'react';
class BookmarkCell extends Component {
    render() {
        const bookmark = this.props.bookmark || {};
        return (
            <div className="bookmark-cell-container">
                <div className="bookmark-cell-image">
                    <img alt="rentalImg" src={bookmark.image && bookmark.image[0]}></img>
                </div>
                <div className="bookmark-detail">
                    <div className="rental-title">
                        {bookmark.title && bookmark.title}
                    </div>
                    <div className="bookmark-addess">
                        {bookmark.address && bookmark.address}
                    </div>
                </div>
                <div className={`rental-total-price`}>
                    {
                        bookmark.price && <button className="status-btn approved-status">{bookmark.price.toLocaleString()+" đồng"}</button>}{
                    }
                </div>
            </div>
        );
    }
}

export default BookmarkCell;