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

import "../master_vehicle_popup/index.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router";
//import * as User from "../../shared/app-data/user";
import DateTimePicker from "react-datepicker";

import vehicleTripActions from "../../redux/master_vehicle/actions";

const { updateVehicleMasterAPI } = vehicleTripActions;

class VehicleMasterPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      popData: "",
      // message: "",
      messageType: 0,
      date: new Date(),
      regNo: "",
      vin: "",
      batteryCapacity: "",
      deviceId: "",
      vehicleId: "",
      type: "",
      make: "",
      model: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({
        show: this.props.show,
        popData: this.props.vehiclePopupData,
        // RegNo: this.props.reg_no,
        // Vin: this.props.vin_no,
        // BatteryCapacity: this.props.battery_capacity,
        // Deviceid: this.props.device_id,
        // Vehicleid: this.props.vehicle_id,
        // Type: this.props.vehicle_type,
        // Makeke: this.props.vehicle_make,
        // Modal: this.props.vehicle_model,
      });
    }
  }

  // handleChange(evt) {
  //   const value = evt.target.value;
  //   this.setState({
  //     ...this.state,
  //     [evt.target.name]: value,
  //   });
  //   const array = [];
  //   array.push(this.state);
  // }
  componentDidMount() {
    this.setState({ popData: this.props.vehiclePopupData });
    this.setState({
      show: this.props.show,
    });
    // this.setState({
    //   popData: this.props.vehiclePopupData,
    // });
  }

  handleClose = () => {
    this.setState({ show: true });
  };

  handleChange = (evt) => {
    const value = evt.target.value;

    const name = evt.target.name;

    this.setState((prevState) => ({
      popData: {
        // object that we want to update
        ...prevState.popData, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
    // this.props.getVehicleMasterAPI();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      regNo,
      vin,
      batteryCapacity,
      deviceId,
      vehicleId,
      type,
      make,
      model,
    } = this.state.popData;
    // console.log("reg typed", regNo);
    const payload = {
      regNo,
      vin,
      batteryCapacity,
      deviceId,
      vehicleId,
      type,
      make,
      model,
    };
    this.props.updateVehicleMasterAPI(payload);
  };

  render() {
    let val = this.state.popData.reg_no;
    //console.log("searching", this.state.popDatas.name_tagid);

    // console.log("props check final2", this.state.popData);
    return (
      <div className="vehicle-popup">
        <Modal
          // style={{
          //   height: "1000px",
          //   minHeight: "500px",
          // }}
          show={this.state.show}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={this.props.closemodal}
        >
          <Modal.Header closeButton style={{ borderBottom: "none" }}>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <form
            className="vehicle-popup-update"
            autocomplete="off"
            onSubmit={this.handleSubmit}
          >
            <Modal.Body
              style={{
                "max-height": "calc(80vh - 210px)",

                //"overflow-y": "auto",
              }}
            >
              {/* <div className="vehicle-master-id">
                
                <span>
                  Vin : {this.state.popDatas["start_time"]}
                </span>
              </div> */}
              <div className="formwidth">
                <div className="col_50">
                  <div className="col_100">
                    <label>Registration Number:</label>
                    <span style={{ color: "red", marginLeft: "-20px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Reg No:"
                      name="regNo"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.regNo}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col_50">
                  <div className="col_100">
                    <label>Vehicle ID:</label>
                    <span style={{ color: "red", marginLeft: "-90px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Vehicle ID:"
                      name="vehicleId"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.vehicleId}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Vin:</label>
                    <span style={{ color: "red", marginLeft: "-140px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Vin:"
                      name="vin"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.vin}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Device ID:</label>
                    <span style={{ color: "red", marginLeft: "-100px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Device ID:"
                      name="deviceId"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.deviceId}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Modal:</label>
                    <span style={{ color: "red", marginLeft: "-120px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Modal:"
                      name="model"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.model}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Make:</label>
                    <span style={{ color: "red", marginLeft: "-130px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Make:"
                      name="make"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.make}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Type:</label>
                    <span style={{ color: "red", marginLeft: "-130px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Type:"
                      name="type"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.type}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Battery Capacity:</label>
                    <span style={{ color: "red", marginLeft: "-50px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Battery Capacity:"
                      name="batteryCapacity"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.popData.batteryCapacity}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <input
                className="button-vehicle-master"
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

export default connect(mapStateToProps, { updateVehicleMasterAPI })(
  withRouter(VehicleMasterPopup)
);
