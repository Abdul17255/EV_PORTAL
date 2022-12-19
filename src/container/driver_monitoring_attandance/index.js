import React, { Component } from "react";
import "../driver_monitoring_attandance/index.scss";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Workbook from "react-excel-workbook";

import CalanderView from "../../component/driver_monitoring_calander_view";
import CalanderListview from "../../component/driver_monitoring_list_view";
var now = new Date();
now.setDate(now.getDate());
class Attandance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
      start_date: now,
      end_date: now,
      // toggleValues: false,
      togglevalue: false,
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      togglevalue: !this.state.togglevalue,
    });
  }

  render() {
    return (
      <div className="driver-monitoring">
        <h3 className="driver-monitoring-text">
          Driver Monitoring Detals/Attandance
        </h3>

        <div className="driver-monitoring_div">
          <div className="driver-monitoring_div_labels">
            <label className="driver-monitoring_div_labels_style">
              Start Date:
            </label>
            <DatePicker
              name="start_date"
              selected={this.state.start_date}
              maxDate={moment().toDate()}
              // minDate={addDays(new Date(), -90)}
              value={this.state.start_date}
              // onChange={(value) => {
              //   this.setState({ start_date: value }, () => this.Compare());
              // }}
              onChange={(value) => this.Compare("start_date", value)}
              dateFormat="yyyy-MM-dd"
            />

            <label className="driver-monitoring_div_labels_style">
              End Date:
            </label>
            <DatePicker
              wrapperClassName="datepicker"
              name="end_date"
              selected={this.state.end_date}
              maxDate={moment().toDate()}
              // minDate={addDays(new Date(), -90)}
              value={this.state.end_date}
              // onChange={(value) => {
              //   this.setState({ end_date: value }, () => this.Compare());
              // }}
              onChange={(value) => this.Compare("end_date", value)}
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div style={{ marginRight: "20px", marginLeft: "-140px" }}>
            <button
              className="driver-monitoring_div_button-submit"
              onClick={this.onSubmit}
            >
              <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
              Submit
            </button>
          </div>
          <div style={{ marginRight: "20px" }}>
            <button
              className="driver-monitoring_div_button-submit"
              onClick={this.reset}
            >
              <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
              Reset
            </button>
          </div>

        
          <div className="switch-field-one">
          <input
            type="radio"
            id="switch_left"
            name="switchToggle"
            value={this.props.leftLabel}
            onChange={this.toggleState}
            checked={!this.state.togglevalue}
          />
          <label htmlFor="switch_left">
            {" "}
            {/* <img
                    src={require("../../assets/images/summary/summary.png")}
                    className="switch-img-1"
                    alt=""
                  /> */}
            List View
          </label>

          <input
            type="radio"
            id="switch_right"
            name="switchToggle"
            value={this.props.rightLabel}
            onChange={this.toggleState}
            checked={this.state.togglevalue}
          />
          <label htmlFor="switch_right">
            {" "}
            {/* <img
                    src={require("../../assets/images/summary/summary.png")}
                    className="switch-img"
                    alt=""
                  /> */}
            Calendar View
          </label>
        </div>

        <div>
            <Workbook
              filename="Trip-Report.xlsx"
              element={
                <div className="driver-monitoring_div_button-submits">
                   Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="driver-monitoring_div_button-submit-image"
                  />
                </div>
              }
            >
              {/* <Workbook.Sheet data={this.state.dataSet} name="Trip-Report">
               <Workbook.Column label="Trip ID" value="trip_id" />
            
               <Workbook.Column label="Efficiency" value="efficiency" />
               <Workbook.Column
                 label="Charging Time Taken"
                 value="charging_time"
               />
               <Workbook.Column
                 label="Planned Distance"
                 value="planned_distance"
               />
             </Workbook.Sheet> */}
            </Workbook>
          </div>
        </div>

       

        <div className="calander-view">
          {this.state.togglevalue == true ? (
            <CalanderView />
          ) : (
            <CalanderListview />
          )}
        </div>
      </div>
    );
  }
}

export default Attandance;
