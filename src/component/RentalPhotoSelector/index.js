import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageCropForm from 'component/ImageCropForm';
import { readURL, dataURItoBlob } from 'helpers/index';
// import { } from 'utilities/file';
// import { request } from 'utilities/Api';
import { Modal } from 'react-bootstrap';
import './style.css';
import axios from 'axios'
const loaderURL = 'img/loader.gif'
class RentalPhotoSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            imageForCrop: null,
            loading: false,
            imageBase64: props.image || null,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.image !== this.props.image) {
            //Perform some operation
            this.setState({ imageBase64: nextProps.image });
            // this.classMethod();
        }
    }
    handleClose = () => {
        this.setState({ isOpen: false });
    }
    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    handleSelectedFile = async (e) => {
        const files = e.target.files;
        if (files && files[0]) {
            if (!files[0].type.startsWith("image")) {
                return;
            }

            try {
                const imageDataURL = await readURL(files[0]);
                this.setState({ imageForCrop: `${imageDataURL}` });
                this.handleOpen();
            } catch (e) {
                console.log(e.message);
            }
        }
    }

    handleCompleted = async (imageUrl) => {
        this.handleClose();
        this.setState({ loading: true });

        const blob = dataURItoBlob(imageUrl);
        try {
            const formData = new FormData();
            formData.append('image', blob);
            await axios
                .post('	https://api.imgur.com/3/image', formData, {
                    headers: {
                        Authorization: 'Client-ID ' + process.env.REACT_APP_IMGUR_CLIENT_ID
                    }
                })
                .then(res => {
                    this.props.addItem({ imageUrl: res.data.data.link }, this.props.frameKey);
                    this.setState({ loading: false, imageBase64: res.data.data.link });
                })

        } catch (e) {
            console.log(e.message);
        }
    }

    // async handleUploadFile(file) {
    //     try {
    //         const image = await uploadAvatar(file);
    //         const { objectId } = await request('classes/Image', {
    //             file: { ...image, '__type': 'File' },
    //             type: 'AVATAR',
    //             name: image.name
    //         }, 'POST');
    //         return objectId || null;
    //     } catch (e) {
    //         return null;
    //     }
    // }
    removeItem = () => {
        this.setState({ imageBase64: null })
    }
    render() {

        let fileTrigger = null;
        let cornerButton = null;
        let cornerBtnAction = null;
        let background = "none";
        let avatar = null;
        let inputId = "imageUploadMyPage" + this.props.frameKey;
        if (this.state.imageBase64) {
            // remove mode
            avatar = <img className="image-avatar" src={this.state.imageBase64} />

            cornerBtnAction = this.props.removeItem;
            cornerButton = <div className="corner-btn" onClick={(cornerBtnAction)}><img onClick={() => { this.setState({ imageBase64: null }) }} src="/img/remove-upload-image.svg" /></div>;

            // background = "url('" + this.state.imageBase64 + "')";
        } else {
            // upload mode
            cornerButton = <div className="corner-btn" onClick={(cornerBtnAction)}><img src="/img/add-upload-image.svg" /></div>;
            fileTrigger = <label htmlFor={inputId}></label>;
            background = this.state.loading ? "url('" + loaderURL + "')" : 'none';
        }
        return (
            <div className={`${this.props.className} square`} style={{ backgroundImage: background }}>
                {cornerButton}
                {fileTrigger}
                {avatar}
                <input
                    type='file'
                    id={inputId}
                    accept=".png, .jpg, .jpeg"
                    onChange={e => this.handleSelectedFile(e)} />


                <Modal style={{ opacity: 1 }} backdrop='static' keyboard={false} show={this.state.isOpen} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Crop Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            {
                                this.state.imageForCrop ?
                                    <ImageCropForm
                                    freeSelect={true}
                                        onCompleted={this.handleCompleted}
                                        src={this.state.imageForCrop} />
                                    :
                                    <div></div>
                            }

                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

RentalPhotoSelector.propTypes = {
    imageId: PropTypes.any,
    imageUrl: PropTypes.string,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    frameKey: PropTypes.string
};
export default RentalPhotoSelector;