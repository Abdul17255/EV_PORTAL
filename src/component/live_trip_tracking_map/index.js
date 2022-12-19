// import React, { Component } from "react";
// import "./index.scss";
// //import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// //import RunningTruck from "../../assets/google_start_marker_green.svg";
// //import Footer from "../footer";
// import {
//   DirectionsRenderer,
//   GoogleMap,
//   LoadScript,
//   Marker,
// } from "@react-google-maps/api";

// const image = require("./../../assets/images/map_dashboard/running-truck.svg");

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 30.732198,
//   lng: 76.763133,
// };

// const position = {
//   lat: 12.356374161329612,
//   lng: 76.61609351094737,
// };
// let waypoints = [];
// class LiveTrackingMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedVehicle: "KA 03 JL 3362",
//       filteredBy: "Vehicle",
//       durations: "Today",
//       directions: [],
//       isDirectionSet: false,
//       arrayLength: "",
//       origin: {},
//       destination: {},
//       mapResponse: [],
//       stopData: [],
//       vehicleData: [],
//       center: "",
//       //   lat: 30.732453,
//       //   lng: 76.763341,
//       // },
//       // destination: {
//       //   lat: 30.739392,
//       //   lng: 76.773517,
//       // },

//       waypts: [],
//       waypts1: [],
//       // waypts: [
//       //   {
//       //     location: { lat: 30.729753, lng: 76.773817 },
//       //   },
//       //   {
//       //     location: { lat: 30.726917, lng: 76.769177 },
//       //   },
//       // ],
//       // waypts1: [
//       //   {
//       //     location: { lat: 30.731029, lng: 76.776008 },
//       //   },
//       // ],
//     };
//   }

//   handleVehicleOnChange = (event) => {
//     this.setState({ selectedVehicle: event.target.value });
//   };

//   handleFilteredByOnChange = (event) => {
//     this.setState({ filteredBy: event.target.value });
//   };

//   handleDurationsOnChange = (event) => {
//     this.setState({ durations: event.target.value });
//   };

//   //   getVehicleNumberDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-vehicle-number">
//   //           Vehicle Number
//   //         </InputLabel>
//   //         <Select
//   //           labelId="live-tracking-vehicle-number"
//   //           id="live-tracking-vehicle-number-select"
//   //           value={this.state.selectedVehicle}
//   //           label="selectedVehicle"
//   //           onChange={this.handleVehicleOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="KA 03 JL 3362">KA 03 JL 3362</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getFilteredByDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-filtered-by">Filtered By</InputLabel>
//   //         <Select
//   //           labelId="live-tracking-filtered-by"
//   //           id="live-tracking-filtered-by-select"
//   //           value={this.state.filteredBy}
//   //           label="filteredBy"
//   //           onChange={this.handleFilteredByOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="Vehicle">Vehicle</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getDurationsDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-durations">Durations</InputLabel>
//   //         <Select
//   //           labelId="live-tracking-durations"
//   //           id="live-tracking-durations-select"
//   //           value={this.state.durations}
//   //           label="durations"
//   //           onChange={this.handleDurationsOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="Today">Today</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getBusInformation = () => {
//   //     return (
//   //       <React.Fragment>
//   //         <div className="live-tracking--bus-number">KA 03 JL 3362</div>
//   //         <div className="live-tracking--bus-description">Skyline EV</div>
//   //       </React.Fragment>
//   //     );
//   //   };

//   //   getLabel = (key, value) => {
//   //     return (
//   //       <React.Fragment>
//   //         <div className="live-tracking--header">{key}</div>
//   //         <div className="live-tracking--label">{value}</div>
//   //       </React.Fragment>
//   //     );
//   //   };

//   // shouldComponentUpdate(prevProps, prevState) {
//   //   if (prevState.value !== this.state.value) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // }

//   async componentWillReceiveProps(nextProps) {
//     let arrSize = "";
//     if (
//       nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi?.result
//         ?.data?.responseData
//     ) {
//       this.setState({
//         stopData:
//           nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
//             .data.responseData.stoppages,
//       });
//       this.setState({
//         vehicleData: [
//           nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
//             .data.responseData.vehicleCurrentLocation,
//         ],
//       });
//       this.setState({
//         center: {
//           lat: this.state.vehicleData[0].latitude,
//           lng: this.state.vehicleData[0].longitude,
//         },
//       });
//       // const center = {
//       //   lat: 30.732198,
//       //   lng: 76.763133,
//       // };
//       arrSize = this.state.stopData.length;

//       let datarr = "";

//       this.setState({ waypts: this.state.stopData });
//       this.setState({
//         origin: {
//           lat: this.state.stopData[0].latitude,
//           lng: this.state.stopData[0].longitude,
//         },
//       });
//       this.setState({
//         destination: {
//           lat: this.state.stopData[arrSize - 1].latitude,
//           lng: this.state.stopData[arrSize - 1].longitude,
//         },
//       });
//       datarr = this.state.stopData;
//       waypoints = [];
//       {
//         this.state.stopData.map((item, index) =>
//           waypoints.push({
//             location: {
//               lat: datarr[index].latitude,
//               lng: datarr[index].longitude,
//             },
//           })
//         );
//       }

//       if (!this.state.isDirectionSet) {
//         const directionsService = new window.google.maps.DirectionsService();
//         const directions = await directionsService.route({
//           origin: {
//             lat: this.state.stopData[0].latitude,
//             lng: this.state.stopData[0].longitude,
//           },
//           destination: {
//             lat: this.state.stopData[arrSize - 1].latitude,
//             lng: this.state.stopData[arrSize - 1].longitude,
//           },
//           waypoints: waypoints,
//           // [
//           //   {
//           //     location: { lat: 30.729753, lng: 76.773817 },
//           //   },
//           //   {
//           //     location: { lat: 30.726917, lng: 76.769177 },
//           //   },
//           // ],

//           travelMode: window.google.maps.TravelMode.DRIVING,
//         });
//         this.setState({
//           directions,
//           isDirectionSet: true,
//         });
//       }
//     }
//   }

//   async componentDidUpdate(prevProps, prevState, snapshot) {
//     // console.log("map check", this.props.vehData);
//     // this.setState({ waypts: this.props.stopsData });
//     // this.setState({ waypts1: [this.props.vehData] });
//     // if (!this.state.isDirectionSet) {
//     //   const directionsService = new window.google.maps.DirectionsService();
//     //   const directions = await directionsService.route({
//     //     origin: {
//     //       lat: 30.732453,
//     //       lng: 76.763341,
//     //     },
//     //     destination: {
//     //       lat: 30.739392,
//     //       lng: 76.773517,
//     //     },
//     //     travelMode: window.google.maps.TravelMode.DRIVING,
//     //     // waypoints: [
//     //     //   {
//     //     //     location: new window.google.maps.LatLng(13.014323, 77.652303),
//     //     //   },
//     //     //   {
//     //     //     location: new window.google.maps.LatLng(13.014909, 77.656211),
//     //     //   },
//     //     // ],
//     //   });
//     //   this.setState({
//     //     directions,
//     //     isDirectionSet: true,
//     //   });
//     // }
//   }

//   componentDidMount() {
//     //const directionsService = new google.maps.DirectionsService();
//     // const directionsService = new window.google.maps.DirectionsService();
//     // const directions = directionsService.route({
//     //   travelMode: window.google.maps.TravelMode.DRIVING,
//     //   // waypoints: [
//     //   //   {
//     //   //     location: new window.google.maps.LatLng(13.014323, 77.652303),
//     //   //   },
//     //   //   {
//     //   //     location: new window.google.maps.LatLng(13.014909, 77.656211),
//     //   //   },
//     //   // ],
//     // });
//     // this.setState(directions);
//   }

//   render() {
//     //let image = RunningTruck;
//     return (
//       <section className="">
//         <div
//           style={{
//             marginTop: "0.2rem",
//             //  marginLeft: "2.3rem",
//             marginRight: "0.6rem",
//           }}
//         >
//           {window.google === undefined ? (
//             <LoadScript>
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={15}
//               >
//                 {/* Child components, such as markers, info windows, etc. */}
//                 {/* <Marker
//                   position={position}
//                   animation={window.google.maps.Animation.DROP}
//                   icon={{
//                     url: '../../assets/google_start_marker_green.svg',
//                     //scaledSize: { width: 32, height: 32 },
//                   }}
//                 /> */}
//                 {/* <DirectionsRenderer directions={this.state.directions} /> */}
//               </GoogleMap>
//             </LoadScript>
//           ) : (
//             <GoogleMap
//               mapContainerStyle={containerStyle}
//               center={this.state.center}
//               zoom={11}
//             >
//               <DirectionsRenderer
//                 directions={this.state.directions}
//                 options={{ suppressMarkers: true }}
//               />
//               <Marker
//                 position={this.state.origin}
//                 icon={{
//                   url: require("../../assets/start_marker_green_2x.png"),
//                   height: "20px",
//                 }}
//               />
//               <Marker
//                 position={this.state.destination}
//                 icon={{
//                   url: require("../../assets/orange-circle.svg"),
//                 }}
//               />

//               {/* <Marker
//                 position={waypoints}
//                 icon={{
//                   url: require("../../assets/stop_dot_red.png"),
//                   fillColor: "#f9f9f9",
//                 }}
//                 label={""}
//               /> */}

//               {this.state.stopData.map((waypt) => (
//                 <Marker
//                   position={{
//                     lat: waypt.latitude,
//                     lng: waypt.longitude,
//                   }}
//                   icon={{
//                     url: require("../../assets/stop_dot_red.png"),
//                     fillColor: "#f9f9f9",
//                   }}
//                   label={""}
//                 />
//               ))}
//               {this.state.vehicleData.map((veh) => (
//                 <Marker
//                   position={{
//                     lat: veh.latitude,
//                     lng: veh.longitude,
//                   }}
//                   icon={{
//                     url: require("../../assets/images/running truck/RunningTruck.png"),
//                     fillColor: "#f9f9f9",
//                   }}
//                   label={""}
//                 />
//               ))}
//             </GoogleMap>

//             // <GoogleMap
//             //   mapContainerStyle={containerStyle}
//             //   center={center}
//             //   zoom={15}
//             //   // defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//             //   // defaultZoom={13}
//             // >
//             //   {this.state.directions != null && (
//             //     <DirectionsRenderer
//             //       directions={this.state.directions}
//             //       options={{ suppressMarkers: true }}
//             //     />
//             //   )}
//             //   <Marker
//             //     position={this.state.origin}
//             //     icon={{
//             //       url: require("../../assets/start_marker_green.jpg"),
//             //     }}
//             //   />
//             //   <Marker
//             //     position={this.state.destination}
//             //     icon={{
//             //       url: require("../../assets/start_marker_green.jpg"),
//             //     }}
//             //   />
//             //   {this.state.waypts.map((waypt) => (
//             //     <Marker
//             //       position={{
//             //         lat: waypt.location.lat,
//             //         lng: waypt.location.lng,
//             //       }}
//             //       icon={{
//             //         url: require("../../assets/stop_marker_red.jpg"),
//             //         fillColor: "#f9f9f9",
//             //       }}
//             //       label={""}
//             //     />
//             //   ))}
//             // </GoogleMap>
//           )}
//         </div>
//       </section>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     liveTracking: state.liveTracking,
//   };
// };

// export default connect(mapStateToProps, {})(withRouter(LiveTrackingMap));

// // import React, { Component } from "react";

// // //import "bootstrap/dist/css/bootstrap.min.css";
// // import { connect } from "react-redux";
// // import { withRouter } from "react-router";
// // import InputLabel from "@mui/material/InputLabel";
// // import Select from "@mui/material/Select";
// // import FormControl from "@mui/material/FormControl";
// // //import RunningTruck from "../../assets/google_start_marker_green.svg";
// // //import Footer from "../footer";
// // import {
// //   DirectionsRenderer,
// //   GoogleMap,
// //   LoadScript,
// //   Marker,
// // } from "@react-google-maps/api";

// // const image = require("./../../assets/images/map_dashboard/running-truck.svg");

// // const containerStyle = {
// //   width: "100%",
// //   height: "400px",
// // };

// // const center = {
// //   lat: 30.732198,
// //   lng: 76.763133,
// // };

// // const position = {
// //   lat: 12.356374161329612,
// //   lng: 76.61609351094737,
// // };

// // class LiveTrackingMap extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       selectedVehicle: "KA 03 JL 3362",
// //       filteredBy: "Vehicle",
// //       durations: "Today",
// //       directions: [],
// //       isDirectionSet: false,
// //       origin: {
// //         lat: 30.732453,
// //         lng: 76.763341,
// //       },
// //       destination: {
// //         lat: 30.733261,
// //         lng: 76.779307,
// //       },
// //       waypts: [],
// //       waypts1: [],
// //       // waypts: [
// //       //   {
// //       //     location: { lat: 30.729753, lng: 76.773817 },
// //       //   },
// //       //   {
// //       //     location: { lat: 30.726917, lng: 76.769177 },
// //       //   },
// //       // ],
// //       // waypts1: [
// //       //   {
// //       //     location: { lat: 30.731029, lng: 76.776008 },
// //       //   },
// //       // ],
// //     };
// //   }

// //   handleVehicleOnChange = (event) => {
// //     this.setState({ selectedVehicle: event.target.value });
// //   };

// //   handleFilteredByOnChange = (event) => {
// //     this.setState({ filteredBy: event.target.value });
// //   };

// //   handleDurationsOnChange = (event) => {
// //     this.setState({ durations: event.target.value });
// //   };

// //   //   getVehicleNumberDropDown = () => {
// //   //     return (
// //   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
// //   //         <InputLabel id="live-tracking-vehicle-number">
// //   //           Vehicle Number
// //   //         </InputLabel>
// //   //         <Select
// //   //           labelId="live-tracking-vehicle-number"
// //   //           id="live-tracking-vehicle-number-select"
// //   //           value={this.state.selectedVehicle}
// //   //           label="selectedVehicle"
// //   //           onChange={this.handleVehicleOnChange}
// //   //         >
// //   //           <option value=""></option>
// //   //           <option value="KA 03 JL 3362">KA 03 JL 3362</option>
// //   //         </Select>
// //   //       </FormControl>
// //   //     );
// //   //   };

// //   //   getFilteredByDropDown = () => {
// //   //     return (
// //   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
// //   //         <InputLabel id="live-tracking-filtered-by">Filtered By</InputLabel>
// //   //         <Select
// //   //           labelId="live-tracking-filtered-by"
// //   //           id="live-tracking-filtered-by-select"
// //   //           value={this.state.filteredBy}
// //   //           label="filteredBy"
// //   //           onChange={this.handleFilteredByOnChange}
// //   //         >
// //   //           <option value=""></option>
// //   //           <option value="Vehicle">Vehicle</option>
// //   //         </Select>
// //   //       </FormControl>
// //   //     );
// //   //   };

// //   //   getDurationsDropDown = () => {
// //   //     return (
// //   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
// //   //         <InputLabel id="live-tracking-durations">Durations</InputLabel>
// //   //         <Select
// //   //           labelId="live-tracking-durations"
// //   //           id="live-tracking-durations-select"
// //   //           value={this.state.durations}
// //   //           label="durations"
// //   //           onChange={this.handleDurationsOnChange}
// //   //         >
// //   //           <option value=""></option>
// //   //           <option value="Today">Today</option>
// //   //         </Select>
// //   //       </FormControl>
// //   //     );
// //   //   };

// //   //   getBusInformation = () => {
// //   //     return (
// //   //       <React.Fragment>
// //   //         <div className="live-tracking--bus-number">KA 03 JL 3362</div>
// //   //         <div className="live-tracking--bus-description">Skyline EV</div>
// //   //       </React.Fragment>
// //   //     );
// //   //   };

// //   //   getLabel = (key, value) => {
// //   //     return (
// //   //       <React.Fragment>
// //   //         <div className="live-tracking--header">{key}</div>
// //   //         <div className="live-tracking--label">{value}</div>
// //   //       </React.Fragment>
// //   //     );
// //   //   };

// //   componentWillReceiveProps(nextProps) {
// //     console.log("next props",this.props.stopsData)
// //     console.log("next props1",this.props.vehData)
// //     if (this.props !== nextProps) {
// //       this.setState({ waypts: this.props.stopsData });
// //       this.setState({ waypts1: [this.props.vehData] });
// //     }
// //   }

// //   async componentDidUpdate(prevProps, prevState, snapshot) {
// //     // console.log("map check", this.props.vehData);
// //     // this.setState({ waypts: this.props.stopsData });
// //     // this.setState({ waypts1: [this.props.vehData] });
// //     if (!this.state.isDirectionSet) {
// //       const directionsService = new window.google.maps.DirectionsService();
// //       const directions = await directionsService.route({
// //         origin: {
// //           lat: 30.732453,
// //           lng: 76.763341,
// //         },
// //         destination: {
// //           lat: 30.733261,
// //           lng: 76.779307,
// //         },
// //         travelMode: window.google.maps.TravelMode.DRIVING,
// //         // waypoints: [
// //         //   {
// //         //     location: new window.google.maps.LatLng(13.014323, 77.652303),
// //         //   },
// //         //   {
// //         //     location: new window.google.maps.LatLng(13.014909, 77.656211),
// //         //   },
// //         // ],
// //       });
// //       this.setState({
// //         directions,
// //         isDirectionSet: true,
// //       });
// //     }
// //   }

// //   componentDidMount() {
// //     //const directionsService = new google.maps.DirectionsService();

// //     const directionsService = new window.google.maps.DirectionsService();
// //     const directions = directionsService.route({
// //       travelMode: window.google.maps.TravelMode.DRIVING,
// //       // waypoints: [
// //       //   {
// //       //     location: new window.google.maps.LatLng(13.014323, 77.652303),
// //       //   },
// //       //   {
// //       //     location: new window.google.maps.LatLng(13.014909, 77.656211),
// //       //   },
// //       // ],
// //     });
// //     this.setState(directions);
// //   }

// //   render() {
// //     //let image = RunningTruck;
// //     return (
// //       <section className="live-tracking">
// //         <div
// //           style={{
// //             marginTop: "0.2rem",
// //            // marginLeft: "2.3rem",
// //            // marginRight: "1.7rem",
// //           }}
// //         >
// //           {window.google === undefined ? (
// //             <LoadScript>
// //               <GoogleMap
// //                 mapContainerStyle={containerStyle}
// //                 center={center}
// //                 zoom={15}
// //               >
// //                 {/* Child components, such as markers, info windows, etc. */}
// //                 {/* <Marker
// //                   position={position}
// //                   animation={window.google.maps.Animation.DROP}
// //                   icon={{
// //                     url: '../../assets/google_start_marker_green.svg',
// //                     //scaledSize: { width: 32, height: 32 },
// //                   }}
// //                 /> */}
// //                 {/* <DirectionsRenderer directions={this.state.directions} /> */}
// //               </GoogleMap>
// //             </LoadScript>
// //           ) : (
// //             <GoogleMap
// //               mapContainerStyle={containerStyle}
// //               center={center}
// //               zoom={15}
// //             >
// //               {/* <DirectionsRenderer
// //                 directions={this.state.directions}
// //                 options={{ suppressMarkers: true }}
// //               />
// //               <Marker
// //                 position={this.state.origin}
// //                 icon={{
// //                   url: require("../../assets/start_marker_green_2x.png"),
// //                   height: "20px",
// //                 }}
// //               />
// //               <Marker
// //                 position={this.state.destination}
// //                 icon={{
// //                   url: require("../../assets/orange-circle.svg"),
// //                 }}
// //               /> */}
// //               {this.state.waypts.map((waypt) => (
// //                 <Marker
// //                   position={{
// //                     lat: waypt.latitude,
// //                     lng: waypt.longitude,
// //                   }}
// //                   icon={{
// //                     url: require("../../assets/stop_dot_red.png"),
// //                     fillColor: "#f9f9f9",
// //                   }}
// //                   label={""}
// //                 />
// //               ))}
// //               {this.state.waypts1.map((waypt1) => (
// //                 <Marker
// //                   position={{
// //                     lat: waypt1.latitude,
// //                     lng: waypt1.longitude,
// //                   }}
// //                   icon={{
// //                     url: require("../../assets/images/running truck/RunningTruck.png"),
// //                     fillColor: "#f9f9f9",
// //                   }}
// //                   label={""}
// //                 />
// //               ))}
// //             </GoogleMap>

// //             // <GoogleMap
// //             //   mapContainerStyle={containerStyle}
// //             //   center={center}
// //             //   zoom={15}
// //             //   // defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
// //             //   // defaultZoom={13}
// //             // >
// //             //   {this.state.directions != null && (
// //             //     <DirectionsRenderer
// //             //       directions={this.state.directions}
// //             //       options={{ suppressMarkers: true }}
// //             //     />
// //             //   )}
// //             //   <Marker
// //             //     position={this.state.origin}
// //             //     icon={{
// //             //       url: require("../../assets/start_marker_green.jpg"),
// //             //     }}
// //             //   />
// //             //   <Marker
// //             //     position={this.state.destination}
// //             //     icon={{
// //             //       url: require("../../assets/start_marker_green.jpg"),
// //             //     }}
// //             //   />
// //             //   {this.state.waypts.map((waypt) => (
// //             //     <Marker
// //             //       position={{
// //             //         lat: waypt.location.lat,
// //             //         lng: waypt.location.lng,
// //             //       }}
// //             //       icon={{
// //             //         url: require("../../assets/stop_marker_red.jpg"),
// //             //         fillColor: "#f9f9f9",
// //             //       }}
// //             //       label={""}
// //             //     />
// //             //   ))}
// //             // </GoogleMap>
// //           )}
// //         </div>
// //       </section>
// //     );
// //   }
// // }

// // const mapStateToProps = (state) => {
// //   return {
// //     ...state,
// //     liveTracking: state.liveTracking,
// //   };
// // };

// // export default connect(mapStateToProps, {})(withRouter(LiveTrackingMap));

// import React, { Component } from "react";
// import "./index.scss";
// //import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// //import RunningTruck from "../../assets/google_start_marker_green.svg";
// //import Footer from "../footer";
// import {
//   DirectionsRenderer,
//   GoogleMap,
//   LoadScript,
//   Marker,
// } from "@react-google-maps/api";

// const image = require("./../../assets/images/map_dashboard/running-truck.svg");

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 30.732198,
//   lng: 76.763133,
// };

// const position = {
//   lat: 12.356374161329612,
//   lng: 76.61609351094737,
// };

// class LiveTrackingMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedVehicle: "KA 03 JL 3362",
//       filteredBy: "Vehicle",
//       durations: "Today",
//       directions: [],
//       isDirectionSet: false,
//       arrayLength: "",
//       origin: {},
//       destination: {},
//       mapResponse: [],
//       //   lat: 30.732453,
//       //   lng: 76.763341,
//       // },
//       // destination: {
//       //   lat: 30.739392,
//       //   lng: 76.773517,
//       // },

//       waypts: [],
//       waypts1: [],
//       // waypts: [
//       //   {
//       //     location: { lat: 30.729753, lng: 76.773817 },
//       //   },
//       //   {
//       //     location: { lat: 30.726917, lng: 76.769177 },
//       //   },
//       // ],
//       // waypts1: [
//       //   {
//       //     location: { lat: 30.731029, lng: 76.776008 },
//       //   },
//       // ],
//     };
//   }

//   handleVehicleOnChange = (event) => {
//     this.setState({ selectedVehicle: event.target.value });
//   };

//   handleFilteredByOnChange = (event) => {
//     this.setState({ filteredBy: event.target.value });
//   };

//   handleDurationsOnChange = (event) => {
//     this.setState({ durations: event.target.value });
//   };

//   //   getVehicleNumberDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-vehicle-number">
//   //           Vehicle Number
//   //         </InputLabel>
//   //         <Select
//   //           labelId="live-tracking-vehicle-number"
//   //           id="live-tracking-vehicle-number-select"
//   //           value={this.state.selectedVehicle}
//   //           label="selectedVehicle"
//   //           onChange={this.handleVehicleOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="KA 03 JL 3362">KA 03 JL 3362</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getFilteredByDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-filtered-by">Filtered By</InputLabel>
//   //         <Select
//   //           labelId="live-tracking-filtered-by"
//   //           id="live-tracking-filtered-by-select"
//   //           value={this.state.filteredBy}
//   //           label="filteredBy"
//   //           onChange={this.handleFilteredByOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="Vehicle">Vehicle</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getDurationsDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-durations">Durations</InputLabel>
//   //         <Select
//   //           labelId="live-tracking-durations"
//   //           id="live-tracking-durations-select"
//   //           value={this.state.durations}
//   //           label="durations"
//   //           onChange={this.handleDurationsOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="Today">Today</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getBusInformation = () => {
//   //     return (
//   //       <React.Fragment>
//   //         <div className="live-tracking--bus-number">KA 03 JL 3362</div>
//   //         <div className="live-tracking--bus-description">Skyline EV</div>
//   //       </React.Fragment>
//   //     );
//   //   };

//   //   getLabel = (key, value) => {
//   //     return (
//   //       <React.Fragment>
//   //         <div className="live-tracking--header">{key}</div>
//   //         <div className="live-tracking--label">{value}</div>
//   //       </React.Fragment>
//   //     );
//   //   };

//   async componentWillReceiveProps(nextProps) {
//     if (this.props !== nextProps) {
//       console.log("called");
//       this.setState({ arrayLength: this.props.stopsData.length });
//       var arrLen = this.props.stopsData.length;
//       if (this.props.stopsData.length > 0) {
//         this.setState({ mapResponse: this.props.stopsData });
//         this.setState({ waypts: this.state.mapResponse });
//         this.setState({
//           origin: {
//             lat: this.state.mapResponse[0].latitude,
//             lng: this.state.mapResponse[0].longitude,
//           },
//         });
//         this.setState({
//           destination: {
//             lat: this.state.mapResponse[this.state.arrayLength - 1].latitude,
//             lng: this.state.mapResponse[this.state.arrayLength - 1].longitude,
//           },
//         });
//         if (!this.state.isDirectionSet) {
//           const directionsService = new window.google.maps.DirectionsService();
//           const directions = await directionsService.route({
//             origin: {
//               lat: this.state.mapResponse[0].latitude,
//               lng: this.state.mapResponse[0].longitude,
//             },
//             destination: {
//               lat: this.state.mapResponse[this.state.arrayLength - 1].latitude,
//               lng: this.state.mapResponse[this.state.arrayLength - 1].longitude,
//             },

//             travelMode: window.google.maps.TravelMode.DRIVING,
//           });
//           this.setState({
//             directions,
//             isDirectionSet: true,
//           });
//         }
//       }
//       if (this.props.vehData) {
//         this.setState({ waypts1: [this.props.vehData] });
//       }

//       console.log("source", this.state.origin);
//     }
//   }

//   async componentDidUpdate(prevProps, prevState, snapshot) {
//     // console.log("map check", this.props.vehData);
//     // this.setState({ waypts: this.props.stopsData });
//     // this.setState({ waypts1: [this.props.vehData] });
//     // if (!this.state.isDirectionSet) {
//     //   const directionsService = new window.google.maps.DirectionsService();
//     //   const directions = await directionsService.route({
//     //     origin: {
//     //       lat: 30.732453,
//     //       lng: 76.763341,
//     //     },
//     //     destination: {
//     //       lat: 30.739392,
//     //       lng: 76.773517,
//     //     },
//     //     travelMode: window.google.maps.TravelMode.DRIVING,
//     //     // waypoints: [
//     //     //   {
//     //     //     location: new window.google.maps.LatLng(13.014323, 77.652303),
//     //     //   },
//     //     //   {
//     //     //     location: new window.google.maps.LatLng(13.014909, 77.656211),
//     //     //   },
//     //     // ],
//     //   });
//     //   this.setState({
//     //     directions,
//     //     isDirectionSet: true,
//     //   });
//     // }
//   }

//   componentDidMount() {
//     //const directionsService = new google.maps.DirectionsService();

//     const directionsService = new window.google.maps.DirectionsService();
//     const directions = directionsService.route({
//       travelMode: window.google.maps.TravelMode.DRIVING,
//       // waypoints: [
//       //   {
//       //     location: new window.google.maps.LatLng(13.014323, 77.652303),
//       //   },
//       //   {
//       //     location: new window.google.maps.LatLng(13.014909, 77.656211),
//       //   },
//       // ],
//     });
//     this.setState(directions);
//   }

//   render() {
//     //let image = RunningTruck;
//     return (
//       <section className="googleMapWidth">
//         <div
//           style={{
//             marginTop: "0.2rem",
//             marginLeft: "2.3rem",
//             marginRight: "1.7rem",
//           }}
//         >
//           {window.google === undefined ? (
//             <LoadScript>
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={15}
//               >
//                 {/* Child components, such as markers, info windows, etc. */}
//                 {/* <Marker
//                   position={position}
//                   animation={window.google.maps.Animation.DROP}
//                   icon={{
//                     url: '../../assets/google_start_marker_green.svg',
//                     //scaledSize: { width: 32, height: 32 },
//                   }}
//                 /> */}
//                 {/* <DirectionsRenderer directions={this.state.directions} /> */}
//               </GoogleMap>
//             </LoadScript>
//           ) : (
//             <GoogleMap
//               mapContainerStyle={containerStyle}
//               center={center}
//               zoom={11}
//             >
//               <DirectionsRenderer
//                 directions={this.state.directions}
//                 options={{ suppressMarkers: true }}
//               />
//               <Marker
//                 position={this.state.origin}
//                 icon={{
//                   url: require("../../assets/start_marker_green_2x.png"),
//                   height: "20px",
//                 }}
//               />
//               <Marker
//                 position={this.state.destination}
//                 icon={{
//                   url: require("../../assets/orange-circle.svg"),
//                 }}
//               />

//               {this.state.waypts.map((waypt) => (
//                 <Marker
//                   position={{
//                     lat: waypt.latitude,
//                     lng: waypt.longitude,
//                   }}
//                   icon={{
//                     url: require("../../assets/stop_dot_red.png"),
//                     fillColor: "#f9f9f9",
//                   }}
//                   label={""}
//                 />
//               ))}
//               {this.state.waypts1.map((waypt1) => (
//                 <Marker
//                   position={{
//                     lat: waypt1.latitude,
//                     lng: waypt1.longitude,
//                   }}
//                   icon={{
//                     url: require("../../assets/images/running truck/RunningTruck.png"),
//                     fillColor: "#f9f9f9",
//                   }}
//                   label={""}
//                 />
//               ))}
//             </GoogleMap>

//             // <GoogleMap
//             //   mapContainerStyle={containerStyle}
//             //   center={center}
//             //   zoom={15}
//             //   // defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//             //   // defaultZoom={13}
//             // >
//             //   {this.state.directions != null && (
//             //     <DirectionsRenderer
//             //       directions={this.state.directions}
//             //       options={{ suppressMarkers: true }}
//             //     />
//             //   )}
//             //   <Marker
//             //     position={this.state.origin}
//             //     icon={{
//             //       url: require("../../assets/start_marker_green.jpg"),
//             //     }}
//             //   />
//             //   <Marker
//             //     position={this.state.destination}
//             //     icon={{
//             //       url: require("../../assets/start_marker_green.jpg"),
//             //     }}
//             //   />
//             //   {this.state.waypts.map((waypt) => (
//             //     <Marker
//             //       position={{
//             //         lat: waypt.location.lat,
//             //         lng: waypt.location.lng,
//             //       }}
//             //       icon={{
//             //         url: require("../../assets/stop_marker_red.jpg"),
//             //         fillColor: "#f9f9f9",
//             //       }}
//             //       label={""}
//             //     />
//             //   ))}
//             // </GoogleMap>
//           )}
//         </div>
//       </section>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     liveTracking: state.liveTracking,
//   };
// };

// export default connect(mapStateToProps, {})(withRouter(LiveTrackingMap));

// import React, { Component } from "react";

// //import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
// //import RunningTruck from "../../assets/google_start_marker_green.svg";
// //import Footer from "../footer";
// import {
//   DirectionsRenderer,
//   GoogleMap,
//   LoadScript,
//   Marker,
// } from "@react-google-maps/api";

// const image = require("./../../assets/images/map_dashboard/running-truck.svg");

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 30.732198,
//   lng: 76.763133,
// };

// const position = {
//   lat: 12.356374161329612,
//   lng: 76.61609351094737,
// };

// class LiveTrackingMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedVehicle: "KA 03 JL 3362",
//       filteredBy: "Vehicle",
//       durations: "Today",
//       directions: [],
//       isDirectionSet: false,
//       origin: {
//         lat: 30.732453,
//         lng: 76.763341,
//       },
//       destination: {
//         lat: 30.733261,
//         lng: 76.779307,
//       },
//       waypts: [],
//       waypts1: [],
//       // waypts: [
//       //   {
//       //     location: { lat: 30.729753, lng: 76.773817 },
//       //   },
//       //   {
//       //     location: { lat: 30.726917, lng: 76.769177 },
//       //   },
//       // ],
//       // waypts1: [
//       //   {
//       //     location: { lat: 30.731029, lng: 76.776008 },
//       //   },
//       // ],
//     };
//   }

//   handleVehicleOnChange = (event) => {
//     this.setState({ selectedVehicle: event.target.value });
//   };

//   handleFilteredByOnChange = (event) => {
//     this.setState({ filteredBy: event.target.value });
//   };

//   handleDurationsOnChange = (event) => {
//     this.setState({ durations: event.target.value });
//   };

//   //   getVehicleNumberDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-vehicle-number">
//   //           Vehicle Number
//   //         </InputLabel>
//   //         <Select
//   //           labelId="live-tracking-vehicle-number"
//   //           id="live-tracking-vehicle-number-select"
//   //           value={this.state.selectedVehicle}
//   //           label="selectedVehicle"
//   //           onChange={this.handleVehicleOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="KA 03 JL 3362">KA 03 JL 3362</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getFilteredByDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-filtered-by">Filtered By</InputLabel>
//   //         <Select
//   //           labelId="live-tracking-filtered-by"
//   //           id="live-tracking-filtered-by-select"
//   //           value={this.state.filteredBy}
//   //           label="filteredBy"
//   //           onChange={this.handleFilteredByOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="Vehicle">Vehicle</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getDurationsDropDown = () => {
//   //     return (
//   //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//   //         <InputLabel id="live-tracking-durations">Durations</InputLabel>
//   //         <Select
//   //           labelId="live-tracking-durations"
//   //           id="live-tracking-durations-select"
//   //           value={this.state.durations}
//   //           label="durations"
//   //           onChange={this.handleDurationsOnChange}
//   //         >
//   //           <option value=""></option>
//   //           <option value="Today">Today</option>
//   //         </Select>
//   //       </FormControl>
//   //     );
//   //   };

//   //   getBusInformation = () => {
//   //     return (
//   //       <React.Fragment>
//   //         <div className="live-tracking--bus-number">KA 03 JL 3362</div>
//   //         <div className="live-tracking--bus-description">Skyline EV</div>
//   //       </React.Fragment>
//   //     );
//   //   };

//   //   getLabel = (key, value) => {
//   //     return (
//   //       <React.Fragment>
//   //         <div className="live-tracking--header">{key}</div>
//   //         <div className="live-tracking--label">{value}</div>
//   //       </React.Fragment>
//   //     );
//   //   };

//   componentWillReceiveProps(nextProps) {
//     console.log("next props",this.props.stopsData)
//     console.log("next props1",this.props.vehData)
//     if (this.props !== nextProps) {
//       this.setState({ waypts: this.props.stopsData });
//       this.setState({ waypts1: [this.props.vehData] });
//     }
//   }

//   async componentDidUpdate(prevProps, prevState, snapshot) {
//     // console.log("map check", this.props.vehData);
//     // this.setState({ waypts: this.props.stopsData });
//     // this.setState({ waypts1: [this.props.vehData] });
//     if (!this.state.isDirectionSet) {
//       const directionsService = new window.google.maps.DirectionsService();
//       const directions = await directionsService.route({
//         origin: {
//           lat: 30.732453,
//           lng: 76.763341,
//         },
//         destination: {
//           lat: 30.733261,
//           lng: 76.779307,
//         },
//         travelMode: window.google.maps.TravelMode.DRIVING,
//         // waypoints: [
//         //   {
//         //     location: new window.google.maps.LatLng(13.014323, 77.652303),
//         //   },
//         //   {
//         //     location: new window.google.maps.LatLng(13.014909, 77.656211),
//         //   },
//         // ],
//       });
//       this.setState({
//         directions,
//         isDirectionSet: true,
//       });
//     }
//   }

//   componentDidMount() {
//     //const directionsService = new google.maps.DirectionsService();

//     const directionsService = new window.google.maps.DirectionsService();
//     const directions = directionsService.route({
//       travelMode: window.google.maps.TravelMode.DRIVING,
//       // waypoints: [
//       //   {
//       //     location: new window.google.maps.LatLng(13.014323, 77.652303),
//       //   },
//       //   {
//       //     location: new window.google.maps.LatLng(13.014909, 77.656211),
//       //   },
//       // ],
//     });
//     this.setState(directions);
//   }

//   render() {
//     //let image = RunningTruck;
//     return (
//       <section className="live-tracking">
//         <div
//           style={{
//             marginTop: "0.2rem",
//            // marginLeft: "2.3rem",
//            // marginRight: "1.7rem",
//           }}
//         >
//           {window.google === undefined ? (
//             <LoadScript>
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={15}
//               >
//                 {/* Child components, such as markers, info windows, etc. */}
//                 {/* <Marker
//                   position={position}
//                   animation={window.google.maps.Animation.DROP}
//                   icon={{
//                     url: '../../assets/google_start_marker_green.svg',
//                     //scaledSize: { width: 32, height: 32 },
//                   }}
//                 /> */}
//                 {/* <DirectionsRenderer directions={this.state.directions} /> */}
//               </GoogleMap>
//             </LoadScript>
//           ) : (
//             <GoogleMap
//               mapContainerStyle={containerStyle}
//               center={center}
//               zoom={15}
//             >
//               {/* <DirectionsRenderer
//                 directions={this.state.directions}
//                 options={{ suppressMarkers: true }}
//               />
//               <Marker
//                 position={this.state.origin}
//                 icon={{
//                   url: require("../../assets/start_marker_green_2x.png"),
//                   height: "20px",
//                 }}
//               />
//               <Marker
//                 position={this.state.destination}
//                 icon={{
//                   url: require("../../assets/orange-circle.svg"),
//                 }}
//               /> */}
//               {this.state.waypts.map((waypt) => (
//                 <Marker
//                   position={{
//                     lat: waypt.latitude,
//                     lng: waypt.longitude,
//                   }}
//                   icon={{
//                     url: require("../../assets/stop_dot_red.png"),
//                     fillColor: "#f9f9f9",
//                   }}
//                   label={""}
//                 />
//               ))}
//               {this.state.waypts1.map((waypt1) => (
//                 <Marker
//                   position={{
//                     lat: waypt1.latitude,
//                     lng: waypt1.longitude,
//                   }}
//                   icon={{
//                     url: require("../../assets/images/running truck/RunningTruck.png"),
//                     fillColor: "#f9f9f9",
//                   }}
//                   label={""}
//                 />
//               ))}
//             </GoogleMap>

//             // <GoogleMap
//             //   mapContainerStyle={containerStyle}
//             //   center={center}
//             //   zoom={15}
//             //   // defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//             //   // defaultZoom={13}
//             // >
//             //   {this.state.directions != null && (
//             //     <DirectionsRenderer
//             //       directions={this.state.directions}
//             //       options={{ suppressMarkers: true }}
//             //     />
//             //   )}
//             //   <Marker
//             //     position={this.state.origin}
//             //     icon={{
//             //       url: require("../../assets/start_marker_green.jpg"),
//             //     }}
//             //   />
//             //   <Marker
//             //     position={this.state.destination}
//             //     icon={{
//             //       url: require("../../assets/start_marker_green.jpg"),
//             //     }}
//             //   />
//             //   {this.state.waypts.map((waypt) => (
//             //     <Marker
//             //       position={{
//             //         lat: waypt.location.lat,
//             //         lng: waypt.location.lng,
//             //       }}
//             //       icon={{
//             //         url: require("../../assets/stop_marker_red.jpg"),
//             //         fillColor: "#f9f9f9",
//             //       }}
//             //       label={""}
//             //     />
//             //   ))}
//             // </GoogleMap>
//           )}
//         </div>
//       </section>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     liveTracking: state.liveTracking,
//   };
// };

// export default connect(mapStateToProps, {})(withRouter(LiveTrackingMap));

import React, { Component } from "react";
import "./index.scss";
//import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
//import RunningTruck from "../../assets/google_start_marker_green.svg";
//import Footer from "../footer";
import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const image = require("./../../assets/images/map_dashboard/running-truck.svg");

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.732198,
  lng: 76.763133,
};

const position = {
  lat: 12.356374161329612,
  lng: 76.61609351094737,
};
let waypointsResponse = [];
class LiveTrackingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVehicle: "KA 03 JL 3362",
      filteredBy: "Vehicle",
      durations: "Today",
      directions: [],
      isDirectionSet: false,
      arrayLength: "",
      origin: {},
      destination: {},
      mapResponse: [],
      stopData: [],
      vehicleData: [],
      center: "",
      //   lat: 30.732453,
      //   lng: 76.763341,
      // },
      // destination: {
      //   lat: 30.739392,
      //   lng: 76.773517,
      // },

      waypts: [],
      waypts1: [],
      // waypts: [
      //   {
      //     location: { lat: 30.729753, lng: 76.773817 },
      //   },
      //   {
      //     location: { lat: 30.726917, lng: 76.769177 },
      //   },
      // ],
      // waypts1: [
      //   {
      //     location: { lat: 30.731029, lng: 76.776008 },
      //   },
      // ],
    };
  }

  handleVehicleOnChange = (event) => {
    this.setState({ selectedVehicle: event.target.value });
  };

  handleFilteredByOnChange = (event) => {
    this.setState({ filteredBy: event.target.value });
  };

  handleDurationsOnChange = (event) => {
    this.setState({ durations: event.target.value });
  };

  //   getVehicleNumberDropDown = () => {
  //     return (
  //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
  //         <InputLabel id="live-tracking-vehicle-number">
  //           Vehicle Number
  //         </InputLabel>
  //         <Select
  //           labelId="live-tracking-vehicle-number"
  //           id="live-tracking-vehicle-number-select"
  //           value={this.state.selectedVehicle}
  //           label="selectedVehicle"
  //           onChange={this.handleVehicleOnChange}
  //         >
  //           <option value=""></option>
  //           <option value="KA 03 JL 3362">KA 03 JL 3362</option>
  //         </Select>
  //       </FormControl>
  //     );
  //   };

  //   getFilteredByDropDown = () => {
  //     return (
  //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
  //         <InputLabel id="live-tracking-filtered-by">Filtered By</InputLabel>
  //         <Select
  //           labelId="live-tracking-filtered-by"
  //           id="live-tracking-filtered-by-select"
  //           value={this.state.filteredBy}
  //           label="filteredBy"
  //           onChange={this.handleFilteredByOnChange}
  //         >
  //           <option value=""></option>
  //           <option value="Vehicle">Vehicle</option>
  //         </Select>
  //       </FormControl>
  //     );
  //   };

  //   getDurationsDropDown = () => {
  //     return (
  //       <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
  //         <InputLabel id="live-tracking-durations">Durations</InputLabel>
  //         <Select
  //           labelId="live-tracking-durations"
  //           id="live-tracking-durations-select"
  //           value={this.state.durations}
  //           label="durations"
  //           onChange={this.handleDurationsOnChange}
  //         >
  //           <option value=""></option>
  //           <option value="Today">Today</option>
  //         </Select>
  //       </FormControl>
  //     );
  //   };

  //   getBusInformation = () => {
  //     return (
  //       <React.Fragment>
  //         <div className="live-tracking--bus-number">KA 03 JL 3362</div>
  //         <div className="live-tracking--bus-description">Skyline EV</div>
  //       </React.Fragment>
  //     );
  //   };

  //   getLabel = (key, value) => {
  //     return (
  //       <React.Fragment>
  //         <div className="live-tracking--header">{key}</div>
  //         <div className="live-tracking--label">{value}</div>
  //       </React.Fragment>
  //     );
  //   };

  // shouldComponentUpdate(prevProps, prevState) {
  //   if (prevState.value !== this.state.value) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  async componentWillReceiveProps(nextProps) {
    let arrSize = "";
    this.setState({
      isDirectionSet: true,
    });
    if (
      nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi?.result
        ?.data?.responseData
    ) {
      // console.log(
      //   "stops data",
      //   nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
      //     .data.responseData.stoppages
      // );
      this.setState({
        stopData:
          nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
            .data.responseData.stoppages,
      });
      let res =
        nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
          .data.responseData.stoppages;
      waypointsResponse = [];
      {
        res.map((item, index) =>
          waypointsResponse.push({
            location: {
              lat: res[index].latitude,
              lng: res[index].longitude,
            },
          })
        );
      }
      //  console.log("data twice", waypointsResponse);
      this.setState({
        vehicleData: [
          nextProps.LiveTripTrackMapDetailsApi.liveTripTrackMapDetailsApi.result
            .data.responseData.vehicleCurrentLocation,
        ],
      });
      this.setState({
        center: {
          lat: this.state.vehicleData[0].latitude,
          lng: this.state.vehicleData[0].longitude,
        },
      });
      // const center = {
      //   lat: 30.732198,
      //   lng: 76.763133,
      // };
      arrSize = this.state.stopData.length;

      let datarr = "";

      //  this.setState({ waypts: this.state.stopData });
      this.setState({
        origin: {
          lat: this.state.stopData[0].latitude,
          lng: this.state.stopData[0].longitude,
        },
      });
      this.setState({
        destination: {
          lat: this.state.stopData[arrSize - 1].latitude,
          lng: this.state.stopData[arrSize - 1].longitude,
        },
      });
      datarr = this.state.stopData;
      // console.log("way direction", this.state.stopData);

      // console.log("way", waypointsResponse);

      const directionsService = new window.google.maps.DirectionsService();
      const directions = await directionsService.route({
        origin: {
          lat: this.state.stopData[0].latitude,
          lng: this.state.stopData[0].longitude,
        },
        destination: {
          lat: this.state.stopData[arrSize - 1].latitude,
          lng: this.state.stopData[arrSize - 1].longitude,
        },
        waypoints: waypointsResponse,
        // [
        //   {
        //     location: { lat: 30.729753, lng: 76.773817 },
        //   },
        //   {
        //     location: { lat: 30.726917, lng: 76.769177 },
        //   },
        // ],

        travelMode: window.google.maps.TravelMode.DRIVING,
      });
      this.setState({
        directions,
        isDirectionSet: true,
      });

      // if (!this.state.isDirectionSet) {
      //   console.log("way2", waypointsResponse);
      // }
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log("map check", prevProps);
    // this.setState({ waypts: this.props.stopsData });
    // this.setState({ waypts1: [this.props.vehData] });
    // if (!this.state.isDirectionSet) {
    //   const directionsService = new window.google.maps.DirectionsService();
    //   const directions = await directionsService.route({
    //     origin: {
    //       lat: 30.732453,
    //       lng: 76.763341,
    //     },
    //     destination: {
    //       lat: 30.739392,
    //       lng: 76.773517,
    //     },
    //     travelMode: window.google.maps.TravelMode.DRIVING,
    //     // waypoints: [
    //     //   {
    //     //     location: new window.google.maps.LatLng(13.014323, 77.652303),
    //     //   },
    //     //   {
    //     //     location: new window.google.maps.LatLng(13.014909, 77.656211),
    //     //   },
    //     // ],
    //   });
    //   this.setState({
    //     directions,
    //     isDirectionSet: true,
    //   });
    // }
  }

  componentDidMount() {
    //const directionsService = new google.maps.DirectionsService();
    // const directionsService = new window.google.maps.DirectionsService();
    // const directions = directionsService.route({
    //   travelMode: window.google.maps.TravelMode.DRIVING,
    //   // waypoints: [
    //   //   {
    //   //     location: new window.google.maps.LatLng(13.014323, 77.652303),
    //   //   },
    //   //   {
    //   //     location: new window.google.maps.LatLng(13.014909, 77.656211),
    //   //   },
    //   // ],
    // });
    // this.setState(directions);
  }

  render() {
    //let image = RunningTruck;
    return (
      <section className="">
        <div
          style={{
            marginTop: "0.2rem",
            //  marginLeft: "2.3rem",
            marginRight: "0.6rem",
          }}
        >
          {window.google === undefined ? (
            <LoadScript>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                {/* Child components, such as markers, info windows, etc. */}
                {/* <Marker
                  position={position}
                  animation={window.google.maps.Animation.DROP}
                  icon={{
                    url: '../../assets/google_start_marker_green.svg',
                    //scaledSize: { width: 32, height: 32 },
                  }}
                /> */}
                {/* <DirectionsRenderer directions={this.state.directions} /> */}
              </GoogleMap>
            </LoadScript>
          ) : (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={this.state.center}
              zoom={11}
            >
              <DirectionsRenderer
                directions={this.state.directions}
                options={{ suppressMarkers: true }}
              />
              <Marker
                position={this.state.origin}
                icon={{
                  url: require("../../assets/start_marker_green_2x.png"),
                  height: "20px",
                }}
              />
              <Marker
                position={this.state.destination}
                icon={{
                  url: require("../../assets/orange-circle.svg"),
                }}
              />

              {/* <Marker
                position={waypoints}
                icon={{
                  url: require("../../assets/stop_dot_red.png"),
                  fillColor: "#f9f9f9",
                }}
                label={""}
              /> */}

              {this.state.stopData.map((waypt) => (
                <Marker
                  position={{
                    lat: waypt.latitude,
                    lng: waypt.longitude,
                  }}
                  icon={{
                    url: require("../../assets/stop_dot_red.png"),
                    fillColor: "#f9f9f9",
                  }}
                  label={""}
                />
              ))}
              {this.state.vehicleData.map((veh) => (
                <Marker
                  position={{
                    lat: veh.latitude,
                    lng: veh.longitude,
                  }}
                  icon={{
                    url: require("../../assets/images/running truck/RunningTruck.png"),
                    fillColor: "#f9f9f9",
                  }}
                  label={""}
                />
              ))}
            </GoogleMap>

            // <GoogleMap
            //   mapContainerStyle={containerStyle}
            //   center={center}
            //   zoom={15}
            //   // defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
            //   // defaultZoom={13}
            // >
            //   {this.state.directions != null && (
            //     <DirectionsRenderer
            //       directions={this.state.directions}
            //       options={{ suppressMarkers: true }}
            //     />
            //   )}
            //   <Marker
            //     position={this.state.origin}
            //     icon={{
            //       url: require("../../assets/start_marker_green.jpg"),
            //     }}
            //   />
            //   <Marker
            //     position={this.state.destination}
            //     icon={{
            //       url: require("../../assets/start_marker_green.jpg"),
            //     }}
            //   />
            //   {this.state.waypts.map((waypt) => (
            //     <Marker
            //       position={{
            //         lat: waypt.location.lat,
            //         lng: waypt.location.lng,
            //       }}
            //       icon={{
            //         url: require("../../assets/stop_marker_red.jpg"),
            //         fillColor: "#f9f9f9",
            //       }}
            //       label={""}
            //     />
            //   ))}
            // </GoogleMap>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    liveTracking: state.liveTracking,
  };
};

export default connect(mapStateToProps, {})(withRouter(LiveTrackingMap));
