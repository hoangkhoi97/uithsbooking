import React from "react";
import Slider from "react-slick";

function renderImage(image) {
    if (Array.isArray(image))
        return (image.map((i,index) => {
            return (
            <div key={index} >
                <img className="resize" alt="rental" src={i} />
            </div>
            )
        }))
        
}

export function VariableWidth(props) {
    const settings = {
        className: "slider variable-width",
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        variableWidth: true
    };
    return (
        <div>
            <Slider {...settings}>
                {renderImage(props.rental)}
            </Slider>
        </div>
    );
}
