import React, { Component } from 'react';
import RentalList from './rentalList'
import PlaceItem from './placeItem'
import { Link } from "react-router-dom";
import Search from 'component/main/search'
import { connect } from 'react-redux'
import authService from 'services/auth-service';
import * as actions from 'actions'
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick/lib";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            key: null
        }
    }
    componentDidMount(){
        if(localStorage.getItem('auth_token')!==null && _.isEmpty(this.props.users.data)&& authService.isValid(authService.getToken()))
            this.props.fetchUserById(authService.getId())
    }
    render() {
        const data = [
        //     {
        //     title: "Gợi ý rentals",
        //     array: this.props.rentals.data || []
        // },
        {
            title: "Lịch sử tìm kiếm",
            array: (this.props.users.data && this.props.users.data.searchHistory) || []
        }]
        return (
            <div>
                <main>
                    <ToastContainer/>
                    <div id="home" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators home-dot">
                            <li data-target="#home" data-slide-to="0" className="active" />
                            <li data-target="#home" data-slide-to="1" />
                            <li data-target="#home" data-slide-to="2" />
                        </ol>

                        <div className="carousel-inner text-center home-inner" role="listbox">
                            <div className="item active">
                                <img src="img/img_home/index_slide/1.png" alt="Brandi Img 1" width="100%" />
                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/2.png" alt="Brandi Img 2" width="100%" />

                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/3.png" alt="Brandi Img 3" width="100%" />
                            </div>
                        </div>
                        {/*<Search data={data} />*/}
                    </div>

                    <RentalList />

                    <div id="sub_home02" className="container-fluid mg-top-40Responsive">
                        <h4 className="text-left title_h3 animated fadeInLeft">Điểm đến hàng đầu</h4>
                        <div className="sub_home02_list">
                            <PlaceItem search="search?key=ha noi" title="Hà Nội" img="../img/img_home/index_region/Ha_noi.png" />

                            <PlaceItem search="search?key=da lat" title="Đà Lạt" img="../img/img_home/index_region/Da_lat.png" />

                            <PlaceItem search="search?key=nha trang" title="Nha Trang" img="../img/img_home/index_region/Nha_trang.png" />

                            <PlaceItem search="search?key=ho chi minh" title="TP.Hồ Chí Minh" img="../img/img_home/index_region/TPHCM.png" />

                            <PlaceItem search="search?key=hoa binh" title="Hòa Bình" img="../img/img_home/index_region/Hoa_Binh.png" />

                            <PlaceItem search="search?key=ha long" title="Hạ Long" img="../img/img_home/index_region/Ha_long.png" />

                            <PlaceItem search="search?key=da nang" title="Đà Nẵng" img="../img/img_home/index_region/Da_Nang.png" />

                            <PlaceItem search="search?key=vung tau" title="Vũng Tàu" img="../img/img_home/index_region/Vung_tau.png" />

                        </div>
                    </div>

                    <div id="home_event" className="mg-top-80 mg-bot-20" >
                         <div className="container-fluid text-center">
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_1.png" alt="Brandi Img 2" width="100%" />
                                </div>
                                <p><b>Lần đầu tiên tại Việt Nam</b></p>
                                <p>Ứng dụng cho thuê chỗ ở chuyên nghiệp, đặt phòng tin cậy cho Homestay cao cấp, căn hộ dịch vụ và biệt thự nghỉ dưỡng.</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_2.png" alt="Brandi Img 2" width="100%" />
                                </div>
                                <p><b>Sống như người bản địa</b></p>
                                <p>Trải nghiệm không gian bản địa để chuyến du lịch có nhiều màu sắc. Chúng tôi mang đến những trải nghiệm hoàn toàn mới nhưng vẫn đảm bảo sự tiện lợi và riêng tư tuyệt đối.</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_3.png" alt="Brandi Img 2" width="100%" />
                                </div>
                                <p><b>Mỗi căn hộ một cá tính riêng</b></p>
                                <p>Từ những căn hộ hiện đại, biệt thự biệt lập cho đến những ngôi nhà truyền thống, chúng tôi không ngừng mở rộng danh sách để đem đến sự lựa chọn đa dạng cho khách hàng.</p>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserById: (id) => dispatch(actions.fetchUserById(id))
    }
}
const mapStateToProps = (state) => {
    return {
        rentals: state.rentals,
        users : state.users
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);