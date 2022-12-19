import React, { Component } from "react";
import "../../component/dashboard_vehicle_status/index.scss";
import Lottie from "lottie-react"
import animationData from "../../assets/lotties/moving_lotties_player.json";
import animation from "../../assets/lotties/stopped_lotties_player_1.json";

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: animationData,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   }
// };
class DashboardVehicleStatus extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="table-content">
        <div className="moving-content">
          {/* <img
            src={require("../../assets/images/vehiclestatuss/vehiclestatus/moving.png")}
            alt=""
            className="content-img"
          /> */}

<Lottie className="lotty-1"
	   animationData={animationData}
     height="10px"
     width="10px"
      />
          {/* <lottie-player src="lf30_editor_ezajhit6.json" background="transparent" speed="1" style="width: 60px; height: 60px;" loop autoplay></lottie-player> */}
          <p className="contents-texts">MOVING</p>
          <h3 className="content-number">{this.props.running}</h3>
        </div>

        <div className="stopped-content">
          {/* <img
            src={require("../../assets/images/vehiclestatuss/stopped/stopped.png")}
            alt=""
            className="content-img"
          /> */}

<Lottie className="lotty"
	   animationData={animation}
     height="10px"
     width="10px"
      />
          <p className="contents-texts">STOPPED</p>
          <h3 className="content-number">{this.props.stopped}</h3>
        </div>

        <div className="notreachable">
          <img
            src={require("../../assets/images/notreachable/reach.png")}
            alt=""
            className="contents-img"
          />

          <p className="contents-texts-1">NOT REACHABLE</p>
          <h3 className="content-number-1">{this.props.notreachable}</h3>
        </div>
      </div>
    );
  }
}

export default DashboardVehicleStatus;
