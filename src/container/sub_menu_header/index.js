import React, { Component } from "react";

import NativeSelect from "@mui/material/NativeSelect";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Workbook from "react-excel-workbook";
import stationApiActions from "../../redux/station_details/actions";
import chargeSummaryApiActions from "../../redux/charge_summary/actions";
import ExportWorkbook from "../../component/export_workbook"
import "./index.scss";
import moment from "moment";
//import Select from "react-select";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const { getStationAPI } = stationApiActions;
const { getChargeSummaryAPI } = chargeSummaryApiActions;

// const colourStyles = {
//   option: (styles) => ({
//     ...styles,
//     fontSize: "14px",
//     backgroundColor: "white",
//     //borderRadius: '2em',
//     color: "#172B4D",
//     display: "inline-block",
//     fontSize: 14,
//     fontWeight: "normal",
//     lineHeight: "1",
//     minWidth: 1,
//     padding: ".7rem",
//     //textAlign: 'center',
//     //fontFamily: "calibri-regular",
//     //color:"#353843",
//   }),
//   control: (styles) => ({
//     ...styles,
//     fontSize: "14px",
//     backgroundColor: "white",
//   }),
// };

// const days = [
//   { label: "Today", value: "CURRENT" },
//   { label: "Yesterday", value: "HISTORY" },
//   { label: "Last 7 Days", value: "HISTORY" },
//   { label: "Last 1 Month", value: "HISTORY" },
//   { label: "Last 3 Month", value: "HISTORY" },
// ];

//var now = new Date();
var today = new Date();
today.setDate(today.getDate());

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

var lastsevenDate = new Date();
lastsevenDate.setDate(lastsevenDate.getDate() - 7);

var lastthreeweek = new Date();
lastthreeweek.setDate(lastthreeweek.getDate() - 18);

var onemonth = new Date();
onemonth.setDate(onemonth.getDate() - 30);

var threemonth = new Date();
threemonth.setDate(threemonth.getDate() - 90);

class SubMenuHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: today,
      end_date: today,
      selectedOptions: "Today",
      selectedVehicle: 10,
    };
  }
  handleSelectChange = (event) => {
    this.setState({ selectedOptions: event.target.value });
  };

  handleChange = (event) => {
    this.setState({ selectedVehicle: event.target.value });
  };

  getStationDetails = async (start_timestamp, end_timestamp, duration) => {
    let payLoad = {
      api_key: "DASHBOARD_COUNT",
      charger_location: "Bangalore",
      user_id: "3",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: start_timestamp,
      end_timestamp: end_timestamp,
      duration: duration,
    };

    await this.props.getStationAPI(payLoad);
  };

  getChargeSummaryDetails = async (
    start_timestamp,
    end_timestamp,
    duration
  ) => {
    let payLoad = {
      api_key: "CHARGE_SUMMARY_DETAILS",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: start_timestamp,
      end_timestamp: end_timestamp,
      duration: duration,
    };

    await this.props.getChargeSummaryAPI(payLoad);
  };

  componentDidMount() {
    sessionStorage.setItem(
      "start_timestamp",
      moment(today).format("YYYY-MM-DD 00:00:00")
    );
    sessionStorage.setItem(
      "end_timestamp",
      moment(today).format("YYYY-MM-DD 23:59:59")
    );
    sessionStorage.setItem("duration", "CURRENT");
  }

  // Chargesummaryreport = () => {
  
  //   this.props.getChargeSummaryDetails();
  // };



  onSubmit = (e) => {
    e.preventDefault();
    let start_timestamp = moment(today).format("YYYY-MM-DD 00:00:00");
    let end_timestamp = moment(today).format("YYYY-MM-DD 23:59:59");
    let duration = "CURRENT";

    let selectedInterval = this.state.selectedOptions;

    const { start_date, end_date } = this.state;
    if (selectedInterval == "Today") {
      start_timestamp = moment(today).format("YYYY-MM-DD 00:00:00");
      end_timestamp = moment(today).format("YYYY-MM-DD 23:59:59");
      duration = "CURRENT";
      sessionStorage.setItem(
        "start_timestamp",
        moment(today).format("YYYY-MM-DD 00:00:00")
      );
      sessionStorage.setItem(
        "end_timestamp",
        moment(today).format("YYYY-MM-DD 23:59:59")
      );
      sessionStorage.setItem("duration", "CURRENT");
    } else if (selectedInterval == "Yesterday") {
      start_timestamp = moment(yesterday).format("YYYY-MM-DD 00:00:00");
      end_timestamp = moment(yesterday).format("YYYY-MM-DD 23:59:59");
      duration = "HISTORY";
      sessionStorage.setItem(
        "start_timestamp",
        moment(yesterday).format("YYYY-MM-DD 00:00:00")
      );
      sessionStorage.setItem(
        "end_timestamp",
        moment(today).format("YYYY-MM-DD 23:59:59")
      );
      sessionStorage.setItem("duration", "HISTORY");
    } else if (selectedInterval == "Last 7 Days") {
      start_timestamp = moment(lastsevenDate).format("YYYY-MM-DD 00:00:00");
      end_timestamp = moment(today).format("YYYY-MM-DD 23:59:59");
      duration = "HISTORY";
      sessionStorage.setItem(
        "start_timestamp",
        moment(lastsevenDate).format("YYYY-MM-DD 00:00:00")
      );
      sessionStorage.setItem(
        "end_timestamp",
        moment(today).format("YYYY-MM-DD 23:59:59")
      );
      sessionStorage.setItem("duration", "HISTORY");
    } else if (selectedInterval == "Last 1 Month") {
      start_timestamp = moment(onemonth).format("YYYY-MM-DD 00:00:00");
      end_timestamp = moment(today).format("YYYY-MM-DD 23:59:59");
      duration = "HISTORY";
      sessionStorage.setItem(
        "start_timestamp",
        moment(onemonth).format("YYYY-MM-DD 00:00:00")
      );
      sessionStorage.setItem(
        "end_timestamp",
        moment(today).format("YYYY-MM-DD 23:59:59")
      );
      sessionStorage.setItem("duration", "HISTORY");
    } else if (selectedInterval == "Last 3 Month") {
      start_timestamp = moment(threemonth).format("YYYY-MM-DD 00:00:00");
      end_timestamp = moment(today).format("YYYY-MM-DD 23:59:59");
      duration = "HISTORY";
      sessionStorage.setItem(
        "start_timestamp",
        moment(threemonth).format("YYYY-MM-DD 00:00:00")
      );
      sessionStorage.setItem(
        "end_timestamp",
        moment(today).format("YYYY-MM-DD 23:59:59")
      );
      sessionStorage.setItem("duration", "HISTORY");
    }

    sessionStorage.setItem("start_timestamp", start_timestamp);
    sessionStorage.setItem("end_timestamp", end_timestamp);
    sessionStorage.setItem("duration", duration);
    if (this.props.component == "mydashboard") {
      this.getStationDetails(start_timestamp, end_timestamp, duration);
    } else {
      this.getChargeSummaryDetails(start_timestamp, end_timestamp, duration);
    }

    // window.location.reload(false);
  };

  render() {
   // console.log("testing data", this.props.data)
    return (
      <div className="submenu">
        <div className="a-left">
          <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">
              Show for
            </InputLabel>
            <Select style={{fontSize:"12px",fontFamily:"roboto-bold"}}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={this.state.selectedVehicle}
              label="selectedVehicle"
              onChange={this.handleChange}
            >
              <option className="submenu_option" value={10}>All Vehicles</option>
            </Select>
          </FormControl>
          {this.props.visible == "false" ? (
          <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
        
            <InputLabel id="demo-simple-select-autowidth-label">
            Individual
            </InputLabel>
            <Select style={{fontSize:"12px",fontFamily:"roboto-bold"}}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={this.state.selectedVehicle}
              label="selectedVehicle"
              onChange={this.handleChange}
            >
              <option value={10}>Select</option>
            </Select>
             
          </FormControl>
            ) : null}
        </div>
        <div className="a-right">
          <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">
              Duration
            </InputLabel>
            <Select style={{fontSize:"12px",fontFamily:"roboto-bold"}}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={this.state.selectedOptions}
              label="selectedVehicle"
              onChange={this.handleSelectChange}
            >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="Yesterday">Yesterday</MenuItem>
              <MenuItem value="Last 7 Days">Last 7 Days</MenuItem>
              <MenuItem value="Last 1 Month">Last 1 Month</MenuItem>
              <MenuItem value="Last 3 Month">Last 3 Month</MenuItem>
            </Select>
          </FormControl>
          
          <div className="submit">
          {this.props.visible == "true" ? (
            <button className="button-submit" onClick={this.onSubmit}>
              Submit
            </button>
              ) : null}
          </div>

          {/*<div style={{ marginTop: "17px" }}>
            {this.props.visible == "true" ? (
              <span className="export">
                Export
                <img
                  src={require("../../assets/images/export/export.png")} alt=""
                  onClick={this.Chargesummaryreport}
                  className="export-image"
                />
              </span>
            ) : null}
            </div>*/}

            <div style={{ marginTop: "15px" }}>
           
            {/* <Workbook
            filename="charge-summary.xlsx"
            element={
              
              <span className="export">
                Export
                
                <img
                  src={require("../../assets/images/export/export.png")} alt=""
                  
                  className="export-image"
                />
                
              </span>
              
            }
          >
            <Workbook.Sheet data={this.props.data} name="charge-summary">
            
              <Workbook.Column label="Charging Station Name" value="charging_station_name" />
              <Workbook.Column label="Charging point name" value="charge_point_identifier" />
              <Workbook.Column label="Register Number" value="reg_no" />
              <Workbook.Column label="Timestamp" value="created_timestamp" />
    
              <Workbook.Column label="AC Power input To Charger" value="ac_power_input_to_charger" />
             
              <Workbook.Column label="DC Power aCharging Point " value="dc_power_at_charging_point" />
              <Workbook.Column label="AC to DC Conversion" value="ac_dc_conversion" />
              <Workbook.Column label="Power drawn by Vehicle" value="power_consumed_by_vehicle" />
    
              <Workbook.Column label="SOC" value="soc" />
             
    
    
            </Workbook.Sheet>
           
          </Workbook> */}
          <ExportWorkbook data={this.props.data} component={this.props.component}/>
       

       
            
                </div> 
          
            </div>
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
  getStationAPI,
  getChargeSummaryAPI,
})(withRouter(SubMenuHeader));
