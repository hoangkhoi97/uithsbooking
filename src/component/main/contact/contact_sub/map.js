import React, { Component } from 'react';

class Map extends Component {
	render() {
		return (

					<div className="col">
						<div id="google_map">
							<div className="map_container" style={{ height: "300px" }}>
								<div id="map">
									<div style={{ width: '100%' }}><iframe width="100%" className="h" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Dai%20Hoc%20Cong%20Nghe%20Thong%20Tin%20Ho%20Chi%20Minh+(My%20Business%20Name)&ie=UTF8&t=&z=15&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>&lt;a href="https://www.maps.ie/create-google-map/"&gt;Google Maps iframe generator&lt;/a&gt;</iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
		);
	}
}

export default Map;