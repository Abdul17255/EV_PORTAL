// import React, { Component } from "react";
// import "../../container/dashboard_status/index.scss";
// import DashboardVehicleReadlines from "../../component/dashboard_vehicle_readlines";
// import DashboardVehicleStatus from "../../component/dashboard_vehicle_status";
// import Footer from "../footer";
// import DashboardVehicletenDays from "../../component/dashboard_vehicle_tendays";
// //import DashboardVehicleperDay from "../../component/dashboard_fleet_uptime";
// import DashboardEnergyStatus from "../../component/dashboard_energy_status";
// import DashboardUptimeAlert from "../../component/dashboard_uptime_alert";
// import DashboardDriverDetails from "../../component/dashboard_driver_details";
// import DashboardVehicleEffciency from "../../component/dashboard_vehicle_effciency";
// //import DashboardConsumingPower from "../../component/dashboard_performance_insight";
// import DashboardDepotChargers from "../../component/dashboard_depot_chargers";
// import DashboardOpportunityChargers from "../../component/dashboard_opportunity_chargers";
// import DashboardChargeBandStatus from "../../component/dashboard_chargeband_status";
// import DashboardFleetAvailability from "../../component/dashboard_fleet_availability";

// import moment from "moment";
// import { Redirect } from "react-router";
// import dashboardStatusCountsApiActions from "../../redux/dashboard_status_counts/actions";
// import fleetUptimeDetailsApiActions from "../../redux/fleet_uptime_details/actions";
// import vehiclePerformanceDetailsApiActions from "../../redux/vehicle_performance_details/actions";

// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import DashboardBatteryTemperature from "../../component/dashboard_battery_temperature";
// import DashboardVehicleEffciencyOne from "../../component/dashboard_vehicle_effciency_one";
// import DashboardPerfomanceInsight from "../../component/dashboard_performance_insight";
// import DashboardFleetUptime from "../../component/dashboard_fleet_uptime";

// import batteryTempApiAction from "../../redux/battery_temp_view/actions";
// import chargeBandApiAction from "../../redux/charging_band_view/actions";
// import stationApiActions from "../../redux/station_details/actions";
// import mapActionApiActions from "../../redux/mapactions/actions";

// const { getDashboardStatusCountsAPI } = dashboardStatusCountsApiActions;
// const { getFleetUptimeDetailsAPI } = fleetUptimeDetailsApiActions;
// const { getVehiclePerformanceDetailsAPI } = vehiclePerformanceDetailsApiActions;
// const { getBatteryTempAPI } = batteryTempApiAction;
// const { getChargeBandAPI } = chargeBandApiAction;
// const { getStationAPI } = stationApiActions;
// const { getMapActionAPI } = mapActionApiActions;

// //import VehicleStatusReadliness from '../vehicle_status_readliness';

// var now = new Date();
// now.setDate(now.getDate());

// class DashboardStatus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       VR_washing: "",
//       VR_charging: "",
//       VR_cleaning: "",
//       VR_maintenance: "",
//       VR_readyfortrip: "",
//       FA_vehicleCount: "",
//       FA_kmsPerDay: "",
//       DD_present: "",
//       DD_absent: "",
//       DD_reportedLate: "",
//       DD_total: "",
//       DD_start:"",
//       DD_completed:"",
//       DD_estimatedTrips:"",
//       UA_serviceAlerts: "",
//       UA_stopNow: "",
//       UA_visitSoon: "",
//       UA_breakdown: "",
//       FU_avgVehPerDay: "",
//       FU_vehAbove200: "",
//       FU_vehBelow200: "",
//       PowerConsByVeh: "",
//       VE_vehOperatingUnder1kw: "",
//       VE_vehOperatingAbove1kw: "",
//       ES_acConsumption: "",
//       ES_dcConsumption: "",
//       ES_powerDrawnByVeh: "",
//       ES_acdcConversion: "",
//       ES_dcdcConversion: "",
//       ES_acTodc: "",
//       VP_tableData: [],
//       vehRunning10Days: [
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//       ],
//       batteryTempData: [
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//       ],
//       chargeBandData: [
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//         { text: "0", value: "0" },
//       ],
//       availableCharger: "",
//       occupiedCharger: "",
//       breakdownCharger: "",
//       chargerEfficiency: "",
//       oppoChargeAvailable: "",
//       oppoChargeOccupied: "",
//       oppoChargerBreakdown: "",
//       oppoChargerEfficiency: "",
//       running_count: "",
//       stopped_count: "",
//       not_reachable_count: "",
//       all: "",
//     };
//     this.navTotrackPage = this.navTotrackPage.bind(this);
//   }

//   componentDidMount() {
//     this.getDashboardDetails();
//     this.getFleetUptimeDetails();
//     this.getVehPerformanceDetails();
//     this.getBatteryTempDetails();
//     this.getChargeBandDetails();
//     this.getStationDetails();
//     this.getMapActionDetails();
//   }

//   getDashboardDetails = async () => {
//     const { start_date, end_date } = this.state;
//     let payLoad = {
//       api_key: "DASHBOARD_STATUS_ALERT",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       // start_timestamp: sessionStorage.getItem("start_timestamp"),
//       // end_timestamp: sessionStorage.getItem("end_timestamp"),
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//       duration: "CURRENT",
//     };

//     await this.props.getDashboardStatusCountsAPI(payLoad);
//   };

//   getFleetUptimeDetails = async () => {
//     const { start_date, end_date } = this.state;
//     let payLoad = {
//       api_key: "DASHBOARD_VEHICLE_EFFICIENCY_COUNT",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       // start_timestamp: sessionStorage.getItem("start_timestamp"),
//       // end_timestamp: sessionStorage.getItem("end_timestamp"),
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//       duration: "CURRENT",
//     };

//     await this.props.getFleetUptimeDetailsAPI(payLoad);
//   };

//   getVehPerformanceDetails = async () => {
//     const { start_date, end_date } = this.state;
//     let payLoad = {
//       api_key: "DASHBOARD_VEHICLE_PERFORMANCE_INSIGHT",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       // start_timestamp: sessionStorage.getItem("start_timestamp"),
//       // end_timestamp: sessionStorage.getItem("end_timestamp"),
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//       duration: "CURRENT",
//     };

//     await this.props.getVehiclePerformanceDetailsAPI(payLoad);
//   };

//   getBatteryTempDetails = async () => {
//     let payLoad = {
//       api_key: "DASHBOARD_BARGRAPH",
//       request_type: "BATTERY_TEMP",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: sessionStorage.getItem("start_timestamp"),
//       end_timestamp: sessionStorage.getItem("end_timestamp"),
//       duration: sessionStorage.getItem("duration"),
//     };

//     await this.props.getBatteryTempAPI(payLoad);
//   };

//   getChargeBandDetails = async () => {
//     let payLoad = {
//       api_key: "DASHBOARD_BARGRAPH",
//       request_type: "CHARGE_BAND",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: sessionStorage.getItem("start_timestamp"),
//       end_timestamp: sessionStorage.getItem("end_timestamp"),
//       duration: sessionStorage.getItem("duration"),
//     };

//     await this.props.getChargeBandAPI(payLoad);
//   };

//   getStationDetails = async () => {
//     // console.log("inside");
//     const { start_date, end_date } = this.state;
//     let payLoad = {
//       api_key: "DASHBOARD_COUNT",
//       charger_location: "Bangalore",
//       user_id: "2",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       // start_timestamp: start_date,
//       // end_timestamp: end_date,
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//       duration: sessionStorage.getItem("duration"),
//     };

//     await this.props.getStationAPI(payLoad);
//   };

//   getMapActionDetails = async () => {
//     const { start_date, end_date } = this.state;
//     let payLoad = {
//       api_key: "CONNECTED_VEHICLE_TRACK_CHARGER_AND_VEHICLE_COUNT",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//       duration: sessionStorage.getItem("duration"),
//     };

//     await this.props.getMapActionAPI(payLoad);
//   };

//   componentWillReceiveProps(nextProps) {
//     console.log("this. props check", nextProps);
//     if (this.props !== nextProps) {
//       ///// vehicle readiness
//       if (
//         nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
//           ?.data?.data.vehicleReadiness
//       ) {
//         this.setState({
//           VR_washing:
//             nextProps.dashboardStatusCountsApi.dashboardStatusCountsApi.result
//               .data.data.vehicleReadiness.washing,
//         });
//         this.setState({
//           VR_charging:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.vehicleReadiness.charging,
//         });
//         this.setState({
//           VR_cleaning:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.vehicleReadiness.cleaning,
//         });
//         this.setState({
//           VR_maintenance:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.vehicleReadiness.maintanance,
//         });
//         this.setState({
//           VR_readyfortrip:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.vehicleReadiness.readyForTrip,
//         });
//       }

//       /// fleet availability
//       if (
//         nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
//           ?.data?.data.fleetAvailablity
//       ) {
//         this.setState({
//           FA_vehicleCount:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.fleetAvailablity.operatingVehicle,
//         });
//         this.setState({
//           FA_kmsPerDay:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.fleetAvailablity.kmOperatedPerDay,
//         });
//       }

//       /// driver details
//       if (
//         nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
//           ?.data?.data.driverDetails
//       ) {
//         this.setState({
//           DD_present:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.driverDetails.present,
//         });
//         this.setState({
//           DD_absent:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.driverDetails.absent,
//         });
//         this.setState({
//           DD_reportedLate:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.driverDetails.reportedLate,
//         });
//         this.setState({
//           DD_total:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.driverDetails.totalDriver,
//         });
//         this.setState({
//           DD_start:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.driverDetails.tripStarted,
//         });
//         this.setState({
//           DD_completed:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.driverDetails.tripCompleted,
//         });
//         this.setState({
//           DD_estimatedTrips:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.driverDetails.estimatedTrips,
//         });
//       }

//       /// uptime Alert
//       if (
//         nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
//           ?.data?.data.upTimeAlert
//       ) {
//         this.setState({
//           UA_serviceAlerts:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.upTimeAlert.serviceAlerts,
//         });
//         this.setState({
//           UA_stopNow:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.upTimeAlert.stopNow,
//         });
//         this.setState({
//           UA_visitSoon:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.upTimeAlert.visitSoon,
//         });
//         this.setState({
//           UA_breakdown:
//             nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
//               ?.result?.data?.data.upTimeAlert.breakdown,
//         });
//       }

//       /// fleet uptime

//       if (
//         nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result?.data
//           ?.data
//       ) {
//         this.setState({
//           FU_avgVehPerDay:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.avgVehicleRunPerDay,
//         });
//         this.setState({
//           FU_vehAbove200:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.vehRunAbove200KmEachDay,
//         });
//         this.setState({
//           FU_vehBelow200:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.vehRunBelow200KmEachDay,
//         });

//         // single power consumption
//         this.setState({
//           PowerConsByVeh:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.powerConsumptionByVehPerKm,
//         });

//         /// vehicle efficiency
//         this.setState({
//           VE_vehOperatingUnder1kw:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.vehOperatingUnder1Kwh,
//         });
//         this.setState({
//           VE_vehOperatingAbove1kw:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.vehOperatingAbove1Kwh,
//         });

//         ///// energy status
//         this.setState({
//           ES_acConsumption:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.energyStatus.acConumption,
//         });
//         this.setState({
//           ES_dcConsumption:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.energyStatus.dcConsumptionByCharger,
//         });
//         this.setState({
//           ES_powerDrawnByVeh:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.energyStatus.powerDrawnByVehicle,
//         });
//         this.setState({
//           ES_acdcConversion:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.energyStatus.acToDcConversion,
//         });
//         this.setState({
//           ES_dcdcConversion:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.energyStatus.dcToDcConversion,
//         });
//         this.setState({
//           ES_acTodc:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.energyStatus.acInputToDcVehicleBattery,
//         });

//         /// vehicle running 10 days
//         this.setState({
//           vehRunning10Days:
//             nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
//               ?.data?.data.avgVehicleRunFor10Day,
//         });
//       }

//       /// vehicle performance insights

//       if (
//         nextProps?.vehiclePerformanceDetailsApi?.vehiclePerformanceDetailsApi
//           ?.result?.data?.data
//       ) {
//         this.setState({
//           VP_tableData:
//             nextProps?.vehiclePerformanceDetailsApi
//               ?.vehiclePerformanceDetailsApi?.result?.data?.data,
//         });
//       }

//       // last cards charge band and battery temperature
//       if (
//         nextProps?.batteryTemp?.batteryTempApi?.result?.data?.bargraph_payload
//       ) {
//         this.setState({
//           batteryTempData:
//             nextProps.batteryTemp.batteryTempApi.result.data.bargraph_payload,
//         });
//       }
//       if (
//         nextProps?.chargeBand?.chargeBandApi?.result?.data?.bargraph_payload
//       ) {
//         this.setState({
//           chargeBandData:
//             nextProps.chargeBand.chargeBandApi.result.data.bargraph_payload,
//         });
//       }
//       /// depot chargers

//       if (
//         nextProps?.stationApi?.stationApi?.result?.data?.chargeStationInsights
//       ) {
//         this.setState({
//           availableCharger:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .available_gun,
//         });
//         this.setState({
//           occupiedCharger:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .occupied_gun,
//         });
//         this.setState({
//           breakdownCharger:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .breakdown_gun,
//         });
//         this.setState({
//           chargerEfficiency:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .gun_efficiency,
//         });
//         this.setState({
//           oppoChargeAvailable:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .oppoChargeAvailable,
//         });
//         this.setState({
//           oppoChargeOccupied:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .oppoChargeOccupied,
//         });
//         this.setState({
//           oppoChargerBreakdown:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .oppoChargerBreakdown,
//         });
//         this.setState({
//           oppoChargerEfficiency:
//             nextProps.stationApi.stationApi.result.data.chargeStationInsights
//               .oppoChargerEfficiency,
//         });
//       }

//       /// vehicle status counts running stooped, disconnect_delay

//       if (nextProps?.mapActionApi?.mapActionApi?.result?.data?.data) {
//         this.setState({
//           running_count:
//             nextProps.mapActionApi.mapActionApi.result.data.data
//               .moving_vehicle_count,
//         });
//         this.setState({
//           stopped_count:
//             nextProps.mapActionApi.mapActionApi.result.data.data
//               .stopped_vehicle,
//         });
//         this.setState({
//           not_reachable_count:
//             nextProps.mapActionApi.mapActionApi.result.data.data
//               .non_respond_vehicle,
//         });
//         this.setState({
//           all:
//             this.state.running_count +
//             this.state.stopped_count +
//             this.state.not_reachable_count,
//         });
//       } else {
//         console.log("User Login Failed - URL not found");
//       }
//     }
//   }

//   // tabClickHomess = (evt, tabIndex) => {
//   //   const { selectedTab } = this.props;
//   //   let payload = { tabIndex: 5 };

//   //   evt.currentTarget.classList.add("active");
//   //   this.setState({ selTab: tabIndex });
//   //   selectedTab && selectedTab(evt, payload);
//   // };

//   // login = () =>{
//   //   <Redirect to="/connectedmodule" />
//   // }

//   // login = () =>{
//   //   <Redirect to="/track" />
//   // }

//   navTotrackPage=()=> {
//     let tabItem = {
//       tabIndex: 7,
//       tabName: "Connected Module",
//     };
//    // this.setState({selTab:tabIndex,selTab:tabName});
//     this.props.selectedTab(tabItem);
//   }

//   // onHomeClick = () => {
//   //   return(<></>)
//   //  // window.location.href = "/track";
//   // };
//   render() {
//     console.log("this.check", this.state.DD_total);

//     return (
//       <div className="container-fluid">
//         <h3 className="dashboard-text">Dashboard</h3>
//         <div className="row">
//           <div className="col-lg-2 w-20 ms-4 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <div className="head-text-1">
//               FLEET STATUS

//                 </div>
//               <div class="content_img">
//               <img
//                  className="dashboard_status_head_img-1"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 <div>Fleet Status</div>
//                 </div>

//             </div>
//             <div>
//               <DashboardFleetAvailability
//                 vehicleCount={this.state.FA_vehicleCount}
//                 kmsperday={this.state.FA_kmsPerDay}
//               />
//             </div>
//           </div>
//           <div className="col-lg-2 w-20 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                  className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 CONNECTED VEHICLE</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btns"

//                 //onClick={this.redirect}
//                 onClick={this.navTotrackPage}
//                 //onClick={this.props.history.push("/")}
//                 // onClick={(e) => {
//                 //   this.tabClickHomess(e, 5);
//                 // }}
//               >
//                 VIEW IN MAP
//                 <img
//                   className="vehicle-status-button-png"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardVehicleStatus
//                 running={this.state.running_count}
//                 stopped={this.state.stopped_count}
//                 notreachable={this.state.not_reachable_count}
//                 total={this.state.all}
//               />
//             </div>
//           </div>
//           <div className="col-lg-8 w-55 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                  className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 VEHICLE READINESS</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-one"
//                 navToTrendsPage={this.navToTrendsPage}
//               >
//                 VIEW MORE
//                 <img
//                   className="vehicle-status-button-png-one"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardVehicleReadlines
//                 washing={this.state.VR_washing}
//                 cleaning={this.state.VR_cleaning}
//                 charging={this.state.VR_charging}
//                 maintenance={this.state.VR_maintenance}
//                 readyfortrip={this.state.VR_readyfortrip}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-2 w-20 mt-3 ms-4 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                 className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 FLEET UPTIME</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btns"
//                 //onClick={this.availableCharger}
//               >
//                 VIEW MORE
//                 <img
//                   className="vehicle-status-button-png"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardFleetUptime
//                 avgvehrunning={this.state.FU_avgVehPerDay}
//                 vehabove200={this.state.FU_vehAbove200}
//                 vehbelow200={this.state.FU_vehBelow200}
//               />
//             </div>
//           </div>
//           <div className="col-lg-4 w-30 mt-3 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                  className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 VEHICLE RUNNING KM FOR LAST 5 DAYS</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-two"
//                 //onClick={this.availableCharger}
//               >
//                 LIST VIEW
//                 <img
//                   className="vehicle-status-button-png-two"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardVehicletenDays
//                 vehrunning10days={this.state.vehRunning10Days}
//               />
//             </div>
//           </div>
//           <div className="col-lg-6 w-45 mt-3 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text">
//               <img className="dashboard_status_head_img"
//                   //style={{marginRight:"5px"}}
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 ENERGY STATUS</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-three"
//                 //onClick={this.availableCharger}
//               >
//                 LIST VIEW
//                 <img
//                   className="vehicle-status-button-png-three"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardEnergyStatus
//                 acconsumption={this.state.ES_acConsumption}
//                 dcconsumption={this.state.ES_dcConsumption}
//                 powerdrawn={this.state.ES_powerDrawnByVeh}
//                 acdcconversion={this.state.ES_acdcConversion}
//                 dcdcconversion={this.state.ES_dcdcConversion}
//                 actodcinput={this.state.ES_acTodc}
//               />
//             </div>
//           </div>
//         </div>
//         {/* <div className="row">
//           <div className="col-lg-8 w-97 mt-3 ms-4 gx-0 shadow bg-body rounded d-flex">
//             <div>
//             <DashboardDepotChargers/>
//             </div>
//             <br />
//             <div>
//             <DashboardOpportunityChargers/>
//             </div>
//           </div>
//         </div> */}

//         <div className="row">
//           <div className="col-lg-6 w-46 mt-3 mb-3 ms-4 gx-0 shadow bg-body rounded">
//             <div>
//               <DashboardDepotChargers
//                 availablecharger={this.state.availableCharger}
//                 occupiedcharger={this.state.occupiedCharger}
//                 breakdowncharger={this.state.breakdownCharger}
//                 chargerefficiency={this.state.chargerEfficiency}
//               />
//             </div>
//           </div>
//           <div className="col-lg-6 w-50 mt-3 mb-3 ms-3 gx-0 shadow bg-body rounded">
//             <div>
//               <DashboardOpportunityChargers
//                 oppoavailablecharger={this.state.oppoChargeAvailable}
//                 oppooccupiedcharger={this.state.oppoChargeOccupied}
//                 oppobreakdowncharger={this.state.oppoChargerBreakdown}
//                 oppochargerefficiency={this.state.oppoChargerEfficiency}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-2 w-20 mt-3 ms-4 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                  className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 UPTIME ALERTS</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btns"
//                 //onClick={this.availableCharger}
//               >
//                 VIEW MORE
//                 <img
//                   className="vehicle-status-button-png"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardUptimeAlert
//                 servicealerts={this.state.UA_serviceAlerts}
//                 stopnow={this.state.UA_stopNow}
//                 visitsoon={this.state.UA_visitSoon}
//                 breakdown={this.state.UA_breakdown}
//               />
//             </div>
//           </div>
//           <div className="col-lg-4 w-30 mt-3 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                   className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 VEHICLE CONSUMING MORE POWER</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-two"
//                 //onClick={this.availableCharger}
//               >
//                 VIEW MORE
//                 <img
//                   className="vehicle-status-button-png-two"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardPerfomanceInsight tabledata={this.state.VP_tableData} />
//             </div>
//           </div>
//           <div className="col-lg-6 w-45 mt-3 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                  className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 DRIVER DETAILS</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-three"
//                 //onClick={this.availableCharger}
//               >
//                 VIEW MORE
//                 <img
//                   className="vehicle-status-button-png-three"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardDriverDetails
//                 present={this.state.DD_present}
//                 absent={this.state.DD_absent}
//                 reportedlate={this.state.DD_reportedLate}
//                 total={this.state.DD_total}
//                 start={this.state.DD_start}
//                 completed={this.state.DD_completed}
//                 estimatedtrips={this.state.DD_estimatedTrips}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-2 w-20 mt-3 ms-4 gx-0 shadow bg-body rounded">
//             <div className="head">

//             <p className="head-text"> <img
//                 className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 ENERGY consumption</p>
//             </div>
//             <div>
//               <DashboardVehicleEffciencyOne
//                 powerconsumedbyveh={this.state.PowerConsByVeh}
//               />
//             </div>
//           </div>
//           <div className="col-lg-10 w-76 mt-3 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                 className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 VEHICLE EFFICIENCY</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-four"
//                 //onClick={this.availableCharger}
//               >
//                 LIST VIEW
//                 <img
//                   className="vehicle-status-button-png-four"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardVehicleEffciency
//                 vehoperatingunder1kwh={this.state.VE_vehOperatingUnder1kw}
//                 vehoperatingabove1kwh={this.state.VE_vehOperatingAbove1kw}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-6 w-46 mt-3 mb-3 ms-4 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                   className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 CURRENT CHARGE BAND STATUS</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-seven"
//                 //onClick={this.availableCharger}
//               >
//                 VIEW MORE
//                 <img
//                   className="vehicle-status-button-png-seven"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardChargeBandStatus piedata={this.state.chargeBandData} />
//             </div>
//           </div>
//           <div className="col-lg-6 w-50 mt-3 mb-3 ms-3 gx-0 shadow bg-body rounded">
//             <div className="head">
//               <p className="head-text"> <img
//                  className="dashboard_status_head_img"
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//                 BATTERY TEMPERATURE</p>

//               <button
//                 type="button"
//                 className="vehicle-status-btn-six"
//                 //onClick={this.availableCharger}
//               >
//                 LIST VIEW
//                 <img
//                   className="vehicle-status-button-png-six"
//                   src={require("../../assets/images/arrow-red/red.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div>
//               <DashboardBatteryTemperature
//                 temperaturedata={this.state.batteryTempData}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//   };
// };

// export default connect(mapStateToProps, {
//   getDashboardStatusCountsAPI,
//   getFleetUptimeDetailsAPI,
//   getVehiclePerformanceDetailsAPI,
//   getBatteryTempAPI,
//   getChargeBandAPI,
//   getStationAPI,
//   getMapActionAPI,
// })(withRouter(DashboardStatus));
import React, { Component } from "react";
import "../../container/dashboard_status/index.scss";
import DashboardVehicleReadlines from "../../component/dashboard_vehicle_readlines";
import DashboardVehicleStatus from "../../component/dashboard_vehicle_status";
import Footer from "../footer";
import DashboardVehicletenDays from "../../component/dashboard_vehicle_tendays";
//import DashboardVehicleperDay from "../../component/dashboard_fleet_uptime";
import DashboardEnergyStatus from "../../component/dashboard_energy_status";
import DashboardUptimeAlert from "../../component/dashboard_uptime_alert";
import DashboardDriverDetails from "../../component/dashboard_driver_details";
import DashboardVehicleEffciency from "../../component/dashboard_vehicle_effciency";
//import DashboardConsumingPower from "../../component/dashboard_performance_insight";
import DashboardDepotChargers from "../../component/dashboard_depot_chargers";
import DashboardOpportunityChargers from "../../component/dashboard_opportunity_chargers";
import DashboardChargeBandStatus from "../../component/dashboard_chargeband_status";
import DashboardFleetAvailability from "../../component/dashboard_fleet_availability";

import moment from "moment";
import { Redirect } from "react-router";
import dashboardStatusCountsApiActions from "../../redux/dashboard_status_counts/actions";
import fleetUptimeDetailsApiActions from "../../redux/fleet_uptime_details/actions";
import vehiclePerformanceDetailsApiActions from "../../redux/vehicle_performance_details/actions";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import DashboardBatteryTemperature from "../../component/dashboard_battery_temperature";
import DashboardVehicleEffciencyOne from "../../component/dashboard_vehicle_effciency_one";
import DashboardPerfomanceInsight from "../../component/dashboard_performance_insight";
import DashboardFleetUptime from "../../component/dashboard_fleet_uptime";

import batteryTempApiAction from "../../redux/battery_temp_view/actions";
import chargeBandApiAction from "../../redux/charging_band_view/actions";
import stationApiActions from "../../redux/station_details/actions";
import mapActionApiActions from "../../redux/mapactions/actions";

const { getDashboardStatusCountsAPI } = dashboardStatusCountsApiActions;
const { getFleetUptimeDetailsAPI } = fleetUptimeDetailsApiActions;
const { getVehiclePerformanceDetailsAPI } = vehiclePerformanceDetailsApiActions;
const { getBatteryTempAPI } = batteryTempApiAction;
const { getChargeBandAPI } = chargeBandApiAction;
const { getStationAPI } = stationApiActions;
const { getMapActionAPI } = mapActionApiActions;

//import VehicleStatusReadliness from '../vehicle_status_readliness';

var now = new Date();
now.setDate(now.getDate());

class DashboardStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      VR_washing: "",
      VR_charging: "",
      VR_cleaning: "",
      VR_maintenance: "",
      VR_readyfortrip: "",
      FA_vehicleCount: "",
      FA_kmsPerDay: "",
      DD_present: "",
      DD_absent: "",
      DD_reportedLate: "",
      DD_total: "",
      DD_start: "",
      DD_completed: "",
      DD_estimatedTrips: "",
      DD_driverReportedAdh: "",
      DD_tripStartedAdh: "",
      DD_tripCompletedAdh: "",
      UA_serviceAlerts: "",
      UA_stopNow: "",
      UA_visitSoon: "",
      UA_breakdown: "",
      FU_avgVehPerDay: "",
      FU_vehAbove200: "",
      FU_vehBelow200: "",
      PowerConsByVeh: "",
      VE_vehOperatingUnder1kw: "",
      VE_vehOperatingAbove1kw: "",
      ES_acConsumption: "",
      ES_dcConsumption: "",
      ES_powerDrawnByVeh: "",
      ES_acdcConversion: "",
      ES_dcdcConversion: "",
      ES_acTodc: "",
      VP_tableData: [],
      vehRunning10Days: [
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
      ],
      batteryTempData: [
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
      ],
      chargeBandData: [
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
        { text: "0", value: "0" },
      ],
      availableCharger: "",
      occupiedCharger: "",
      breakdownCharger: "",
      chargerEfficiency: "",
      oppoChargeAvailable: "",
      oppoChargeOccupied: "",
      oppoChargerBreakdown: "",
      oppoChargerEfficiency: "",
      running_count: "",
      stopped_count: "",
      not_reachable_count: "",
      all: "",
    };
    this.navTotrackPage = this.navTotrackPage.bind(this);
    this.navToLiveDashboard = this.navToLiveDashboard.bind(this);
    this.navtoVehicleSummaryReport = this.navtoVehicleSummaryReport.bind(this);
  }

  componentDidMount() {
    this.getDashboardDetails();
    this.getFleetUptimeDetails();
    this.getVehPerformanceDetails();
    this.getBatteryTempDetails();
    this.getChargeBandDetails();
    this.getStationDetails();
    this.getMapActionDetails();
  }

  getDashboardDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_STATUS_ALERT",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: "CURRENT",
    };

    await this.props.getDashboardStatusCountsAPI(payLoad);
  };

  getFleetUptimeDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_VEHICLE_EFFICIENCY_COUNT",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: "CURRENT",
    };

    await this.props.getFleetUptimeDetailsAPI(payLoad);
  };

  getVehPerformanceDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_VEHICLE_PERFORMANCE_INSIGHT",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: sessionStorage.getItem("start_timestamp"),
      // end_timestamp: sessionStorage.getItem("end_timestamp"),
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: "CURRENT",
    };

    await this.props.getVehiclePerformanceDetailsAPI(payLoad);
  };

  getBatteryTempDetails = async () => {
    let payLoad = {
      api_key: "DASHBOARD_BARGRAPH",
      request_type: "BATTERY_TEMP",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: sessionStorage.getItem("start_timestamp"),
      end_timestamp: sessionStorage.getItem("end_timestamp"),
      duration: sessionStorage.getItem("duration"),
    };

    await this.props.getBatteryTempAPI(payLoad);
  };

  getChargeBandDetails = async () => {
    let payLoad = {
      api_key: "DASHBOARD_BARGRAPH",
      request_type: "CHARGE_BAND",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: sessionStorage.getItem("start_timestamp"),
      end_timestamp: sessionStorage.getItem("end_timestamp"),
      duration: sessionStorage.getItem("duration"),
    };

    await this.props.getChargeBandAPI(payLoad);
  };

  getStationDetails = async () => {
    // console.log("inside");
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_COUNT",
      charger_location: "Bangalore",
      user_id: "2",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      // start_timestamp: start_date,
      // end_timestamp: end_date,
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: sessionStorage.getItem("duration"),
    };

    await this.props.getStationAPI(payLoad);
  };

  getMapActionDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "CONNECTED_VEHICLE_TRACK_CHARGER_AND_VEHICLE_COUNT",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
      duration: sessionStorage.getItem("duration"),
    };

    await this.props.getMapActionAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    // console.log("this. props check", nextProps);
    if (this.props !== nextProps) {
      ///// vehicle readiness
      if (
        nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
          ?.data?.data.vehicleReadiness
      ) {
        this.setState({
          VR_washing:
            nextProps.dashboardStatusCountsApi.dashboardStatusCountsApi.result
              .data.data.vehicleReadiness.washing,
        });
        this.setState({
          VR_charging:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.vehicleReadiness.charging,
        });
        this.setState({
          VR_cleaning:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.vehicleReadiness.cleaning,
        });
        this.setState({
          VR_maintenance:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.vehicleReadiness.maintanance,
        });
        this.setState({
          VR_readyfortrip:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.vehicleReadiness.readyForTrip,
        });
      }

      /// fleet availability
      if (
        nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
          ?.data?.data.fleetAvailablity
      ) {
        this.setState({
          FA_vehicleCount:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.fleetAvailablity.operatingVehicle,
        });
        this.setState({
          FA_kmsPerDay:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.fleetAvailablity.kmOperatedPerDay,
        });
      }

      /// driver details
      if (
        nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
          ?.data?.data.driverDetails
      ) {
        this.setState({
          DD_present:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.present,
        });
        this.setState({
          DD_absent:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.absent,
        });
        this.setState({
          DD_reportedLate:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.reportedLate,
        });
        this.setState({
          DD_total:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.totalDriver,
        });
        this.setState({
          DD_start:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.tripStarted,
        });
        this.setState({
          DD_completed:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.tripCompleted,
        });
        this.setState({
          DD_estimatedTrips:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.estimatedTrips,
        });
        this.setState({
          DD_driverReportedAdh:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.driverAdherence,
        });
        this.setState({
          DD_tripStartedAdh:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.tripStartedAdherence,
        });
        this.setState({
          DD_tripCompletedAdh:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.driverDetails.tripCompletedAdherence,
        });
      }

      /// uptime Alert
      if (
        nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi?.result
          ?.data?.data.upTimeAlert
      ) {
        this.setState({
          UA_serviceAlerts:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.upTimeAlert.serviceAlerts,
        });
        this.setState({
          UA_stopNow:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.upTimeAlert.stopNow,
        });
        this.setState({
          UA_visitSoon:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.upTimeAlert.visitSoon,
        });
        this.setState({
          UA_breakdown:
            nextProps?.dashboardStatusCountsApi?.dashboardStatusCountsApi
              ?.result?.data?.data.upTimeAlert.breakdown,
        });
      }

      /// fleet uptime

      if (
        nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result?.data
          ?.data
      ) {
        this.setState({
          FU_avgVehPerDay:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.avgVehicleRunPerDay,
        });
        this.setState({
          FU_vehAbove200:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.vehRunAbove200KmEachDay,
        });
        this.setState({
          FU_vehBelow200:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.vehRunBelow200KmEachDay,
        });

        // single power consumption
        this.setState({
          PowerConsByVeh:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.powerConsumptionByVehPerKm,
        });

        /// vehicle efficiency
        this.setState({
          VE_vehOperatingUnder1kw:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.vehOperatingUnder1Kwh,
        });
        this.setState({
          VE_vehOperatingAbove1kw:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.vehOperatingAbove1Kwh,
        });

        ///// energy status
        this.setState({
          ES_acConsumption:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.energyStatus.acConumption,
        });
        this.setState({
          ES_dcConsumption:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.energyStatus.dcConsumptionByCharger,
        });
        this.setState({
          ES_powerDrawnByVeh:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.energyStatus.powerDrawnByVehicle,
        });
        this.setState({
          ES_acdcConversion:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.energyStatus.acToDcConversion,
        });
        this.setState({
          ES_dcdcConversion:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.energyStatus.dcToDcConversion,
        });
        this.setState({
          ES_acTodc:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.energyStatus.acInputToDcVehicleBattery,
        });

        /// vehicle running 10 days
        this.setState({
          vehRunning10Days:
            nextProps?.fleetUptimeDetailsApi?.fleetUptimeDetailsApi?.result
              ?.data?.data.avgVehicleRunFor10Day,
        });
      }

      /// vehicle performance insights

      if (
        nextProps?.vehiclePerformanceDetailsApi?.vehiclePerformanceDetailsApi
          ?.result?.data?.data
      ) {
        this.setState({
          VP_tableData:
            nextProps?.vehiclePerformanceDetailsApi
              ?.vehiclePerformanceDetailsApi?.result?.data?.data,
        });
      }

      // last cards charge band and battery temperature
      if (
        nextProps?.batteryTemp?.batteryTempApi?.result?.data?.bargraph_payload
      ) {
        this.setState({
          batteryTempData:
            nextProps.batteryTemp.batteryTempApi.result.data.bargraph_payload,
        });
      }
      if (
        nextProps?.chargeBand?.chargeBandApi?.result?.data?.bargraph_payload
      ) {
        this.setState({
          chargeBandData:
            nextProps.chargeBand.chargeBandApi.result.data.bargraph_payload,
        });
      }
      /// depot chargers

      if (
        nextProps?.stationApi?.stationApi?.result?.data?.chargeStationInsights
      ) {
        this.setState({
          availableCharger:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .available_gun,
        });
        this.setState({
          occupiedCharger:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .occupied_gun,
        });
        this.setState({
          breakdownCharger:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .breakdown_gun,
        });
        this.setState({
          chargerEfficiency:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .gun_efficiency,
        });
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

      /// vehicle status counts running stooped, disconnect_delay

      if (nextProps?.mapActionApi?.mapActionApi?.result?.data?.data) {
        this.setState({
          running_count:
            nextProps.mapActionApi.mapActionApi.result.data.data
              .moving_vehicle_count,
        });
        this.setState({
          stopped_count:
            nextProps.mapActionApi.mapActionApi.result.data.data
              .stopped_vehicle,
        });
        this.setState({
          not_reachable_count:
            nextProps.mapActionApi.mapActionApi.result.data.data
              .non_respond_vehicle,
        });
        this.setState({
          all:
            this.state.running_count +
            this.state.stopped_count +
            this.state.not_reachable_count,
        });
      } else {
        console.log("User Login Failed - URL not found");
      }
    }
  }

  // tabClickHomess = (evt, tabIndex) => {
  //   const { selectedTab } = this.props;
  //   let payload = { tabIndex: 5 };

  //   evt.currentTarget.classList.add("active");
  //   this.setState({ selTab: tabIndex });
  //   selectedTab && selectedTab(evt, payload);
  // };

  // login = () =>{
  //   <Redirect to="/connectedmodule" />
  // }

  // login = () =>{
  //   <Redirect to="/track" />
  // }

  navTotrackPage() {
    let tabItem = {
      tabIndex: 7,
      tabName: "Track",
    };
    // this.setState({selTab:tabIndex,selTab:tabName});
    this.props.selectedTab(null, tabItem);
  }
  /// Live Dashboard
  navToLiveDashboard() {
    let tabItem = {
      tabIndex: 1,
      tabName: "Live Dashboard",
    };
    // this.setState({selTab:tabIndex,selTab:tabName});
    this.props.selectedTab(null, tabItem);
  }

  navtoVehicleSummaryReport() {
    let tabItem = {
      tabIndex: 23,
      tabName: "Vehicle Summary",
    };
    // this.setState({selTab:tabIndex,selTab:tabName});
    this.props.selectedTab(null, tabItem);
  }
  // onHomeClick = () => {
  //   return(<></>)
  //  // window.location.href = "/track";
  // };
  render() {
    // console.log("this.check", this.state.DD_total);

    return (
      <div className="container-fluid">
        <h3 className="dashboard-text">Dashboard</h3>
        <div className="row">
          <div className="col-lg-2 w-20 ms-4 gx-0 shadow bg-body rounded">
            <div className="head">
              <div className="head-text-1">FLEET STATUS</div>
              <div class="content_img">
                <img
                  className="dashboard_status_head_img-1"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                <div>Fleet Status</div>
              </div>
            </div>
            <div>
              <DashboardFleetAvailability
                vehicleCount={this.state.FA_vehicleCount}
                kmsperday={this.state.FA_kmsPerDay}
              />
            </div>
          </div>
          <div className="col-lg-2 w-20 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                CONNECTED VEHICLE
              </p>

              <button
                type="button"
                className="vehicle-status-btns"
                //onClick={this.redirect}
                onClick={this.navTotrackPage}
                //onClick={this.props.history.push("/")}
                // onClick={(e) => {
                //   this.tabClickHomess(e, 5);
                // }}
              >
                VIEW IN MAP
                <img
                  className="vehicle-status-button-png"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardVehicleStatus
                running={this.state.running_count}
                stopped={this.state.stopped_count}
                notreachable={this.state.not_reachable_count}
                total={this.state.all}
              />
            </div>
          </div>
          <div className="col-lg-8 w-55 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                VEHICLE READINESS
              </p>

              <button
                type="button"
                className="vehicle-status-btn-one"
                navToTrendsPage={this.navToTrendsPage}
              >
                VIEW MORE
                <img
                  className="vehicle-status-button-png-one"
                  src={require("../../assets/images/arrow-red/red.png")}
                />
              </button>
            </div>
            <div>
              <DashboardVehicleReadlines
                washing={this.state.VR_washing}
                cleaning={this.state.VR_cleaning}
                charging={this.state.VR_charging}
                maintenance={this.state.VR_maintenance}
                readyfortrip={this.state.VR_readyfortrip}
                occupiedcharger={this.state.occupiedCharger}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 w-20 mt-3 ms-4 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                FLEET UPTIME
              </p>

              <button
                type="button"
                className="vehicle-status-btns"
                //onClick={this.availableCharger}
              >
                VIEW MORE
                <img
                  className="vehicle-status-button-png"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardFleetUptime
                avgvehrunning={this.state.FU_avgVehPerDay}
                vehabove200={this.state.FU_vehAbove200}
                vehbelow200={this.state.FU_vehBelow200}
              />
            </div>
          </div>
          <div className="col-lg-4 w-30 mt-3 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                VEHICLE RUNNING KM FOR LAST 5 DAYS
              </p>

              <button
                type="button"
                className="vehicle-status-btn-two"
                onClick={this.navtoVehicleSummaryReport}
              >
                LIST VIEW
                <img
                  className="vehicle-status-button-png-two"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardVehicletenDays
                vehrunning10days={this.state.vehRunning10Days}
              />
            </div>
          </div>
          <div className="col-lg-6 w-45 mt-3 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                <img
                  className="dashboard_status_head_img"
                  //style={{marginRight:"5px"}}
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                ENERGY STATUS
              </p>

              <button
                type="button"
                className="vehicle-status-btn-three"
                //onClick={this.availableCharger}
                onClick={this.navToLiveDashboard}
              >
                LIST VIEW
                <img
                  className="vehicle-status-button-png-three"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardEnergyStatus
                acconsumption={this.state.ES_acConsumption}
                dcconsumption={this.state.ES_dcConsumption}
                powerdrawn={this.state.ES_powerDrawnByVeh}
                acdcconversion={this.state.ES_acdcConversion}
                dcdcconversion={this.state.ES_dcdcConversion}
                actodcinput={this.state.ES_acTodc}
              />
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-8 w-97 mt-3 ms-4 gx-0 shadow bg-body rounded d-flex">
            <div>
            <DashboardDepotChargers/>
            </div>
            <br />
            <div>
            <DashboardOpportunityChargers/>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-6 w-46 mt-3 mb-3 ms-4 gx-0 shadow bg-body rounded">
            <div>
              <DashboardDepotChargers
                availablecharger={this.state.availableCharger}
                occupiedcharger={this.state.occupiedCharger}
                breakdowncharger={this.state.breakdownCharger}
                chargerefficiency={this.state.chargerEfficiency}
                clickdata={this.navToLiveDashboard}
              />
            </div>
          </div>
          <div className="col-lg-6 w-50 mt-3 mb-3 ms-3 gx-0 shadow bg-body rounded">
            <div>
              <DashboardOpportunityChargers
                oppoavailablecharger={this.state.oppoChargeAvailable}
                oppooccupiedcharger={this.state.oppoChargeOccupied}
                oppobreakdowncharger={this.state.oppoChargerBreakdown}
                oppochargerefficiency={this.state.oppoChargerEfficiency}
                clickdata={this.navToLiveDashboard}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 w-20 mt-3 ms-4 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                UPTIME ALERTS
              </p>

              <button
                type="button"
                className="vehicle-status-btns"
                //onClick={this.availableCharger}
              >
                VIEW MORE
                <img
                  className="vehicle-status-button-png"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardUptimeAlert
                servicealerts={this.state.UA_serviceAlerts}
                stopnow={this.state.UA_stopNow}
                visitsoon={this.state.UA_visitSoon}
                breakdown={this.state.UA_breakdown}
              />
            </div>
          </div>
          <div className="col-lg-4 w-30 mt-3 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                TOP 5 VEHICLES CONSUMING MORE POWER
              </p>

              <button
                type="button"
                className="vehicle-status-btn-two"
                //onClick={this.availableCharger}
              >
                VIEW MORE
                <img
                  className="vehicle-status-button-png-two"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardPerfomanceInsight tabledata={this.state.VP_tableData} />
            </div>
          </div>
          <div className="col-lg-6 w-45 mt-3 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                DRIVER DETAILS
              </p>

              <button
                type="button"
                className="vehicle-status-btn-three"
                //onClick={this.availableCharger}
              >
                VIEW MORE
                <img
                  className="vehicle-status-button-png-three"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardDriverDetails
                present={this.state.DD_present}
                absent={this.state.DD_absent}
                reportedlate={this.state.DD_reportedLate}
                total={this.state.DD_total}
                start={this.state.DD_start}
                completed={this.state.DD_completed}
                estimatedtrips={this.state.DD_estimatedTrips}
                driverreportedAdh={this.state.DD_driverReportedAdh}
                tripstartedAdh={this.state.DD_tripStartedAdh}
                tripcompletedAdh={this.state.DD_tripCompletedAdh}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 w-20 mt-3 ms-4 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                ENERGY consumption
              </p>
            </div>
            <div>
              <DashboardVehicleEffciencyOne
                powerconsumedbyveh={this.state.PowerConsByVeh}
              />
            </div>
          </div>
          <div className="col-lg-10 w-76 mt-3 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                VEHICLE EFFICIENCY
              </p>

              <button
                type="button"
                className="vehicle-status-btn-four"
                //onClick={this.availableCharger}
              >
                LIST VIEW
                <img
                  className="vehicle-status-button-png-four"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardVehicleEffciency
                vehoperatingunder1kwh={this.state.VE_vehOperatingUnder1kw}
                vehoperatingabove1kwh={this.state.VE_vehOperatingAbove1kw}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 w-46 mt-3 mb-3 ms-4 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                CURRENT CHARGE BAND STATUS
              </p>

              <button
                type="button"
                className="vehicle-status-btn-seven"
                onClick={this.navToLiveDashboard}
              >
                VIEW MORE
                <img
                  className="vehicle-status-button-png-seven"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardChargeBandStatus piedata={this.state.chargeBandData} />
            </div>
          </div>
          <div className="col-lg-6 w-50 mt-3 mb-3 ms-3 gx-0 shadow bg-body rounded">
            <div className="head">
              <p className="head-text">
                {" "}
                <img
                  className="dashboard_status_head_img"
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
                BATTERY TEMPERATURE
              </p>

              <button
                type="button"
                className="vehicle-status-btn-six"
                onClick={this.navToLiveDashboard}
              >
                LIST VIEW
                <img
                  className="vehicle-status-button-png-six"
                  src={require("../../assets/images/arrow-red/red.png")}
                  alt="next"
                />
              </button>
            </div>
            <div>
              <DashboardBatteryTemperature
                temperaturedata={this.state.batteryTempData}
              />
            </div>
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
  getDashboardStatusCountsAPI,
  getFleetUptimeDetailsAPI,
  getVehiclePerformanceDetailsAPI,
  getBatteryTempAPI,
  getChargeBandAPI,
  getStationAPI,
  getMapActionAPI,
})(withRouter(DashboardStatus));
