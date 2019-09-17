import React from 'react';
import './style.scss';

export default (props) => {
  if (props.error) {
    return <div>Error! </div>;
  } else {
    return (
      <div className="loader-container">
        <div className="loadersmall"></div>
      </div>
    );
  }
};
