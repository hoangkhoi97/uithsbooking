import React from 'react';
import { VariableWidth } from '../rental-detail/RentalSlide'
function afterSlide(currentSlide) {
    const list = window.document.querySelector('.slider-list');
    const nextSlide = list.childNodes[currentSlide];
    list.style.height = nextSlide.offsetHeight + 'px';
}
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

export function RentalImages(props) {
    return (
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <VariableWidth rental={props.image} className="resize1" />
        </div>
    )
}
export default RentalImages;