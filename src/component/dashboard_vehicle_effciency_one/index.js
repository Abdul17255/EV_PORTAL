import React, { Component } from "react";

import "../../component/dashboard_vehicle_effciency_one/index.scss";
class DashboardVehicleEffciencyOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="vehicle-effciency-one">
        <div className="vehicle-effciency-content">
          <img
            src={require("../../assets/images/vehicle-eff/bus.png")}
            alt=""
            className="bus-img"
          />
          {/* <lottie-player src="lf30_editor_ezajhit6.json" background="transparent" speed="1" style="width: 60px; height: 60px;" loop autoplay></lottie-player> */}

          <h3 className="vehicle-effciency-content-number">
            {this.props.powerconsumedbyveh}
          </h3>
        </div>
        <p className="vehicle-effciency-content-texts">
          POWER CONSUMPTION BY
          <br /> VEHICLE (KWH/KM)
        </p>
      </div>
    );
  }
}

export default DashboardVehicleEffciencyOne;
