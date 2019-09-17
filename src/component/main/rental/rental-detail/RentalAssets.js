import React from 'react';
import _ from 'lodash';
function renderTv(isTv) {
  if (isTv)
    return (<React.Fragment><div className="block"><i className="fa fa-tv"> TV</i></div></React.Fragment>);
}
function renderWifi(isWifi) {
  if (isWifi)
    return (<React.Fragment><div className="block"><i className="fa fa-wifi"> Wifi</i></div></React.Fragment>);
}
function renderConditioner(isConditioner) {
  if (isConditioner)
    return (<React.Fragment><div className="block"><i className="fa fa-asterisk"> Máy điều hòa</i></div></React.Fragment>);
}
function renderWashing(isWashing) {
  if (isWashing)
    return (<React.Fragment><div className="block"><i className="fa fa-cube"> Máy giặt</i></div></React.Fragment>);
}
function renderElevator(isElevator) {
  if (isElevator)
    return (<React.Fragment><div className="block"><i className="fa fa-angle-up"> Thang máy</i></div></React.Fragment>);
}
function renderFridge(isFridge) {
  if (isFridge)
    return (<React.Fragment><div className="block"><i className="fa fa-cube"> Tủ lạnh</i></div></React.Fragment>);
}
export function RentalAssets(props) {
  if(!_.isEmpty(props.rental)){
  return (
    <div>
      {renderTv(props.rental.isTv)}
      {renderWifi(props.rental.isWifi)}
      {renderConditioner(props.rental.isConditioner)}
      {renderWashing(props.rental.isWashing)}
      {renderFridge(props.rental.isFridge)}
      {renderElevator(props.rental.isElevator)}
    </div>
  )}
  else return <div></div>
}
