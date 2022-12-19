import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../master_vehicle_create/index.scss";
import vehicleMasterApiActions from "../../redux/master_vehicle/actions";

const { createVehicleMasterAPI } = vehicleMasterApiActions;

class VehicleMasterCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageType: 0,
      reg_no: "",
      vin_no: "",
      battery_capacity: "",
      device_id: "",
      vehicle_id: "",
      vehicle_type: "",
      vehicle_make: "",
      vehicle_model: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      reg_no,
      vin_no,
      battery_capacity,
      device_id,
      vehicle_id,
      vehicle_make,
      vehicle_type,
      vehicle_model,
    } = this.state;

    console.log("regNo", reg_no);
    const payload = {
      user_id: "1",
      regNo: reg_no,
      vin: vin_no,
      batteryCapacity: battery_capacity,
      deviceId: device_id,
      vehicleId: vehicle_id,
      type: vehicle_type,
      make: vehicle_make,
      model: vehicle_model,
    };
    this.props.createVehicleMasterAPI(payload);
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
      reg_no: "",
      vin_no: "",
      battery_capacity: "",
      device_id: "",
      vehicle_id: "",
      vehicle_type: "",
      vehicle_make: "",
      vehicle_model: "",
    });
  };

  render() {
    return (
      <div className="vehicle-creation-master">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="formwidth">
            <div className="col_50">
              <div className="col_100">
                <label>
                  Reg No:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="Ex: CH01TB0000"
                  name="reg_no"
                  value={this.state.reg_no}
                  style={{ textTransform: "uppercase" }}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div className="col_50">
              <div className="col_100">
                <label>
                  Vin:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="Ex: MC2V2HRT0ND200000"
                  style={{ textTransform: "uppercase" }}
                  name="vin_no"
                  value={this.state.vin_no}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>
          </div>
          <div className="formwidth">
            <div className="col_50">
              <div className="col_100">
                <label>
                  Vehicle ID:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="EX: 6317000255df2c473095ab00"
                  name="vehicle_id"
                  value={this.state.vehicle_id}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div class="col_50">
              <div className="col_100">
                <label>
                  Device ID:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="EX: 359218066225009"
                  name="device_id"
                  value={this.state.device_id}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Model:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="Ex: PRO 3012"
                  style={{ textTransform: "uppercase" }}
                  name="vehicle_model"
                  value={this.state.vehicle_model}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Make:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="Ex: VECV"
                  style={{ textTransform: "uppercase" }}
                  name="vehicle_make"
                  value={this.state.vehicle_make}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Type:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="EX: Bus"
                  style={{ textTransform: "uppercase" }}
                  name="vehicle_type"
                  value={this.state.vehicle_type}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Battery Capacity:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="EX: 000 Kwh"
                  name="battery_capacity"
                  value={this.state.battery_capacity}
                  onChange={this.handleChange}
                  autocomplete="off"
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

export default connect(mapStateToProps, { createVehicleMasterAPI })(
  withRouter(VehicleMasterCreate)
);
