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

import "../master_driver_popup/index.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router";
//import * as User from "../../shared/app-data/user";
import DateTimePicker from "react-datepicker";

import driverMasterApiActions from "../../redux/master_driver/actions";

const { updateDriverMasterAPI } = driverMasterApiActions;

class DriverMasterPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      editingfields: {},
      message: "",
      messageType: 0,
      date: new Date(),
      driverName: "",
      phoneNumber: "",
      dob: "",
      anniversary: "",
      duty: "",
      popData: "",
      // actual_trip_start: "",
      // actual_trip_end: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({
        show: this.props.show,
        //  popData: this.props.vehiclePopupData,
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

  componentDidMount() {
    this.setState({
      show: this.props.show,
      editingfields: this.props.data,
    });
  }

  handleDateChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState((prevState) => ({
      editingfields: {
        // object that we want to update
        ...prevState.editingfields, // keep all other key-value pairs
        [name]: moment(value).format("YYYY-MM-DD HH:mm:00"), // update the value of specific key
      },
    }));
    this.setState({ [name]: value });
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
    ///this.getTripMasterDetails();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { driverName, phoneNumber, dob, anniversary, duty } =
      this.state.editingfields;
    const payload = {
      driverName,
      phoneNumber,
      dob,
      anniversary,
      duty,
    };
    this.props.updateDriverMasterAPI(payload);
  };

  render() {
    let val = this.state.editingfields.reg_no;
    //console.log("searching1111", this.state.editingfields);
    return (
      <div className="driver-popup">
        <Modal
          // style={{
          //   height: "1000px",
          //   minHeight: "500px",
          // }}
          show={this.state.show}
          size="xl"
          aria-labelledby="example-modal-sizes-title-xl"
          centered
          onHide={this.props.closemodal}
          //dialogClassName="modal-90w"
        >
          <Modal.Header closeButton style={{ borderBottom: "none" }}>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <form
            className="driver-popup-update"
            autocomplete="off"
            onSubmit={this.handleSubmit}
          >
            <Modal.Body
              style={{
                "max-height": "calc(80vh - 210px)",

                "overflow-y": "auto",
              }}
            >
              <div className="formwidth">
                <div className="col_50">
                  <div className="col_100">
                    <label>Driver Name</label>
                    <span style={{ color: "red", marginLeft: "-80px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Driver Name:"
                      name="driverName"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.driverName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col_50">
                  <div className="col_100">
                    <label>Phone Number:</label>
                    <span style={{ color: "red", marginLeft: "-60px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Phone Number:"
                      name="phoneNumber"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.phoneNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Date Of Birth:</label>
                    <span style={{ color: "red", marginLeft: "-80px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Date Of Birth:"
                      name="dob"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.dob}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Anniversary Date:</label>
                    <span style={{ color: "red", marginLeft: "-50px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Anniversary Date:"
                      name="anniversary"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.anniversary}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Duty:</label>
                    <span style={{ color: "red", marginLeft: "-140px" }}>
                      {" "}
                      *
                    </span>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      placeholder="Duty:"
                      name="duty"
                      style={{ textTransform: "uppercase" }}
                      value={this.state.editingfields.duty}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ borderTop: "none" }}>
              <input className="button1" type="submit" value="Update" />
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

export default connect(mapStateToProps, { updateDriverMasterAPI })(
  withRouter(DriverMasterPopup)
);
