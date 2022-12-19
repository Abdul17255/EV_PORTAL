// import React, { Component } from "react";
// // import cargoTruck from "images/cargo-truck.svg";
// import RunningTruck from "../../assets/images/map_dashboard/running-truck.svg";
// // import cargoTruckSelected from "images/cargo-truck-selected.svg";
// import RunningTruckSelected from "../../assets/images/map_dashboard/running-truck.svg";
// // import otherTruck from "images/grey-truck.svg";
// // import OthertruckSelected from "images/grey-truck-selected.svg";
// // import warningTruck from "images/warning-truck.svg";
// // import serviceTruck from "images/service-truck.svg";
// // import warningTruckSelected from "images/warning-truck-selected.svg";
// // import serviceTruckSelected from "images/service-truck-selected.svg";
// import "./index.scss";
// import MarkerClusterer from "@google/markerclusterer";
// import _ from "underscore";
// import lodash from "lodash";
// import moment from "moment";

// // Constants
// import { mapOptions } from "../../constants/map-constants";

// class HealthCheckMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       vehicleToBeTracked: "",
//     };
//     this.zoomScaleSize = 40;
//   }

//   componentDidMount() {
//     this.setState({
//       mapData: [
//         {
//           battery_in: "5130",
//           battery_out: "3769",
//           charger_status: null,
//           chiller_Temperature: 31,
//           current_location:
//             "51,shivranjni society, near shivranjni cross road, satellite road, satellite, Satellite, Ahmedabad, Gujarat 380015, India",
//           dcdc_converter_status: 3,
//           distance_to_empty: 70,
//           driver_name: "Default Driver",
//           energy_Consumed: 3769,
//           fw_version: "T211D51652",
//           ignition_status: 1,
//           last_time_stamp: "2022-09-27 12:04:02",
//           latitude: "23.027776",
//           longitude: "72.5177984",
//           main_coolant_temperature: 46,
//           motor_speed: 4,
//           odo_meter: 143275.12,
//           pack_current: 18,
//           pack_voltage: 659,
//           reg_no: "L031",
//           route: null,
//           soc_status: 57,
//           vehicle_battery_potential: "27.219999313354492",
//           vehicle_id: "8042117719",
//           vehicle_speed: 0.23,
//           vehicle_status: "RUNNING",
//           vin: "MB1PAEUDXKEBE3427",
//         },
//       ],
//       initialZoom: 15,
//     });
//     this.initalizeMap(this.props.mapData);
//     this.checkIfZoomToVehicleIsNeededAndDoIt(this.props);
//     this.setMarkersInMap(this.props.mapData);
//   }

//   componentWillReceiveProps(nextProps) {
//     if (this.props !== nextProps) {
//       //const { mapData } = this.state;
//       var mapdata = this.state.mapData;
//       var isFindEqual = _.isEqual(
//         _.sortBy(this.state.mapData),
//         _.sortBy(nextProps.mapData)
//       );
//       if (!isFindEqual) {
//         mapdata = nextProps.mapData;
//         if (!this.map) {
//           this.setState({
//             mapData: this.props.mapData,
//           });
//           this.initalizeMap();
//         } else {
//           this.setState({
//             mapData: mapdata,
//           });
//         }
//         this.checkIfZoomToVehicleIsNeededAndDoIt(nextProps);
//         this.clearMarkers();
//         this.setMarkersInMap(mapdata);
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

//     if (mapData) {
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
//           lodash.isEqual(this.state.mapData, mapData)
//         ) {
//           return;
//         }

//         if (mapData.length > 0) {
//           let bounds = new window.google.maps.LatLngBounds();
//           for (let i = 0; i < mapData.length; i++) {
//             let latlngBound = new window.google.maps.LatLng(
//               mapData[i].latitude,
//               mapData[i].longitude
//             );
//             bounds.extend(latlngBound);
//           }
//           this.map.fitBounds(bounds);
//           if (mapData.length === 1) {
//             this.zoomMap(15);
//           }
//           this.setState({ currentTimestampStatusSelected, mapData });
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
//           let vehicletoBeTrackedData = mapData.find(
//             (data) =>
//               data.reg_no.toLowerCase() === vehicleToBeTracked.toLowerCase()
//           );
//           if (vehicletoBeTrackedData) {
//             vehiclePositionLatLng.lat = vehicletoBeTrackedData.latitude;
//             vehiclePositionLatLng.lng = vehicletoBeTrackedData.longitude;
//             zoomtoVehicle = true;
//           }
//         } else {
//           this.setPositionOfMap(mapData);
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
//     let defaultLatlng = { lat: 24.484196832481338, lng: 77.02726249999999 };

//     this.map = new window.google.maps.Map(
//       document.getElementById("map"),
//       mapOptions(defaultLatlng, {
//         zoom: this.props.oldMapPostionData
//           ? this.props.oldMapPostionData.zoom
//           : 4,
//       })
//     );

//     this.map.addListener("zoom_changed", () => {
//       let center = this.map.getCenter();
//       this.props.saveCurrentMapPosition({
//         zoom: this.map.getZoom(),
//         lat: center.lat(),
//         lng: center.lng(),
//       });
//     });

//     this.map.addListener("center_changed", () => {
//       let center = this.map.getCenter();
//       this.props.saveCurrentMapPosition({
//         zoom: this.map.getZoom(),
//         lat: center.lat(),
//         lng: center.lng(),
//       });
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
//     }
//     // else if (vehiclestatus === "stopped") {
//     //   defaultImage = cargoTruck;
//     //   activeImage = cargoTruckSelected;
//     // } else if (vehiclestatus === "others") {
//     //   defaultImage = otherTruck;
//     //   activeImage = OthertruckSelected;
//     // }
//     const imageObject = {
//       default: defaultImage,
//       active: activeImage,
//     };
//     return imageObject;
//   };

//   setMarkersInMap = (data) => {
//     try {
//       if (data && data.length > 0) {
//         const self = this;
//         const infowindow = new window.google.maps.InfoWindow({});
//         const markers = [];
//         let marker;
//         let //zoomHandlers = [],
//           clickHandlers = [];

//         for (let i = 0; i < data.length; i++) {
//           const status = data[i].vehicle_status;
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
//               data[i].soc_status +
//               "(%)" +
//               "\n" +
//               "Timestamp : " +
//               data[i].last_time_stamp +
//               "\n" +
//               "Vehicle Speed : " +
//               data[i].vehicle_speed +
//               "(kmph)" +
//               "\n" +
//               "Motor Speed : " +
//               data[i].motor_speed +
//               "(rpm)",
//           });

//           clickHandlers.push(
//             window.google.maps.event.addListener(
//               marker,
//               "click",
//               (function (marker, i) {
//                 return function () {
//                   var d = new Date(data[i].last_time_stamp);
//                   var parsedTimeValue = moment(d).format("YYYY-MM-DD HH:mm");
//                   var contentString =
//                     '<div id="iw-container">' +
//                     '<div class="iw-container--title">Registration Number :&nbsp' +
//                     data[i].reg_no +
//                     "</div>" +
//                     '<div class="iw-container--content">Driver Name :&nbsp' +
//                     data[i].driver_name +
//                     "</div>" +
//                     '<div class="iw-container--content">Location :&nbsp' +
//                     data[i].current_location +
//                     "</div>" +
//                     '<div class="iw-container--content">Time Stamp :&nbsp' +
//                     parsedTimeValue +
//                     "</div>" +
//                     "</div>";

//                   infowindow.setContent(contentString);
//                   infowindow.open(self.map, marker);
//                   for (var j = 0; j < markers.length; j++) {
//                     let markerimageonclick = self.getImage(
//                       data[j].vehicle_status
//                     );
//                     markers[j].setIcon(markerimageonclick.default);
//                   }
//                   marker.setIcon(markerimage.active);
//                   window.google.maps.event.addListener(
//                     infowindow,
//                     "closeclick",
//                     function () {
//                       infowindow.close();
//                       marker.setIcon(markerimage.default);
//                     }
//                   );

//                   if (infowindow.getMap()) {
//                     //var vehicleId = data[i].vehicle_id;
//                     if (self.props.healthCheckVehicleSelected) {
//                       self.zoomToVehicle({
//                         lat: data[i].latitude,
//                         lng: data[i].longitude,
//                       });
//                       self.setState({ vehicleToBeTracked: data[i].reg_no });
//                       self.props.healthCheckVehicleSelected(data[i]);
//                     }
//                   }
//                 };
//               })(marker, i)
//             )
//           );
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
//     return <div id="map" className="map"></div>;
//   }
// }
// export default HealthCheckMap;
