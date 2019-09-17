import React, {Component} from 'react';

class Contactinfo extends Component {
    render() {
        return (
                <div className="removepad">
                    <div className="contact_sidebar">
                        {/* Contact Info */}
                        <div className="sidebar_section">
                            <div className="sidebar_contact_info">
                                <h3>Về chúng tôi</h3>
                                <br />
                                <div className="about">
                                <p style={{paddingBottom:"7px"}}><i className="fa fa-map-marker"/>    562 Nguyễn Thị Diệu, Phường 6,
                                        <br />Quận 3 , HCM, Vietnam</p>
                                <p style={{paddingBottom:"7px"}}><i className="fa fa-phone"/>    (+84)8 3056 2877</p>
                                <p style={{paddingBottom:"7px"}}><i className="fa fa-envelope"/>    contact@uithsbooking</p>
                                <p style={{paddingBottom:"7px"}}><i className="fa fa-globe"/>    hsbooking.netlify.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
        );
    }
}

export default Contactinfo;