import React from 'react';
import { Link } from "react-router-dom";
import BookmarkButton from 'component/Bookmark/BookmarkButton'
import StarRatingComponent from 'react-star-rating-component';
export function RentalCard(props) {
  const rental = props.rental || [];

  return (
    <div className="sub_home_slider_container">
      <BookmarkButton bookmark={props.bookmark} rentalId={rental._id} />
      <Link className="sub_home_link" to={`/detail/${rental._id}`}>
        <img className="sub_home_fix_img" src={rental.image[0]} alt="HomeIMG" width="100%" />
        <p className="sub_home_text_p text-truncate">{rental.address}</p>
                <h3 className="sub_home_text_h3 text-truncate">{rental.title}</h3>
                <div className="sub_home_text_price">{rental.price.toLocaleString()} VNĐ</div>
        <div className="sub_home_star">
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={rental.rating}
          />
        </div>
      </Link>
    </div>
  )
}
export default RentalCard;