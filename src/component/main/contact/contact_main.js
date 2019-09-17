import React, {Component} from 'react';
import Map from './contact_sub/map'
import Contactmail from './contact_sub/contactmail'
import Contactifo from './contact_sub/contactinfo'
import  'scss/_box.scss'
class Contactmain extends Component {
    render() {
        return (
            <div className="bg1">
                <div className="fg">
            <div id="contact" className="container pad">
                <div className="infobox mapp">
                <Map/>
                </div>

                <div className="infobox" style={{borderRadius:0, padding:"10px", marginTop:"50px", marginBottom:"20px"}}>
                <div className="contact_content">
                    <div className="container" style={{marginBottom:"30px"}}>
                        <div className="col-lg-6">
                            <Contactmail/>
                        </div>
                        <div className="col-lg-6">
                            <Contactifo/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row-eq-height hidecontact">
                    <div className="col-lg-3 infobox" style={{borderRadius:0,marginTop:"100px", overflowX:"visible"}}>
                        <img src="/img/img_avatar.png" className="av" width="100%" alt={"none"}/>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{textAlign:"center"}}>
                            <label style={{fontSize:"17px"}}>Hiếu Nguyễn</label>
                        </div>
                    </div>
                    <div className="col-lg-3 infobox" style={{borderRadius:0,marginTop:"100px"}}>
                        <img src="/img/img_avatar2.png" className="av" width="100%" alt={"none"}/>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{textAlign:"center"}}>
                            <label style={{fontSize:"17px"}}>Khôi Đinh</label>
                        </div>
                    </div>
                    <div className="col-lg-3 infobox" style={{borderRadius:0,marginTop:"100px"}}>
                        <img src="/img/img_avatar.png" className="av" width="100%" alt={"none"}/>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{textAlign:"center"}}>
                            <label style={{fontSize:"17px"}}>Mẫn Phạm</label>
                        </div>
                    </div>
                    <div className="col-lg-3 infobox" style={{borderRadius:0,marginTop:"100px"}}>
                        <img src="/img/img_avatar2.png" className="av" width="100%" alt={"none"}/>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{textAlign:"center"}}>
                            <label style={{fontSize:"17px"}}>Nhật Nguyễn</label>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

        );
    }
}

export default Contactmain;