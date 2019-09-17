import React, {Component} from 'react';

import './style.scss';



class Footer extends Component {

    render() {


        return (
            <div className="">
                <footer className="footer">
                    <div className="container text-left footer-container ">
                            <a className="na-brand2" href="#"><img src="/img/index_icon_footer.png" width="10%" alt={"footerIMG"}/></a>
                            <div className="mg-top-20">
                                <p>562 Nguyễn Thị Diệu, Phường 6
                                    <br className="mg-top-10"/>
                                Quận 3 , HCM, Vietnam </p>
                                <p className="footer-contact">
                                    <span className="pd-left-right-10 bor-right">(+84)8 3056 2877 </span>
                                    <a className="pd-left-right-10 bor-right" href="#"> contact@uithsbooking </a>
                                    <a className="pd-left-right-10" href="#"> hsbooking.netlify.com</a>
                                </p>
                            </div>
                            <div className="effect mg-bot-20">
                                <div className="buttons">
                                    <a href="#" className="fb" title="Join us on Facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"/></a>
                                    <a href="#" className="tw" title="Go home">
                                        <i className="fa fa-home " aria-hidden="true"/></a>
                                    <a href="#" className="g-plus" title="Join us on Twitter+">
                                        <i className="fa fa-twitter" aria-hidden="true"/></a>
                                </div>
                            </div>

                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;