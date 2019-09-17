import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }
    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ rating: nextValue }, () => { this.props.input.onChange(this.state.rating) });
    }
    render() {
        const { rating } = this.state;
        return (
            <StarRatingComponent
                className={this.props.className}
                name={this.props.input.name}
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick}
            />
        );
    }
}

export default StarRating;