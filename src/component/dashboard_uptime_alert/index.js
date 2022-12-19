import React, { Component } from "react";
import "../../component/dashboard_uptime_alert/index.scss";
class DashboardUptimeAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="uptime-alert">
        <div className="uptime-alert-div">
          <div className="uptime-alert-wash">
            <img
              className="uptime-alert-wash-img"
              src={require("../../assets/images/uptimealert/image.png")}
              alt=""
            />
            <div className="uptime-alert-wash-one">
              <h3 className="uptime-alert-number">
                {this.props.servicealerts}
              </h3>
              <p className="uptime-alert-text">IN SERVICE</p>
            </div>
          </div>

          <div className="uptime-alert-wash">
            <img
              className="uptime-alert-wash-img"
              src={require("../../assets/images/uptime alerts/stop.png")}
              alt=""
            />
            <div className="uptime-alert-wash-one">
              <h3 className="uptime-alert-number">{this.props.stopnow}</h3>

              <p className="uptime-alert-text">STOP NOW CASE</p>
            </div>
            <img
              className="uptime-alert-button"
              src={require("../../assets/images/uptime alerts/button.png")}
              alt=""
            />
          </div>

          <div className="uptime-alert-wash">
            <img
              className="uptime-alert-wash-img"
              src={require("../../assets/images/uptimealert/Image 65.png")}
              alt=""
            />
            <div className="uptime-alert-wash-one">
              <h3 className="uptime-alert-number">{this.props.visitsoon}</h3>
              <p className="uptime-alert-text">VISIT SOON </p>
            </div>
            <img
              className="uptime-alert-button-1"
              src={require("../../assets/images/uptime alerts/button.png")}
              alt=""
            />
          </div>

          <div className="uptime-alert-wash">
            <img
              className="uptime-alert-wash-img"
              src={require("../../assets/images/uptime alerts/none.png")}
              alt=""
            />
            <div className="uptime-alert-wash-one">
              <h3 className="uptime-alert-number">{this.props.breakdown}</h3>

              <p className="uptime-alert-text">BREAKDOWN</p>
            </div>
            <img
              className="uptime-alert-button-2"
              src={require("../../assets/images/uptime alerts/button.png")}
              alt=""
            />
        
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardUptimeAlert;
