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

import "./index.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router";
//import * as User from "../../shared/app-data/user";
import DateTimePicker from "react-datepicker";

//Actions
import tripMasterUpdateActions from "../../redux/trip_master_update/actions";
import tripMasterDetailsActions from "../../redux/trip_master_details/actions";

const { getTripMasterUpdateAPI } = tripMasterUpdateActions;
const { getTripMasterDetailsAPI } = tripMasterDetailsActions;

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      editingfields: {},
      message: "",
      messageType: 0,
      date: new Date(),
      driverList: [],
      vehicleList: [],

      // actual_trip_start: "",
      // actual_trip_end: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({
        show: this.props.show,
        editingfields: this.props.data,
        driverList: this.props.driverData,
        vehicleList: this.props.vehicleData,
      });

      // if (prevProps.editTrip != this.props.editTrip) {
      //   if (
      //     this.props.editTrip.actionType == GET_EDIT_SUCCESS &&
      //     this.props.editTrip.loading == false
      //   ) {
      //     this.handleClose();
      //   } else if (
      //     this.props.editTrip.actionType == GET_EDIT_ERROR &&
      //     this.props.editTrip.loading == false
      //   ) {
      //     this.handleClose();
      //   }
      // }
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
    this.setState({
      show: this.props.show,
      editingfields: this.props.data,
      driverList: this.props.driverData,
      vehicleList: this.props.vehicleData,
    });
  }

  getTripMasterDetails() {
    this.setState({ loading: true });
    const payload = {
      api_key: "ALL_TRIP_DETAILS",
    };
    this.props.getTripMasterDetailsAPI(payload);
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
    //  console.log("popup resp", this.state.editingfields);
    const {
      schedule_id,
      route_id,
      driver_id,
      driver_name,
      vin_no,
      reg_no,
      name_tagid,
      reg_vin,
    } = this.state.editingfields;
    let a = reg_no.split("->");

    var driverString = name_tagid.split(/->/);
    var driverarr = [driverString.shift(), driverString.join(" ")];
    // console.log("Welcome to Programiz!1", driverarr[0]);
    // console.log("Welcome to Programiz!2", driverarr[1]);

    var vehicleString = reg_vin.split(/->/);
    var vehiclearr = [vehicleString.shift(), vehicleString.join(" ")];
    // console.log("Welcome to Programiz!3", vehiclearr[0]);
    // console.log("Welcome to Programiz!4", vehiclearr[1]);

    const payload = {
      schedule_id,
      route_id,
      driver_id: driverarr[1],
      reg_no: vehiclearr[0],
      vin_no: vehiclearr[1],
    };
    // console.log("payload", payload);
    this.props.getTripMasterUpdateAPI(payload);

    setTimeout(() => {
      this.getTripMasterDetails();
    }, 3000);
    ///this.getTripMasterDetails();
  };

  //   getSearchBox = (list, varName, keyName) => {
  //     // here list is an array of objects
  //     // varName is the name of state variable
  //     // key name is the name of key for the object in list.
  //     let value = this.state[varName];
  //     let filteredList =
  //       value &&
  //       list &&
  //       list.length &&
  //       list.filter(
  //         (e) =>
  //           e &&
  //           e[keyName] &&
  //           e[keyName].toUpperCase().startsWith(value.toUpperCase())
  //       );
  //     return (
  //       <div style={{ position: "relative" }}>
  //         <input
  //           autocomplete="off"
  //           type="list"
  //           list={varName}
  //           name={varName}
  //           //value={this.}
  //           onChange={this.handleChange}
  //           required
  //         />
  //         <datalist id={varName}>
  //           {filteredList &&
  //             filteredList.map((e) => <option value={e[keyName]} />)}
  //         </datalist>
  //       </div>
  //     );
  //   };

  render() {
    let val = this.state.editingfields.reg_no;
    //console.log("searching", this.state.editingfields.name_tagid);
    return (
      <div className="popup-box">
        <Modal
          style={{
            height: "1000px",
            minHeight: "500px",
          }}
          show={this.state.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={this.props.closemodal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <form
            className="trip-popup-update"
            autocomplete="off"
            onSubmit={this.handleSubmit}
          >
            <Modal.Body
              style={{
                "max-height": "calc(80vh - 210px)",

                "overflow-y": "auto",
              }}
            >
              <div className="tripid">
                <span>Trip ID : {this.state.editingfields["schedule_id"]}</span>
                <span>Route No : {this.state.editingfields["route_id"]}</span>
                <span>
                  Start Time : {this.state.editingfields["start_time"]}
                </span>
              </div>
              <div className="formwidth">
                {/* <div className="col_50">
                  <div className="col_100">
                    <label>
                      Schedule Id: {this.state.editingfields["schedule_id"]}
                    </label>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      disabled
                      placeholder="Schedule Id:"
                      defaultValue={this.state.editingfields["schedule_id"]}
                    />
                  </div>
                </div> */}

                <div className="col_50">
                  <div className="col_100">
                    <label>Registration Number</label>
                    <span style={{ color: "red", marginLeft: "2%" }}> *</span>
                  </div>
                  <div className="col_100">
                    <select
                      placeholder="Registration Number:"
                      name="reg_vin"
                      onChange={this.handleChange}
                      value={this.state.editingfields.reg_vin}
                    >
                      <option defaultValue=""></option>
                      {this.state.vehicleList.map((e, i) => (
                        <option key={i} value={e.reg_vin}>
                          {e.reg_vin}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col_50">
                  <div className="col_100">
                    <label>Driver Name:</label>
                    <span style={{ color: "red", marginLeft: "2%" }}> *</span>
                  </div>
                  <div className="col_100">
                    <select
                      placeholder="Driver Name:"
                      name="name_tagid"
                      onChange={this.handleChange}
                      value={this.state.editingfields.name_tagid}
                    >
                      <option defaultValue=""> </option>
                      {this.state.driverList.map((e, i) => (
                        <option key={i} value={e.name_tagid}>
                          {e.name_tagid}
                        </option>
                      ))}
                    </select>
                    {/* <input value={this.state.editingfields.driver_name}></input> */}
                    {/* {this.getSearchBox(
                      this.props.trip &&
                        this.props.trip.driverlist &&
                        this.props.trip.driverlist.result &&
                        Array.isArray(this.props.trip.driverlist.result) &&
                        this.props.trip.driverlist.result,
                      "first_name",
                      "first_name"
                    )} */}
                  </div>
                </div>
              </div>
              {/* <div className="formwidth"></div> */}
              {/* <div className="formwidth">
                <div className="col_50">
                  <div className="col_100">
                    <label>Driver ID:</label>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      name="driver_id"
                      placeholder="Driver ID:"
                      defaultValue={this.state.editingfields["driver_id"]}
                      onChange={this.handleChange}
                      disabled
                      style={{ textTransform: "uppercase" }}
                    />
                  </div>
                </div>

                <div className="col_50">
                  <div className="col_100">
                    <label>Vin Number:</label>
                  </div>
                  <div className="col_100">
                    <input
                      type="text"
                      name="vin_no"
                      placeholder="Vin Number"
                      defaultValue={this.state.editingfields["vin_no"]}
                      onChange={this.handleChange}
                      disabled
                      style={{ textTransform: "uppercase" }}
                    />
                  </div>
                </div>
              </div> */}
            </Modal.Body>
            <Modal.Footer>
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

export default connect(mapStateToProps, {
  getTripMasterUpdateAPI,
  getTripMasterDetailsAPI,
})(withRouter(Popup));

//export default Popup;
