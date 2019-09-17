import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import RentalCreateForm from 'component/main/rental/rental-create/RentalCreateForm';
import { Redirect } from 'react-router-dom';
import * as actions from 'actions';
import { editRental } from './actions'
import { connect } from 'react-redux'
import './style.scss'

// import {rentalCreateForm} from './RentalCreateForm'
class RentalEdit extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            redirect: false,
            images: [],
            rental: {}
        }

    }
    handleClick = (rentalData) => {
        if (rentalData != this.props.rental) {
            const image = []
            const change = rentalData.image.map(i => {
                if (i !== null)
                    image.push(i)
            })
            Promise.all(change).then(() => {
                Object.assign(rentalData, { image: image })
                this.props.editRental(rentalData, this.props.location.state.rental._id);
            })
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.location.state)
        {
            const rental = this.props.location.state.rental
            this.setState({rental});
        }
    }
    render() {
        if (!this.props.location.state || this.props.rental.isUpdated) {
            const id = this.props.location.pathname.split('/edit/')[1]
            // this.props.dispatch(actions.resetRentalState())
            return <Redirect to={{ pathname: `/detail/${id}`, state: { editted: true } }} />
        }
        const rental = this.state.rental
        if (this.state.redirect) {
            return <Redirect to={{ pathname: '/rental/manage', state: { editted: true } }} />
        }
        return (
            <div>
                <div className="container">
                    <div id="create-rent" className=" text-left ">
                        <h3 className="title_h3 type1 animated fadeInLeft">Cho thuê nhà</h3>
                        <br />
                        <div className="container fea-container">
                            <div className="infobox">
                                <RentalCreateForm initialValues={rental} submitCb={this.handleClick} />
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
        editRental: (rentalData, rentalId) => dispatch(editRental(rentalData, rentalId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RentalEdit);