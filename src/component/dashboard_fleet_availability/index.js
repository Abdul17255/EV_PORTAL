import React, { Component } from "react";

import "./index.scss";
class DashboardFleetAvailability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="fleet-availability">
        <div className="moving-content">
          <img
            src={require("../../assets/images/fleet-availability/two.png")}
            alt=""
            className="fleet-availability-img"
          />
          {/* <lottie-player src="lf30_editor_ezajhit6.json" background="transparent" speed="1" style="width: 60px; height: 60px;" loop autoplay></lottie-player> */}
          <p className="fleet-availability-texts">
            NO. OF VEHICLES
            <br /> &nbsp;IN OPERATION
          </p>
          <h3 className="fleet-availability-number">
            {this.props.vehicleCount}
          </h3>
        </div>
        <hr className="perpendicular-line" />

        <div className="stopped-content">
          <img
            src={require("../../assets/images/fleet-availability/fleet.png")}
            alt=""
            className="fleet-availability-imgs"
          />

          <p className="fleet-availability-texts-1">
            {" "}
            CUMM KMS RUN
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TODAY
          </p>
          <h3 className="fleet-availability-number-1">
            {this.props.kmsperday}/7990 Kms
          </h3>
        </div>
      </div>
    );
  }
}

export default DashboardFleetAvailability;
