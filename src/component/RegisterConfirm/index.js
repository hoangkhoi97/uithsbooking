import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Loading from 'component/Loading'
import * as actions from 'actions'
class RegisterConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    componentWillMount() {
        const id = this.props.match.params.id || '';
        actions.confirmAccount(id)
        .then(this.setState({ redirect: true }))
    }
    render() {
        return (
            <div className="register-confirm" style={{ minHeight: "calc(100vh - 55px)" }}>
                {
                    this.state.redirect && <Redirect to={{ pathname: "/login" }} />
                }
                <Loading />
            </div>
        );
    }
}

export default RegisterConfirm;