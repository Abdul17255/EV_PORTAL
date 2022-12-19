import React, { Component } from "react";

import "../../component/dashboard_vehicle_status_one/index.scss";
class DashboardVehicleStatusone extends Component {
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
            NO. OF VEHICLES IN OPERATION
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
            className="fleet-availability-img"
          />

          <p className="fleet-availability-texts">KMS OPERATED PER DAY</p>
          <h3 className="fleet-availability-number">
            {this.props.kmsperday} Kms
          </h3>
        </div>
      </div>
    );
  }
}

export default DashboardVehicleStatusone;
