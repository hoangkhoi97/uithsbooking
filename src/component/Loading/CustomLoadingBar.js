import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loading from 'component/Loading';
import PropTypes from 'prop-types';

class LoadingBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.show.default) {
      return (<Loading></Loading>);
    }
    return (
      <Fragment/>
    );
  }
}

LoadingBar.defaultProps = {
  show: {}
};

LoadingBar.propTypes = {
  show: PropTypes.any
};

const mapStateToProps = (state) => ({
  show: state.loadingBar
});

export default connect(
  mapStateToProps,
  null
)(LoadingBar);