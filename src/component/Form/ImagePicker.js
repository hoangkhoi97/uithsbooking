import React, { Component } from 'react';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'

class Imagepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }
    onPick = (image) => {
        this.props.action();
        this.setState({ image},(()=>{this.props.input.onChange(this.state.image)}))
    }
    render() {
        const imageList = this.props.imageList || []
        return (
            <ImagePicker
                images={imageList.map((image, i) => ({ src: image, value: i }))}
                onPick={this.onPick}
            />
        );
    }
}

export default Imagepicker;