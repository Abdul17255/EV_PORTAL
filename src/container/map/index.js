// import React, { Component } from "react";

// import { connect } from "react-redux";

// import { withRouter } from "react-router";
// import ReactLoader from "../../component/react-loader/react-loader.component";

// import MarkerClusterer from "@google/markerclusterer";
// // import RunningTruck from "../../assets/images/map_dashboard/running-truck.svg";
// // import ChargingSelected from "../../assets/images/map_dashboard/charger-icon.svg";

// import RunningTruck from "../../assets/images/running truck/RunningTruck.png";
// import RunningTruckSelected from "../../assets/images/running truck/RunningTruck.png";
// import ChargingSelected from "../../assets/images/charging/ChargingSelected.png";
// import StoppedBus from "../../assets/images/bus_images/stopped_bus_red.png";
// import StoppedBusSelected from "../../assets/images/bus_images/stopped_bus_red.png";
// import DisconnectedBus from "../../assets/images/bus_images/disconnected_bus.svg";
// import DisconnectedBusSelected from "../../assets/images/bus_images/disconnected_bus.svg";

// import Bus from "../../assets/images/noun-bus-1260937/bus.png";
// import _ from "underscore";
// import lodash from "lodash";
// import moment from "moment";
// import { Marker, InfoWindow } from "react-google-maps";

// import { mapOptions, mapStyle } from "../../constants/map-constants";

// // API chargerMapDashboardApiActions
// import chargerMapDashboardApiActions from "../../redux/charger_map_dashboard/actions";
// import vehicleMapDashboardApiActions from "../../redux/vehicle_map_dashboard/actions";

// // Scss
// import "./index.scss";
// import MapInfowindowPopup from "../../component/map_infowindow_popup";

// const { getChargerMapDashboardAPI } = chargerMapDashboardApiActions;
// const { getVehicleMapDashboardAPI } = vehicleMapDashboardApiActions;

// const vehCheck = [
//   {
//     current_timestamp: "2022-11-23 19:16:53",
//     distanceTravelled: 181.08,
//     ignitionTime: "-",
//     imei: "359218066225009",
//     latitude: 30.7079,
//     location:
//       "PR5P+2CM, Chandigarh - Panchkula Rd, NAC Manimajra, Sector 13, Chandigarh, Haryana 160102, India",
//     longitude: 76.83617,
//     model: "PRO 3012",
//     odo: "12034.86",
//     powerConsumption: 85,
//     reg_no: "CH01TB2062",
//     routeNumber: "Route No 10",
//     soc: 0,
//     speed: 0,
//     status: "RUNNING",
//   },
// ];

// class mapDashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showPopup: false,
//       cardClicked: "",
//       //vehicleResponse: "",
//       vehicleResponseView: "",
//       popupData: [],
//       addModalshow: false,
//       vehicleToBeTracked: "",
//       vehicleResponse: [],
//       chargerResponse: [],
//       regNo: "",
//       soc: "",
//       currentTimestamp: "",
//       location: "",
//       odo: "",
//       speed: "",
//       powerConsumption: "",
//       model: "",
//       ignitionTime: "",
//       routeNumber: "",
//       distanceTravelled: "",
//     };
//     this.zoomScaleSize = 40;
//     this.getChargerMap = this.getChargerMap.bind(this);
//     this.saveCurrentMapPosition = this.saveCurrentMapPosition.bind(this);
//   }

//   componentDidMount() {
//     this.getChargerMap();
//     this.getVehicleMap();
//     this.setState({
//       //  mapData: vehicleResp,
//       initialZoom: 15,
//     });
//     this.initalizeMap();
//     this.checkIfZoomToVehicleIsNeededAndDoIt(this.props);
//     if (this.props.clickedVehicle) {
//       //   this.setMarkersInMap(vehicleResp, chargerResp);
//       this.setMarkersInMap(
//         this.props.clickedVehicle,
//         this.props?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data
//       );
//     } else {
//       this.setMarkersInMap(
//         this.props?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
//           ?.data,
//         this.props?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data
//       );
//     }
//     //  this.timer();
//   }

//   timer = () => {
//     setTimeout(() => {
//       this.getChargerMap();
//       this.getVehicleMap();
//     }, 30000);
//   };

//   getChargerMap = async () => {
//     let payLoad = {
//       api_key: "MAP_DASHBOARD_CHARGER",
//     };

//     await this.props.getChargerMapDashboardAPI(payLoad);
//   };

//   getVehicleMap = async () => {
//     let payLoad = {
//       api_key: "MAP_DASHBOARD_VEHICLE",
//     };

//     await this.props.getVehicleMapDashboardAPI(payLoad);
//   };

//   saveCurrentMapPosition(data) {
//     this.setState({
//       oldMapPostionData: data,
//       renderRequired: false,
//       oldMapPositionSetTimestamp: new Date().getTime(),
//     });
//   }

//   componentWillReceiveProps(nextProps) {
//     let {
//       currentTimestampStatusSelected,
//       currentTimestampVehicleSelected,
//       mapData,
//     } = nextProps;
//     if (this.props !== nextProps) {
//       let veh = "";
//       let chrg = "";
//       if (this.props.clickedVehicle) {
//         veh = this.props.clickedVehicle;
//         chrg =
//           nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
//             ?.data;
//         //const { mapData } = this.state;
//         this.setState({
//           vehicleResponse: this.props.clickedVehicle,
//         });
//         this.setState({
//           chargerResponse:
//             nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
//               ?.data,
//         });
//       } else {
//         veh =
//           nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
//             ?.data;
//         chrg =
//           nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
//             ?.data;
//         //const { mapData } = this.state;
//         this.setState({
//           vehicleResponse:
//             nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
//               ?.data,
//         });
//         this.setState({
//           chargerResponse:
//             nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
//               ?.data,
//         });
//       }

//       var mapdata = this.state.mapData;
//       var isFindEqual = _.isEqual(
//         _.sortBy(this.state.mapData)
//         //  _.sortBy(nextProps.mapData)
//       );
//       if (!isFindEqual) {
//         // mapdata = nextProps.mapData;
//         if (!this.map) {
//           this.setState({
//             mapData: [],
//           });
//           this.initalizeMap();
//         } else {
//           this.setState({
//             mapData: mapdata,
//           });
//         }
//         this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
//         this.clearMarkers();
//         this.setMarkersInMap(veh, chrg);
//       } else if (
//         this.props.currentTimestampStatusSelected !==
//           nextProps.currentTimestampStatusSelected ||
//         this.props.currentTimestampVehicleSelected !==
//           nextProps.currentTimestampVehicleSelected
//       ) {
//         this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
//       }
//     }
//   }

//   getvehicleResponseDetails = async () => {
//     let payLoad = {
//       api_key: "MAP_DASHBOARD_VEHICLE",
//     };

//     await this.props.getVehicleMapDashboardAPI(payLoad);
//   };

//   vehicleResponseClicked = () => {
//     sessionStorage.setItem("Clicked", "vehicleResponse");
//     this.setState({ cardClicked: "vehicleResponse" });
//     // this.getvehicleResponseDetails();
//     this.setState({ addModalshow: true });
//     this.setState({ showPopup: true });
//   };

//   clearMarkers() {
//     if (this.markerCluster) {
//       let markers = this.markerCluster.getMarkers();
//       for (let i = 0; i < markers.length; i++) {
//         markers[i].setMap(null);
//       }
//       markers = null;
//       this.markerCluster.clearMarkers();
//       this.markerCluster = null;
//     }
//   }

//   checkIfZoomToVehicleIsNeededAndDoIt(nextProps) {
//     let {
//       currentTimestampStatusSelected,
//       currentTimestampVehicleSelected,
//       mapData,
//     } = nextProps;

//     if (this.state.vehicleResponse) {
//       let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

//       currentTimestampVehicleSelected =
//         currentTimestampVehicleSelected != null
//           ? currentTimestampVehicleSelected
//           : 0;
//       currentTimestampStatusSelected =
//         currentTimestampStatusSelected != null
//           ? currentTimestampStatusSelected
//           : 0;

//       if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
//         if (
//           this.state.currentTimestampStatusSelected ===
//             currentTimestampStatusSelected &&
//           lodash.isEqual(this.state.mapData, this.state.vehicleResponse)
//         ) {
//           return;
//         }

//         if (this.state.vehicleResponse.length > 0) {
//           let bounds = new window.google.maps.LatLngBounds();
//           for (let i = 0; i < this.state.vehicleResponse.length; i++) {
//             let latlngBound = new window.google.maps.LatLng(
//               this.state.vehicleResponse[i].latitude,
//               this.state.vehicleResponse[i].longitude
//             );
//             bounds.extend(latlngBound);
//           }
//           this.map.fitBounds(bounds);
//           if (this.state.vehicleResponse.length === 1) {
//             this.zoomMap(15);
//           }
//           let vehdata = this.state.vehicleResponse;
//           this.setState({ currentTimestampStatusSelected, vehdata });
//           return;
//         } else {
//           this.map.setCenter(defaultLatlng);
//           window.google.maps.event.addListenerOnce(
//             this.map,
//             "bounds_changed",
//             () => {
//               this.map.setZoom(0);
//             }
//           );
//         }
//       } else if (currentTimestampVehicleSelected !== 0) {
//         if (
//           this.state.currentTimestampVehicleSelected ===
//           currentTimestampVehicleSelected
//         ) {
//           return;
//         }

//         let vehicleToBeTracked = nextProps.vehicleToBeTracked;
//         let vehiclePositionLatLng = { lat: 0, lng: 0 };
//         let zoomtoVehicle = false;
//         if (vehicleToBeTracked && vehicleToBeTracked !== "") {
//           let vehicletoBeTrackedData = this.state.vehicleResponse.find(
//             (data) =>
//               data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
//           );
//           if (vehicletoBeTrackedData) {
//             vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
//             vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
//             zoomtoVehicle = true;
//           }
//         } else {
//           this.setPositionOfMap(this.state.vehicleResponse);
//           return;
//         }

//         if (zoomtoVehicle) {
//           this.setState({
//             vehicleToBeTracked,
//             currentTimestampVehicleSelected,
//           });
//           this.zoomToVehicle(vehiclePositionLatLng);
//           return true;
//         }
//         return false;
//       }
//     }

//     // charger response

//     if (this.state.chargerResponse) {
//       let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

//       currentTimestampVehicleSelected =
//         currentTimestampVehicleSelected != null
//           ? currentTimestampVehicleSelected
//           : 0;
//       currentTimestampStatusSelected =
//         currentTimestampStatusSelected != null
//           ? currentTimestampStatusSelected
//           : 0;

//       if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
//         if (
//           this.state.currentTimestampStatusSelected ===
//             currentTimestampStatusSelected &&
//           lodash.isEqual(this.state.mapData, this.state.chargerResponse)
//         ) {
//           return;
//         }

//         if (this.state.chargerResponse.length > 0) {
//           let bounds = new window.google.maps.LatLngBounds();
//           for (let i = 0; i < this.state.chargerResponse.length; i++) {
//             let latlngBound = new window.google.maps.LatLng(
//               this.state.chargerResponse[i].latitude,
//               this.state.chargerResponse[i].longitude
//             );
//             bounds.extend(latlngBound);
//           }
//           this.map.fitBounds(bounds);
//           if (this.state.chargerResponse.length === 1) {
//             this.zoomMap(15);
//           }
//           let chargerdata = this.state.chargerResponse;
//           this.setState({ currentTimestampStatusSelected, chargerdata });
//           return;
//         } else {
//           this.map.setCenter(defaultLatlng);
//           window.google.maps.event.addListenerOnce(
//             this.map,
//             "bounds_changed",
//             () => {
//               this.map.setZoom(0);
//             }
//           );
//         }
//       } else if (currentTimestampVehicleSelected !== 0) {
//         if (
//           this.state.currentTimestampVehicleSelected ===
//           currentTimestampVehicleSelected
//         ) {
//           return;
//         }

//         let vehicleToBeTracked = nextProps.vehicleToBeTracked;
//         let vehiclePositionLatLng = { lat: 0, lng: 0 };
//         let zoomtoVehicle = false;
//         if (vehicleToBeTracked && vehicleToBeTracked !== "") {
//           let vehicletoBeTrackedData = this.state.chargerResponse.find(
//             (data) =>
//               data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
//           );
//           if (vehicletoBeTrackedData) {
//             vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
//             vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
//             zoomtoVehicle = true;
//           }
//         } else {
//           this.setPositionOfMap(this.state.chargerResponse);
//           return;
//         }

//         if (zoomtoVehicle) {
//           this.setState({
//             vehicleToBeTracked,
//             currentTimestampVehicleSelected,
//           });
//           this.zoomToVehicle(vehiclePositionLatLng);
//           return true;
//         }
//         return false;
//       }
//     }
//   }

//   zoomMap(zoomValue) {
//     if (this.map) {
//       let self = this;
//       window.google.maps.event.addListenerOnce(
//         this.map,
//         "bounds_changed",
//         () => {
//           self.map.setZoom(zoomValue ? zoomValue : this.state.initialZoom);
//         }
//       );
//     }
//   }

//   zoomToVehicle(location) {
//     let self = this;
//     let currentZoom = this.map.getZoom();
//     this.map.setCenter({ lat: location.lat, lng: location.lng });
//     if (currentZoom < this.state.initialZoom || !this.state.initialZoom) {
//       window.google.maps.event.addListenerOnce(
//         self.map,
//         "bounds_changed",
//         () => {
//           self.map.setZoom(
//             !this.state.initialZoom ? 15 : this.state.initialZoom
//           );
//         }
//       );
//     }
//     // let bounds = new window.google.maps.LatLngBounds();
//     // let latlngBound = new window.google.maps.LatLng(location);
//     // bounds.extend(latlngBound);
//     // this.map.fitBounds(bounds);
//   }

//   initalizeMap = () => {
//     let defaultLatlng = { lat: 30.741482, lng: 76.7680662 };

//     this.map = new window.google.maps.Map(
//       document.getElementById("map"),
//       mapOptions(defaultLatlng, {
//         zoom: 14,
//       })
//     );

//     this.map.addListener("zoom_changed", () => {
//       let center = this.map.getCenter();
//       // this.props.saveCurrentMapPosition({
//       //   zoom: this.map.getZoom(),
//       //   lat: center.lat(),
//       //   lng: center.lng(),
//       // });
//     });

//     this.map.addListener("center_changed", () => {
//       let center = this.map.getCenter();
//       // this.props.saveCurrentMapPosition({
//       //   zoom: this.map.getZoom(),
//       //   lat: center.lat(),
//       //   lng: center.lng(),
//       // });
//     });
//   };

//   setPositionOfMap = (data) => {
//     this.loc = [];

//     //to maintain map's position on each auto refresh
//     if (this.props.oldMapPostionData) {
//       this.map.setCenter({
//         lat: this.props.oldMapPostionData.lat,
//         lng: this.props.oldMapPostionData.lng,
//       });
//       return;
//     }

//     if (data && data.length > 0) {
//       this.map.setCenter({ lat: data[0].latitude, lng: data[0].longitude });
//     } else {
//       return;
//     }
//   };

//   getImage = (status) => {
//     let defaultImage,
//       activeImage,
//       vehiclestatus = status.toLowerCase();
//     // if (vehiclestatus === "warning") {
//     //   defaultImage = warningTruck;
//     //   activeImage = warningTruckSelected;
//     // } else if (vehiclestatus === "service") {
//     //   defaultImage = serviceTruck;
//     //   activeImage = serviceTruckSelected;
//     // } else
//     if (vehiclestatus === "running") {
//       defaultImage = RunningTruck;
//       activeImage = RunningTruckSelected;
//       //<div onClick={this.vehicleResponse}></div>
//     } else if (vehiclestatus === "moving") {
//       defaultImage = RunningTruck;
//       activeImage = RunningTruckSelected;
//     } else if (vehiclestatus === "charging") {
//       defaultImage = ChargingSelected;
//       activeImage = ChargingSelected;
//     } else if (vehiclestatus === "stopped") {
//       defaultImage = StoppedBus;
//       activeImage = StoppedBusSelected;
//     } else if (vehiclestatus === "disconnected") {
//       defaultImage = DisconnectedBus;
//       activeImage = DisconnectedBusSelected;
//     }
//     // else if (vehiclestatus === "others") {
//     //   defaultImage = otherTruck;
//     //   activeImage = OthertruckSelected;
//     // }
//     const imageObject = {
//       default: defaultImage,
//       active: activeImage,
//     };
//     return imageObject;
//   };

//   setMarkersInMap = (data, data1) => {
//     try {
//       if (data && data.length > 0) {
//         const self = this;
//         const infowindow = new window.google.maps.InfoWindow({});
//         const markers = [];
//         let marker;
//         let //zoomHandlers = [],
//           clickHandlers = [];
//         var that = this;
//         for (let i = 0; i < data.length; i++) {
//           const status = data[i].status;
//           let markerimage = self.getImage(status);
//           marker = new window.google.maps.Marker({
//             position: new window.google.maps.LatLng(
//               data[i].latitude,
//               data[i].longitude
//             ),
//             map: this.map,
//             icon: {
//               url: markerimage.default,
//               anchor: new window.google.maps.Point(25, 25),
//               //labelOrigin: new window.google.maps.Point(10, -8)
//             },
//             //title: data[i].reg_no,
//             //label: data[i].reg_no,
//             title:
//               "Registration Number : " +
//               data[i].reg_no +
//               "\n" +
//               "SOC : " +
//               data[i].soc +
//               "(%)" +
//               "\n" +
//               "Timestamp : " +
//               data[i].current_timestamp +
//               "\n" +
//               "Location : " +
//               data[i].location,
//           });
//           window.google.maps.event.addListener(
//             marker,
//             "click",
//             function (event) {
//               that.vehicleResponseClicked();
//               that.setState({ location: data[i].location });
//               that.setState({ regNo: data[i].reg_no });
//               that.setState({ currentTimestamp: data[i].current_timestamp });
//               that.setState({ soc: data[i].soc });
//               that.setState({ odo: data[i].odo });
//               that.setState({ speed: data[i].speed });
//               that.setState({ powerConsumption: data[i].powerConsumption });
//               that.setState({ model: data[i].model });
//               that.setState({ ignitionTime: data[i].ignitionTime });
//               that.setState({ routeNumber: data[i].routeNumber });
//               that.setState({ distanceTravelled: data[i].distanceTravelled });
//             }
//           );

//           // clickHandlers.push(
//           //   window.google.maps.event.addListener(
//           //     marker,
//           //     "click",
//           //     (function (marker, i) {
//           //       return function () {
//           //         var d = new Date(data[i].current_timestamp);
//           //         console.log("vehicle clicked");
//           //         // var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
//           //         // var contentString =
//           //         //   '<div id="iw-container" >' +
//           //         //   '<div><img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt="image">' +

//           //         //   "</div>" +
//           //         //   '<div id="iw-titles"><span id="iw-title">Registration Number :</span><br>' +
//           //         //   data[i].reg_no +
//           //         //   "</div>" +
//           //         //   '<div id="iw-container-content">SOC :<br>' +
//           //         //   data[i].soc +
//           //         //   "</div>" +
//           //         //   '<div id="iw-container-content">Location :<br>' +
//           //         //   data[i].location +
//           //         //   "</div>" +
//           //         //   '<div id="iw-container-content">Time Stamp :<br>' +
//           //         //   data[i].current_timestamp +
//           //         //   "</div>" +
//           //         //   "</div>";

//           //         // infowindow.setContent(contentString);
//           //         // infowindow.open(self.map, marker);
//           //         this.setState({ showPopup: true });
//           //         for (var j = 0; j < markers.length; j++) {
//           //           let markerimageonclick = self.getImage(data[j].status);
//           //           markers[j].setIcon(markerimageonclick.default);
//           //         }
//           //         marker.setIcon(markerimage.active);
//           //         window.google.maps.event.addListener(
//           //           infowindow,
//           //           "closeclick",
//           //           function () {
//           //             infowindow.close();
//           //             marker.setIcon(markerimage.default);
//           //           }
//           //         );

//           //         if (infowindow.getMap()) {
//           //           //var vehicleId = data[i].vehicle_id;
//           //           //  if (self.props.healthCheckVehicleSelected) {
//           //           // self.zoomToVehicle({                      //commented
//           //           //   lat: data[i].latitude,
//           //           //   lng: data[i].longitude,
//           //           // });
//           //           self.setState({ vehicleToBeTracked: data[i].reg_no });
//           //           self.props.healthCheckVehicleSelected(data[i]);
//           //         }
//           //         // }
//           //       };
//           //     })
//           //     (marker, i)
//           //   )
//           // );

//           markers.push(marker);
//         }

//         self.markerCluster = new MarkerClusterer(self.map, markers, {
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//         });
//       }
//       if (data1 && data1.length > 0) {
//         const self = this;
//         // const infowindow = new window.google.maps.InfoWindow({});
//         const markers = [];
//         let marker;
//         let //zoomHandlers = [],
//           clickHandlers = [];
//         for (let i = 0; i < data1.length; i++) {
//           const status = data1[i].status;
//           let markerimage = self.getImage(status);
//           marker = new window.google.maps.Marker({
//             position: new window.google.maps.LatLng(
//               data1[i].latitude,
//               data1[i].longitude
//             ),
//             map: this.map,
//             icon: {
//               url: markerimage.default,
//               anchor: new window.google.maps.Point(25, 25),
//               //labelOrigin: new window.google.maps.Point(10, -8)
//             },
//             //title: data[i].reg_no,
//             //label: data[i].reg_no,
//             title:
//               "Location : " +
//               data1[i].location +
//               "\n" +
//               "Charge Station : " +
//               data1[i].charge_station,
//           });

//           // clickHandlers.push(
//           //   window.google.maps.event.addListener(
//           //     marker,
//           //     "click",
//           //     (function (marker, i) {
//           //       return function () {
//           //         var d = new Date(data1[i].current_timestamp);
//           //         var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
//           //         var contentString =
//           //           '<div id="iw-container">' +
//           //           '<div className="iw-container--title">Location :&nbsp' +
//           //           data1[i].location +
//           //           "</div>" +
//           //           '<div className="iw-container--content">Charge Station :&nbsp' +
//           //           data1[i].charge_station +
//           //           "</div>" +
//           //           "</div>";

//           //         infowindow.setContent(contentString);
//           //         infowindow.open(self.map, marker);

//           //         for (var j = 0; j < markers.length; j++) {
//           //           let markerimageonclick = self.getImage(data1[j].status);
//           //           markers[j].setIcon(markerimageonclick.default);
//           //         }
//           //         marker.setIcon(markerimage.active);
//           //         window.google.maps.event.addListener(
//           //           infowindow,
//           //           "closeclick",
//           //           function () {
//           //             infowindow.close();
//           //             marker.setIcon(markerimage.default);
//           //           }
//           //         );

//           //         if (infowindow.getMap()) {
//           //           //var vehicleId = data[i].vehicle_id;
//           //           //  if (self.props.healthCheckVehicleSelected) {
//           //           self.zoomToVehicle({
//           //             lat: data1[i].latitude,
//           //             lng: data1[i].longitude,
//           //           });
//           //           self.setState({
//           //             vehicleToBeTracked: data1[i].charge_station,
//           //           });
//           //           self.props.healthCheckVehicleSelected(data1[i]);
//           //           //  }
//           //         }
//           //       };
//           //     })(marker, i)
//           //   )
//           // );
//           markers.push(marker);
//         }

//         self.markerCluster = new MarkerClusterer(self.map, markers, {
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//         });
//       }
//     } catch (e) {}
//   };

//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.vehicleResponseClicked}>clickkkkk</button> */}
//         <div
//           id="map"
//           className="map"
//           style={{ height: `62vh`, width: `95%` }}
//         ></div>
//         {this.state.showPopup && (
//           <MapInfowindowPopup
//             buttonClicked={this.state.cardClicked}
//             data={this.state.popupData}
//             show={this.state.addModalshow}
//             closemodal={this.addModalClose}
//             vehicle_location={this.state.location}
//             reg_no={this.state.regNo}
//             soc={this.state.soc}
//             current_timestamp={this.state.currentTimestamp}
//             odo={this.state.odo}
//             speed={this.state.speed}
//             powerConsumption={this.state.powerConsumption}
//             model={this.state.model}
//             ignitionTime={this.state.ignitionTime}
//             routeNumber={this.state.routeNumber}
//             distanceTravelled={this.state.distanceTravelled}
//           />
//         )}
//       </div>
//     );
//   }
// }

// //export default mapDashboard;

// function mapStateToProps(state) {
//   return {
//     ...state,
//     // mapDashboard: state.mapDashboard,
//   };
// }

// export default connect(mapStateToProps, {
//   getChargerMapDashboardAPI,
//   getVehicleMapDashboardAPI,
// })(withRouter(mapDashboard));
// import React, { Component } from "react";

// import { connect } from "react-redux";

// import { withRouter } from "react-router";
// import ReactLoader from "../../component/react-loader/react-loader.component";

// import MarkerClusterer from "@google/markerclusterer";
// // import RunningTruck from "../../assets/images/map_dashboard/running-truck.svg";
// // import ChargingSelected from "../../assets/images/map_dashboard/charger-icon.svg";

// import RunningTruck from "../../assets/images/running truck/RunningTruck.png";
// import RunningTruckSelected from "../../assets/images/running truck/RunningTruck.png";
// import ChargingSelected from "../../assets/images/charging/ChargingSelected.png";
// import StoppedBus from "../../assets/images/bus_images/stopped_bus_red.png";
// import StoppedBusSelected from "../../assets/images/bus_images/stopped_bus_red.png";
// import DisconnectedBus from "../../assets/images/bus_images/disconnected_bus.svg";
// import DisconnectedBusSelected from "../../assets/images/bus_images/disconnected_bus.svg";

// import Bus from "../../assets/images/noun-bus-1260937/bus.png";
// import _ from "underscore";
// import lodash from "lodash";
// import moment from "moment";
// import { Marker, InfoWindow } from "react-google-maps";

// import { mapOptions, mapStyle } from "../../constants/map-constants";

// // API chargerMapDashboardApiActions
// import chargerMapDashboardApiActions from "../../redux/charger_map_dashboard/actions";
// import vehicleMapDashboardApiActions from "../../redux/vehicle_map_dashboard/actions";

// // Scss
// import "./index.scss";
// import MapInfowindowPopup from "../../component/map_infowindow_popup";

// const { getChargerMapDashboardAPI } = chargerMapDashboardApiActions;
// const { getVehicleMapDashboardAPI } = vehicleMapDashboardApiActions;

// const vehCheck = [
//   {
//     current_timestamp: "2022-11-23 19:16:53",
//     distanceTravelled: 181.08,
//     ignitionTime: "-",
//     imei: "359218066225009",
//     latitude: 30.7079,
//     location:
//       "PR5P+2CM, Chandigarh - Panchkula Rd, NAC Manimajra, Sector 13, Chandigarh, Haryana 160102, India",
//     longitude: 76.83617,
//     model: "PRO 3012",
//     odo: "12034.86",
//     powerConsumption: 85,
//     reg_no: "CH01TB2062",
//     routeNumber: "Route No 10",
//     soc: 0,
//     speed: 0,
//     status: "RUNNING",
//   },
// ];

// class mapDashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showPopup: false,
//       cardClicked: "",
//       //vehicleResponse: "",
//       vehicleResponseView: "",
//       popupData: [],
//       addModalshow: false,
//       vehicleToBeTracked: "",
//       vehicleResponse: [],
//       chargerResponse: [],
//       regNo: "",
//       soc: "",
//       currentTimestamp: "",
//       location: "",
//       odo: "",
//       speed: "",
//       powerConsumption: "",
//       model: "",
//       ignitionTime: "",
//       routeNumber: "",
//       distanceTravelled: "",
//     };
//     this.zoomScaleSize = 40;
//     this.getChargerMap = this.getChargerMap.bind(this);
//     this.saveCurrentMapPosition = this.saveCurrentMapPosition.bind(this);
//   }

//   componentDidMount() {
//     this.getChargerMap();
//     this.getVehicleMap();
//     this.setState({
//       //  mapData: vehicleResp,
//       initialZoom: 15,
//     });
//     this.initalizeMap();
//     this.checkIfZoomToVehicleIsNeededAndDoIt(this.props);
//     if (this.props) {
//       //   this.setMarkersInMap(vehicleResp, chargerResp);
//       this.setMarkersInMap(
//         this.props?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
//           ?.data,
//         this.props?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data
//       );
//     }
//     //  this.timer();
//   }

//   timer = () => {
//     setTimeout(() => {
//       this.getChargerMap();
//       this.getVehicleMap();
//     }, 30000);
//   };

//   getChargerMap = async () => {
//     let payLoad = {
//       api_key: "MAP_DASHBOARD_CHARGER",
//     };

//     await this.props.getChargerMapDashboardAPI(payLoad);
//   };

//   getVehicleMap = async () => {
//     let payLoad = {
//       api_key: "MAP_DASHBOARD_VEHICLE",
//     };

//     await this.props.getVehicleMapDashboardAPI(payLoad);
//   };

//   saveCurrentMapPosition(data) {
//     this.setState({
//       oldMapPostionData: data,
//       renderRequired: false,
//       oldMapPositionSetTimestamp: new Date().getTime(),
//     });
//   }

//   componentWillReceiveProps(nextProps) {
//     let {
//       currentTimestampStatusSelected,
//       currentTimestampVehicleSelected,
//       mapData,
//     } = nextProps;
//     if (this.props !== nextProps) {
//       const veh =
//         nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result?.data;
//       const chrg =
//         nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data;
//       //const { mapData } = this.state;
//       this.setState({
//         vehicleResponse:
//           nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
//             ?.data,
//       });
//       this.setState({
//         chargerResponse:
//           nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
//             ?.data,
//       });

//       var mapdata = this.state.mapData;
//       var isFindEqual = _.isEqual(
//         _.sortBy(this.state.mapData)
//         //  _.sortBy(nextProps.mapData)
//       );
//       if (!isFindEqual) {
//         // mapdata = nextProps.mapData;
//         if (!this.map) {
//           this.setState({
//             mapData: [],
//           });
//           this.initalizeMap();
//         } else {
//           this.setState({
//             mapData: mapdata,
//           });
//         }
//         this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
//         this.clearMarkers();
//         this.setMarkersInMap(veh, chrg);
//       } else if (
//         this.props.currentTimestampStatusSelected !==
//           nextProps.currentTimestampStatusSelected ||
//         this.props.currentTimestampVehicleSelected !==
//           nextProps.currentTimestampVehicleSelected
//       ) {
//         this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
//       }
//     }
//   }

//   getvehicleResponseDetails = async () => {
//     let payLoad = {
//       api_key: "MAP_DASHBOARD_VEHICLE",
//     };

//     await this.props.getVehicleMapDashboardAPI(payLoad);
//   };

//   vehicleResponseClicked = () => {
//     sessionStorage.setItem("Clicked", "vehicleResponse");
//     this.setState({ cardClicked: "vehicleResponse" });
//     // this.getvehicleResponseDetails();
//     this.setState({ addModalshow: true });
//     this.setState({ showPopup: true });
//   };

//   clearMarkers() {
//     if (this.markerCluster) {
//       let markers = this.markerCluster.getMarkers();
//       for (let i = 0; i < markers.length; i++) {
//         markers[i].setMap(null);
//       }
//       markers = null;
//       this.markerCluster.clearMarkers();
//       this.markerCluster = null;
//     }
//   }

//   checkIfZoomToVehicleIsNeededAndDoIt(nextProps) {
//     let {
//       currentTimestampStatusSelected,
//       currentTimestampVehicleSelected,
//       mapData,
//     } = nextProps;

//     if (this.state.vehicleResponse) {
//       let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

//       currentTimestampVehicleSelected =
//         currentTimestampVehicleSelected != null
//           ? currentTimestampVehicleSelected
//           : 0;
//       currentTimestampStatusSelected =
//         currentTimestampStatusSelected != null
//           ? currentTimestampStatusSelected
//           : 0;

//       if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
//         if (
//           this.state.currentTimestampStatusSelected ===
//             currentTimestampStatusSelected &&
//           lodash.isEqual(this.state.mapData, this.state.vehicleResponse)
//         ) {
//           return;
//         }

//         if (this.state.vehicleResponse.length > 0) {
//           let bounds = new window.google.maps.LatLngBounds();
//           for (let i = 0; i < this.state.vehicleResponse.length; i++) {
//             let latlngBound = new window.google.maps.LatLng(
//               this.state.vehicleResponse[i].latitude,
//               this.state.vehicleResponse[i].longitude
//             );
//             bounds.extend(latlngBound);
//           }
//           this.map.fitBounds(bounds);
//           if (this.state.vehicleResponse.length === 1) {
//             this.zoomMap(15);
//           }
//           let vehdata = this.state.vehicleResponse;
//           this.setState({ currentTimestampStatusSelected, vehdata });
//           return;
//         } else {
//           this.map.setCenter(defaultLatlng);
//           window.google.maps.event.addListenerOnce(
//             this.map,
//             "bounds_changed",
//             () => {
//               this.map.setZoom(0);
//             }
//           );
//         }
//       } else if (currentTimestampVehicleSelected !== 0) {
//         if (
//           this.state.currentTimestampVehicleSelected ===
//           currentTimestampVehicleSelected
//         ) {
//           return;
//         }

//         let vehicleToBeTracked = nextProps.vehicleToBeTracked;
//         let vehiclePositionLatLng = { lat: 0, lng: 0 };
//         let zoomtoVehicle = false;
//         if (vehicleToBeTracked && vehicleToBeTracked !== "") {
//           let vehicletoBeTrackedData = this.state.vehicleResponse.find(
//             (data) =>
//               data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
//           );
//           if (vehicletoBeTrackedData) {
//             vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
//             vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
//             zoomtoVehicle = true;
//           }
//         } else {
//           this.setPositionOfMap(this.state.vehicleResponse);
//           return;
//         }

//         if (zoomtoVehicle) {
//           this.setState({
//             vehicleToBeTracked,
//             currentTimestampVehicleSelected,
//           });
//           this.zoomToVehicle(vehiclePositionLatLng);
//           return true;
//         }
//         return false;
//       }
//     }

//     // charger response

//     if (this.state.chargerResponse) {
//       let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

//       currentTimestampVehicleSelected =
//         currentTimestampVehicleSelected != null
//           ? currentTimestampVehicleSelected
//           : 0;
//       currentTimestampStatusSelected =
//         currentTimestampStatusSelected != null
//           ? currentTimestampStatusSelected
//           : 0;

//       if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
//         if (
//           this.state.currentTimestampStatusSelected ===
//             currentTimestampStatusSelected &&
//           lodash.isEqual(this.state.mapData, this.state.chargerResponse)
//         ) {
//           return;
//         }

//         if (this.state.chargerResponse.length > 0) {
//           let bounds = new window.google.maps.LatLngBounds();
//           for (let i = 0; i < this.state.chargerResponse.length; i++) {
//             let latlngBound = new window.google.maps.LatLng(
//               this.state.chargerResponse[i].latitude,
//               this.state.chargerResponse[i].longitude
//             );
//             bounds.extend(latlngBound);
//           }
//           this.map.fitBounds(bounds);
//           if (this.state.chargerResponse.length === 1) {
//             this.zoomMap(15);
//           }
//           let chargerdata = this.state.chargerResponse;
//           this.setState({ currentTimestampStatusSelected, chargerdata });
//           return;
//         } else {
//           this.map.setCenter(defaultLatlng);
//           window.google.maps.event.addListenerOnce(
//             this.map,
//             "bounds_changed",
//             () => {
//               this.map.setZoom(0);
//             }
//           );
//         }
//       } else if (currentTimestampVehicleSelected !== 0) {
//         if (
//           this.state.currentTimestampVehicleSelected ===
//           currentTimestampVehicleSelected
//         ) {
//           return;
//         }

//         let vehicleToBeTracked = nextProps.vehicleToBeTracked;
//         let vehiclePositionLatLng = { lat: 0, lng: 0 };
//         let zoomtoVehicle = false;
//         if (vehicleToBeTracked && vehicleToBeTracked !== "") {
//           let vehicletoBeTrackedData = this.state.chargerResponse.find(
//             (data) =>
//               data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
//           );
//           if (vehicletoBeTrackedData) {
//             vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
//             vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
//             zoomtoVehicle = true;
//           }
//         } else {
//           this.setPositionOfMap(this.state.chargerResponse);
//           return;
//         }

//         if (zoomtoVehicle) {
//           this.setState({
//             vehicleToBeTracked,
//             currentTimestampVehicleSelected,
//           });
//           this.zoomToVehicle(vehiclePositionLatLng);
//           return true;
//         }
//         return false;
//       }
//     }
//   }

//   zoomMap(zoomValue) {
//     if (this.map) {
//       let self = this;
//       window.google.maps.event.addListenerOnce(
//         this.map,
//         "bounds_changed",
//         () => {
//           self.map.setZoom(zoomValue ? zoomValue : this.state.initialZoom);
//         }
//       );
//     }
//   }

//   zoomToVehicle(location) {
//     let self = this;
//     let currentZoom = this.map.getZoom();
//     this.map.setCenter({ lat: location.lat, lng: location.lng });
//     if (currentZoom < this.state.initialZoom || !this.state.initialZoom) {
//       window.google.maps.event.addListenerOnce(
//         self.map,
//         "bounds_changed",
//         () => {
//           self.map.setZoom(
//             !this.state.initialZoom ? 15 : this.state.initialZoom
//           );
//         }
//       );
//     }
//     // let bounds = new window.google.maps.LatLngBounds();
//     // let latlngBound = new window.google.maps.LatLng(location);
//     // bounds.extend(latlngBound);
//     // this.map.fitBounds(bounds);
//   }

//   initalizeMap = () => {
//     let defaultLatlng = { lat: 30.741482, lng: 76.7680662 };

//     this.map = new window.google.maps.Map(
//       document.getElementById("map"),
//       mapOptions(defaultLatlng, {
//         zoom: 14,
//       })
//     );

//     this.map.addListener("zoom_changed", () => {
//       let center = this.map.getCenter();
//       // this.props.saveCurrentMapPosition({
//       //   zoom: this.map.getZoom(),
//       //   lat: center.lat(),
//       //   lng: center.lng(),
//       // });
//     });

//     this.map.addListener("center_changed", () => {
//       let center = this.map.getCenter();
//       // this.props.saveCurrentMapPosition({
//       //   zoom: this.map.getZoom(),
//       //   lat: center.lat(),
//       //   lng: center.lng(),
//       // });
//     });
//   };

//   setPositionOfMap = (data) => {
//     this.loc = [];

//     //to maintain map's position on each auto refresh
//     if (this.props.oldMapPostionData) {
//       this.map.setCenter({
//         lat: this.props.oldMapPostionData.lat,
//         lng: this.props.oldMapPostionData.lng,
//       });
//       return;
//     }

//     if (data && data.length > 0) {
//       this.map.setCenter({ lat: data[0].latitude, lng: data[0].longitude });
//     } else {
//       return;
//     }
//   };

//   getImage = (status) => {
//     let defaultImage,
//       activeImage,
//       vehiclestatus = status.toLowerCase();
//     // if (vehiclestatus === "warning") {
//     //   defaultImage = warningTruck;
//     //   activeImage = warningTruckSelected;
//     // } else if (vehiclestatus === "service") {
//     //   defaultImage = serviceTruck;
//     //   activeImage = serviceTruckSelected;
//     // } else
//     if (vehiclestatus === "running") {
//       defaultImage = RunningTruck;
//       activeImage = RunningTruckSelected;
//       //<div onClick={this.vehicleResponse}></div>
//     } else if (vehiclestatus === "charging") {
//       defaultImage = ChargingSelected;
//       activeImage = ChargingSelected;
//     } else if (vehiclestatus === "stopped") {
//       defaultImage = StoppedBus;
//       activeImage = StoppedBusSelected;
//     } else if (vehiclestatus === "disconnected") {
//       defaultImage = DisconnectedBus;
//       activeImage = DisconnectedBusSelected;
//     }
//     // else if (vehiclestatus === "others") {
//     //   defaultImage = otherTruck;
//     //   activeImage = OthertruckSelected;
//     // }
//     const imageObject = {
//       default: defaultImage,
//       active: activeImage,
//     };
//     return imageObject;
//   };

//   setMarkersInMap = (data, data1) => {
//     try {
//       if (data && data.length > 0) {
//         const self = this;
//         const infowindow = new window.google.maps.InfoWindow({});
//         const markers = [];
//         let marker;
//         let //zoomHandlers = [],
//           clickHandlers = [];
//         var that = this;
//         for (let i = 0; i < data.length; i++) {
//           const status = data[i].status;
//           let markerimage = self.getImage(status);
//           marker = new window.google.maps.Marker({
//             position: new window.google.maps.LatLng(
//               data[i].latitude,
//               data[i].longitude
//             ),
//             map: this.map,
//             icon: {
//               url: markerimage.default,
//               anchor: new window.google.maps.Point(25, 25),
//               //labelOrigin: new window.google.maps.Point(10, -8)
//             },
//             //title: data[i].reg_no,
//             //label: data[i].reg_no,
//             title:
//               "Registration Number : " +
//               data[i].reg_no +
//               "\n" +
//               "SOC : " +
//               data[i].soc +
//               "(%)" +
//               "\n" +
//               "Timestamp : " +
//               data[i].current_timestamp +
//               "\n" +
//               "Location : " +
//               data[i].location,
//           });
//           window.google.maps.event.addListener(
//             marker,
//             "click",
//             function (event) {
//               that.vehicleResponseClicked();
//               that.setState({ location: data[i].location });
//               that.setState({ regNo: data[i].reg_no });
//               that.setState({ currentTimestamp: data[i].current_timestamp });
//               that.setState({ soc: data[i].soc });
//               that.setState({ odo: data[i].odo });
//               that.setState({ speed: data[i].speed });
//               that.setState({ powerConsumption: data[i].powerConsumption });
//               that.setState({ model: data[i].model });
//               that.setState({ ignitionTime: data[i].ignitionTime });
//               that.setState({ routeNumber: data[i].routeNumber });
//               that.setState({ distanceTravelled: data[i].distanceTravelled });
//             }
//           );

//           // clickHandlers.push(
//           //   window.google.maps.event.addListener(
//           //     marker,
//           //     "click",
//           //     (function (marker, i) {
//           //       return function () {
//           //         var d = new Date(data[i].current_timestamp);
//           //         console.log("vehicle clicked");
//           //         // var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
//           //         // var contentString =
//           //         //   '<div id="iw-container" >' +
//           //         //   '<div><img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt="image">' +

//           //         //   "</div>" +
//           //         //   '<div id="iw-titles"><span id="iw-title">Registration Number :</span><br>' +
//           //         //   data[i].reg_no +
//           //         //   "</div>" +
//           //         //   '<div id="iw-container-content">SOC :<br>' +
//           //         //   data[i].soc +
//           //         //   "</div>" +
//           //         //   '<div id="iw-container-content">Location :<br>' +
//           //         //   data[i].location +
//           //         //   "</div>" +
//           //         //   '<div id="iw-container-content">Time Stamp :<br>' +
//           //         //   data[i].current_timestamp +
//           //         //   "</div>" +
//           //         //   "</div>";

//           //         // infowindow.setContent(contentString);
//           //         // infowindow.open(self.map, marker);
//           //         this.setState({ showPopup: true });
//           //         for (var j = 0; j < markers.length; j++) {
//           //           let markerimageonclick = self.getImage(data[j].status);
//           //           markers[j].setIcon(markerimageonclick.default);
//           //         }
//           //         marker.setIcon(markerimage.active);
//           //         window.google.maps.event.addListener(
//           //           infowindow,
//           //           "closeclick",
//           //           function () {
//           //             infowindow.close();
//           //             marker.setIcon(markerimage.default);
//           //           }
//           //         );

//           //         if (infowindow.getMap()) {
//           //           //var vehicleId = data[i].vehicle_id;
//           //           //  if (self.props.healthCheckVehicleSelected) {
//           //           // self.zoomToVehicle({                      //commented
//           //           //   lat: data[i].latitude,
//           //           //   lng: data[i].longitude,
//           //           // });
//           //           self.setState({ vehicleToBeTracked: data[i].reg_no });
//           //           self.props.healthCheckVehicleSelected(data[i]);
//           //         }
//           //         // }
//           //       };
//           //     })
//           //     (marker, i)
//           //   )
//           // );

//           markers.push(marker);
//         }

//         self.markerCluster = new MarkerClusterer(self.map, markers, {
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//         });
//       }
//       if (data1 && data1.length > 0) {
//         const self = this;
//         // const infowindow = new window.google.maps.InfoWindow({});
//         const markers = [];
//         let marker;
//         let //zoomHandlers = [],
//           clickHandlers = [];
//         for (let i = 0; i < data1.length; i++) {
//           const status = data1[i].status;
//           let markerimage = self.getImage(status);
//           marker = new window.google.maps.Marker({
//             position: new window.google.maps.LatLng(
//               data1[i].latitude,
//               data1[i].longitude
//             ),
//             map: this.map,
//             icon: {
//               url: markerimage.default,
//               anchor: new window.google.maps.Point(25, 25),
//               //labelOrigin: new window.google.maps.Point(10, -8)
//             },
//             //title: data[i].reg_no,
//             //label: data[i].reg_no,
//             title:
//               "Location : " +
//               data1[i].location +
//               "\n" +
//               "Charge Station : " +
//               data1[i].charge_station,
//           });

//           // clickHandlers.push(
//           //   window.google.maps.event.addListener(
//           //     marker,
//           //     "click",
//           //     (function (marker, i) {
//           //       return function () {
//           //         var d = new Date(data1[i].current_timestamp);
//           //         var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
//           //         var contentString =
//           //           '<div id="iw-container">' +
//           //           '<div className="iw-container--title">Location :&nbsp' +
//           //           data1[i].location +
//           //           "</div>" +
//           //           '<div className="iw-container--content">Charge Station :&nbsp' +
//           //           data1[i].charge_station +
//           //           "</div>" +
//           //           "</div>";

//           //         infowindow.setContent(contentString);
//           //         infowindow.open(self.map, marker);

//           //         for (var j = 0; j < markers.length; j++) {
//           //           let markerimageonclick = self.getImage(data1[j].status);
//           //           markers[j].setIcon(markerimageonclick.default);
//           //         }
//           //         marker.setIcon(markerimage.active);
//           //         window.google.maps.event.addListener(
//           //           infowindow,
//           //           "closeclick",
//           //           function () {
//           //             infowindow.close();
//           //             marker.setIcon(markerimage.default);
//           //           }
//           //         );

//           //         if (infowindow.getMap()) {
//           //           //var vehicleId = data[i].vehicle_id;
//           //           //  if (self.props.healthCheckVehicleSelected) {
//           //           self.zoomToVehicle({
//           //             lat: data1[i].latitude,
//           //             lng: data1[i].longitude,
//           //           });
//           //           self.setState({
//           //             vehicleToBeTracked: data1[i].charge_station,
//           //           });
//           //           self.props.healthCheckVehicleSelected(data1[i]);
//           //           //  }
//           //         }
//           //       };
//           //     })(marker, i)
//           //   )
//           // );
//           markers.push(marker);
//         }

//         self.markerCluster = new MarkerClusterer(self.map, markers, {
//           imagePath:
//             "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//         });
//       }
//     } catch (e) {}
//   };

//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.vehicleResponseClicked}>clickkkkk</button> */}
//         <div
//           id="map"
//           className="map"
//           style={{ height: `62vh`, width: `95%` }}
//         ></div>
//         {this.state.showPopup && (
//           <MapInfowindowPopup
//             buttonClicked={this.state.cardClicked}
//             data={this.state.popupData}
//             show={this.state.addModalshow}
//             closemodal={this.addModalClose}
//             vehicle_location={this.state.location}
//             reg_no={this.state.regNo}
//             soc={this.state.soc}
//             current_timestamp={this.state.currentTimestamp}
//             odo={this.state.odo}
//             speed={this.state.speed}
//             powerConsumption={this.state.powerConsumption}
//             model={this.state.model}
//             ignitionTime={this.state.ignitionTime}
//             routeNumber={this.state.routeNumber}
//             distanceTravelled={this.state.distanceTravelled}
//           />
//         )}
//       </div>
//     );
//   }
// }

// //export default mapDashboard;

// function mapStateToProps(state) {
//   return {
//     ...state,
//     // mapDashboard: state.mapDashboard,
//   };
// }

// export default connect(mapStateToProps, {
//   getChargerMapDashboardAPI,
//   getVehicleMapDashboardAPI,
// })(withRouter(mapDashboard));

import React, { Component } from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router";
import ReactLoader from "../../component/react-loader/react-loader.component";

import MarkerClusterer from "@google/markerclusterer";
// import RunningTruck from "../../assets/images/map_dashboard/running-truck.svg";
// import ChargingSelected from "../../assets/images/map_dashboard/charger-icon.svg";

import RunningTruck from "../../assets/images/running truck/RunningTruck.png";
import RunningTruckSelected from "../../assets/images/running truck/RunningTruck.png";
import ChargingSelected from "../../assets/images/charging/ChargingSelected.png";
import StoppedBus from "../../assets/images/bus_images/stopped_bus_red.png";
import StoppedBusSelected from "../../assets/images/bus_images/stopped_bus_red.png";
import DisconnectedBus from "../../assets/images/bus_images/disconnected_bus.svg";
import DisconnectedBusSelected from "../../assets/images/bus_images/disconnected_bus.svg";

import Bus from "../../assets/images/noun-bus-1260937/bus.png";
import _ from "underscore";
import lodash from "lodash";
import moment from "moment";
import { Marker, InfoWindow } from "react-google-maps";

import { mapOptions, mapStyle } from "../../constants/map-constants";

// API chargerMapDashboardApiActions
import chargerMapDashboardApiActions from "../../redux/charger_map_dashboard/actions";
import vehicleMapDashboardApiActions from "../../redux/vehicle_map_dashboard/actions";

// Scss
import "./index.scss";
import MapInfowindowPopup from "../../component/map_infowindow_popup";

const { getChargerMapDashboardAPI } = chargerMapDashboardApiActions;
const { getVehicleMapDashboardAPI } = vehicleMapDashboardApiActions;

const vehCheck = [
  {
    current_timestamp: "2022-11-23 19:16:53",
    distanceTravelled: 181.08,
    ignitionTime: "-",
    imei: "359218066225009",
    latitude: 30.7079,
    location:
      "PR5P+2CM, Chandigarh - Panchkula Rd, NAC Manimajra, Sector 13, Chandigarh, Haryana 160102, India",
    longitude: 76.83617,
    model: "PRO 3012",
    odo: "12034.86",
    powerConsumption: 85,
    reg_no: "CH01TB2062",
    routeNumber: "Route No 10",
    soc: 0,
    speed: 0,
    status: "RUNNING",
  },
];

//const navButton = "";

class mapDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      cardClicked: "",
      //vehicleResponse: "",
      vehicleResponseView: "",
      popupData: [],
      addModalshow: false,
      vehicleToBeTracked: "",
      vehicleResponse: [],
      chargerResponse: [],
      regNo: "",
      soc: "",
      currentTimestamp: "",
      location: "",
      odo: "",
      speed: "",
      powerConsumption: "",
      model: "",
      ignitionTime: "",
      routeNumber: "",
      distanceTravelled: "",
      navButton: "",
    };
    this.zoomScaleSize = 40;
    this.getChargerMap = this.getChargerMap.bind(this);
    this.saveCurrentMapPosition = this.saveCurrentMapPosition.bind(this);
  }

  componentDidMount() {
    this.getChargerMap();
    this.getVehicleMap();
    this.setState({
      //  mapData: vehicleResp,
      initialZoom: 15,
    });
    this.initalizeMap();
    this.checkIfZoomToVehicleIsNeededAndDoIt(this.props);
    if (this.props.clickedVehicle) {
      //   this.setMarkersInMap(vehicleResp, chargerResp);
      this.setMarkersInMap(
        this.props.clickedVehicle,
        this.props?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data
      );
    } else {
      this.setMarkersInMap(
        this.props?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
          ?.data,
        this.props?.chargerMapDashboardApi?.chargerMapDashboardApi?.result?.data
      );
    }
    //  this.timer();
  }

  timer = () => {
    setTimeout(() => {
      this.getChargerMap();
      this.getVehicleMap();
    }, 30000);
  };

  getChargerMap = async () => {
    let payLoad = {
      api_key: "MAP_DASHBOARD_CHARGER",
    };

    await this.props.getChargerMapDashboardAPI(payLoad);
  };

  getVehicleMap = async () => {
    let payLoad = {
      api_key: "MAP_DASHBOARD_VEHICLE",
    };

    await this.props.getVehicleMapDashboardAPI(payLoad);
  };

  saveCurrentMapPosition(data) {
    this.setState({
      oldMapPostionData: data,
      renderRequired: false,
      oldMapPositionSetTimestamp: new Date().getTime(),
    });
  }

  componentWillReceiveProps(nextProps) {
    let {
      currentTimestampStatusSelected,
      currentTimestampVehicleSelected,
      mapData,
    } = nextProps;
    this.setState({ navButton: this.props.navToLiveTripTracking });
    if (this.props !== nextProps) {
      let veh = "";
      let chrg = "";
      if (this.props.clickedVehicle) {
        veh = this.props.clickedVehicle;
        chrg =
          nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
            ?.data;
        //const { mapData } = this.state;
        this.setState({
          vehicleResponse: this.props.clickedVehicle,
        });
        this.setState({
          chargerResponse:
            nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
              ?.data,
        });
      } else {
        veh =
          nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
            ?.data;
        chrg =
          nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
            ?.data;
        //const { mapData } = this.state;
        this.setState({
          vehicleResponse:
            nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
              ?.data,
        });
        this.setState({
          chargerResponse:
            nextProps?.chargerMapDashboardApi?.chargerMapDashboardApi?.result
              ?.data,
        });
      }

      var mapdata = this.state.mapData;
      var isFindEqual = _.isEqual(
        _.sortBy(this.state.mapData)
        //  _.sortBy(nextProps.mapData)
      );
      if (!isFindEqual) {
        // mapdata = nextProps.mapData;
        if (!this.map) {
          this.setState({
            mapData: [],
          });
          this.initalizeMap();
        } else {
          this.setState({
            mapData: mapdata,
          });
        }
        this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
        this.clearMarkers();
        this.setMarkersInMap(veh, chrg);
      } else if (
        this.props.currentTimestampStatusSelected !==
          nextProps.currentTimestampStatusSelected ||
        this.props.currentTimestampVehicleSelected !==
          nextProps.currentTimestampVehicleSelected
      ) {
        this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
      }
    }
  }

  getvehicleResponseDetails = async () => {
    let payLoad = {
      api_key: "MAP_DASHBOARD_VEHICLE",
    };

    await this.props.getVehicleMapDashboardAPI(payLoad);
  };

  vehicleResponseClicked = () => {
    sessionStorage.setItem("Clicked", "vehicleResponse");
    this.setState({ cardClicked: "vehicleResponse" });
    // this.getvehicleResponseDetails();
    this.setState({ addModalshow: true });
    this.setState({ showPopup: true });
  };

  clearMarkers() {
    if (this.markerCluster) {
      let markers = this.markerCluster.getMarkers();
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = null;
      this.markerCluster.clearMarkers();
      this.markerCluster = null;
    }
  }

  checkIfZoomToVehicleIsNeededAndDoIt(nextProps) {
    let {
      currentTimestampStatusSelected,
      currentTimestampVehicleSelected,
      mapData,
    } = nextProps;

    if (this.state.vehicleResponse) {
      let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

      currentTimestampVehicleSelected =
        currentTimestampVehicleSelected != null
          ? currentTimestampVehicleSelected
          : 0;
      currentTimestampStatusSelected =
        currentTimestampStatusSelected != null
          ? currentTimestampStatusSelected
          : 0;

      if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
        if (
          this.state.currentTimestampStatusSelected ===
            currentTimestampStatusSelected &&
          lodash.isEqual(this.state.mapData, this.state.vehicleResponse)
        ) {
          return;
        }

        if (this.state.vehicleResponse.length > 0) {
          let bounds = new window.google.maps.LatLngBounds();
          for (let i = 0; i < this.state.vehicleResponse.length; i++) {
            let latlngBound = new window.google.maps.LatLng(
              this.state.vehicleResponse[i].latitude,
              this.state.vehicleResponse[i].longitude
            );
            bounds.extend(latlngBound);
          }
          this.map.fitBounds(bounds);
          if (this.state.vehicleResponse.length === 1) {
            this.zoomMap(15);
          }
          let vehdata = this.state.vehicleResponse;
          this.setState({ currentTimestampStatusSelected, vehdata });
          return;
        } else {
          this.map.setCenter(defaultLatlng);
          window.google.maps.event.addListenerOnce(
            this.map,
            "bounds_changed",
            () => {
              this.map.setZoom(0);
            }
          );
        }
      } else if (currentTimestampVehicleSelected !== 0) {
        if (
          this.state.currentTimestampVehicleSelected ===
          currentTimestampVehicleSelected
        ) {
          return;
        }

        let vehicleToBeTracked = nextProps.vehicleToBeTracked;
        let vehiclePositionLatLng = { lat: 0, lng: 0 };
        let zoomtoVehicle = false;
        if (vehicleToBeTracked && vehicleToBeTracked !== "") {
          let vehicletoBeTrackedData = this.state.vehicleResponse.find(
            (data) =>
              data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
          );
          if (vehicletoBeTrackedData) {
            vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
            vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
            zoomtoVehicle = true;
          }
        } else {
          this.setPositionOfMap(this.state.vehicleResponse);
          return;
        }

        if (zoomtoVehicle) {
          this.setState({
            vehicleToBeTracked,
            currentTimestampVehicleSelected,
          });
          this.zoomToVehicle(vehiclePositionLatLng);
          return true;
        }
        return false;
      }
    }

    // charger response

    if (this.state.chargerResponse) {
      let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

      currentTimestampVehicleSelected =
        currentTimestampVehicleSelected != null
          ? currentTimestampVehicleSelected
          : 0;
      currentTimestampStatusSelected =
        currentTimestampStatusSelected != null
          ? currentTimestampStatusSelected
          : 0;

      if (currentTimestampStatusSelected > currentTimestampVehicleSelected) {
        if (
          this.state.currentTimestampStatusSelected ===
            currentTimestampStatusSelected &&
          lodash.isEqual(this.state.mapData, this.state.chargerResponse)
        ) {
          return;
        }

        if (this.state.chargerResponse.length > 0) {
          let bounds = new window.google.maps.LatLngBounds();
          for (let i = 0; i < this.state.chargerResponse.length; i++) {
            let latlngBound = new window.google.maps.LatLng(
              this.state.chargerResponse[i].latitude,
              this.state.chargerResponse[i].longitude
            );
            bounds.extend(latlngBound);
          }
          this.map.fitBounds(bounds);
          if (this.state.chargerResponse.length === 1) {
            this.zoomMap(15);
          }
          let chargerdata = this.state.chargerResponse;
          this.setState({ currentTimestampStatusSelected, chargerdata });
          return;
        } else {
          this.map.setCenter(defaultLatlng);
          window.google.maps.event.addListenerOnce(
            this.map,
            "bounds_changed",
            () => {
              this.map.setZoom(0);
            }
          );
        }
      } else if (currentTimestampVehicleSelected !== 0) {
        if (
          this.state.currentTimestampVehicleSelected ===
          currentTimestampVehicleSelected
        ) {
          return;
        }

        let vehicleToBeTracked = nextProps.vehicleToBeTracked;
        let vehiclePositionLatLng = { lat: 0, lng: 0 };
        let zoomtoVehicle = false;
        if (vehicleToBeTracked && vehicleToBeTracked !== "") {
          let vehicletoBeTrackedData = this.state.chargerResponse.find(
            (data) =>
              data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
          );
          if (vehicletoBeTrackedData) {
            vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
            vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
            zoomtoVehicle = true;
          }
        } else {
          this.setPositionOfMap(this.state.chargerResponse);
          return;
        }

        if (zoomtoVehicle) {
          this.setState({
            vehicleToBeTracked,
            currentTimestampVehicleSelected,
          });
          this.zoomToVehicle(vehiclePositionLatLng);
          return true;
        }
        return false;
      }
    }
  }

  zoomMap(zoomValue) {
    if (this.map) {
      let self = this;
      window.google.maps.event.addListenerOnce(
        this.map,
        "bounds_changed",
        () => {
          self.map.setZoom(zoomValue ? zoomValue : this.state.initialZoom);
        }
      );
    }
  }

  zoomToVehicle(location) {
    let self = this;
    let currentZoom = this.map.getZoom();
    this.map.setCenter({ lat: location.lat, lng: location.lng });
    if (currentZoom < this.state.initialZoom || !this.state.initialZoom) {
      window.google.maps.event.addListenerOnce(
        self.map,
        "bounds_changed",
        () => {
          self.map.setZoom(
            !this.state.initialZoom ? 15 : this.state.initialZoom
          );
        }
      );
    }
    // let bounds = new window.google.maps.LatLngBounds();
    // let latlngBound = new window.google.maps.LatLng(location);
    // bounds.extend(latlngBound);
    // this.map.fitBounds(bounds);
  }

  initalizeMap = () => {
    let defaultLatlng = { lat: 30.741482, lng: 76.7680662 };

    this.map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions(defaultLatlng, {
        zoom: 14,
      })
    );

    this.map.addListener("zoom_changed", () => {
      let center = this.map.getCenter();
      // this.props.saveCurrentMapPosition({
      //   zoom: this.map.getZoom(),
      //   lat: center.lat(),
      //   lng: center.lng(),
      // });
    });

    this.map.addListener("center_changed", () => {
      let center = this.map.getCenter();
      // this.props.saveCurrentMapPosition({
      //   zoom: this.map.getZoom(),
      //   lat: center.lat(),
      //   lng: center.lng(),
      // });
    });
  };

  setPositionOfMap = (data) => {
    this.loc = [];

    //to maintain map's position on each auto refresh
    if (this.props.oldMapPostionData) {
      this.map.setCenter({
        lat: this.props.oldMapPostionData.lat,
        lng: this.props.oldMapPostionData.lng,
      });
      return;
    }

    if (data && data.length > 0) {
      this.map.setCenter({ lat: data[0].latitude, lng: data[0].longitude });
    } else {
      return;
    }
  };

  getImage = (status) => {
    let defaultImage,
      activeImage,
      vehiclestatus = status.toLowerCase();
    // if (vehiclestatus === "warning") {
    //   defaultImage = warningTruck;
    //   activeImage = warningTruckSelected;
    // } else if (vehiclestatus === "service") {
    //   defaultImage = serviceTruck;
    //   activeImage = serviceTruckSelected;
    // } else
    if (vehiclestatus === "running") {
      defaultImage = RunningTruck;
      activeImage = RunningTruckSelected;
      //<div onClick={this.vehicleResponse}></div>
    } else if (vehiclestatus === "moving") {
      defaultImage = RunningTruck;
      activeImage = RunningTruckSelected;
    } else if (vehiclestatus === "charging") {
      defaultImage = ChargingSelected;
      activeImage = ChargingSelected;
    } else if (vehiclestatus === "stopped") {
      defaultImage = StoppedBus;
      activeImage = StoppedBusSelected;
    } else if (vehiclestatus === "disconnected") {
      defaultImage = DisconnectedBus;
      activeImage = DisconnectedBusSelected;
    }
    // else if (vehiclestatus === "others") {
    //   defaultImage = otherTruck;
    //   activeImage = OthertruckSelected;
    // }
    const imageObject = {
      default: defaultImage,
      active: activeImage,
    };
    return imageObject;
  };

  setMarkersInMap = (data, data1) => {
    try {
      if (data && data.length > 0) {
        const self = this;
        const infowindow = new window.google.maps.InfoWindow({});
        const markers = [];
        let marker;
        let //zoomHandlers = [],
          clickHandlers = [];
        var that = this;
        for (let i = 0; i < data.length; i++) {
          const status = data[i].status;
          let markerimage = self.getImage(status);
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(
              data[i].latitude,
              data[i].longitude
            ),
            map: this.map,
            icon: {
              url: markerimage.default,
              anchor: new window.google.maps.Point(25, 25),
              //labelOrigin: new window.google.maps.Point(10, -8)
            },
            //title: data[i].reg_no,
            //label: data[i].reg_no,
            title:
              "Registration Number : " +
              data[i].reg_no +
              "\n" +
              "SOC : " +
              data[i].soc +
              "(%)" +
              "\n" +
              "Timestamp : " +
              data[i].current_timestamp +
              "\n" +
              "Location : " +
              data[i].location,
          });
          window.google.maps.event.addListener(
            marker,
            "click",
            function (event) {
              that.vehicleResponseClicked();
              that.setState({ location: data[i].location });
              that.setState({ regNo: data[i].reg_no });
              that.setState({ currentTimestamp: data[i].current_timestamp });
              that.setState({ soc: data[i].soc });
              that.setState({ odo: data[i].odo });
              that.setState({ speed: data[i].speed });
              that.setState({ powerConsumption: data[i].powerConsumption });
              that.setState({ model: data[i].model });
              that.setState({ ignitionTime: data[i].ignitionTime });
              that.setState({ routeNumber: data[i].routeNumber });
              that.setState({ distanceTravelled: data[i].distanceTravelled });
            }
          );

          // clickHandlers.push(
          //   window.google.maps.event.addListener(
          //     marker,
          //     "click",
          //     (function (marker, i) {
          //       return function () {
          //         var d = new Date(data[i].current_timestamp);
          //         console.log("vehicle clicked");
          //         // var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
          //         // var contentString =
          //         //   '<div id="iw-container" >' +
          //         //   '<div><img src={require("../../assets/images/noun-bus-1260937/bus.png")} alt="image">' +

          //         //   "</div>" +
          //         //   '<div id="iw-titles"><span id="iw-title">Registration Number :</span><br>' +
          //         //   data[i].reg_no +
          //         //   "</div>" +
          //         //   '<div id="iw-container-content">SOC :<br>' +
          //         //   data[i].soc +
          //         //   "</div>" +
          //         //   '<div id="iw-container-content">Location :<br>' +
          //         //   data[i].location +
          //         //   "</div>" +
          //         //   '<div id="iw-container-content">Time Stamp :<br>' +
          //         //   data[i].current_timestamp +
          //         //   "</div>" +
          //         //   "</div>";

          //         // infowindow.setContent(contentString);
          //         // infowindow.open(self.map, marker);
          //         this.setState({ showPopup: true });
          //         for (var j = 0; j < markers.length; j++) {
          //           let markerimageonclick = self.getImage(data[j].status);
          //           markers[j].setIcon(markerimageonclick.default);
          //         }
          //         marker.setIcon(markerimage.active);
          //         window.google.maps.event.addListener(
          //           infowindow,
          //           "closeclick",
          //           function () {
          //             infowindow.close();
          //             marker.setIcon(markerimage.default);
          //           }
          //         );

          //         if (infowindow.getMap()) {
          //           //var vehicleId = data[i].vehicle_id;
          //           //  if (self.props.healthCheckVehicleSelected) {
          //           // self.zoomToVehicle({                      //commented
          //           //   lat: data[i].latitude,
          //           //   lng: data[i].longitude,
          //           // });
          //           self.setState({ vehicleToBeTracked: data[i].reg_no });
          //           self.props.healthCheckVehicleSelected(data[i]);
          //         }
          //         // }
          //       };
          //     })
          //     (marker, i)
          //   )
          // );

          markers.push(marker);
        }

        self.markerCluster = new MarkerClusterer(self.map, markers, {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
      }
      if (data1 && data1.length > 0) {
        const self = this;
        // const infowindow = new window.google.maps.InfoWindow({});
        const markers = [];
        let marker;
        let //zoomHandlers = [],
          clickHandlers = [];
        for (let i = 0; i < data1.length; i++) {
          const status = data1[i].status;
          let markerimage = self.getImage(status);
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(
              data1[i].latitude,
              data1[i].longitude
            ),
            map: this.map,
            icon: {
              url: markerimage.default,
              anchor: new window.google.maps.Point(25, 25),
              //labelOrigin: new window.google.maps.Point(10, -8)
            },
            //title: data[i].reg_no,
            //label: data[i].reg_no,
            title:
              "Location : " +
              data1[i].location +
              "\n" +
              "Charge Station : " +
              data1[i].charge_station,
          });

          // clickHandlers.push(
          //   window.google.maps.event.addListener(
          //     marker,
          //     "click",
          //     (function (marker, i) {
          //       return function () {
          //         var d = new Date(data1[i].current_timestamp);
          //         var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
          //         var contentString =
          //           '<div id="iw-container">' +
          //           '<div className="iw-container--title">Location :&nbsp' +
          //           data1[i].location +
          //           "</div>" +
          //           '<div className="iw-container--content">Charge Station :&nbsp' +
          //           data1[i].charge_station +
          //           "</div>" +
          //           "</div>";

          //         infowindow.setContent(contentString);
          //         infowindow.open(self.map, marker);

          //         for (var j = 0; j < markers.length; j++) {
          //           let markerimageonclick = self.getImage(data1[j].status);
          //           markers[j].setIcon(markerimageonclick.default);
          //         }
          //         marker.setIcon(markerimage.active);
          //         window.google.maps.event.addListener(
          //           infowindow,
          //           "closeclick",
          //           function () {
          //             infowindow.close();
          //             marker.setIcon(markerimage.default);
          //           }
          //         );

          //         if (infowindow.getMap()) {
          //           //var vehicleId = data[i].vehicle_id;
          //           //  if (self.props.healthCheckVehicleSelected) {
          //           self.zoomToVehicle({
          //             lat: data1[i].latitude,
          //             lng: data1[i].longitude,
          //           });
          //           self.setState({
          //             vehicleToBeTracked: data1[i].charge_station,
          //           });
          //           self.props.healthCheckVehicleSelected(data1[i]);
          //           //  }
          //         }
          //       };
          //     })(marker, i)
          //   )
          // );
          markers.push(marker);
        }

        self.markerCluster = new MarkerClusterer(self.map, markers, {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
      }
    } catch (e) {}
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.vehicleResponseClicked}>clickkkkk</button> */}
        <div
          id="map"
          className="map"
          style={{ height: `62vh`, width: `95%` }}
        ></div>
        {this.state.showPopup && (
          <MapInfowindowPopup
            buttonClicked={this.state.cardClicked}
            data={this.state.popupData}
            show={this.state.addModalshow}
            closemodal={this.addModalClose}
            vehicle_location={this.state.location}
            reg_no={this.state.regNo}
            soc={this.state.soc}
            current_timestamp={this.state.currentTimestamp}
            odo={this.state.odo}
            speed={this.state.speed}
            powerConsumption={this.state.powerConsumption}
            model={this.state.model}
            ignitionTime={this.state.ignitionTime}
            routeNumber={this.state.routeNumber}
            distanceTravelled={this.state.distanceTravelled}
            navButton={this.state.navButton}
          />
        )}
      </div>
    );
  }
}

//export default mapDashboard;

function mapStateToProps(state) {
  return {
    ...state,
    // mapDashboard: state.mapDashboard,
  };
}

export default connect(mapStateToProps, {
  getChargerMapDashboardAPI,
  getVehicleMapDashboardAPI,
})(withRouter(mapDashboard));
