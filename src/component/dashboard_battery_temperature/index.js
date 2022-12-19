import React, { Component } from "react";
import "../../component/dashboard_battery_temperature/index.scss";
class DashboardBatteryTemperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const response = this.props.temperaturedata;
    let datas1 = response[0].text;
    let datas2 = response[1].text;
    let datas3 = response[2].text;
    let datas4 = response[3].text;
    return (
      <div className="dashboard-battery-temp">
        <div className="battery-temp-1">
          <div className="battery-temp-content">
            <img
              src={
                require("../../assets/Icon awesome-thermometer-empty-green - blue.svg")
                  .default
              }
              alt="home"
              // className="home-svg"
            />
            <p className="battery-temp-content-number">{datas1}</p>
          </div>
          <div>
            <p className="battery-temp-content-text-dashboard">0-15 °C</p>
          </div>
        </div>
        <div className="battery-temp-2">
          <div className="battery-temp-content">
            <img
              src={
                require("../../assets/Icon awesome-thermometer-empty-green.svg")
                  .default
              }
              alt="home"
              // className="home-svg"
            />
            <p className="battery-temp-content-number">{datas2}</p>
          </div>

          <div>
            <p className="battery-temp-content-text-dashboard">16-30 °C</p>
          </div>
        </div>
        <div className="battery-temp-3">
          <div className="battery-temp-content">
            <img
              src={
                require("../../assets/Icon awesome-thermometer-empty - yellow.svg")
                  .default
              }
              alt="home"
              // className="home-svg"
            />
            <p className="battery-temp-content-number">{datas3}</p>
          </div>
          <div>
            <p className="battery-temp-content-text-dashboard">31-45 °C</p>
          </div>
        </div>

        <div className="battery-temp-4">
          <div className="battery-temp-content">
            <img
              src={
                require("../../assets/Icon awesome-thermometer-empty-green - red.svg")
                  .default
              }
              alt="home"
              // className="home-svg"
            />
            <p className="battery-temp-content-number">{datas4}</p>
          </div>
          <div>
            <p className="battery-temp-content-text-dashboard">46-75 °C</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardBatteryTemperature;
