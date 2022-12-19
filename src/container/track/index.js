import React, { Component } from "react";
import Map from "../map/index";
import Summary from "../summary";
import "../track/index.scss";

import SubMenuHeader from "../sub_menu_header/index";
import MapActionTwo from "../../component/mapactiontwo";
import MapactionOne from "../../component/mapactionone";
class Track extends Component {
  constructor() {
    super();
    this.state = {
      toggleValue: false,
      toggle: false,
    };
    // this.onToggle = this.onToggle.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.gotoLiveTracking = this.gotoLiveTracking.bind(this);
  }

  toggleState() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  gotoLiveTracking() {
    let tabItem = {
      tabIndex: 8,
      tabName: "LiveTripTracking",
    };
    this.props.selectedTab(null, tabItem);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 w-45  mt-3 ms-5 gx-0 bg-body rounded">
            <div className="mapactionone-head">Vehicle Status</div>
            <div className="mapactionone-body">
              <MapactionOne />
            </div>
          </div>

          <div className="col-lg-6 w-45 mt-3 ms-5 gx-0  bg-body rounded">
            <div className="mapactionone-head">Charger Status</div>
            <div className="mapactionone-body">
              <MapActionTwo />

              <div className="switch-field">
                <input
                  type="radio"
                  id="switch_left"
                  name="switchToggle"
                  value={this.props.leftLabel}
                  onChange={this.toggleState}
                  checked={!this.state.toggle}
                />
                <label htmlFor="switch_left">
                  {" "}
                  {/* <img
                    src={require("../../assets/images/summary/summary.png")}
                    className="switch-img-1"
                    alt=""
                  /> */}
                  Map
                </label>

                <input
                  type="radio"
                  id="switch_right"
                  name="switchToggle"
                  value={this.props.rightLabel}
                  onChange={this.toggleState}
                  checked={this.state.toggle}
                />
                <label htmlFor="switch_right">
                  {" "}
                  {/* <img
                    src={require("../../assets/images/summary/summary.png")}
                    className="switch-img"
                    alt=""
                  /> */}
                  Summary
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="track-hr">
          <hr />
        </div>
        <div className="map-view">
          {this.state.toggle == true ? (
            <Summary />
          ) : (
            <Map navToLiveTripTracking={this.gotoLiveTracking} />
          )}
        </div>
      </div>
    );
  }
}

export default Track;
