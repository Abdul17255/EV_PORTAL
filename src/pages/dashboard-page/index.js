// import React from "react";
// import Mydashboard from "../../container/my_dashboard";
// import ChargeSummary from "../../container/charge_summary";
// import MenuHeader from "../../container/menu_header";
// import BasePage from "../../pages/base-page";
// import Header from "../../container/header";
// import Track from "../../container/track";
// //import TripMaster from "../../container/trip_master";
// import TripUpdate from "../../component/trip_updation/index"
// import BreakdownReport from "../../component/breakdown_report";
// import ChecklistReport from "../../component/checklist_report";
// import TripReport from "../../component/trip_report";
// import LiveTripTracking from "../../component/live_trip_tracking";
// import ReportingDetails from "../../component/reporting_details";
// import ReactLoader from "../../component/react-loader/react-loader.component";
// import {
//   TAB_MY_DASHBOARD as TabMyDashboard,
//   TAB_CHARGING_SUMMARY as TabChargingSummary,
//   TAB_MAP_DASHBOARD as TabMapDashboard,
//   TAB_CONNECTED_MODULE as TabConnectedModule,
//   TAB_REPORTS as TabReports,
//   TAB_TRACK as TabTrack,
//   TAB_LIVE_TRIP_TRACKING as TabLiveTripTracking,
//   TAB_GEOFENCE as TabGeofence,
//   TAB_TRIP_UPDATE as TabTripUpdate,
//   TAB_BREAKDOWN_REPORT as TabBreakdownReport,
//   TAB_CHECKLIST_REPORT as TabChecklistReport,
//    TAB_REPORTING_DETAILS as TabReportingDetails,
//   TAB_TRIP_REPORT as TabTripReport,
// } from "../../constants/app-contants";

// class Dashboard extends BasePage {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loader: false,
//     };
//     let selId = sessionStorage.getItem("selId");

//     this.state = {
//       selTab: selId ? parseInt(selId, 10) : TabTrack.ID,
//     };

//     this.selectedTab = this.selectedTab.bind(this);
//   }

//   componentWillUnmount() {}

//   componentDidMount() {
//     // this.props.history.push("/dashboard");
//   }

//   componentWillReceiveProps(nextProps) {}

//   selectedTab = (evt, tabItem) => {
//     this.setState({
//       selTab: tabItem.tabIndex,
//     });
//     sessionStorage.setItem("selId", tabItem.tabIndex);
//   };

//   getLoader = () => (
//     <div className="loader-overlay">
//       <div className="loader-container">
//         <ReactLoader />
//       </div>
//     </div>
//   );
//   render() {
//     const { selTab, loginDetails, PageLoader } = this.state;
//     return (
//       <BasePage pageIdentifier="dashboard-page">
//         {/* {this.getLoader()} */}

//         {/* {PageLoader ? (
//             <div className="landing-page--loader">
//               <ReactLoader />
//             </div>
//           ) : null} */}
//         <Header />

//         <MenuHeader selTab={selTab} selectedTab={this.selectedTab} />
//         {TabMyDashboard.ID === selTab && <Mydashboard />}
//         {TabChargingSummary.ID === selTab && <ChargeSummary />}
//         {TabTrack.ID === selTab && <Track />}
//         {TabTripUpdate.ID === selTab && <TripUpdate/>}
//         {TabBreakdownReport.ID === selTab && <BreakdownReport />}
//         {TabChecklistReport.ID === selTab && <ChecklistReport />}
//         {TabReportingDetails.ID === selTab && <ReportingDetails />}
//         {TabTripReport.ID === selTab && <TripReport />}
//         {TabLiveTripTracking.ID === selTab && <LiveTripTracking />}
//       </BasePage>
//     );
//   }
// }

// export default Dashboard;

import React from "react";
import Mydashboard from "../../container/my_dashboard";
import ChargeSummary from "../../container/charge_summary";
import MenuHeader from "../../container/menu_header";
import BasePage from "../../pages/base-page";
import Header from "../../container/header";
import Track from "../../container/track";

//import TripMaster from "../../container/trip_master";
import TripUpdate from "../../component/trip_updation/index";
import BreakdownReport from "../../component/breakdown_report";
import ChecklistReport from "../../component/driver-feedback";
import TripDetails from "../../component/trip_details";
import LiveTripTracking from "../../container/live_trip_tracking";
import ReportingDetails from "../../component/reporting_details";
import ReactLoader from "../../component/react-loader/react-loader.component";
import DashboardStatus from "../../container/dashboard_status";

import {
  TAB_MY_DASHBOARD as TabMyDashboard,
  TAB_CHARGING_SUMMARY as TabChargingSummary,
  TAB_MAP_DASHBOARD as TabMapDashboard,
  TAB_CONNECTED_MODULE as TabConnectedModule,
  TAB_REPORTS as TabReports,
  TAB_TRACK as TabTrack,
  TAB_LIVE_TRIP_TRACKING as TabLiveTripTracking,
  TAB_GEOFENCE as TabGeofence,
  TAB_TRIP_UPDATE as TabTripUpdate,
  TAB_BREAKDOWN_REPORT as TabBreakdownReport,
  TAB_CHECKLIST_REPORT as TabChecklistReport,
  TAB_REPORTING_DETAILS as TabReportingDetails,
  TAB_TRIP_DETAILS as TabTripDetails,
  TAB_DASHBOARD as TabDashboard,
  TAB_FLEET_HEALTH as TabFleethealth,
  TAB_FLEET_UPTIME as TabFleetuptime,
  TAB_VEHICLE_SUMMARY_REPORT as TabVehicleSummaryReport,
  TAB_CHARGER_REPORT as TabChargerReport,
  TAB_TRIP_SUMMARY as TabTripSummary,
  TAB_DRIVER_DETAILS as TabDriverDetails,
  TAB_ATTENDANCE as TabAttandance,
  TAB_TRIP_MONITORING as TabTripmonitoring,
  TAB_VEHICLE_TRIP_INFO as TabVehInfo,
  TAB_VEHICLE_POPUP as TabVehPopup,
 TAB_TRIP_MONITORING_LOG as TabTripminitoringlog,
 TAB_VEHICLE_MASTER as TabVehicleMaster,
 TAB_ROOT_MASTER as TabRootMaster ,
 TAB_DRIVER_MASTER as TabDriverMaster,
} from "../../constants/app-contants";
import FleetHealth from "../../container/fleet_health";
import FleetUptime from "../../container/fleet_uptime";
import VehicleSummaryReport from "../../container/vehicle_summary_report";
import ChargerReport from "../../container/charger_report";
import TripSummaryReport from "../../container/trip_summary_report";
import DriverDetails from "../../container/driver_details";
import Attandance from "../../container/driver_monitoring_attandance";
import TripMonitoring from "../../container/trip_monitoring_report";
import TripMonitoringLog from "../../container/trip_monitoring_log";
import VehicleMaster from "../../component/master_vehicle";
import RootMaster from "../../component/master_root";
import DriverMaster from "../../component/master_driver";

class Dashboard extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
    // let selId = sessionStorage.getItem("selId");
    let selId = 16;

    this.state = {
      selTab: selId ? parseInt(selId, 10) : TabTrack.ID,
    };

    this.selectedTab = this.selectedTab.bind(this);
  }

  componentWillUnmount() {}

  componentDidMount() {
    // this.props.history.push("/dashboard");
  }

  componentWillReceiveProps(nextProps) {}

  selectedTab = (evt, tabItem) => {
    this.setState({
      selTab: tabItem.tabIndex,
    });
    sessionStorage.setItem("selId", tabItem.tabIndex);
  };

  getLoader = () => (
    <div className="loader-overlay">
      <div className="loader-container">
        <ReactLoader />
      </div>
    </div>
  );
  render() {
    const { selTab, loginDetails, PageLoader } = this.state;
    //console.log("tab click", selTab);
    return (
      <BasePage pageIdentifier="dashboard-page">
        {/* {this.getLoader()} */}

        {/* {PageLoader ? (
            <div className="landing-page--loader">
              <ReactLoader />
            </div>
          ) : null} */}
        <Header />

        <MenuHeader selTab={selTab} selectedTab={this.selectedTab} />
        {TabMyDashboard.ID === selTab && <Mydashboard />}
        {TabChargingSummary.ID === selTab && <ChargeSummary />}
        {TabTrack.ID === selTab && <Track selectedTab={this.selectedTab} />}
        {TabTripUpdate.ID === selTab && <TripUpdate />}
        {TabBreakdownReport.ID === selTab && <BreakdownReport />}
        {TabChecklistReport.ID === selTab && <ChecklistReport />}
        {TabReportingDetails.ID === selTab && <ReportingDetails />}
        {TabTripDetails.ID === selTab && <TripDetails />}
        {TabLiveTripTracking.ID === selTab && <LiveTripTracking />}
        {TabDashboard.ID === selTab && (
          <DashboardStatus selectedTab={this.selectedTab} />
        )}
        {TabFleethealth.ID === selTab && <FleetHealth />}
        {TabFleetuptime.ID === selTab && <FleetUptime />}
        {TabVehicleSummaryReport.ID === selTab && <VehicleSummaryReport />}
        {TabChargerReport.ID === selTab && <ChargerReport />}
        {TabTripSummary.ID === selTab && <TripSummaryReport />}
        {TabDriverDetails.ID === selTab && <DriverDetails selectedTab={this.selectedTab}/>}
        {TabAttandance.ID === selTab && <Attandance/>}
        {TabTripmonitoring.ID === selTab && <TripMonitoring/>}
        {TabTripminitoringlog.ID === selTab && <TripMonitoringLog/>}

        {TabVehicleMaster.ID === selTab && <VehicleMaster/>}
        {TabRootMaster.ID === selTab && <RootMaster/>}
        {TabDriverMaster.ID === selTab && <DriverMaster/>}
      </BasePage>
    );
  }
}

export default Dashboard;
