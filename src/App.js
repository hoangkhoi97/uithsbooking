import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';

import Header from './component/header/header';
import Footer from './component/footer/footer';
import Router from "./component/main/route";

import "../node_modules/slick-carousel/slick/slick.css"
import "../node_modules/slick-carousel/slick/slick-theme.css"
import * as actions from 'actions';

const store = require('./reducers').init();
class App extends Component {
  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(actions.checkAuthState());
  }
  logout() {
    store.dispatch(actions.logout());
    store.dispatch(actions.resetUserState());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header logout={this.logout} />
            <Router />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
