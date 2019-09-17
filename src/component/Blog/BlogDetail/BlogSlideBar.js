import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import ".././_style_blog.scss"

class BlogSlideBar extends Component {
    render() {
        return (
            <div className="col-md-12 col-lg-4 sidebar">
                <div className="sidebar-box">
                    <div className="bio text-center">
                        <img src="/img/index-icon.png" alt="Image Placeholder" className="img-fluid"/>
                        <div className="bio-body">
                            <h2>UITHSBOOKING</h2>
                            <p>Xin cám ơn quý khách
                                <br/>
                                Hãy follow trang chúng tôi ngay để nhận được những tin tức mới nhất! </p>
                            <p><a href="#" className="btn btn-primary btn-sm">Nhớ liên hệ nhé!</a></p>
                            <p className="social">
                                <a href="#" className="p-2"><span className="fa fa-facebook"/></a>
                                <a href="#" className="p-2"><span className="fa fa-twitter"/></a>
                                <a href="#" className="p-2"><span className="fa fa-instagram"/></a>
                                <a href="#" className="p-2"><span className="fa fa-youtube-play"/></a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sidebar-box">
                    <h3 className="heading">Bài viết được nhiều người quan tâm</h3>
                    <div className="post-entry-sidebar">
                        <ul>
                            <li>
                                <a href="">
                                    <img src=".././img/img_blog_example/img_2.jpg" alt="Image placeholder" className="mr-4"/>
                                    <div className="text">
                                        <h4>Ngắm hoàng hôn cùng nhau để trải nghiệm cảm giác bất tận.</h4>
                                        <div className="post-meta">
                                            <span className="mr-2">10/5/2019 </span>
                                            <span> • </span>
                                            <span className="ml-2"><span className="fa fa-eye"/> 99</span>

                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src=".././img/img_blog_example/img_4.jpg" alt="Image placeholder" className="mr-4"/>
                                    <div className="text">
                                        <h4>Căn hộ nào thích hợp cho cặp đôi thuở mới hẹn hò.</h4>
                                        <div className="post-meta">
                                            <span className="mr-2">8/5/2019 </span>
                                            <span> • </span>
                                            <span className="ml-2"><span className="fa fa-eye"/> 88</span>

                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src=".././img/img_blog_example/img_12.jpg" alt="Image placeholder" className="mr-4"/>
                                    <div className="text">
                                        <h4>Bí quyết chọn nhà thuê phù hợp cho hội chị em.</h4>
                                        <div className="post-meta">
                                            <span className="mr-2">1/6/2019 </span>
                                            <span> • </span>
                                            <span className="ml-2"><span className="fa fa-eye"/> 69</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="sidebar-box">
                    <h3 className="heading">Danh mục</h3>
                    <ul className="categories">
                        <li><a href="#">Nhà ở <span>(12)</span></a></li>
                        <li><a href="#">Tin tức <span>(22)</span></a></li>
                        <li><a href="#">Mẹo <span>(37)</span></a></li>
                        <li><a href="#">View đẹp <span>(42)</span></a></li>
                        <li><a href="#">Hướng dẫn <span>(14)</span></a></li>
                    </ul>
                </div>


                <div className="sidebar-box">
                    <h3 className="heading">Tags</h3>
                    <ul className="tags">
                        <li><a href="#">Du lịch</a></li>
                        <li><a href="#">Khám phá</a></li>
                        <li><a href="#">Ẩm thực</a></li>
                        <li><a href="#">Đời sống</a></li>
                        <li><a href="#">Bận rộn</a></li>
                        <li><a href="#">Tự do</a></li>
                        <li><a href="#">Điểm đến</a></li>
                        <li><a href="#">Thú vị</a></li>
                        <li><a href="#">Tri thức</a></li>
                        <li><a href="#">Thiên nhiên</a></li>
                        <li><a href="#">Con người</a></li>
                        <li><a href="#">Thực vật</a></li>
                    </ul>
                </div>
            </div>
        );

    }
}

export default BlogSlideBar;