import React, { Component } from "react";
import ChargerPopupButton from "../../component/charger_popup_button/index";
import stationApiActions from "../../redux/station_details/actions";
import occupiedStationApiAction from "../../redux/occupied_station_view/actions";
import chargerEfficiencyApiAction from "../../redux/charger_efficiency_view/actions";
import availableChargersApiAction from "../../redux/available_chargers_view/actions";
import breakdownChargersApiActions from "../../redux/breakdown_chargers_view/actions";
import opportunityChargingApiActions from "../../redux/opportunity_charging_view/actions";
import ReactLoader from "../../component/react-loader/react-loader.component";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import moment from "moment";
import ChargeSummaryDetails from "../charge_summary_grid/index.js";
import "./index.scss";

const { getStationAPI } = stationApiActions;
const { getOccupiedStationAPI } = occupiedStationApiAction;
const { getChargerEfficiencyAPI } = chargerEfficiencyApiAction;
const { getAvailableChargersAPI } = availableChargersApiAction;
const { getBreakdownChargersAPI } = breakdownChargersApiActions;
const { getOpportunityChargingAPI } = opportunityChargingApiActions;

// let start_date = "";
// let end_date = "";
let duration = "";

const occupiedInitialData = [
  {
    charging_station_name: "",
    vehicle_number: "",
    SOC: "",
    remaining_time: "",
  },
];
var now = new Date();
now.setDate(now.getDate());

class OpportunityChargers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showPopup: false,
      cardClicked: "",
      availableCharger: "",
      occupiedCharger: "",
      breakdownCharger: "",
      chargerEfficiency: "",
      oppurtunityCharging: "",
      oppoChargeAvailable: "",
      oppoChargeOccupied: "",
      oppoChargerBreakdown: "",
      oppoChargerEfficiency: "",
      popupData: [],
      occupiedStationView: "",
      chargerEfficiencyView: "",
      availableStationView: "",
      breakdownStationView: "",
      opportunitychargingView: "",
      start_timestamp: "",
      end_timestamp: "",
      addModalshow: false,
      start_date: now,
      end_date: now,
    };
  }

  componentDidMount() {
    // start_date = sessionStorage.getItem("start_timestamp");
    // end_date = sessionStorage.getItem("end_timestamp");
    duration = sessionStorage.getItem("duration");

    // this.getStationDetails();
    //  this.getOccupiedStationDetails();
    //  this.getChargerEfficiencyDetails();
  }

  componentWillReceiveProps(nextProps) {
    // //console.log("datasss", this.props);
    if (this.props !== nextProps) {
      if (
        nextProps?.stationApi?.stationApi?.result?.data?.chargeStationInsights
      ) {
        this.setState({
          oppoChargeAvailable:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .oppoChargeAvailable,
        });
        this.setState({
          oppoChargeOccupied:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .oppoChargeOccupied,
        });
        this.setState({
          oppoChargerBreakdown:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .oppoChargerBreakdown,
        });
        this.setState({
          oppoChargerEfficiency:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .oppoChargerEfficiency,
        });
      }
      //   if (
      //     nextProps?.stationApi?.stationApi?.result?.data?.chargeStationInsights
      //   ) {
      //     this.setState({
      //       availableCharger:
      //         nextProps.stationApi.stationApi.result.data.chargeStationInsights
      //           .available_gun,
      //     });
      //     this.setState({
      //       occupiedCharger:
      //         nextProps.stationApi.stationApi.result.data.chargeStationInsights
      //           .occupied_gun,
      //     });
      //     this.setState({
      //       breakdownCharger:
      //         nextProps.stationApi.stationApi.result.data.chargeStationInsights
      //           .breakdown_gun,
      //     });
      //     this.setState({
      //       chargerEfficiency:
      //         nextProps.stationApi.stationApi.result.data.chargeStationInsights
      //           .gun_efficiency,
      //     });
      //     this.setState({
      //       oppurtunityCharging:
      //         nextProps.stationApi.stationApi.result.data.chargeStationInsights
      //           .opportunity_charge,
      //     });

      //   } else {
      //     this.setState({ availableCharger: "" });
      //     this.setState({ occupiedCharger: "" });
      //     this.setState({ breakdownCharger: "" });
      //     this.setState({ chargerEfficiency: "" });
      //     this.setState({ oppurtunityCharging: "" });
      //     this.setState({ oppoChargeAvailable: "" });
      //     this.setState({ oppoChargeOccupied: "" });
      //     this.setState({ oppoChargerBreakdown: "" });
      //     this.setState({ oppoChargerEfficiency: "" });
      //   }
      //   if (this.state.cardClicked == "occupiedStation") {
      //     if (nextProps?.occupiedStationApi?.occupiedStationApi?.result?.data) {
      //       this.setState({
      //         occupiedStationView:
      //           nextProps.occupiedStationApi.occupiedStationApi.result.data
      //             .values,
      //       });
      //       this.setState({
      //         popupData:
      //           nextProps.occupiedStationApi.occupiedStationApi.result.data
      //             .values,
      //       });
      //     }
      //   }
      //   if (this.state.cardClicked == "chargerEfficiency") {
      //     if (
      //       nextProps?.chargerEfficiencyApi?.chargerEfficiencyApi?.result?.data
      //     ) {
      //       this.setState({
      //         chargerEfficiencyView:
      //           nextProps.chargerEfficiencyApi.chargerEfficiencyApi.result.data
      //             .values,
      //       });
      //       this.setState({
      //         popupData:
      //           nextProps.chargerEfficiencyApi.chargerEfficiencyApi.result.data
      //             .values,
      //       });
      //     }
      //   }
      //   if (this.state.cardClicked == "availableStation") {
      //     if (
      //       nextProps?.availableChargersApi?.AvailableChargersApi?.result?.data
      //     ) {
      //       this.setState({
      //         availableStationView:
      //           nextProps.availableChargersApi.AvailableChargersApi.result.data
      //             .values,
      //       });
      //       this.setState({
      //         popupData:
      //           nextProps.availableChargersApi.AvailableChargersApi.result.data
      //             .values,
      //       });
      //     }
      //   }
      //   if (this.state.cardClicked == "breakdownCharger") {
      //     if (
      //       nextProps?.breakdownChargersApi?.BreakdownChargersApi?.result?.data
      //     ) {
      //       this.setState({
      //         breakdownStationView:
      //           nextProps.breakdownChargersApi.BreakdownChargersApi.result.data
      //             .values,
      //       });
      //       this.setState({
      //         popupData:
      //           nextProps.breakdownChargersApi.BreakdownChargersApi.result.data
      //             .values,
      //       });
      //     }
      //   }

      //   if (this.state.cardClicked == "opportunityCharging") {
      //     if (
      //       nextProps?.opportunityChargingApi?.OpportunityChargingApi?.result
      //         ?.data
      //     ) {
      //       this.setState({
      //         opportunitychargingView:
      //           nextProps.opportunityChargingApi.OpportunityChargingApi.result
      //             .data.values,
      //       });
      //       this.setState({
      //         popupData:
      //           nextProps.opportunityChargingApi.OpportunityChargingApi.result
      //             .data.values,
      //       });
      //     }
      //   }
    }
  }

  getOccupiedStationDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_DETAILS",
      request_type: "OCCUPIED_STATION",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: sessionStorage.getItem("duration"),
    };

    await this.props.getOccupiedStationAPI(payLoad);
  };

  getChargerEfficiencyDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_DETAILS",
      request_type: "CHARGER_EFFICIENCY",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: sessionStorage.getItem("duration"),
    };
    await this.props.getChargerEfficiencyAPI(payLoad);
  };

  getAvailableChargersDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_DETAILS",
      request_type: "AVAILABLE_STATION",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: sessionStorage.getItem("duration"),
    };
    await this.props.getAvailableChargersAPI(payLoad);
  };

  getBreakdownChargersDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_DETAILS",
      request_type: "BREAKDOWN_STATION",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: sessionStorage.getItem("duration"),
    };
    await this.props.getBreakdownChargersAPI(payLoad);
  };

  getOpportunityChargersDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_DETAILS",
      request_type: "OPPORTUNITY_CHARGING",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: sessionStorage.getItem("duration"),
    };
    await this.props.getOpportunityChargingAPI(payLoad);
  };
  //request_type: "BREAKDOWN_STATION",
  //request_type: "OPPORTUNITY_CHARGING",

  occupiedStation = () => {
    sessionStorage.setItem("popupClicked", "occupiedStation");
    this.setState({ cardClicked: "occupiedStation" });
    //this.getOccupiedStationDetails();
    this.setState({ addModalshow: true });
    this.setState({ showPopup: true });
    // if (this.state.occupiedStationView) {
    //   this.setState({
    //     popupData: this.state.occupiedStationView,
    //   });
    // }
  };

  chargerEfficiency = () => {
    sessionStorage.setItem("popupClicked", "chargerEfficiency");
    this.setState({ cardClicked: "chargerEfficiency" });
    // this.getChargerEfficiencyDetails();
    this.setState({ addModalshow: true });
    this.setState({ showPopup: true });
    // if (this.state.chargerEfficiencyView) {
    //   this.setState({
    //     popupData: this.state.chargerEfficiencyView,
    //   });
    // }
  };

  availableCharger = () => {
    sessionStorage.setItem("popupClicked", "availableStation");
    this.setState({ cardClicked: "availableStation" });
    // this.getAvailableChargersDetails();
    this.setState({ addModalshow: true });
    this.setState({ showPopup: true });
    // if (this.state.availableStationView) {
    //   this.setState({
    //     popupData: this.state.availableStationView,
    //   });
    // }
  };

  breakdownCharger = () => {
    sessionStorage.setItem("popupClicked", "breakdownCharger");
    this.setState({ cardClicked: "breakdownCharger" });
    //this.getBreakdownChargersDetails();
    this.setState({ addModalshow: true });
    this.setState({ showPopup: true });
    // if (this.state.breakdownStationView) {
    //   this.setState({
    //     popupData: this.state.breakdownStationView,
    //   });
    // }
  };

  opportunityCharging = () => {
    sessionStorage.setItem("popupClicked", "opportunityCharging");
    this.setState({ cardClicked: "opportunityCharging" });
    //this.getOpportunityChargersDetails();
    this.setState({ addModalshow: true });
    this.setState({ showPopup: true });
    // if (this.state.opportunitychargingView) {
    //   this.setState({
    //     popupData: this.state.opportunitychargingView,
    //   });
    // }
  };
  addModalClose = () => this.setState({ addModalshow: false });

  render() {
    return (
      <div className="container-4">
        {this.props.stationApi?.stationApi?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-sm pl-4">
            <div className="left">
              <div className="number-pulse">
                <div className="pulsatingDotone" />
                <div className="number-1">
                  <p>{this.state.oppoChargeAvailable}</p>
                </div>
              </div>

              <div className="text-1">
                <div className="text_alignment">AVAILABLE CHARGING POINTS</div>
              </div>
            </div>

            <div className="button">
              <button
                type="button"
                className="lp_review_err_btn"
                onClick={this.availableCharger}
                disabled="disabled"
              >
                LIST VIEW
                <img
                  className="lp_next_png"
                  src={require("../../assets/images/Icon/icon.png")}
                  alt="next"
                />
              </button>
            </div>
            <div className="right">
              <img
                src={require("../../assets/images/Group 5058/Group 5058.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm" style={{}}>
            <div className="left">
              <div className="number-pulse">
                <div className="pulsatingDottwo" />
                <div className="number-2">
                  <p>{this.state.oppoChargeOccupied}</p>{" "}
                </div>
              </div>
              <div className="text-2">
                <div className="text_alignment">OCCUPIED CHARGING POINTS</div>
              </div>
            </div>
            <div className="button">
              <button
                type="button"
                className="lp_review_err_btn"
                onClick={this.occupiedStation}
                disabled="disabled"
              >
                LIST VIEW
                <img
                  className="lp_next_png"
                  src={require("../../assets/images/Icon/icon.png")}
                  alt="next"
                />
              </button>
            </div>
            <div className="right_occupies_station">
              <img
                src={require("../../assets/images/5026/Group 5026.png")}
                alt=""
              />
            </div>
          </div>

          <div className="col-sm" style={{}}>
            <div className="left">
              <div className="number-pulse">
                <div className="pulsatingDotthree" />
                <div className="number-3">
                  <p>{this.state.oppoChargerBreakdown}</p>
                </div>
              </div>
              <div className="text-3">
                <div className="text_alignment">BREAKDOWN CHARGING POINTS</div>
              </div>
            </div>
            <div className="button">
              <button
                type="button"
                className="lp_review_err_btn"
                onClick={this.breakdownCharger}
                disabled="disabled"
              >
                LIST VIEW
                <img
                  className="lp_next_png"
                  src={require("../../assets/images/Icon/icon.png")}
                  alt="next"
                />
              </button>
            </div>
            <div className="right_breakdown_station">
              <img
                src={require("../../assets/images/5025/Group 5025.png")}
                alt=""
              />
            </div>
          </div>

          <div className="col-sm" style={{}}>
            <div className="left">
              <div className="number-pulse">
                <div className="pulsatingDotfour" />
                <div className="number-4">
                  <p>{this.state.oppoChargerEfficiency}%</p>
                </div>
              </div>
              <div className="text-4">
                <div className="text_alignment">CHARGER EFFICIENCY</div>
              </div>
            </div>
            <div className="button">
              <button
                type="button"
                className="lp_review_err_btn"
                onClick={this.chargerEfficiency}
                disabled="disabled"
              >
                LIST VIEW
                <img
                  className="lp_next_png"
                  src={require("../../assets/images/Icon/icon.png")}
                  alt="next"
                />
              </button>
            </div>
            <div className="right_charger_efficiency">
              <img
                src={require("../../assets/images/NEW/download.png")}
                alt=""
              />
            </div>
          </div>
          {/*<div className="col-sm" style={{}}>
            <div className="left">
              <div className="number-pulse">
                <div className="pulsatingDotfive" />
                <div className="number-5">
                  <p>{this.state.oppurtunityCharging}</p>
                </div>
              </div>
              <div className="text-5">
                <div className="text_alignment">OPPORTUNITY CHARGING</div>
              </div>
            </div>
            <div className="button">
              <button
                type="button"
                className="lp_review_err_btn"
                onClick={this.opportunityCharging}
              >
                LIST VIEW
                <img
                  className="lp_next_png"
                  src={require("../../assets/images/Icon/icon.png")}
                  alt="next"
                />
              </button>
            </div>
            <div className="oppertunity_charger">
              <img
                src={require("../../assets/images/NEW/download.png")}
                alt=""
              />
            </div>
        </div>*/}
        </div>
        {this.state.showPopup && (
          <ChargerPopupButton
            buttonClicked={this.state.cardClicked}
            data={this.state.popupData}
            show={this.state.addModalshow}
            closemodal={this.addModalClose}
          />
        )}
      </div>
    );
  }
}

//export default Station;
const mapStateToProps = (state) => {
  return {
    ...state,
    // station: state.station,
    // occupiedStation: state.occupiedStation,
    // chargerEfficiency: state.chargerEfficiency,
    // availableCharger: state.availableCharger,
    // breakdownCharger: state.breakdownCharger,
    // opportunityCharging: state.opportunityCharging,
  };
};

export default connect(mapStateToProps, {
  getStationAPI,
  getOccupiedStationAPI,
  getChargerEfficiencyAPI,
  getAvailableChargersAPI,
  getBreakdownChargersAPI,
  getOpportunityChargingAPI,
})(withRouter(OpportunityChargers));
