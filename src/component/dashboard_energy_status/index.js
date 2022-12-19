import React, { Component } from "react";
import "../../component/dashboard_energy_status/index.scss";

class DashboardEnergyStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="charger-status">
        <div className="charger-status-div">
          <div className="charger-status-available">
            <div className="number-pulse">
              <div className="pulsatingDotone" />
              <h3 className="charger-available-number">
                {this.props.acconsumption}
                <span className="energy-status-unit"> KWH</span>
              </h3>
            </div>
            <p className="textss">AC CONSUMPTION</p>
          </div>

          <div className="charger-status-occupied">
            <div className="number-pulse">
              <div className="pulsatingDottwo" />
              <h3 className="charger-occupied-number">
                {this.props.dcconsumption}
                <span> KWH</span>
              </h3>
            </div>
            <p className="textss">
              DC CONSUMPTION
              <br />
              &nbsp;&nbsp; BY CHARGER
            </p>
          </div>

          <div className="charger-status-breakdown">
            <div className="number-pulse">
              <div className="pulsatingDotthree" />

              <h3 className="charger-breakdown-number">
                {this.props.powerdrawn}
                <span> KWH</span>
              </h3>
            </div>
            <p className="textss">
              POWER DRAWN BY
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VEHICLE
            </p>
          </div>
        </div>

        <div className="charger-status-div-two">
          <div className="charger-status-efficiency">
            <div className="number-pulse">
              <div className="pulsatingDotfour" />
              <h3 className="charger-efficiency-number">
                {this.props.acdcconversion}
                <span> %</span>
              </h3>
            </div>
            <p className="textss">
              AC-DC CONVERSION
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (CHARGER)
            </p>
          </div>

          <div className="charger-status-opportunity">
            <div className="number-pulse">
              <div className="pulsatingDotfour" />
              <h3 className="charger-opportunity-number">
                {this.props.dcdcconversion}
                <span> %</span>
              </h3>
            </div>
            <p className="textss">
              DC-DC POWER
              <br />
              &nbsp;CONVERSION
            </p>
          </div>

          <div className="energy-status-ac-to-dc">
            <div className="number-pulse">
              <div className="pulsatingDotfour" />
              <h3 className="charger-opportunity-number">
                {this.props.actodcinput}
                <span> %</span>
              </h3>
            </div>
            <p className="textss">
              AC INPUT TO DC <br />
              &nbsp;&nbsp; VEH BATTERY
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardEnergyStatus;
