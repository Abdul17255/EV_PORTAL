// // import React, { Component } from "react";
// // import "./index.scss";
// // import { connect } from "react-redux";
// // import { withRouter } from "react-router";
// // import SubMenuHeader from "../../container/sub_menu_header";
// // import Mapactiontwo from "../../component/mapactiontwo";
// // import LiveTrackingMap from "../../component/live_trip_tracking_map";
// // import VehicleNumberDropdown from "../../component/vehicle_number";

// // import liveTripTrackSummaryApiActions from "../../redux/live_trip_track_summary/actions";

// // const { getLiveTripTrackSummaryAPI } = liveTripTrackSummaryApiActions;
// // //mapVehClicked
// // class LiveTripTracking extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       username: "",
// //       password: "",
// //       flag: "",
// //       role: "",
// //       vehicleNo: [],
// //     };
// //   }

// //   componentDidMount() {
// //     this.getSummaryDetails();
// //   }

// //   getSummaryDetails = async () => {
// //     let payLoad = {
// //       vehicle_number: sessionStorage.getItem("userName"),
// //     };

// //     await this.props.getLiveTripTrackSummaryAPI(payLoad);
// //   };

// //   componentWillReceiveProps(nextProps) {
// //     console.log("next props", this.props);
// //     if (this.props !== nextProps) {
// //       // this.setState({
// //       //   regNumbers:
// //       //     nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
// //       //       ?.data,
// //       // });
// //     }
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h3 className="live-trip-track-head">Live Tracking</h3>
// //         <div className="live-trip-track-submenu">
// //           <VehicleNumberDropdown />
// //           <SubMenuHeader visible="true" />
// //         </div>
// //         <div className="container-fluid">
// //           <div className="row bg-color border ms-4 me-3  mt-2">
// //             <div className="col-2 border-right  wd-10">
// //               <div className="live-trip-track-image">
// //                 <img
// //                   src={require("../../assets/images/live-track/live.png")}
// //                   className=""
// //                 />

// //                 <p className="live-trip-track-col-1-text">
// //                   {sessionStorage.getItem("clickedVeh")}
// //                 </p>
// //               </div>
// //               <p className="live-trip-track-col-1-text-2">
// //                 {sessionStorage.getItem("clickedVehModel")}
// //               </p>
// //             </div>
// //             <div className="col-4 border-right wd-20">
// //               <div className="live-trip-track-col-2">
// //                 <p className="live-trip-track-col-2-text-1">Start Time</p>
// //                 <hr
// //                   style={{
// //                     width: "18px",
// //                     marginTop: "36px",
// //                     marginLeft: "33px",
// //                   }}
// //                 />
// //                 <img
// //                   src={require("../../assets/images/live-track/clock.png")}
// //                   className="live-trip-track-col-2-image"
// //                 />
// //                 <hr
// //                   style={{
// //                     width: "18px",
// //                     marginLeft: "10px",
// //                     marginTop: "36px",
// //                   }}
// //                 />
// //                 <p className="live-trip-track-col-2-text-2">End Time</p>
// //               </div>
// //               <div className="live-trip-track-col-2-div">
// //                 <p className="live-trip-track-col-2-text-3">
// //                   08:35 AM | 28/11/22
// //                 </p>
// //                 <p className="live-trip-track-col-2-text-4">
// //                   04:30 PM | 28/11/22
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="col border-right">
// //               <p className="live-trip-track-col-3-text-1">Start Odometer</p>
// //               <p className="live-trip-track-col-3-text-2">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-col-3-text-1">End Odometer</p>
// //               <p className="live-trip-track-col-3-text-2">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-col-3-text-1">Driver Name</p>
// //               <p className="live-trip-track-col-3-text-3">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-col-3-text-1">No. Of trips</p>
// //               <p className="live-trip-track-col-3-text-3">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-col-3-text-1">No. Of breakdown</p>
// //               <p className="live-trip-track-col-3-text-3">-</p>
// //             </div>
// //             <div className="col">
// //               <p className="live-trip-track-col-3-text-1">Route No.</p>
// //               <p className="live-trip-track-col-3-text-3">-</p>
// //             </div>
// //           </div>

// //           <div className="row bg-gray border  mt-1 ms-4 me-3 ">
// //             <div className="col-2 border-right wd-10">
// //               <p className="live-trip-track-second-text-1">
// //                 Power Consumption (KWH)
// //               </p>
// //               <p className="live-trip-track-second-text-2">-</p>
// //             </div>
// //             <div className="col border-right wd-10">
// //               <p className="live-trip-track-second-text-1">SOC Consumed</p>

// //               <p className="live-trip-track-second-text-2">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-second-text-1-text">
// //                 Efficiency Kwh/km
// //               </p>
// //               <p className="live-trip-track-second-text-2">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-second-text-1">Average Speed</p>
// //               <p className="live-trip-track-second-text-2">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-second-text-1">Charging Time</p>
// //               <p className="live-trip-track-second-text-2">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-second-text-1">Charging Events</p>
// //               <p className="live-trip-track-second-text-2">-</p>
// //             </div>
// //             <div className="col border-right">
// //               <p className="live-trip-track-second-text-1">Stoppages</p>
// //               <p className="live-trip-track-second-text-2">-</p>
// //             </div>

// //             <div className="col-3">
// //               <div>
// //                 <p className="live-trip-track-second-text-mapaction">
// //                   Charger Status
// //                 </p>
// //               </div>
// //               <div className="live-track-mapaction">
// //                 <Mapactiontwo />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <LiveTrackingMap />
// //       </div>
// //     );
// //   }
// // }

// // const mapStateToProps = (state) => {
// //   return {
// //     ...state,
// //   };
// // };

// // export default connect(mapStateToProps, {
// //   getLiveTripTrackSummaryAPI,
// // })(withRouter(LiveTripTracking));
// import React, { Component } from "react";
// import "./index.scss";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import SubMenuHeader from "../../container/sub_menu_header";
// import Mapactiontwo from "../../component/mapactiontwo";
// import LiveTrackingMap from "../../component/live_trip_tracking_map";
// import VehicleNumberDropdown from "../../component/vehicle_number";

// import liveTripTrackSummaryApiActions from "../../redux/live_trip_track_summary/actions";
// import liveTripTrackMapDetailsApiActions from "../../redux/live_trip_track_map_details/actions";
// import LiveTripDetails from "../../component/live_trip_track_map_details";

// const { getLiveTripTrackSummaryAPI } = liveTripTrackSummaryApiActions;
// const { getLiveTripTrackMapDetailsAPI } = liveTripTrackMapDetailsApiActions;
// //mapVehClicked
// class LiveTripTracking extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//       flag: "",
//       role: "",
//       vehicleNo: [],
//       regNo: "",
//       vehModel: "",
//       startTime: "",
//       endTime: "",
//       startOdo: "",
//       endOdo: "",
//       driverName: "",
//       tripCount: "",
//       breakdownCount: "",
//       routeNo: "",
//       powerConsumption: "",
//       socConsumed: "",
//       efficiency: "",
//       averageSpeed: "",
//       chargingTime: "",
//       chargingEvents: "",
//       stopCount: "",
//       stoppageData: [],
//       vehCurrentLoc: [],
//     };
//   }

//   componentDidMount() {
//     if (
//       sessionStorage.getItem("mapVehClicked") ||
//       sessionStorage.getItem("mapVehClicked") != null
//     ) {
//       this.getSummaryDetails();
//       this.getLiveMapDetails();
//     }
//   }

//   OnSubmit = () => {
//     this.getSummaryDetails();
//     this.getLiveMapDetails();
//   };

//   getSummaryDetails = async () => {
//     let payLoad = {
//       vehicle_number: [sessionStorage.getItem("mapVehClicked")],
//     };
//     await this.props.getLiveTripTrackSummaryAPI(payLoad);
//   };

//   //
//   getLiveMapDetails = async () => {
//     let payLoad = {
//       vehicle_number: [sessionStorage.getItem("mapVehClicked")],
//     };
//     await this.props.getLiveTripTrackMapDetailsAPI(payLoad);
//   };

//   componentWillReceiveProps(nextProps) {
//     // console.log(
//     //   "props check map",
//     //   nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi?.result
//     //     ?.data?.responseData
//     // );
//     if (this.props !== nextProps) {
//       if (
//         nextProps.LiveTripTrackSummaryApi?.liveTripTrackSummaryApi?.result?.data
//           ?.responseData
//       ) {
//         this.setState({
//           regNo:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.vehicleNumber,
//         });
//         this.setState({
//           vehModel:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.vehicleDescription,
//         });
//         this.setState({
//           startTime:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.startTime,
//         });
//         this.setState({
//           endTime:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.endTime,
//         });
//         this.setState({
//           startOdo:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.startOdometer,
//         });
//         this.setState({
//           endOdo:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.endOdometer,
//         });
//         this.setState({
//           driverName:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.driverName,
//         });
//         this.setState({
//           tripCount:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.numberOfTrips,
//         });
//         this.setState({
//           breakdownCount:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.numberOfBreakDowns,
//         });
//         this.setState({
//           routeNo:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.routeNumber,
//         });
//         this.setState({
//           powerConsumption:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.powerConsumption,
//         });
//         this.setState({
//           socConsumed:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.socConsumed,
//         });
//         this.setState({
//           efficiency:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.efficiency,
//         });
//         this.setState({
//           averageSpeed:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.averageSpeed,
//         });
//         this.setState({
//           chargingTime:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.chargingTime,
//         });
//         this.setState({
//           chargingEvents:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.numberOfChargingEvents,
//         });
//         this.setState({
//           stopCount:
//             nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
//               .data.responseData.numOfStoppages,
//         });
//       }
//       if (
//         nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi?.result
//           ?.data?.responseData
//       ) {
//         this.setState({
//           stoppageData:
//             nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi
//               .result.data.responseData.stoppages,
//         });
//         this.setState({
//           vehCurrentLoc:
//             nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi
//               .result.data.responseData.vehicleCurrentLocation,
//         });
//       }
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h3 className="live-trip-track-head">Live Tracking</h3>
//         <div className="live-trip-track-submenu">
//           <VehicleNumberDropdown />
//           {/* <SubMenuHeader visible="true" /> */}
//           <button
//             className="vehicle_number_drop_submit"
//             onClick={this.OnSubmit}
//           >
//             Submit
//           </button>
//         </div>
//         <div className="container-fluid">
//           <div className="row bg-color border ms-4 me-3  mt-2">
//             <div className="col-2 border-right  wd-10">
//               <div className="live-trip-track-image">
//                 <img
//                   src={require("../../assets/images/live-track/live.png")}
//                   className=""
//                 />

//                 <p className="live-trip-track-col-1-text">{this.state.regNo}</p>
//               </div>
//               <p className="live-trip-track-col-1-text-2">
//                 {this.state.vehModel}
//               </p>
//             </div>
//             <div className="col-4 border-right wd-20">
//               <div className="live-trip-track-col-2">
//                 <p className="live-trip-track-col-2-text-1">Start Time</p>
//                 <hr
//                   style={{
//                     width: "18px",
//                     marginTop: "36px",
//                     marginLeft: "33px",
//                   }}
//                 />
//                 <img
//                   src={require("../../assets/images/live-track/clock.png")}
//                   className="live-trip-track-col-2-image"
//                 />
//                 <hr
//                   style={{
//                     width: "18px",
//                     marginLeft: "10px",
//                     marginTop: "36px",
//                   }}
//                 />
//                 <p className="live-trip-track-col-2-text-2">End Time</p>
//               </div>
//               <div className="live-trip-track-col-2-div">
//                 <p className="live-trip-track-col-2-text-3">
//                   {this.state.startTime}
//                 </p>
//                 <p className="live-trip-track-col-2-text-4">
//                   {this.state.endTime}
//                 </p>
//               </div>
//             </div>

//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">Start Odometer</p>
//               <p className="live-trip-track-col-3-text-2">
//                 {this.state.startOdo} Km
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">End Odometer</p>
//               <p className="live-trip-track-col-3-text-2">
//                 {this.state.endOdo} Km
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">Driver Name</p>
//               <p className="live-trip-track-col-3-text-3">
//                 {this.state.driverName}
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">No. Of trips</p>
//               <p className="live-trip-track-col-3-text-3">
//                 {this.state.tripCount}
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">No. Of breakdown</p>
//               <p className="live-trip-track-col-3-text-3">
//                 {this.state.breakdownCount}
//               </p>
//             </div>
//             <div className="col">
//               <p className="live-trip-track-col-3-text-1">Route No.</p>
//               <p className="live-trip-track-col-3-text-3">
//                 {this.state.routeNo}
//               </p>
//             </div>
//           </div>

//           <div className="row bg-gray border  mt-1 ms-4 me-3 ">
//             <div className="col-2 border-right wd-10">
//               <p className="live-trip-track-second-text-1">
//                 Power Consumption (KWH)
//               </p>
//               <p className="live-trip-track-second-text-2">
//                 {this.state.powerConsumption} Kwh
//               </p>
//             </div>
//             <div className="col border-right wd-10">
//               <p className="live-trip-track-second-text-1">
//                 Distance Travelled
//               </p>

//               <p className="live-trip-track-second-text-2">
//                 {(this.state.endOdo - this.state.startOdo).toFixed(2)} km
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1-text">
//                 Efficiency (Kwh/km)
//               </p>
//               <p className="live-trip-track-second-text-2">
//                 {this.state.efficiency} Kwh/km
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Average Speed</p>
//               <p className="live-trip-track-second-text-2">
//                 {this.state.averageSpeed} Km/H
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Charging Time</p>
//               <p className="live-trip-track-second-text-2">
//                 {this.state.chargingTime} Hrs
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Charging Events</p>
//               <p className="live-trip-track-second-text-2">
//                 {this.state.chargingEvents}
//               </p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Stoppages</p>
//               <p className="live-trip-track-second-text-2">
//                 {this.state.stopCount}
//               </p>
//             </div>

//             <div className="col-3">
//               <div>
//                 <p className="live-trip-track-second-text-mapaction">
//                   Charger Status
//                 </p>
//               </div>
//               <div className="live-track-mapaction">
//                 <Mapactiontwo />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row ms-4 mt-0 me-2">
//           {/* <div className="col-12">
//             <LiveTripDetails />
//           </div> */}
//           <div className="col-12">
//             <LiveTrackingMap
//               stopsData={this.state.stoppageData}
//               vehData={this.state.vehCurrentLoc}
//             />
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
//   getLiveTripTrackSummaryAPI,
//   getLiveTripTrackMapDetailsAPI,
// })(withRouter(LiveTripTracking));

// import React, { Component } from "react";
// import "./index.scss";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import SubMenuHeader from "../../container/sub_menu_header";
// import Mapactiontwo from "../../component/mapactiontwo";
// import LiveTrackingMap from "../../component/live_trip_tracking_map";
// import VehicleNumberDropdown from "../../component/vehicle_number";

// import liveTripTrackSummaryApiActions from "../../redux/live_trip_track_summary/actions";

// const { getLiveTripTrackSummaryAPI } = liveTripTrackSummaryApiActions;
// //mapVehClicked
// class LiveTripTracking extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//       flag: "",
//       role: "",
//       vehicleNo: [],
//     };
//   }

//   componentDidMount() {
//     this.getSummaryDetails();
//   }

//   getSummaryDetails = async () => {
//     let payLoad = {
//       vehicle_number: sessionStorage.getItem("userName"),
//     };

//     await this.props.getLiveTripTrackSummaryAPI(payLoad);
//   };

//   componentWillReceiveProps(nextProps) {
//     console.log("next props", this.props);
//     if (this.props !== nextProps) {
//       // this.setState({
//       //   regNumbers:
//       //     nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
//       //       ?.data,
//       // });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h3 className="live-trip-track-head">Live Tracking</h3>
//         <div className="live-trip-track-submenu">
//           <VehicleNumberDropdown />
//           <SubMenuHeader visible="true" />
//         </div>
//         <div className="container-fluid">
//           <div className="row bg-color border ms-4 me-3  mt-2">
//             <div className="col-2 border-right  wd-10">
//               <div className="live-trip-track-image">
//                 <img
//                   src={require("../../assets/images/live-track/live.png")}
//                   className=""
//                 />

//                 <p className="live-trip-track-col-1-text">
//                   {sessionStorage.getItem("clickedVeh")}
//                 </p>
//               </div>
//               <p className="live-trip-track-col-1-text-2">
//                 {sessionStorage.getItem("clickedVehModel")}
//               </p>
//             </div>
//             <div className="col-4 border-right wd-20">
//               <div className="live-trip-track-col-2">
//                 <p className="live-trip-track-col-2-text-1">Start Time</p>
//                 <hr
//                   style={{
//                     width: "18px",
//                     marginTop: "36px",
//                     marginLeft: "33px",
//                   }}
//                 />
//                 <img
//                   src={require("../../assets/images/live-track/clock.png")}
//                   className="live-trip-track-col-2-image"
//                 />
//                 <hr
//                   style={{
//                     width: "18px",
//                     marginLeft: "10px",
//                     marginTop: "36px",
//                   }}
//                 />
//                 <p className="live-trip-track-col-2-text-2">End Time</p>
//               </div>
//               <div className="live-trip-track-col-2-div">
//                 <p className="live-trip-track-col-2-text-3">
//                   08:35 AM | 28/11/22
//                 </p>
//                 <p className="live-trip-track-col-2-text-4">
//                   04:30 PM | 28/11/22
//                 </p>
//               </div>
//             </div>

//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">Start Odometer</p>
//               <p className="live-trip-track-col-3-text-2">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">End Odometer</p>
//               <p className="live-trip-track-col-3-text-2">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">Driver Name</p>
//               <p className="live-trip-track-col-3-text-3">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">No. Of trips</p>
//               <p className="live-trip-track-col-3-text-3">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-col-3-text-1">No. Of breakdown</p>
//               <p className="live-trip-track-col-3-text-3">-</p>
//             </div>
//             <div className="col">
//               <p className="live-trip-track-col-3-text-1">Route No.</p>
//               <p className="live-trip-track-col-3-text-3">-</p>
//             </div>
//           </div>

//           <div className="row bg-gray border  mt-1 ms-4 me-3 ">
//             <div className="col-2 border-right wd-10">
//               <p className="live-trip-track-second-text-1">
//                 Power Consumption (KWH)
//               </p>
//               <p className="live-trip-track-second-text-2">-</p>
//             </div>
//             <div className="col border-right wd-10">
//               <p className="live-trip-track-second-text-1">SOC Consumed</p>

//               <p className="live-trip-track-second-text-2">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1-text">
//                 Efficiency Kwh/km
//               </p>
//               <p className="live-trip-track-second-text-2">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Average Speed</p>
//               <p className="live-trip-track-second-text-2">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Charging Time</p>
//               <p className="live-trip-track-second-text-2">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Charging Events</p>
//               <p className="live-trip-track-second-text-2">-</p>
//             </div>
//             <div className="col border-right">
//               <p className="live-trip-track-second-text-1">Stoppages</p>
//               <p className="live-trip-track-second-text-2">-</p>
//             </div>

//             <div className="col-3">
//               <div>
//                 <p className="live-trip-track-second-text-mapaction">
//                   Charger Status
//                 </p>
//               </div>
//               <div className="live-track-mapaction">
//                 <Mapactiontwo />
//               </div>
//             </div>
//           </div>
//         </div>
//         <LiveTrackingMap />
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
//   getLiveTripTrackSummaryAPI,
// })(withRouter(LiveTripTracking));
import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SubMenuHeader from "../../container/sub_menu_header";
import Mapactiontwo from "../../component/mapactiontwo";
import LiveTrackingMap from "../../component/live_trip_tracking_map";
import VehicleNumberDropdown from "../../component/vehicle_number";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import liveTripTrackSummaryApiActions from "../../redux/live_trip_track_summary/actions";
import liveTripTrackMapDetailsApiActions from "../../redux/live_trip_track_map_details/actions";
import LiveTripSummaryDetails from "../../component/live_trip_track_map_details";

const { getLiveTripTrackSummaryAPI } = liveTripTrackSummaryApiActions;
const { getLiveTripTrackMapDetailsAPI } = liveTripTrackMapDetailsApiActions;
const stopdataArray = [];
const vehdataArray = [];
//mapVehClicked
var now = new Date();
now.setDate(now.getDate());
class LiveTripTracking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      flag: "",
      role: "",
      vehicleNo: [],
      regNo: "",
      vehModel: "",
      startTime: "",
      endTime: "",
      startOdo: "",
      endOdo: "",
      driverName: "",
      tripCount: "",
      breakdownCount: "",
      routeNo: "",
      powerConsumption: "",
      socConsumed: "",
      efficiency: "",
      averageSpeed: "",
      chargingTime: "",
      chargingEvents: "",
      stopCount: "",
      stoppageData: [],
      vehCurrentLoc: [],
      vehCurrentData: "",
      start_date: now,
      end_date: now,
    };
    this.getSummaryDetails = this.getSummaryDetails.bind(this);
    this.getLiveMapDetails = this.getLiveMapDetails.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  componentDidMount() {
    if (
      sessionStorage.getItem("mapVehClicked") ||
      sessionStorage.getItem("mapVehClicked") != null
    ) {
      let start_timestamp= moment(now).format("YYYY-MM-DD 00:00:00");
      let  end_timestamp= moment(now).format("YYYY-MM-DD 23:59:59");
      this.getSummaryDetails(start_timestamp,end_timestamp);
      this.getLiveMapDetails(start_timestamp,end_timestamp);
    }
  }

  OnSubmit() {
    const { start_date, end_date } = this.state;
    this.setState({ loading: true });
    
   
     let start_timestamp= moment(start_date).format("YYYY-MM-DD 00:00:00");
     let  end_timestamp= moment(end_date).format("YYYY-MM-DD 23:59:59");
    
    this.getSummaryDetails(start_timestamp,end_timestamp);
    this.getLiveMapDetails(start_timestamp,end_timestamp);
  }

  getSummaryDetails = async (start_timestamp,end_timestamp) => {
    let payLoad = {
      vehicle_number: [sessionStorage.getItem("mapVehClicked")],
      start_timestamp: start_timestamp,
      end_timestamp: end_timestamp,
    };
    await this.props.getLiveTripTrackSummaryAPI(payLoad);
  };

  //
  getLiveMapDetails = async (start_timestamp,end_timestamp) => {
    let payLoad = {
      vehicle_number: [sessionStorage.getItem("mapVehClicked")],
      start_timestamp: start_timestamp,
      end_timestamp: end_timestamp,
    };
    await this.props.getLiveTripTrackMapDetailsAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    // console.log(
    //   "props check map",
    //   nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi?.result
    //     ?.data?.responseData.stoppages
    // );
    if (
      nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi?.result
        ?.data?.responseData
    ) {
      this.setState({
        stoppageData:
          nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
            .data.responseData.stoppages,
      });
      // const stoppageData = [
      //   ...nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi
      //     .result.data.responseData.stoppages,
      // ];
      // stopdataArray.push(stoppageData);
      this.setState({
        vehCurrentData:
          nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
            .data.responseData.vehicleCurrentLocation,
      });
    }

    if (this.props !== nextProps) {
      if (
        nextProps.LiveTripTrackSummaryApi?.liveTripTrackSummaryApi?.result?.data
          ?.responseData
      ) {
        this.setState({
          regNo:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.vehicleNumber,
        });
        this.setState({
          vehModel:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.vehicleDescription,
        });
        this.setState({
          startTime:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.startTime,
        });
        this.setState({
          endTime:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.endTime,
        });
        this.setState({
          startOdo:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.startOdometer,
        });
        this.setState({
          endOdo:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.endOdometer,
        });
        this.setState({
          driverName:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.driverName,
        });
        this.setState({
          tripCount:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.numberOfTrips,
        });
        this.setState({
          breakdownCount:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.numberOfBreakDowns,
        });
        this.setState({
          routeNo:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.routeNumber,
        });
        this.setState({
          powerConsumption:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.powerConsumption,
        });
        this.setState({
          socConsumed:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.socConsumed,
        });
        this.setState({
          efficiency:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.efficiency,
        });
        this.setState({
          averageSpeed:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.averageSpeed,
        });
        this.setState({
          chargingTime:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.chargingTime,
        });
        this.setState({
          chargingEvents:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.numberOfChargingEvents,
        });
        this.setState({
          stopCount:
            nextProps.LiveTripTrackSummaryApi.liveTripTrackSummaryApi.result
              .data.responseData.numOfStoppages,
        });
      }
    }
  }
  Compare = (name, value) => {
    if (name == "start_date") {
      //if
      this.setState({ start_date: value });
    } else if (name == "end_date") {
      if (
        this.state.start_date != "" &&
        this.state.end_date != "" &&
        value >= this.state.start_date
      ) {
        this.setState({ end_date: value });
      } else {
        if (value < this.state.start_date) {
          alert("End Date should be greater than Start Date");
        }
      }
    }
  };
  render() {
    return (
      <div>
        <h3 className="live-trip-track-head">Live Tracking</h3>
        <div className="live-trip-track-submenu">
          <VehicleNumberDropdown />
          {/* <SubMenuHeader visible="true" /> */}

          <div className="live-trip-track_div_labels">
            <label className="live-trip-track_div_labels_style">
              Start Date:
            </label>
            <DatePicker
              name="start_date"
              selected={this.state.start_date}
              maxDate={moment().toDate()}
              value={this.state.start_date}
              onChange={(value) => this.Compare("start_date", value)}
              dateFormat="yyyy-MM-dd"
            />

            <label className="live-trip-track_div_labels_style">End Date:</label>
            <DatePicker
              wrapperClassName="datepicker"
              name="end_date"
              selected={this.state.end_date}
              maxDate={moment().toDate()}
              value={this.state.end_date}
              onChange={(value) => this.Compare("end_date", value)}
              dateFormat="yyyy-MM-dd"
            />
          </div>


          <button
            className="vehicle_number_drop_submit"
            onClick={this.OnSubmit}
          >
            Submit
          </button>
        </div>
        <div className="container-fluid">
          <div className="row bg-color border ms-4 me-3  mt-2">
            <div className="col-2 border-right  wd-10">
              <div className="live-trip-track-image">
                <img
                  src={require("../../assets/images/live-track/live.png")}
                  className=""
                />

                <p className="live-trip-track-col-1-text">{this.state.regNo}</p>
              </div>
              <p className="live-trip-track-col-1-text-2">
                {this.state.vehModel}
              </p>
            </div>
            <div className="col-4 border-right wd-20">
              <div className="live-trip-track-col-2">
                <p className="live-trip-track-col-2-text-1">Start Time</p>
                <hr
                  style={{
                    width: "18px",
                    marginTop: "36px",
                    marginLeft: "33px",
                  }}
                />
                <img
                  src={require("../../assets/images/live-track/clock.png")}
                  className="live-trip-track-col-2-image"
                />
                <hr
                  style={{
                    width: "18px",
                    marginLeft: "10px",
                    marginTop: "36px",
                  }}
                />
                <p className="live-trip-track-col-2-text-2">End Time</p>
              </div>
              <div className="live-trip-track-col-2-div">
                <p className="live-trip-track-col-2-text-3">
                  {this.state.startTime}
                </p>
                <p className="live-trip-track-col-2-text-4">
                  {this.state.endTime}
                </p>
              </div>
            </div>

            <div className="col border-right">
              <p className="live-trip-track-col-3-text-1">Start Odometer</p>
              <p className="live-trip-track-col-3-text-2">
                {this.state.startOdo} Km
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-col-3-text-1">End Odometer</p>
              <p className="live-trip-track-col-3-text-2">
                {this.state.endOdo} Km
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-col-3-text-1">Driver Name</p>
              <p className="live-trip-track-col-3-text-3">
                {this.state.driverName}
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-col-3-text-1">No. Of trips</p>
              <p className="live-trip-track-col-3-text-3">
                {this.state.tripCount}
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-col-3-text-1">No. Of breakdown</p>
              <p className="live-trip-track-col-3-text-3">
                {this.state.breakdownCount}
              </p>
            </div>
            <div className="col">
              <p className="live-trip-track-col-3-text-1">Route No.</p>
              <p className="live-trip-track-col-3-text-3">
                {this.state.routeNo}
              </p>
            </div>
          </div>

          <div className="row bg-gray border  mt-1 ms-4 me-3 ">
            <div className="col-2 border-right wd-10">
              <p className="live-trip-track-second-text-1">
                Power Consumption (KWH)
              </p>
              <p className="live-trip-track-second-text-2">
                {this.state.powerConsumption} Kwh
              </p>
            </div>
            <div className="col border-right wd-10">
              <p className="live-trip-track-second-text-1">
                Distance Travelled
              </p>

              <p className="live-trip-track-second-text-2">
                {(this.state.endOdo - this.state.startOdo).toFixed(2)} km
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-second-text-1-text">
                Efficiency (Kwh/km)
              </p>
              <p className="live-trip-track-second-text-2">
                {this.state.efficiency} Kwh/km
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-second-text-1">Average Speed</p>
              <p className="live-trip-track-second-text-2">
                {this.state.averageSpeed} Km/H
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-second-text-1">Charging Time</p>
              <p className="live-trip-track-second-text-2">
                {this.state.chargingTime} Hrs
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-second-text-1">Charging Events</p>
              <p className="live-trip-track-second-text-2">
                {this.state.chargingEvents}
              </p>
            </div>
            <div className="col border-right">
              <p className="live-trip-track-second-text-1">Stoppages</p>
              <p className="live-trip-track-second-text-2">
                {this.state.stopCount}
              </p>
            </div>

            <div className="col-3">
              <div>
                <p className="live-trip-track-second-text-mapaction">
                  Charger Status
                </p>
              </div>
              <div className="live-track-mapaction">
                <Mapactiontwo />
              </div>
            </div>
          </div>
        </div>
        <div className="row ms-4 mt-0 me-2">
          <div className="col-5">
            <LiveTripSummaryDetails />
          </div>
          <div className="col-7">
            <LiveTrackingMap />
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
  getLiveTripTrackSummaryAPI,
  getLiveTripTrackMapDetailsAPI,
})(withRouter(LiveTripTracking));
