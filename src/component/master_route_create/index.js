import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../master_route_create/index.scss";
import routeMasterApiActions from "../../redux/master_route/actions";

const { createRouteMasterAPI } = routeMasterApiActions;

class RouteMasterCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageType: 0,
      route_name: "",
      start_location: "",
      end_location: "",
      distance: "",
      no_of_stops: "",
      estimated_trips: "",
      start_latitude: "",
      start_longitude: "",
      end_latitude: "",
      end_longitude: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      route_name,
      start_location,
      end_location,
      distance,
      no_of_stops,
      estimated_trips,
      start_latitude,
      start_longitude,
      end_latitude,
      end_longitude,
    } = this.state;

    const payload = {
      user_id: "1",
      endLatitude: end_latitude,
      endLocation: end_location,
      endLongitude: end_longitude,
      estimatedTrips: estimated_trips,
      numOfStops: no_of_stops,
      routeName: route_name,
      startLatitude: start_latitude,
      startLocation: start_location,
      startLongitude: start_longitude,
      distance: distance,
    };
    this.props.createRouteMasterAPI(payload);
    this.resetButtonClick();
  };

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
    const array = [];
    array.push(this.state);
  };

  resetButtonClick = () => {
    this.setState({
      route_name: "",
      start_location: "",
      end_location: "",
      distance: "",
      no_of_stops: "",
      estimated_trips: "",
      start_latitude: "",
      start_longitude: "",
      end_latitude: "",
      end_longitude: "",
    });
  };

  render() {
    return (
      <div className="Route-creation-master">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="formwidth">
            <div className="col_50">
              <div className="col_100">
                <label>
                  Route Name:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="Route Name"
                  name="route_name"
                  value={this.state.route_name}
                  onChange={this.handleChange}
                  style={{ textTransform: "uppercase" }}
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div className="col_50">
              <div className="col_100">
                <label>
                  Start Location:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="Start Location"
                  name="start_location"
                  value={this.state.start_location}
                  onChange={this.handleChange}
                  style={{ textTransform: "uppercase" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="formwidth">
            <div className="col_50">
              <div className="col_100">
                <label>
                  End Location:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="End Location"
                  name="end_location"
                  value={this.state.end_location}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div class="col_50">
              <div className="col_100">
                <label>
                  Distance:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder=""
                  name="distance"
                  value={this.state.distance}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  No of Stops:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder=""
                  name="no_of_stops"
                  value={this.state.no_of_stops}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Estimated Trips:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder=""
                  name="estimated_trips"
                  value={this.state.estimated_trips}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Start Latitude:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder=""
                  name="start_latitude"
                  value={this.state.start_latitude}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Start Longitude:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder=""
                  name="start_longitude"
                  value={this.state.start_longitude}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  End Latitude:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder=""
                  name="end_latitude"
                  value={this.state.end_latitude}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  End Longitude:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder=""
                  name="end_longitude"
                  value={this.state.end_longitude}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <input type="reset" onClick={this.resetButtonClick} value="Reset" />
          <input type="submit" value="Submit" />
        </form>
        <p>(The * marked fields are mandatory) </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { createRouteMasterAPI })(
  withRouter(RouteMasterCreate)
);
