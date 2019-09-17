import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import "./_style_contact.scss"

class ContacPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="col-md-6">
                <Link  className="blog-entry"  to="/blogDetail">
                    <img src="img/img_blog_example/img_5.jpg" alt="Image placeholder"/>
                    <div className="blog-content-body">
                        <div className="post-meta">
                            <span className="category">Food</span>
                            <span className="mr-2">March 15, 2018 </span>
                        </div>
                        <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                </Link>
            </div>

        );

    }
}

export default ContacPage;