import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
  Button,
  closeButton,
} from "react-bootstrap";
import moment from "moment";
import DatePicker from "react-datepicker";

import "../master_route_popup/index.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router";
//import * as User from "../../shared/app-data/user";
import DateTimePicker from "react-datepicker";

import routeMasterApiActions from "../../redux/master_route/actions";

const { updateRouteMasterAPI } = routeMasterApiActions;

class RouteMasterPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      editingfields: "",
      message: "",
      messageType: 0,
      date: new Date(),
      routeName: "",
      startLocation: "",
      endLocation: "",
      distance: "",
      numOfStops: "",
      estimatedTrips: "",
      startLatitude: "",
      startLongitude: "",
      endLatitude: "",
      endLongitude: "",
    };
  }

  componentDidMount() {
    this.setState({
      show: this.props.show,
      editingfields: this.props.data,
    });
  }

  handleClose = () => {
    this.setState({ show: true });
  };

  handleChange = (evt) => {
    const value = evt.target.value;

    const name = evt.target.name;

    this.setState((prevState) => ({
      editingfields: {
        // object that we want to update
        ...prevState.editingfields, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
    // this.props.updateRouteMasterAPI();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      routeName,
      startLocation,
      endLocation,
      distance,
      numOfStops,
      estimatedTrips,
      startLatitude,
      startLongitude,
      endLatitude,
      endLongitude,
      routeId,
    } = this.state.editingfields;
    // console.log("reg typed", regNo);
    const payload = {
      routeName,
      startLocation,
      endLocation,
      distance,
      numOfStops,
      estimatedTrips,
      startLatitude,
      startLongitude,
      endLatitude,
      endLongitude,
      routeId,
    };
    this.props.updateRouteMasterAPI(payload);
  };

  render() {
    let val = this.state.editingfields.reg_no;
    // console.log("searching", this.state.editingfields);
    return (
      <div className="route-master-popup-update">
        <Modal
          // style={{
          //   height: "900px",
          //   minHeight: "500px",
          // }}
          show={this.state.show}
          size="xl"
          aria-labelledby="example-modal-sizes-title-xl"
          centered
          onHide={this.props.closemodal}
        >
          <Modal.Header closeButton style={{ borderBottom: "none" }}>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <form
            className="vehicle-route-update"
            autocomplete="off"
            onSubmit={this.handleSubmit}
          >
            <Modal.Body
              style={{
                "max-height": "calc(100vh - 210px)",

                //"overflow-y": "auto",
              }}
            >
              {/* <div className="tripid">
                <span>Trip ID : {this.state.editingfields["schedule_id"]}</span>
                <span>Route No : {this.state.editingfields["route_id"]}</span>
                <span>
                  Start Time : {this.state.editingfields["start_time"]}
                </span>
              </div> */}
              <div className="formwidth">
                <div className="col_50">
                  <div className="col_100">
                    <label>Route Name</label>
                    <span style={{ color: "red", marginLeft: "-80px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Route Name:"
                      name="routeName"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.routeName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Start Location</label>
                    <span style={{ color: "red", marginLeft: "-70px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Start Location:"
                      name="startLocation"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.startLocation}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>End Loaction</label>
                    <span style={{ color: "red", marginLeft: "-80px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="End Loaction:"
                      name="endLocation"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.endLocation}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Route ID</label>
                    <span style={{ color: "red", marginLeft: "-20px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="ID:"
                      name="routeId"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.routeId}
                      onChange={this.handleChange}
                      disabled="true"
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Distance</label>
                    <span style={{ color: "red", marginLeft: "-110px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Distance:"
                      name="distance"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.distance}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>No Of Stops</label>
                    <span style={{ color: "red", marginLeft: "-90px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="No Of Stops"
                      name="numOfStops"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.numOfStops}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Estimated Trips</label>
                    <span style={{ color: "red", marginLeft: "-60px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Estimated Trips"
                      name="estimatedTrips"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.estimatedTrips}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Start Latitude</label>
                    <span style={{ color: "red", marginLeft: "-70px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Start Latitude:"
                      name="startLatitude"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.startLatitude}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col_50">
                  <div className="col_100">
                    <label>Start Longitude:</label>
                    <span style={{ color: "red", marginLeft: "-50px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Start Longitude:"
                      name="startLongitude"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.startLongitude}
                      onChange={this.handleChange}
                      endLongitude
                      endLatitude
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>End Longitude:</label>
                    <span style={{ color: "red", marginLeft: "-50px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="End Longitude:"
                      name="endLongitude"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.endLongitude}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>End Latitude:</label>
                    <span style={{ color: "red", marginLeft: "-50px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="End Latitude:"
                      name="endLatitude"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.endLatitude}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <input
                className="button-route-master"
                type="submit"
                value="Update"
              />
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { updateRouteMasterAPI })(
  withRouter(RouteMasterPopup)
);
