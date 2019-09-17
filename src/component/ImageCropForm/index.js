import React, { Component, Fragment } from 'react';
import ReactCrop from 'react-image-crop';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'react-image-crop/dist/ReactCrop.css';

class ImageCropForm extends Component {
  constructor(props) {
    super(props);

    const crop = props.freeSelect ? {
      width: 100,
      height: 100,
      x: 0,
      y: 0
    } : {
      aspect: 1,
      width: 50,
      x: 0,
      y: 0
    }

    this.state = {
      src: props.src,
      croppedImageUrl: null,
      crop
    };
  }
  componentWillReceiveProps(newProp) {
    if (newProp.freeSelect) {
      this.setState({
        crop: {
          width: 100,
          height: 100,
          x: 0,
          y: 0
        }
      });
    }
  }
  onImageLoaded = (image) => {
    this.imageRef = image;
    this.setState({ croppedImageUrl: image.src});
  }
  onCropComplete = async(crop, pixelCrop) => {
    await this.makeClientCrop(crop, pixelCrop);
  }
  onCropChange = crop => {
    this.setState({ crop });
  }
  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        pixelCrop);
      this.setState({ croppedImageUrl });
    }
  }
  handleCompleted = () => {
    this.props.onCompleted(this.state.croppedImageUrl);
  }
  getCroppedImg(image, pixelCrop) {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve) => {
      this.fileUrl = canvas.toDataURL('image/jpeg', 1.0);
      resolve(this.fileUrl);
    });
  }
  render() {
    const { crop, src } = this.state;
    return (
      <Fragment>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            keepSelection={true}
            minWidth={1}
            minHeight={1}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange} />
        )}
        {src && (
          <div className="clearfix text-center">
            <Button
              onClick={this.handleCompleted}
              className="btn-fw-96"
              bsstyle="primary"
              // disabled={!croppedImageUrl ? true : false}
            >
              Crop
            </Button>
          </div>
        )}
      </Fragment>
    );
  }
}

ImageCropForm.propTypes = {
  src: PropTypes.string.isRequired,
  onCompleted: PropTypes.func.isRequired
};

export default ImageCropForm;