import React, { Component, Fragment } from 'react';
import RentalCreateForm from './RentalCreateForm';
import { Redirect } from 'react-router-dom';
import { createRental } from './actions'
import {resetRentalState} from 'actions'
import { connect } from 'react-redux'
import './style.scss'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Create_rent extends Component {
    handleClick = (rentalData) => {
        const image = []
        const change = rentalData.image.map(i => {
            if (i !== null)
                image.push(i)
        })
        Promise.all(change).then(() => {
            if (image.length && image.length >= 3) {
                Object.assign(rentalData, { image: image })
                this.props.createRental(rentalData);
            }
            else toast.error('Hãy chọn ít nhất 3 hình')
        }
        )
    }
    componentWillUnmount(){
        console.log(this.props)
    }
    render() {
        if (this.props.rental.isCreated) {
            this.props.resetRentalState()
            return <Redirect to={{ pathname: `/rental/manage`}} />
        }
        return (
            <div>
                <div className="container">
                    <div id="create-rent" className=" text-left ">
                        <h3 className="title_h3 type1 animated fadeInLeft">Cho thuê nhà</h3>
                        <br />
                        <div className="container fea-container">
                            <div className="infobox">
                                <RentalCreateForm submitCb={this.handleClick} />
                                <ToastContainer autoClose={2000} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        rental: state.rental
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetRentalState: () => dispatch(resetRentalState()),
        createRental: (rentalData) => dispatch(createRental(rentalData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create_rent);