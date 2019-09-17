import React, {Component} from 'react';
import {  Link } from "react-router-dom";


class PlaceItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-3 sub_home02_container mg-top-15 ">
                <Link className="sub_home02_link" to={this.props.search}>
                    <img className="sub_home02_img " src={this.props.img} alt="No IMG Place Here" width="100%" />
                    <p className="sub_home_text_p">
                        <b> {this.props.title}</b>
                    </p>
                </Link>
            </div>
        );
    }
}

export default PlaceItem;