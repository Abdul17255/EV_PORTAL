import React, { Component } from "react";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../master_driver_create/index.scss";
import moment from "moment";
import driverMasterApiActions from "../../redux/master_driver/actions";

const { createDriverMasterAPI } = driverMasterApiActions;

class DriverMasterCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageType: 0,
      driver_name: "",
      dob: "",
      anniversary_date: "",
      mobile_no: "",
      duty: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { driver_name, mobile_no, dob, anniversary_date, duty } = this.state;
    console.log("payload");
    const payload = {
      user_id: "1",
      anniversary: anniversary_date,
      dob: dob,
      driverName: driver_name,
      duty: duty,
      phoneNumber: mobile_no,
    };
    this.props.createDriverMasterAPI(payload);
    this.resetButtonClick();
  };

  handleChange = (evt) => {
    const value = evt.target.value;
    console.log("driver_name", value);
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
    const array = [];
    array.push(this.state);
  };

  resetButtonClick = () => {
    this.setState({
      driver_name: "",
      dob: "",
      anniversary_date: "",
      mobile_no: "",
      duty: "",
    });
  };

  render() {
    return (
      <div className="driver-creation-master">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="formwidth">
            <div className="col_50">
              <div className="col_100">
                <label>
                  Driver Name:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="Driver Name"
                  name="driver_name"
                  style={{ textTransform: "uppercase" }}
                  value={this.state.driver_name}
                  onChange={this.handleChange}
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div className="col_50">
              <div className="col_100">
                <label>
                  Phone Number:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <NumberFormat
                  format="##########"
                  mask=""
                  name="mobile_no"
                  placeholder="Phone Number Here"
                  onChange={this.handleChange}
                  value={this.state.mobile_no}
                  required="true"
                  pattern="\d{10}"
                  title="Error: 10 digits are required."
                />
                {/* {this.getSearchBox(
                      this.props.trip &&
                        this.props.trip.vinList &&
                        this.props.trip.vinList.result &&
                        Array.isArray(this.props.trip.vinList.result) &&
                        this.props.trip.vinList.result,
                      "vin",
                      "vin"
                    )} */}
              </div>
            </div>
          </div>
          <div className="formwidth">
            <div className="col_50">
              <div className="col_100">
                <label>
                  Date of Birth:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="Date"
                  min={moment().subtract(7, "d").format("YYYY-MM-DD")}
                  max={moment().add(7, "d").format("YYYY-MM-DD")}
                  placeholder="Birthday"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                  required
                />
                {/* {this.getSearchBox(
                      this.props.trip &&
                        this.props.trip.driverList &&
                        this.props.trip.driverList.result &&
                        Array.isArray(this.props.trip.driverList.result) &&
                        this.props.trip.driverList.result,
                      "first_name",
                      "first_name"
                    )} */}
              </div>
            </div>
            <div class="col_50">
              <div className="col_100">
                <label>
                  Anniversary Date:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="Date"
                  min={moment().subtract(7, "d").format("YYYY-MM-DD")}
                  max={moment().add(7, "d").format("YYYY-MM-DD")}
                  placeholder="Marriage Date"
                  name="anniversary_date"
                  value={this.state.anniversary_date}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div class="col_50">
              <div className="col_100">
                <label>
                  Duty:<span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div className="col_100">
                <input
                  type="text"
                  placeholder="EX: M"
                  style={{ textTransform: "uppercase" }}
                  name="duty"
                  value={this.state.duty}
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

export default connect(mapStateToProps, { createDriverMasterAPI })(
  withRouter(DriverMasterCreate)
);
