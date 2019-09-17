import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import * as actions from 'actions';
import { fetchTopRentals } from './actions'
import RentalCard from 'component/RentalCard'
import _ from 'lodash'
function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', zIndex: 3, padding: 25, top: '30%' }}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', zIndex: 3, padding: 25, top: '30%' }}
            onClick={onClick}
        ></div>
    );
}

class RentalList extends Component {
    componentDidMount() {
        if (this.props.rentals.length === 0)
            this.props.fetchTopRentals()
    }
    renderRentals() {
        const rentals = this.props.rentals || []
        const bookmarkId = this.props.users && _.map(this.props.users.bookmark, '_id')
        return rentals.map((rental, index) => {
            const bookmark = _.includes(bookmarkId, rental._id);            return (
                <RentalCard key={index} rental={rental} bookmark={bookmark} />
            )
        })
    }
    render() {
        const settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 3000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        autoplay: true,
                        infinite: true,
                        autoplaySpeed: 3000,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: false,
                        autoplay: true,
                        infinite: true,
                        autoplaySpeed: 3000,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        autoplay: true,
                        infinite: true,
                        autoplaySpeed: 3000,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                }
            ]
        };
        return (
            <div id="sub_home" className="container-fluid">
                <div style={{ minHeight: "400px" }} className="sub_home_list mg-top-40Responsive">
                    <h4 className="text-left title_h3 animated fadeInLeft">Gợi ý tốt nhất</h4>
                    <div className="sub_home_slider text-center">
                        <Slider {...settings}>
                            {this.renderRentals()}
                        </Slider>
                    </div>
                    <Link to="/booking_home" className="f-right title_link animated fadeInLeft">Xem thêm ></Link>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchRentals: () => dispatch(actions.fetchRentals()),
        fetchTopRentals: () => dispatch(fetchTopRentals())
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users.data,
        rentals: state.rentals.topRentals,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RentalList);