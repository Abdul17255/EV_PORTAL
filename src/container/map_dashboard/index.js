// // import React, { Component } from "react";
// // import MapAction from "../../component/mapaction";
// // import Map from "../map/index";
// // import Summary from "../summary";
// // import "../map_dashboard/index.scss";
// // import Toggle from "react-bootstrap-toggle";
// // import SubMenuHeader from "../sub_menu_header/index";
// // class mapDashboard extends Component {
// //   constructor() {
// //     super();
// //     this.state = { toggleActive: false };
// //     this.onToggle = this.onToggle.bind(this);
// //   }

// //   onToggle() {
// //     this.setState({ toggleActive: !this.state.toggleActive });
// //   }
// //   render() {
// //     return (
// //       <div className="mapdashboard">
// //         <div className="mapdashboard-view">
// //           <button className="mapview" onClick={this.onToggle}>
// //             <img src={require("../../assets/images/summary/summary.png")} />
// //             Map
// //           </button>
// //           <button className="summaryview" onClick={this.onToggle}>
// //             <img src={require("../../assets/images/summary/summary.png")} />
// //             Summary
// //           </button>
// //         </div>
// //         {/* <div className="mapsubmenu">
// //           <SubMenuHeader visible="true" />
// //         </div> */}
// //         <div className="mapaction">
// //           <MapAction />
// //         </div>
// //         <div className="hr">
// //           <hr />
// //         </div>
// //         <div className="map-view">
// //           {/* <Toggle
// //           onClick={this.onToggle}
// //           // on={<Map/>}
// //           // off={<Summary/>}
// //           //size="lg"
// //          // offstyle="danger"
// //           //active={this.state.toggleActive}
// //         /> */}
// //           {this.state.toggleActive == true ? <Summary /> : <Map />}
// //           {/* <Map/> */}
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default mapDashboard;
// // import React, { Component } from "react";

// // import { connect } from "react-redux";
// // import { withRouter } from "react-router";
// // import MarkerClusterer from "@google/markerclusterer";
// // import RunningTruck from "../../assets/images/map_dashboard/running-truck.svg";
// // import ChargingSelected from "../../assets/images/map_dashboard/charger-icon.svg";
// // import RunningTruckSelected from "../../assets/images/map_dashboard/running-truck.svg";
// // import _ from "underscore";
// // import lodash from "lodash";
// // import moment from "moment";
// // import { mapOptions, mapStyle } from "../../constants/map-constants";

// // // API chargerMapDashboardApiActions
// // import chargerMapDashboardApiActions from "../../redux/charger_map_dashboard/actions";
// // import vehicleMapDashboardApiActions from "../../redux/vehicle_map_dashboard/actions";

// // // Scss
// // import "./index.scss";

// // const { getChargerMapDashboardAPI } = chargerMapDashboardApiActions;
// // const { getVehicleMapDashboardAPI } = vehicleMapDashboardApiActions;

// // // const vehicleResp = [
// // //   {
// // //     location:
// // //       "51,shivranjni society, near shivranjni cross road, satellite road, satellite, Satellite, Ahmedabad, Gujarat 380015, India",
// // //     current_timestamp: "2022-09-27 12:04:02",
// // //     latitude: "26.125294955116775",
// // //     longitude: "85.37658004576853",
// // //     reg_no: "L031",
// // //     soc: 57,
// // //     status: "RUNNING",
// // //   },
// // //   {
// // //     location:
// // //       "Central Workshop, Pariwahan Parishar,Near Phulwarisharif Jail,Phulwarisharif,Patna 800014",
// // //     current_timestamp: "2022-09-27 12:04:02",
// // //     latitude: "23.0613757",
// // //     longitude: "72.5433485",
// // //     reg_no: "L031",
// // //     soc: 57,
// // //     status: "RUNNING",
// // //   },
// // // ];

// // // const chargerResp = [
// // //   {
// // //     location:
// // //       "Central Workshop, Pariwahan Parishar,Near Phulwarisharif Jail,Phulwarisharif,Patna 800014",
// // //     latitude: "25.590333",
// // //     longitude: "85.078861",
// // //     charge_station: "VE001",
// // //     status: "CHARGING",
// // //   },
// // //   {
// // //     location:
// // //       "Central Workshop, Pariwahan Parishar,Near Phulwarisharif Jail,Phulwarisharif,Patna 800014",
// // //     latitude: "30.7370178",
// // //     longitude: "76.7780808",
// // //     charge_station: "VE002",
// // //     status: "CHARGING",
// // //   },
// // // ];

// // class mapDashboard extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       vehicleToBeTracked: "",
// //       vehicleResponse: [],
// //       chargerResponse: [],
// //     };
// //     this.zoomScaleSize = 40;
// //     this.getChargerMap = this.getChargerMap.bind(this);
// //   }

// //   componentDidMount() {
// //     this.getChargerMap();
// //     this.getVehicleMap();
// //     this.setState({
// //       //  mapData: vehicleResp,
// //       initialZoom: 15,
// //     });
// //     this.initalizeMap();
// //     this.checkIfZoomToVehicleIsNeededAndDoIt(this.props);
// //     if (this.props) {
// //       //   this.setMarkersInMap(vehicleResp, chargerResp);
// //       this.setMarkersInMap(
// //         this.props?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
// //           ?.data,
// //         this.props?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data
// //       );
// //     }
// //   }

// //   getChargerMap = async () => {
// //     let payLoad = {
// //       api_key: "MAP_DASHBOARD_CHARGER",
// //     };

// //     await this.props.getChargerMapDashboardAPI(payLoad);
// //   };

// //   getVehicleMap = async () => {
// //     let payLoad = {
// //       api_key: "MAP_DASHBOARD_VEHICLE",
// //     };

// //     await this.props.getVehicleMapDashboardAPI(payLoad);
// //   };

// //   componentWillReceiveProps(nextProps) {
// //     if (this.props !== nextProps) {
// //       const veh =
// //         nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result?.data;
// //       const chrg =
// //         nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data;
// //       //const { mapData } = this.state;
// //       this.setState({
// //         vehicleResponse:
// //           nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
// //             ?.data,
// //       });
// //       this.setState({
// //         chargerResponse:
// //           nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
// //             ?.data,
// //       });
// //       var mapdata = this.state.mapData;
// //       var isFindEqual = _.isEqual(
// //         _.sortBy(this.state.mapData)
// //         //  _.sortBy(nextProps.mapData)
// //       );
// //       if (!isFindEqual) {
// //         // mapdata = nextProps.mapData;
// //         if (!this.map) {
// //           this.setState({
// //             mapData: [],
// //           });
// //           this.initalizeMap();
// //         } else {
// //           this.setState({
// //             mapData: mapdata,
// //           });
// //         }
// //         this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
// //         this.clearMarkers();
// //         this.setMarkersInMap(veh, chrg);
// //       } else if (
// //         this.props.currentTimestampStatusSelected !==
// //           nextProps.currentTimestampStatusSelected ||
// //         this.props.currentTimestampVehicleSelected !==
// //           nextProps.currentTimestampVehicleSelected
// //       ) {
// //         this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
// //       }
// //     }
// //   }

// //   clearMarkers() {
// //     if (this.markerCluster) {
// //       let markers = this.markerCluster.getMarkers();
// //       for (let i = 0; i < markers.length; i++) {
// //         markers[i].setMap(null);
// //       }
// //       markers = null;
// //       this.markerCluster.clearMarkers();
// //       this.markerCluster = null;
// //     }
// //   }

// //   checkIfZoomToVehicleIsNeededAndDoIt(nextProps) {
// //     let {
// //       currentTimestampStatusSelected,
// //       currentTimestampVehicleSelected,
// //       mapData,
// //     } = nextProps;

// //     if (this.state.vehicleResponse) {
// //       let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

// //       currentTimestampVehicleSelected =
// //         currentTimestampVehicleSelected != null
// //           ? currentTimestampVehicleSelected
// //           : 0;
// //       currentTimestampStatusSelected =
// //         currentTimestampStatusSelected != null
// //           ? currentTimestampStatusSelected
// //           : 0;

// //       if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
// //         if (
// //           this.state.currentTimestampStatusSelected ===
// //             currentTimestampStatusSelected &&
// //           lodash.isEqual(this.state.mapData, this.state.vehicleResponse)
// //         ) {
// //           return;
// //         }

// //         if (this.state.vehicleResponse.length > 0) {
// //           let bounds = new window.google.maps.LatLngBounds();
// //           for (let i = 0; i < this.state.vehicleResponse.length; i++) {
// //             let latlngBound = new window.google.maps.LatLng(
// //               this.state.vehicleResponse[i].latitude,
// //               this.state.vehicleResponse[i].longitude
// //             );
// //             bounds.extend(latlngBound);
// //           }
// //           this.map.fitBounds(bounds);
// //           if (this.state.vehicleResponse.length === 1) {
// //             this.zoomMap(15);
// //           }
// //           let vehdata = this.state.vehicleResponse;
// //           this.setState({ currentTimestampStatusSelected, vehdata });
// //           return;
// //         } else {
// //           this.map.setCenter(defaultLatlng);
// //           window.google.maps.event.addListenerOnce(
// //             this.map,
// //             "bounds_changed",
// //             () => {
// //               this.map.setZoom(0);
// //             }
// //           );
// //         }
// //       } else if (currentTimestampVehicleSelected !== 0) {
// //         if (
// //           this.state.currentTimestampVehicleSelected ===
// //           currentTimestampVehicleSelected
// //         ) {
// //           return;
// //         }

// //         let vehicleToBeTracked = nextProps.vehicleToBeTracked;
// //         let vehiclePositionLatLng = { lat: 0, lng: 0 };
// //         let zoomtoVehicle = false;
// //         if (vehicleToBeTracked && vehicleToBeTracked !== "") {
// //           let vehicletoBeTrackedData = this.state.vehicleResponse.find(
// //             (data) =>
// //               data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
// //           );
// //           if (vehicletoBeTrackedData) {
// //             vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
// //             vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
// //             zoomtoVehicle = true;
// //           }
// //         } else {
// //           this.setPositionOfMap(this.state.vehicleResponse);
// //           return;
// //         }

// //         if (zoomtoVehicle) {
// //           this.setState({
// //             vehicleToBeTracked,
// //             currentTimestampVehicleSelected,
// //           });
// //           this.zoomToVehicle(vehiclePositionLatLng);
// //           return true;
// //         }
// //         return false;
// //       }
// //     }

// //     // charger response

// //     if (this.state.chargerResponse) {
// //       let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

// //       currentTimestampVehicleSelected =
// //         currentTimestampVehicleSelected != null
// //           ? currentTimestampVehicleSelected
// //           : 0;
// //       currentTimestampStatusSelected =
// //         currentTimestampStatusSelected != null
// //           ? currentTimestampStatusSelected
// //           : 0;

// //       if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
// //         if (
// //           this.state.currentTimestampStatusSelected ===
// //             currentTimestampStatusSelected &&
// //           lodash.isEqual(this.state.mapData, this.state.chargerResponse)
// //         ) {
// //           return;
// //         }

// //         if (this.state.chargerResponse.length > 0) {
// //           let bounds = new window.google.maps.LatLngBounds();
// //           for (let i = 0; i < this.state.chargerResponse.length; i++) {
// //             let latlngBound = new window.google.maps.LatLng(
// //               this.state.chargerResponse[i].latitude,
// //               this.state.chargerResponse[i].longitude
// //             );
// //             bounds.extend(latlngBound);
// //           }
// //           this.map.fitBounds(bounds);
// //           if (this.state.chargerResponse.length === 1) {
// //             this.zoomMap(15);
// //           }
// //           let chargerdata = this.state.chargerResponse;
// //           this.setState({ currentTimestampStatusSelected, chargerdata });
// //           return;
// //         } else {
// //           this.map.setCenter(defaultLatlng);
// //           window.google.maps.event.addListenerOnce(
// //             this.map,
// //             "bounds_changed",
// //             () => {
// //               this.map.setZoom(0);
// //             }
// //           );
// //         }
// //       } else if (currentTimestampVehicleSelected !== 0) {
// //         if (
// //           this.state.currentTimestampVehicleSelected ===
// //           currentTimestampVehicleSelected
// //         ) {
// //           return;
// //         }

// //         let vehicleToBeTracked = nextProps.vehicleToBeTracked;
// //         let vehiclePositionLatLng = { lat: 0, lng: 0 };
// //         let zoomtoVehicle = false;
// //         if (vehicleToBeTracked && vehicleToBeTracked !== "") {
// //           let vehicletoBeTrackedData = this.state.chargerResponse.find(
// //             (data) =>
// //               data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
// //           );
// //           if (vehicletoBeTrackedData) {
// //             vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
// //             vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
// //             zoomtoVehicle = true;
// //           }
// //         } else {
// //           this.setPositionOfMap(this.state.chargerResponse);
// //           return;
// //         }

// //         if (zoomtoVehicle) {
// //           this.setState({
// //             vehicleToBeTracked,
// //             currentTimestampVehicleSelected,
// //           });
// //           this.zoomToVehicle(vehiclePositionLatLng);
// //           return true;
// //         }
// //         return false;
// //       }
// //     }
// //   }

// //   zoomMap(zoomValue) {
// //     if (this.map) {
// //       let self = this;
// //       window.google.maps.event.addListenerOnce(
// //         this.map,
// //         "bounds_changed",
// //         () => {
// //           self.map.setZoom(zoomValue ? zoomValue : this.state.initialZoom);
// //         }
// //       );
// //     }
// //   }

// //   zoomToVehicle(location) {
// //     let self = this;
// //     let currentZoom = this.map.getZoom();
// //     this.map.setCenter({ lat: location.lat, lng: location.lng });
// //     if (currentZoom < this.state.initialZoom || !this.state.initialZoom) {
// //       window.google.maps.event.addListenerOnce(
// //         self.map,
// //         "bounds_changed",
// //         () => {
// //           self.map.setZoom(
// //             !this.state.initialZoom ? 15 : this.state.initialZoom
// //           );
// //         }
// //       );
// //     }
// //     // let bounds = new window.google.maps.LatLngBounds();
// //     // let latlngBound = new window.google.maps.LatLng(location);
// //     // bounds.extend(latlngBound);
// //     // this.map.fitBounds(bounds);
// //   }

// //   initalizeMap = () => {
// //     let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

// //     this.map = new window.google.maps.Map(
// //       document.getElementById("map"),
// //       mapOptions(defaultLatlng, {
// //         zoom: this.props.oldMapPostionData
// //           ? this.props.oldMapPostionData.zoom
// //           : 4,
// //       })
// //     );

// //     this.map.addListener("zoom_changed", () => {
// //       let center = this.map.getCenter();
// //       this.props.saveCurrentMapPosition({
// //         zoom: this.map.getZoom(),
// //         lat: center.lat(),
// //         lng: center.lng(),
// //       });
// //     });

// //     this.map.addListener("center_changed", () => {
// //       let center = this.map.getCenter();
// //       this.props.saveCurrentMapPosition({
// //         zoom: this.map.getZoom(),
// //         lat: center.lat(),
// //         lng: center.lng(),
// //       });
// //     });
// //   };

// //   setPositionOfMap = (data) => {
// //     this.loc = [];

// //     //to maintain map's position on each auto refresh
// //     if (this.props.oldMapPostionData) {
// //       this.map.setCenter({
// //         lat: this.props.oldMapPostionData.lat,
// //         lng: this.props.oldMapPostionData.lng,
// //       });
// //       return;
// //     }

// //     if (data && data.length > 0) {
// //       this.map.setCenter({ lat: data[0].latitude, lng: data[0].longitude });
// //     } else {
// //       return;
// //     }
// //   };

// //   getImage = (status) => {
// //     let defaultImage,
// //       activeImage,
// //       vehiclestatus = status.toLowerCase();
// //     // if (vehiclestatus === "warning") {
// //     //   defaultImage = warningTruck;
// //     //   activeImage = warningTruckSelected;
// //     // } else if (vehiclestatus === "service") {
// //     //   defaultImage = serviceTruck;
// //     //   activeImage = serviceTruckSelected;
// //     // } else
// //     if (vehiclestatus === "running") {
// //       defaultImage = RunningTruck;
// //       activeImage = RunningTruckSelected;
// //     } else if (vehiclestatus === "charging") {
// //       defaultImage = ChargingSelected;
// //       activeImage = ChargingSelected;
// //     }
// //     // else if (vehiclestatus === "others") {
// //     //   defaultImage = otherTruck;
// //     //   activeImage = OthertruckSelected;
// //     // }
// //     const imageObject = {
// //       default: defaultImage,
// //       active: activeImage,
// //     };
// //     return imageObject;
// //   };

// //   setMarkersInMap = (data, data1) => {
// //     try {
// //       if (data && data.length > 0) {
// //         const self = this;
// //         const infowindow = new window.google.maps.InfoWindow({});
// //         const markers = [];
// //         let marker;
// //         let //zoomHandlers = [],
// //           clickHandlers = [];
// //         for (let i = 0; i < data.length; i++) {
// //           const status = data[i].status;
// //           let markerimage = self.getImage(status);
// //           marker = new window.google.maps.Marker({
// //             position: new window.google.maps.LatLng(
// //               data[i].latitude,
// //               data[i].longitude
// //             ),
// //             map: this.map,
// //             icon: {
// //               url: markerimage.default,
// //               anchor: new window.google.maps.Point(25, 25),
// //               //labelOrigin: new window.google.maps.Point(10, -8)
// //             },
// //             //title: data[i].reg_no,
// //             //label: data[i].reg_no,
// //             title:
// //               "Registration Number : " +
// //               data[i].reg_no +
// //               "\n" +
// //               "SOC : " +
// //               data[i].soc +
// //               "(%)" +
// //               "\n" +
// //               "Timestamp : " +
// //               data[i].current_timestamp +
// //               "\n" +
// //               "Location : " +
// //               data[i].location,
// //           });

// //           clickHandlers.push(
// //             window.google.maps.event.addListener(
// //               marker,
// //               "click",
// //               (function (marker, i) {
// //                 return function () {
// //                   var d = new Date(data[i].current_timestamp);
// //                   var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
// //                   var contentString =
// //                     '<div id="iw-container">' +
// //                     '<div class="iw-container--title">Registration Number :&nbsp' +
// //                     data[i].reg_no +
// //                     "</div>" +
// //                     '<div class="iw-container--content">SOC :&nbsp' +
// //                     data[i].soc +
// //                     "</div>" +
// //                     '<div class="iw-container--content">Location :&nbsp' +
// //                     data[i].location +
// //                     "</div>" +
// //                     '<div class="iw-container--content">Time Stamp :&nbsp' +
// //                     data[i].current_timestamp +
// //                     "</div>" +
// //                     "</div>";

// //                   infowindow.setContent(contentString);
// //                   infowindow.open(self.map, marker);

// //                   for (var j = 0; j < markers.length; j++) {
// //                     let markerimageonclick = self.getImage(data[j].status);
// //                     markers[j].setIcon(markerimageonclick.default);
// //                   }
// //                   marker.setIcon(markerimage.active);
// //                   window.google.maps.event.addListener(
// //                     infowindow,
// //                     "closeclick",
// //                     function () {
// //                       infowindow.close();
// //                       marker.setIcon(markerimage.default);
// //                     }
// //                   );

// //                   if (infowindow.getMap()) {
// //                     //var vehicleId = data[i].vehicle_id;
// //                     //  if (self.props.healthCheckVehicleSelected) {
// //                     self.zoomToVehicle({
// //                       lat: data[i].latitude,
// //                       lng: data[i].longitude,
// //                     });
// //                     self.setState({ vehicleToBeTracked: data[i].reg_no });
// //                     self.props.healthCheckVehicleSelected(data[i]);
// //                   }
// //                   // }
// //                 };
// //               })(marker, i)
// //             )
// //           );
// //           markers.push(marker);
// //         }

// //         self.markerCluster = new MarkerClusterer(self.map, markers, {
// //           imagePath:
// //             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
// //         });
// //       }
// //       if (data1 && data1.length > 0) {
// //         const self = this;
// //         const infowindow = new window.google.maps.InfoWindow({});
// //         const markers = [];
// //         let marker;
// //         let //zoomHandlers = [],
// //           clickHandlers = [];
// //         for (let i = 0; i < data1.length; i++) {
// //           const status = data1[i].status;
// //           let markerimage = self.getImage(status);
// //           marker = new window.google.maps.Marker({
// //             position: new window.google.maps.LatLng(
// //               data1[i].latitude,
// //               data1[i].longitude
// //             ),
// //             map: this.map,
// //             icon: {
// //               url: markerimage.default,
// //               anchor: new window.google.maps.Point(25, 25),
// //               //labelOrigin: new window.google.maps.Point(10, -8)
// //             },
// //             //title: data[i].reg_no,
// //             //label: data[i].reg_no,
// //             title:
// //               "Location : " +
// //               data1[i].location +
// //               "\n" +
// //               "Charge Station : " +
// //               data1[i].charge_station,
// //           });

// //           clickHandlers.push(
// //             window.google.maps.event.addListener(
// //               marker,
// //               "click",
// //               (function (marker, i) {
// //                 return function () {
// //                   var d = new Date(data1[i].current_timestamp);
// //                   var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
// //                   var contentString =
// //                     '<div id="iw-container">' +
// //                     '<div class="iw-container--title">Location :&nbsp' +
// //                     data1[i].location +
// //                     "</div>" +
// //                     '<div class="iw-container--content">Charge Station :&nbsp' +
// //                     data1[i].charge_station +
// //                     "</div>" +
// //                     "</div>";

// //                   infowindow.setContent(contentString);
// //                   infowindow.open(self.map, marker);

// //                   for (var j = 0; j < markers.length; j++) {
// //                     let markerimageonclick = self.getImage(data1[j].status);
// //                     markers[j].setIcon(markerimageonclick.default);
// //                   }
// //                   marker.setIcon(markerimage.active);
// //                   window.google.maps.event.addListener(
// //                     infowindow,
// //                     "closeclick",
// //                     function () {
// //                       infowindow.close();
// //                       marker.setIcon(markerimage.default);
// //                     }
// //                   );

// //                   if (infowindow.getMap()) {
// //                     //var vehicleId = data[i].vehicle_id;
// //                     //  if (self.props.healthCheckVehicleSelected) {
// //                     self.zoomToVehicle({
// //                       lat: data1[i].latitude,
// //                       lng: data1[i].longitude,
// //                     });
// //                     self.setState({
// //                       vehicleToBeTracked: data1[i].charge_station,
// //                     });
// //                     self.props.healthCheckVehicleSelected(data1[i]);
// //                     //  }
// //                   }
// //                 };
// //               })(marker, i)
// //             )
// //           );
// //           markers.push(marker);
// //         }

// //         self.markerCluster = new MarkerClusterer(self.map, markers, {
// //           imagePath:
// //             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
// //         });
// //       }
// //     } catch (e) {}
// //   };

// //   render() {
// //     return (
// //       <div
// //         id="map"
// //         className="map"
// //         style={{ height: `680px`, width: `1610px` }}
// //       ></div>
// //     );
// //   }
// // }

// // //export default mapDashboard;

// // function mapStateToProps(state) {
// //   return {
// //     ...state,
// //     // mapDashboard: state.mapDashboard,
// //   };
// // }

// // export default connect(mapStateToProps, {
// //   getChargerMapDashboardAPI,
// //   getVehicleMapDashboardAPI,
// // })(withRouter(mapDashboard));
// import React, { Component } from "react";
// import MapAction from "../../component/mapaction";
// import Map from "../map/index";
// import Summary from "../summary";
// import "../map_dashboard/index.scss";
// //
// import SubMenuHeader from "../sub_menu_header/index";
// import MapActionTwo from "../../component/mapactiontwo";
// import MapactionOne from "../../component/mapactionone";
// class mapDashboard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // toggleActive: false,
//       // isLoggedIn: false,
//       // checked: false,
//       toggleValue: false,
//       toggle: false,
//     };
//     // this.onToggle = this.onToggle.bind(this);
//     this.toggleState = this.toggleState.bind(this);
//     //this.handleChange = this.handleChange.bind(this);
//   }
//   // handleChangeRadio = (e) => {
//   //   console.log("status called");
//   //   const { name, value } = e.target;

//   //   this.setState({
//   //     toggle: value,
//   //   });
//   // };
//   toggleState() {
//     this.setState({
//       toggle: !this.state.toggle,
//     });
//   }

//   // onToggle() {
//   //   this.setState({ toggleActive: !this.state.toggleActive });
//   // }
//   render() {
//     return (
//       <div className="mapdashboard">
//         {/*<div className="mapdashboard-view">
//           <button className="mapview" onClick={this.onToggle}>
//             <img src={require("../../assets/images/summary/summary.png")} />
//             Map
//           </button>
//           <button className="summaryview" onClick={this.onToggle}>
//             <img src={require("../../assets/images/summary/summary.png")} />
//             Summary
//           </button>
//     </div>*/}
//         {/* <div className="switch-field">
//           <input
//             type="radio"
//             id="switch_left"
//             name="switchToggle"
//             value={this.props.leftLabel}
//             onChange={this.toggleState}
//             checked={!this.state.toggle}
//           />
//           <label htmlFor="switch_left">
//             {" "}
//             <img
//               src={require("../../assets/images/summary/summary.png")}
//               className="switch-img-1"
//             />
//             Map
//           </label>

//           <input
//             type="radio"
//             id="switch_right"
//             name="switchToggle"
//             value={this.props.rightLabel}
//             onChange={this.toggleState}
//             checked={this.state.toggle}
//           />
//           <label htmlFor="switch_right">
//             {" "}
//             <img
//               src={require("../../assets/images/summary/summary.png")}
//               className="switch-img"
//             />
//             Summary
//           </label>
//         </div> */}
//         <div className="map-view1"></div>
//         {/* <div className="mapsubmenu">
//           <SubMenuHeader visible="true" />
//         </div> */}
//         <div className="mapactionsss">
//           <div className="mapaction">
//             {/*<MapAction />*/}
//             <MapactionOne />
//           </div>
//           {/* <div className="mapactiontwo">
//             <MapActionTwo />
//           </div> */}
//           <div className="switch-field">
//             <input
//               type="radio"
//               id="switch_left"
//               name="switchToggle"
//               value={this.props.leftLabel}
//               onChange={this.toggleState}
//               checked={!this.state.toggle}
//             />
//             <label htmlFor="switch_left">
//               {" "}
//               <img
//                 src={require("../../assets/images/summary/summary.png")}
//                 className="switch-img-1"
//               />
//               Map
//             </label>

//             <input
//               type="radio"
//               id="switch_right"
//               name="switchToggle"
//               value={this.props.rightLabel}
//               onChange={this.toggleState}
//               checked={this.state.toggle}
//             />
//             <label htmlFor="switch_right">
//               {" "}
//               <img
//                 src={require("../../assets/images/summary/summary.png")}
//                 className="switch-img"
//               />
//               Summary
//             </label>
//           </div>
//         </div>
//         <div className="hr">
//           <hr />
//         </div>
//         <div className="map-view">
//           {/*<label className="label-text-left">S</label>
//          <ToggleSwitch
//             isOn={this.state.toggleValue}
//             onColor="grey"
//             handleToggle={() =>
//               this.setState({ toggleValue: !this.state.toggleValue })
//             }
//           />
//           <label className="label-text-right">M</label>
//         </div>
//         {this.state.toggleValue == true ? (
//           <Map />
//         ) : (
//           <Summary />
//         )}  */}
//           {/*{this.state.toggleActive == true ? <Summary /> : <Map />} */}
//           {this.state.toggle == true ? <Summary /> : <Map />}
//           {/* <Map/> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default mapDashboard;
