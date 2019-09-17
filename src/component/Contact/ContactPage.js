import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import "./_style_contact.scss"

class BlogItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container list-rentals-container">
                <h3 className="text-left title_h3 type1 animated fadeInLeft mg-top-20">Liên hệ</h3>
                    <div className="contact">
                        <h2>About Us</h2>
                        <div className="row">
                            <div className="col-md-4">
                                Địa chỉ
                            </div>
                            <div className="col-md-4">
                                 SDT
                            </div>
                            <div className="col-md-4">
                                Mail
                            </div>
                        </div>

                        {/*Form*/}

                        <h2>My team</h2>
                        <div className="row">
                            <div className="col-md-3">
                                Anh A
                            </div>
                            <div className="col-md-3">
                                Anh B
                            </div>
                            <div className="col-md-3">
                                Anh C
                            </div>
                            <div className="col-md-3">
                                Anh D
                            </div>
                        </div>

                    </div>
            </div>

        );

    }
}

export default BlogItem;