// import React, { Component } from 'react';
// import authService from '../../../services/auth-service';
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import Dropzone from 'react-dropzone'
// import * as actions from 'actions';


// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.onImageDrop = this.onImageDrop.bind(this);
//         this.upload = this.upload.bind(this);
//         this.state = {
//             imageFiles: [],
//             imgSrc: '',
//             isChange: false
//         }
//     }

//     componentWillMount() {
//         const userId = authService.getId();
//         this.props.dispatch(actions.fetchUserById(userId));
//     }

//     onImageDrop(selectedFile) {
//         this.setState({
//             imageFiles: selectedFile[0],
//             isChange : true
//         })
//         const myFilereader = new FileReader();
//         myFilereader.addEventListener("load", () => {
//             this.setState({
//                 imgSrc: myFilereader.result
//             })
//         }, false)
//         myFilereader.readAsDataURL(this.state.imageFiles);
//     }
//     upload() {
//         const file = this.state.imageFiles;
//         actions.uploadAvatar(file);
//     }
//     render() {
//         const users = this.props.users.data;
//         const {isChange} = this.state;
//         return (
//             <div>
//                 <div className="container-fluid" style={{ marginTop: "20px" }}>
//                     <div className="row row-eq-height">
//                         <div className="col-lg-4 border userbox slide-in-left">
//                             <div className="centered" style={{ marginTop: "20px" }}>
//                                 <Dropzone onDrop={this.onImageDrop}>
//                                     {({ getRootProps, getInputProps }) => {
//                                         return (
//                                             <section>
//                                                 <div {...getRootProps()} className="centered" style={{ width:"150px"}}>
//                                                     <input {...getInputProps()} />
//                                                     {this.state.imgSrc.length > 0 ? <img className="image" src={this.state.imgSrc} />
//                                                         : <img src={users.image} className="image" />}
//                                                 </div>
//                                             </section>
//                                         )
//                                     }}
//                                 </Dropzone>
//                                 {
//                                     isChange &&
//                                     <button onClick={this.upload}>Upload</button>
//                                 }
//                                 <div className="middle">
//                                     <div>
//                                         <input type="file" className="btn btn-primary" />
//                                         <i className="fa fa-camera" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="container-fluid">
//                                 <h3 style={{ textAlign: "center" }}>{users.username}</h3>
//                             </div>
//                         </div>
//                         <div className="col-lg-8 userbox slide-in-right">
//                             <div>
//                                 <div className="container-fluid">
//                                     <div className="form-group">
//                                         <label>Email:</label>
//                                         <p>{users.email}</p>
//                                     </div>
//                                     <button type="submit" className="btn btn-primary" style={{ float: "left" }}><Link to="/new_pass" style={{ color: "white" }}>Sửa mật khẩu</Link></button>
//                                 </div>
//                                 <hr />
//                                 <div className="container-fluid">
//                                     <div className="form-group">
//                                         <label>Họ tên:</label>
//                                         <p>{users.fullname}</p>
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Số điện thoại:</label>
//                                         <p>{users.phone}</p>
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Số lượng nhà đã đăng:</label>
//                                         <p>7</p>
//                                     </div>
//                                     <button type="submit" className="btn btn-primary" style={{ float: "left" }}>ABC</button>
//                                     <button type="submit" className="btn btn-primary" style={{ float: "right" }}>Sửa thông tin</button>
//                                 </div>
//                                 <br />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         users: state.users
//     }
// }
// export default connect(mapStateToProps)(User);