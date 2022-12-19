// import React, { Component } from "react";
// import "./index.scss";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/css/bootstrap.css';
// import Track from "../../container/track"
// import {Redirect} from "react-router-dom"
// import { withRouter } from "react-router";
// import {
//   Button,
//   Container,
//   Nav,
//   NavLink,
//   NavDropdown,
//   Navbar,
//   Dropdown,
// } from "react-bootstrap";
// import {
//   TAB_MY_DASHBOARD as TabMyDashboard,
//   TAB_CHARGING_SUMMARY as TabChargingSummary,
//   TAB_CHARGING_INFRASTRUCTURE as TabChargingInfrastructure,
//   TAB_MAP_DASHBOARD as TabMapDashboard,
//   TAB_CONNECTED_MODULE as TabConnectedModule,
//   TAB_REPORTS as TabReports,
//   TAB_TRACK as TabTrack,
//   TAB_LIVE_TRIP_TRACKING as TabLiveTripTracking,
//   TAB_GEOFENCE as TabGeofence,
//   //TAB_TRIP_MASTER as TabTripMaster,
//     TAB_TRIP_UPDATE as TabTripUpdate,
//   VIEW_REPORTS as TabViewReports,
//   TAB_BREAKDOWN_REPORT as TabBreakdownReport,
//   TAB_CHECKLIST_REPORT as TabChecklistReport,
//   TAB_TRIP_REPORT as TabTripReport,
//   TAB_REPORTING_DETAILS as TabReportingDetails,
// } from "../../constants/app-contants";
// import { Link } from "react-router-dom";

// class Menuheader extends Component {
//   constructor(props) {
//     super(props);
//     let tabs = "";

//     tabs = [
//       {
//         tabIndex: TabConnectedModule.ID,
//         tabName: TabConnectedModule.NAME,
//         isDropdown: true,
//         tabs: [
//           {
//             tabIndex: TabTrack.ID,
//             tabName: TabTrack.NAME,
//             tabImage: `${require("../../assets/images/track/track.png")}`,
//           },
//           {
//             tabIndex: TabLiveTripTracking.ID,
//             tabName: TabLiveTripTracking.NAME,
//             tabImage: `${require("../../assets/images/livetrip/livetrip.png")}`,
//           },
//         ],
//         tabImage: `${require("../../assets/images/nav/nav.png")}`,
//       },
//       {
//         tabIndex: TabChargingInfrastructure.ID,
//         tabName: TabChargingInfrastructure.NAME,
//         isDropdown: true,
//         tabs: [
//           {
//             tabIndex: TabMyDashboard.ID,
//             tabName: TabMyDashboard.NAME,
//             tabImage: `${require("../../assets/images/subnav/first.png")}`,
//           },
//           {
//             tabIndex: TabChargingSummary.ID,
//             tabName: TabChargingSummary.NAME,
//             tabImage: `${require("../../assets/images/subnav/second.png")}`,
//           },
//         ],
//       },
//       {
//         tabIndex: TabViewReports.ID,
//         tabName: TabViewReports.NAME,
//         isDropdown: true,
//         tabs: [
//           {
//             tabIndex: TabTripUpdate.ID,
//             tabName: TabTripUpdate.NAME,
//             tabImage: `${require("../../assets/images/subnav/first.png")}`,
//           },
//           {
//             tabIndex: TabBreakdownReport.ID,
//             tabName: TabBreakdownReport.NAME,
//             tabImage: `${require("../../assets/images/track/track.png")}`,
//           },
//           {
//             tabIndex: TabChecklistReport.ID,
//             tabName: TabChecklistReport.NAME,
//             tabImage: `${require("../../assets/images/subnav/second.png")}`,
//           },
//           {
//             tabIndex: TabTripReport.ID,
//             tabName: TabTripReport.NAME,
//             tabImage: `${require("../../assets/images/livetrip/livetrip.png")}`,
//           },
//           {
//             tabIndex: TabReportingDetails.ID,
//             tabName: TabReportingDetails.NAME,
//             tabImage: `${require("../../assets/images/subnav/second.png")}`,
//           },
//         ],
//       },

//     ];

//     this.state = {
//       tabs,
//       isNotificationTrayClick: false,
//       button: true,
//       // loginId: User.getLoginId(),
//     };

//     this.events = [
//       "load",
//       "mousemove",
//       "mousedown",
//       "click",
//       "scroll",
//       "keypress",
//     ];
//     this.handleClick = this.handleClick.bind(this);
//     this.tabClick = this.tabClick.bind(this);
//     this.routeChange = this.routeChange.bind(this);
//   }

//   routeChange() {
//     let path = `../track`;
//     this.props.history.push(path);
//   }
//   handleClick(){
//     this.setState({
//       button:!this.state.button
//     })
//   }
//   // onHomeClick = () => {
//   //   //return(<></></Track>)
//   //  let tabItem={ tabIndex: 3,
//   //   tabName: "Trends",
//   //  }
//   //  return tabItem;

//   //   //window.location.href = "/track";
//   // };
//   componentDidMount() {
//     this.props.history.push("/dashboard");
//   }

//   tabClick = (evt, tabItem) => {
//     const { selectedTab } = this.props;
//     if (evt.target.parentElement) {
//       let tabs = evt.target.parentElement.getElementsByClassName("tab");
//       Array.prototype.forEach.call(tabs, function (tab) {
//         tab.classList.remove("active");
//       });
//     }
//     evt.currentTarget.classList.add("active");
//     this.setState({ selTab: tabItem.tabIndex });
//     selectedTab && selectedTab(evt, tabItem);
//   };
//   render() {
//     const { tabs } = this.state;
//     const { isNavMenuDisabled, selTab, isNotificationTrayShow, loginDetails } =
//       this.props;
//     let tabDom = [],
//       profileDom,
//       navDom;
//     if (tabs && tabs.length > 0) {
//       tabs.map((tabItem, index) => {
//         if (this.state.loginId === "admin" && tabItem.tabName == "Master") {
//         } else {
//           let flag = false;
//           if (tabItem.isDropdown) {
//             tabItem.tabs.map((t) => {
//               if (selTab === t.tabIndex) flag = true;
//             });
//           }
//           let className =
//             selTab === tabItem.tabIndex || flag
//               ? "tabs__tab active tab ripple-effect__dug-egg "
//               : "tabs__tab tab ripple-effect__dug-egg";
//           if (tabItem.isDropdown) {
//             tabDom.push(
//               <li className={`${className} dropdown`} key={tabItem.tabIndex}>
//               <img
//               src={require("../../assets/images/nav/nav.png")}
//               className="navicon"
//               alt=""
//             />
//                 <a>
//                 {tabItem.tabName}
//                 <img
//                 src={require("../../assets/images/nav-up/nav-up.png")}
//                 id="tab" alt=""
//                 className="nav-up"
//             />
//             {/*<div className={this.state.button ? "nav-up": "nav-down"} onClick={this.handleClick}/>*/}

//                 </a>
//                 {/* className={this.state.up ? "up" : "down"} */}
//                 <span className="tab-strip"></span>

//                 <div class="dropdown-content">
//                   {tabItem.tabs.map((t) => (
//                     <a
//                       onClick={(e) => {
//                         this.tabClick(e, t);
//                       }}
//                     >
//                       <span className="hoverTab">
//                         <img src={t.tabImage} />
//                         <span className="imageSpace"></span> {t.tabName}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </li>
//             );
//           } else {
//             tabDom.push(
//               <li
//                 className={`${className} dropdown`}
//                 key={tabItem.tabIndex}
//                 onClick={(e) => {
//                   if (!tabItem.isDropdown) this.tabClick(e, tabItem);
//                 }}
//               >
//               <img
//               src={require("../../assets/images/nav/nav.png")}
//               className="navicon"
//               alt=""
//             />
//                 <a>

//                 {tabItem.tabName}
//                 {/*div className={this.state.button ? "nav-up": "nav-down"} onClick={this.handleClick}/>*/}
//                 <img
//                 src={require("../../assets/images/nav-up/nav-up.png")}
//                 id="tab" alt=""
//                 className="nav-up"
//               />
//                 </a>

//                {/* <span className="tab-strip">
//                   <img
//                     src={require("../../assets/images/nav/nav.png")}
//                     className="navicon"
//                     alt=""
//                   />
//               </span>*/}
//                {/*<span className="nav-up">
//                   <img
//                     src={require("../../assets/images/nav-up/nav-up.png")}
//                     id="tab"  alt=""
//                     onClick={(e) => {
//                       if (!tabItem.isDropdown) this.tabClick();
//                     }}
//                   />
//                   </span>*/}
//               </li>
//             );
//           }
//         }
//       }, this);
//     }

//     navDom = <div className="header__nav-menu">
//     {/*<Link
//     to={{
//       //pathname: "",
//       //showOverlay: this.state.openedVehicle,
//     }}
//   >*/}
//     <img src={require("../../assets/home.svg").default} alt="home" className="home-svg"
//    //onClick={this.onHomeClick}
//     />

//     {tabDom}</div>;
//     return <div className="subheader">
//     {navDom}</div>;
//   }
// }

// export default withRouter(Menuheader);

// import React, { Component } from "react";
// import "./index.scss";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/css/bootstrap.css';

// import { withRouter } from "react-router";
// import {
//   Button,
//   Container,
//   Nav,
//   NavLink,
//   NavDropdown,
//   Navbar,
//   Dropdown,
// } from "react-bootstrap";
// import {
//   TAB_MY_DASHBOARD as TabMyDashboard,
//   TAB_CHARGING_SUMMARY as TabChargingSummary,
//   TAB_CHARGING_INFRASTRUCTURE as TabChargingInfrastructure,
//   TAB_MAP_DASHBOARD as TabMapDashboard,
//   TAB_CONNECTED_MODULE as TabConnectedModule,
//   TAB_REPORTS as TabReports,
//   TAB_TRACK as TabTrack,
//   TAB_LIVE_TRIP_TRACKING as TabLiveTripTracking,
//   TAB_GEOFENCE as TabGeofence,
//   TAB_TRIP_MASTER as TabTripMaster,
//   VIEW_REPORTS as TabViewReports,
//   TAB_BREAKDOWN_REPORT as TabBreakdownReport,
//   TAB_CHECKLIST_REPORT as TabChecklistReport,
//   TAB_TRIP_REPORT as TabTripReport,
// } from "../../constants/app-contants";

// class Menuheader extends Component {
//   constructor(props) {
//     super(props);
//     let tabs = "";

//     tabs = [
//       {
//         tabIndex: TabConnectedModule.ID,
//         tabName: TabConnectedModule.NAME,
//         isDropdown: true,
//         tabs: [
//           {
//             tabIndex: TabTrack.ID,
//             tabName: TabTrack.NAME,
//             tabImage: `${require("../../assets/images/track/track.png")}`,
//           },
//           {
//             tabIndex: TabLiveTripTracking.ID,
//             tabName: TabLiveTripTracking.NAME,
//             tabImage: `${require("../../assets/images/livetrip/livetrip.png")}`,
//           },
//           // {
//           //   tabIndex: TabGeofence.ID,
//           //   tabName: TabGeofence.NAME,
//           //   tabImage: `${require("../../assets/images/subnav/second.png")}`,
//           // },
//         ],
//         tabImage: `${require("../../assets/images/nav/nav.png")}`,
//       },
//       {
//         tabIndex: TabChargingInfrastructure.ID,
//         tabName: TabChargingInfrastructure.NAME,
//         isDropdown: true,
//         tabs: [
//           {
//             tabIndex: TabMyDashboard.ID,
//             tabName: TabMyDashboard.NAME,
//             tabImage: `${require("../../assets/images/subnav/first.png")}`,
//           },
//           {
//             tabIndex: TabChargingSummary.ID,
//             tabName: TabChargingSummary.NAME,
//             tabImage: `${require("../../assets/images/subnav/second.png")}`,
//           },
//         ],
//       },
//       {
//         tabIndex: TabViewReports.ID,
//         tabName: TabViewReports.NAME,
//         isDropdown: true,
//         tabs: [
//           {
//             tabIndex: TabTripMaster.ID,
//             tabName: TabTripMaster.NAME,
//             tabImage: `${require("../../assets/images/subnav/first.png")}`,
//           },
//           {
//             tabIndex: TabBreakdownReport.ID,
//             tabName: TabBreakdownReport.NAME,
//             tabImage: `${require("../../assets/images/track/track.png")}`,
//           },
//           {
//             tabIndex: TabChecklistReport.ID,
//             tabName: TabChecklistReport.NAME,
//             tabImage: `${require("../../assets/images/subnav/second.png")}`,
//           },
//           {
//             tabIndex: TabTripReport.ID,
//             tabName: TabTripReport.NAME,
//             tabImage: `${require("../../assets/images/livetrip/livetrip.png")}`,
//           },
//         ],
//       },

//     ];

//     this.state = {
//       tabs,
//       isNotificationTrayClick: false,
//       // loginId: User.getLoginId(),
//     };

//     this.events = [
//       "load",
//       "mousemove",
//       "mousedown",
//       "click",
//       "scroll",
//       "keypress",
//     ];

//     this.tabClick = this.tabClick.bind(this);
//   }

//   componentDidMount() {
//     this.props.history.push("/dashboard");
//   }

//   rotateImage = () => {
//     var img = document.getElementById("tab");
//     img.className = "rotateimg180";
//   };
//   tabClick = (evt, tabItem) => {
//     const { selectedTab } = this.props;
//     if (evt.target.parentElement) {
//       let tabs = evt.target.parentElement.getElementsByClassName("tab");
//       Array.prototype.forEach.call(tabs, function (tab) {
//         tab.classList.remove("active");
//       });
//     }
//     evt.currentTarget.classList.add("active");
//     this.setState({ selTab: tabItem.tabIndex });
//     selectedTab && selectedTab(evt, tabItem);
//   };
//   render() {
//     const { tabs } = this.state;
//     const { isNavMenuDisabled, selTab, isNotificationTrayShow, loginDetails } =
//       this.props;
//     let tabDom = [],
//       profileDom,
//       navDom;
//     if (tabs && tabs.length > 0) {
//       tabs.map((tabItem, index) => {
//         if (this.state.loginId === "admin" && tabItem.tabName == "Master") {
//         } else {
//           let flag = false;
//           if (tabItem.isDropdown) {
//             tabItem.tabs.map((t) => {
//               if (selTab === t.tabIndex) flag = true;
//             });
//           }
//           let className =
//             selTab === tabItem.tabIndex || flag
//               ? "tabs__tab active tab ripple-effect__dug-egg "
//               : "tabs__tab tab ripple-effect__dug-egg";
//           if (tabItem.isDropdown) {
//             tabDom.push(
//               <li className={`${className} dropdown`} key={tabItem.tabIndex}>
//                 <a>{tabItem.tabName}</a>
//                 {/* className={this.state.up ? "up" : "down"} */}

//                 <span className="tab-strip">
//                   <img
//                     src={require("../../assets/images/nav/nav.png")}
//                     className="navicon"
//                     alt=""
//                   />
//                 </span>

//                 <span className="nav-up-one">
//                   <img
//                     src={require("../../assets/images/nav-up/nav-up.png")}
//                     id="tab" alt=""
//                     className="rotateimg180"
//                   />
//                 </span>
//                 <div class="dropdown-content">
//                   {tabItem.tabs.map((t) => (
//                     <a
//                       onClick={(e) => {
//                         this.tabClick(e, t);
//                       }}
//                     >
//                       <span className="hoverTab">
//                         <img src={t.tabImage} />
//                         <span className="imageSpace"></span> {t.tabName}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </li>
//             );
//           } else {
//             tabDom.push(
//               <li
//                 className={`${className} dropdown`}
//                 key={tabItem.tabIndex}
//                 onClick={(e) => {
//                   if (!tabItem.isDropdown) this.tabClick(e, tabItem);
//                 }}
//               >
//                 <a>{tabItem.tabName}</a>
//                 <span className="tab-strip">
//                   <img
//                     src={require("../../assets/images/nav/nav.png")}
//                     className="navicon"
//                     alt=""
//                   />
//                 </span>
//                 <span className="nav-up">
//                   <img
//                     src={require("../../assets/images/nav-up/nav-up.png")}
//                     id="tab"  alt=""
//                     onClick={(e) => {
//                       if (!tabItem.isDropdown) this.tabClick();
//                     }}
//                   />
//                 </span>
//               </li>
//             );
//           }
//         }
//       }, this);
//     }

//     navDom = <div className="header__nav-menu">{tabDom}</div>;
//     return <div className="subheader">{navDom}</div>;
//   }
// }

// export default withRouter(Menuheader);

import React, { Component } from "react";
import "./index.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Track from "../../container/track";

import { withRouter } from "react-router";
import {
  Button,
  Container,
  Nav,
  NavLink,
  NavDropdown,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import {
  TAB_MY_DASHBOARD as TabMyDashboard,
  TAB_CHARGING_SUMMARY as TabChargingSummary,
  TAB_CHARGING_INFRASTRUCTURE as TabChargingInfrastructure,
  TAB_MAP_DASHBOARD as TabMapDashboard,
  TAB_CONNECTED_MODULE as TabConnectedModule,
  TAB_REPORTS as TabReports,
  TAB_TRACK as TabTrack,
  TAB_LIVE_TRIP_TRACKING as TabLiveTripTracking,
  TAB_GEOFENCE as TabGeofence,
  //TAB_TRIP_MASTER as TabTripMaster,
  TAB_TRIP_UPDATE as TabTripUpdate,
  VIEW_REPORTS as TabViewReports,
  TAB_BREAKDOWN_REPORT as TabBreakdownReport,
  TAB_CHECKLIST_REPORT as TabChecklistReport,
  TAB_TRIP_DETAILS as TabTripDetails,
  TAB_REPORTING_DETAILS as TabReportingDetails,
  TAB_DASHBOARD as TabDashboard,
  TAB_REPORT as TabReport,
  TAB_DRIVER_MONITORING as TabDrivermonitoring,
  TAB_UPTIME_MANAGEMENT as TabUptimemanagement,
  TAB_CONTRACTUAL_KPI as TabContractualKPI,
  TAB_FLEET_HEALTH as TabFleethealth ,
  TAB_FLEET_UPTIME as TabFleetuptime,
  TAB_VEHICLE_SUMMARY_REPORT as TabVehicleSummaryReport,
  TAB_CHARGER_REPORT as TabChargerReport,
  TAB_TRIP_SUMMARY as TabTripSummary,
  TAB_DRIVER_DETAILS as TabDriverDetails,
  TAB_ATTENDANCE as TabAttandance,
  TAB_TRIP_MONITORING as TabTripmonitoring,
  TAB_TRIP_MONITORING_LOG as TabTripminitoringlog,
  TAB_MASTER as TabMaster,
  TAB_VEHICLE_MASTER as TabVehicleMaster,
  TAB_ROOT_MASTER as TabRootMaster ,
  TAB_DRIVER_MASTER as TabDriverMaster,
} from "../../constants/app-contants";
import { Link } from "react-router-dom";

class Menuheader extends Component {
  constructor(props) {
    let role = sessionStorage.getItem("roleName");
    super(props);
    let tabs = "";
    if (role == "ADMIN") {
      tabs = [
        {
          tabimages: `${require("../../assets/images/nav-iconss/dashboard.png")}`,
          tabIndex: TabDashboard.ID,
          tabName: TabDashboard.NAME,
          isDropdown: false,
        },
        {
          tabimages: `${require("../../assets/images/nav-iconss/connected-nav.png")}`,
          tabIndex: TabConnectedModule.ID,
          tabName: TabConnectedModule.NAME,
          isDropdown: true,
          tabs: [
            {
              tabIndex: TabTrack.ID,
              tabName: TabTrack.NAME,
              tabImage: `${require("../../assets/images/track/track.png")}`,
            },
            {
              tabIndex: TabLiveTripTracking.ID,
              tabName: TabLiveTripTracking.NAME,
              tabImage: `${require("../../assets/images/livetrip/livetrip.png")}`,
            },
            // {
            //   tabIndex: TabGeofence.ID,
            //   tabName: TabGeofence.NAME,
            //   tabImage: `${require("../../assets/images/subnav/second.png")}`,
            // },
          ],
          tabImage: `${require("../../assets/images/nav/nav.png")}`,
        },
        {
          tabimages: `${require("../../assets/images/nav-iconss/charging-infra-nav.png")}`,
          tabIndex: TabChargingInfrastructure.ID,
          tabName: TabChargingInfrastructure.NAME,
          isDropdown: true,
          tabs: [
            {
              tabIndex: TabMyDashboard.ID,
              tabName: TabMyDashboard.NAME,
              tabImage: `${require("../../assets/images/nav-iconss/live-dashbord.png")}`,
            },
            {
              tabIndex: TabChargingSummary.ID,
              tabName: TabChargingSummary.NAME,
              tabImage: `${require("../../assets/images/subnav/second.png")}`,
            },
          ],
        },

        {
          tabimages: `${require("../../assets/images/nav-iconss/operation-nav.png")}`,
          tabIndex: TabViewReports.ID,
          tabName: TabViewReports.NAME,
          isDropdown: true,
          tabs: [
            {
              tabIndex: TabTripUpdate.ID,
              tabName: TabTripUpdate.NAME,
              tabImage: `${require("../../assets/images/operation/trip-updation.png")}`,
            },
            {
              tabIndex: TabBreakdownReport.ID,
              tabName: TabBreakdownReport.NAME,
              tabImage: `${require("../../assets/images/operation/breakdown-details.png")}`,
            },
            {
              tabIndex: TabChecklistReport.ID,
              tabName: TabChecklistReport.NAME,
              tabImage: `${require("../../assets/images/operation/driver-feedback.png")}`,
            },
            {
              tabIndex: TabTripDetails.ID,
              tabName: TabTripDetails.NAME,
              tabImage: `${require("../../assets/images/operation/trip-details.png")}`,
            },
            {
              tabIndex: TabReportingDetails.ID,
              tabName: TabReportingDetails.NAME,
              tabImage: `${require("../../assets/images/operation/reporting-details.png")}`,
            },
          ],
        },

        {
          tabimages: `${require("../../assets/images/nav-iconss/report-nav.png")}`,
          tabIndex: TabReport.ID,
          tabName: TabReport.NAME,
          isDropdown: true,

          tabs: [

            {
              tabIndex: TabTripSummary.ID,
              tabName: TabTripSummary.NAME,
              tabImage: `${require("../../assets/images/subnav/second.png")}`,
            },
            {
              tabIndex: TabVehicleSummaryReport.ID,
              tabName: TabVehicleSummaryReport.NAME,
              tabImage: `${require("../../assets/images/reports-icons/vehicle-summary.png")}`,
            },
            {
              tabIndex: TabChargerReport.ID,
              tabName: TabChargerReport.NAME,
              tabImage: `${require("../../assets/images/reports-icons/charger-report.png")}`,
            },
            
          
          ],
        },

        {
          tabimages: `${require("../../assets/images/nav-iconss/driver-moni-nav.png")}`,
          tabIndex: TabDrivermonitoring.ID,
          tabName: TabDrivermonitoring.NAME,
          isDropdown: true,

          tabs: [
            {
              tabIndex: TabDriverDetails.ID,
              tabName: TabDriverDetails.NAME,
              tabImage: `${require("../../assets/images/fleet-uptime-icons/fleet-health.png")}`,
            },
            {
              tabIndex: TabAttandance.ID,
              tabName: TabAttandance.NAME,
              tabImage: `${require("../../assets/images/driver-monitoring/attandance.png")}`,
            },
            {
              tabIndex: TabTripmonitoring.ID,
              tabName: TabTripmonitoring.NAME,
              tabImage: `${require("../../assets/images/driver-monitoring/trip-moni.png")}`,
            },
            {
              tabIndex: TabTripminitoringlog.ID,
              tabName: TabTripminitoringlog.NAME,
              tabImage: `${require("../../assets/images/driver-monitoring/trip-moni.png")}`,
            },
          ]
        },

        {
          tabimages: `${require("../../assets/images/nav-iconss/uptime-nav.png")}`,
          tabIndex: TabUptimemanagement.ID,
          tabName: TabUptimemanagement.NAME,
          isDropdown: true,
          tabs: [
            {
              tabIndex: TabFleethealth.ID,
              tabName: TabFleethealth.NAME,
              tabImage: `${require("../../assets/images/fleet-uptime-icons/fleet-health.png")}`,
            },
            {
              tabIndex: TabFleetuptime.ID,
              tabName: TabFleetuptime.NAME,
              tabImage: `${require("../../assets/images/fleet-uptime-icons/fleet-uptime.png")}`,
            },
          ]
        },

        {
          tabimages: `${require("../../assets/images/nav-iconss/kpi.png")}`,
          tabIndex: TabContractualKPI.ID,
          tabName: TabContractualKPI.NAME,
          isDropdown: false,
        },


        {
          tabimages: `${require("../../assets/images/nav-iconss/report-nav.png")}`,
          tabIndex: TabMaster.ID,
          tabName: TabMaster.NAME,
          isDropdown: true,

          tabs: [

            {
              tabIndex: TabVehicleMaster.ID,
              tabName: TabVehicleMaster.NAME,
              tabImage: `${require("../../assets/images/subnav/second.png")}`,
            },
            {
              tabIndex: TabRootMaster.ID,
              tabName: TabRootMaster.NAME,
              tabImage: `${require("../../assets/images/reports-icons/vehicle-summary.png")}`,
            },
            {
              tabIndex: TabDriverMaster.ID,
              tabName: TabDriverMaster.NAME,
              tabImage: `${require("../../assets/images/reports-icons/charger-report.png")}`,
            },
            
          
          ],
        },

      ];
    } else {
      tabs = [
        {
          tabIndex: TabViewReports.ID,
          tabName: TabViewReports.NAME,
          isDropdown: true,
          tabs: [
            {
              tabIndex: TabTripUpdate.ID,
              tabName: TabTripUpdate.NAME,
              tabImage: `${require("../../assets/images/subnav/first.png")}`,
            },
            {
              tabIndex: TabBreakdownReport.ID,
              tabName: TabBreakdownReport.NAME,
              tabImage: `${require("../../assets/images/track/track.png")}`,
            },
            {
              tabIndex: TabChecklistReport.ID,
              tabName: TabChecklistReport.NAME,
              tabImage: `${require("../../assets/images/subnav/second.png")}`,
            },
            {
              tabIndex: TabTripDetails.ID,
              tabName: TabTripDetails.NAME,
              tabImage: `${require("../../assets/images/livetrip/livetrip.png")}`,
            },
            {
              tabIndex: TabReportingDetails.ID,
              tabName: TabReportingDetails.NAME,
              tabImage: `${require("../../assets/images/subnav/second.png")}`,
            },
          ],
        },
      ];
    }

    this.state = {
      tabs,
      isNotificationTrayClick: false,
      button: true,
      // loginId: User.getLoginId(),
    };

    this.events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
    ];
    this.handleClick = this.handleClick.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }
 
  componentDidMount() {
    this.props.history.push("/dashboard");
  }

  tabClick = (evt, tabItem) => {
    const { selectedTab } = this.props;
    //console.log("tab in", tabItem);
    if (evt.target.parentElement) {
      let tabs = evt.target.parentElement.getElementsByClassName("tab");
      Array.prototype.forEach.call(tabs, function (tab) {
        tab.classList.remove("active");
      });
    }
    evt.currentTarget.classList.add("active");
    this.setState({ selTab: tabItem.tabIndex });
    selectedTab && selectedTab(evt, tabItem);
  };

  tabClickHome = (evt, tabIndex) => {
    const { selectedTab } = this.props;
    let payload = { tabIndex: 16 };
    // if (evt.target.parentElement) {
    //   let tabs = evt.target.parentElement.getElementsByClassName("tab");
    //   Array.prototype.forEach.call(tabs, function (tab) {
    //     tab.classList.remove("active");
    //   });
    // }
    evt.currentTarget.classList.add("active");
    this.setState({ selTab: tabIndex });
    selectedTab && selectedTab(evt, payload);
  };
  render() {
    const { tabs } = this.state;
    const { isNavMenuDisabled, selTab, isNotificationTrayShow, loginDetails } =
      this.props;
    let tabDom = [],
      profileDom,
      navDom;
    if (tabs && tabs.length > 0) {
      // console.log("tab check", tabs);
      tabs.map((tabItem, index) => {
        if (this.state.loginId === "admin" && tabItem.tabName == "Master") {
        } else {
          let flag = false;
          if (tabItem.isDropdown) {
            tabItem.tabs.map((t) => {
              if (selTab === t.tabIndex) flag = true;
            });
          }
          let className =
            selTab === tabItem.tabIndex || flag
              ? "tabs__tab active tab ripple-effect__dug-egg "
              : "tabs__tab tab ripple-effect__dug-egg";

          if (tabItem.isDropdown) {
            tabDom.push(
              <li className={`${className} dropdown`} key={tabItem.tabIndex}>
                <img src={tabItem.tabimages} className="navicons" alt="" />
                <a>
                  {tabItem.tabName}

                  <img
                    src={require("../../assets/images/nav-up/nav-up.png")}
                    id="tab"
                    alt=""
                    className="nav-up"
                  />
                </a>

                <span className="tab-strip">
                  <img src={tabItem.tabImage} alt="" />
                </span>

                <div class="dropdown-content">
                  {tabItem.tabs.map((t) => (
                    <a
                      onClick={(e) => {
                        this.tabClick(e, t);
                      }}
                    >
                      <span className="hoverTab">
                        <img src={t.tabImage} />
                        <span className="imageSpace"></span> {t.tabName}
                      </span>
                    </a>
                  ))}
                </div>
              </li>
            );
          } else {
            tabDom.push(
              <li
                className={`${className} dropdown`}
                key={tabItem.tabIndex}
                onClick={(e) => {
                  if (!tabItem.isDropdown) this.tabClick(e, tabItem);
                }}
              >
                <img src={tabItem.tabimages} className="navicon" alt="" />
                <a>
                  {tabItem.tabName}

                  <img
                    src={require("../../assets/images/nav-up/nav-up.png")}
                    id="tab"
                    alt=""
                    className="nav-up"
                  />
                </a>
              </li>
            );
          }
        }
      }, this);
    }

    navDom = (
      <div className="header__nav-menu">
        <a href="">
          <img
            src={require("../../assets/home.svg").default}
            alt="home"
            className="home-svg"
            onClick={(e) => {
              this.tabClickHome(e, 16);
            }}
          />
        </a>
        {tabDom}
      </div>
    );
    return <div className="subheader">{navDom}</div>;
  }
}

export default withRouter(Menuheader);
