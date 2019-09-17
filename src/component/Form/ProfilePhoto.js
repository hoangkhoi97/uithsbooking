import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RentalPhotoSelector from 'component/RentalPhotoSelector/';

class ProfilePhoto extends Component {
    constructor(props) {
        super(props)
        let { input } = props;
        input = input.value || {};
        input = input.toJS ? input.toJS() : [];
        this.state = {
            images: [
                input[0] || null,
                input[1] || null,
                input[2] || null,
                input[3] || null,
                input[4] || null,
                input[5] || null
            ]
        }
    }
    
    componentWillReceiveProps(newProps) {
        let { input } = newProps;
        input = input.value || {};
        
        input = input.toJS ? input.toJS() : input;
        let newstate = {
            images: [
                input[0] || null,
                input[1] || null,
                input[2] || null,
                input[3] || null,
                input[4] || null,
                input[5] || null
            ]
        }
        if (!_.isEqual(newstate.images, this.state.images)) {
            this.setState(newstate);
        }
    }

    addItem = (value, key) => {
        let images = this.state.images;
        images[key] = value.imageUrl
        
        this.setState({
            images
        });
        this.props.input.onChange(images);
    }

    removeItem = (key) => {
        let images = this.state.images;
        images[key] = null
        this.setState({
            images
        });
        this.props.input.onChange((images));
    }
    render() {
        let photoSelectors = [];
        let images = this.state.images;

        for (let key in images) {
            if (images.hasOwnProperty(key)) {
                if (key > 0) {
                    photoSelectors.push(
                        <RentalPhotoSelector
                            image={this.props.input.value[key]}
                            className="photo-selector"
                            imageUrl={images[key]}
                            addItem={(value) => { this.addItem(value, key); }}
                            removeItem={() => { this.removeItem(key); }}
                            frameKey={key}
                        />
                    );
                }
                else {
                    photoSelectors.push(
                        <RentalPhotoSelector
                            image={this.props.input.value[key]}
                            className="photo-selector-1"
                            imageUrl={images[key]}
                            addItem={(value) => { this.addItem(value, key); }}
                            removeItem={() => { this.removeItem(key); }}
                            frameKey={key}
                        />
                    );
                }
            }
        }
        return (
            <Fragment>
                <div className="avatar-row-1">
                    <div className="photo-selector-container col-sm-8 col-xs-12 col-md-8 col-xl-8">
                        {photoSelectors[0]}
                    </div>
                    <div className="photo-selector-container col-sm-8 col-xs-12 col-md-4 col-xl-4">
                        {photoSelectors[1]}
                        {photoSelectors[2]}
                    </div>
                </div>
                <div className="avatar-row-2">
                    <div className="photo-selector-container container-right container-right-1 col-xs-4 col-md-4 col-xl-4">
                        {photoSelectors[3]}
                    </div>
                    <div className="photo-selector-container container-right col-xs-4 col-md-4 col-xl-4">
                        {photoSelectors[4]}
                    </div>
                    <div className="photo-selector-container col-xs-4 col-md-4 col-xl-4">
                        {photoSelectors[5]}
                    </div>
                </div>
                {this.props.meta.touched &&
                ((this.props.meta.error && <p style={{paddingLeft:"30px"}} className="error-text" >* {this.props.meta.error}</p>))}
            </Fragment>
        );
    }
}

ProfilePhoto.propTypes = {
    input: PropTypes.any.isRequired,
    dateFormat: PropTypes.string,
    onChanged: PropTypes.func,
    selected: PropTypes.object,
    tag: PropTypes.array
};

export default ProfilePhoto;