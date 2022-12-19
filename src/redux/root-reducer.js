import { combineReducers } from "redux";
import loginApi from "./login/reducers";
import stationApi from "./station_details/reducers";
import chargeSummaryApi from "./charge_summary/reducers";
import occupiedStationApi from "./occupied_station_view/reducers";
import chargerEfficiencyApi from "./charger_efficiency_view/reducers";
import batteryTemp from "./battery_temp_view/reducers";
import chargeBand from "./charging_band_view/reducers";
import batteryTempGraph from "./battery_temp_graph/reducers";
import chargeBandGraph from "./charging_band_graph/reducers";
import chargerMapDashboardApi from "./charger_map_dashboard/reducers";
import vehicleMapDashboardApi from "./vehicle_map_dashboard/reducers";
import breakdownReportApi from "./breakdown_report/reducers";
import checklistReportApi from "./checklist_report/reducers";
import tripReportApi from "./trip_report/reducers";
import tripMasterDetailsApi from "./trip_master_details/reducers";
import driverlistDropdownApi from "./driverlist_dropdown/reducers";
import vehiclelistDropdownApi from "./vehiclelist_dropdown/reducers";
import tripMasterUpdateApi from "./trip_master_update/reducers";
import driverReportingDetailsApi from "./driver_reporting_details/reducers";
import availableChargersApi from "./available_chargers_view/reducers";
import breakdownChargersApi from "./breakdown_chargers_view/reducers";
import opportunityChargingApi from "./opportunity_charging_view/reducers";
import summaryApi from "./summary/reducers";
import mapActionApi from "./mapactions/reducers";
import tripUploadApi from "./trip-upload/reducers";
import technicianFeedbackUpdateApi from "./technician_feedback_update/reducers";
import dashboardStatusCountsApi from "./dashboard_status_counts/reducers";
import fleetUptimeDetailsApi from "./fleet_uptime_details/reducers";
import vehiclePerformanceDetailsApi from "./vehicle_performance_details/reducers";
import ChargersReportApi from "./charger_report/reducers";
import TripSummaryReportApi from "./trip_summary_report/reducers";
import VehicleSummaryReportApi from "./vehicle_summary_report/reducers";
import DriverDetailsApi from "./driver_details/reducers";
import LiveTripTrackSummaryApi from "./live_trip_track_summary/reducers";
import LiveTripTrackMapDetailsApi from "./live_trip_track_map_details/reducers";
import DriverMasterApi from "./master_driver/reducers"
import RouteMasterApi from "./master_route/reducers"
import  VehicleMasterApi from "./master_vehicle/reducers";
import DriverMonitoringViewApi from "./driver_monitoring_list_view/reducers"
export default combineReducers({
  loginApi,
  stationApi,
  chargeSummaryApi,
  occupiedStationApi,
  chargerEfficiencyApi,
  batteryTemp,
  chargeBand,
  batteryTempGraph,
  chargeBandGraph,
  chargerMapDashboardApi,
  vehicleMapDashboardApi,
  breakdownReportApi,
  checklistReportApi,
  tripReportApi,
  tripMasterDetailsApi,
  driverlistDropdownApi,
  vehiclelistDropdownApi,
  tripMasterUpdateApi,
  driverReportingDetailsApi,
  availableChargersApi,
  breakdownChargersApi,
  opportunityChargingApi,
  summaryApi,
  mapActionApi,
  tripUploadApi,
  technicianFeedbackUpdateApi,
  dashboardStatusCountsApi,
  fleetUptimeDetailsApi,
  vehiclePerformanceDetailsApi,
  ChargersReportApi,
  TripSummaryReportApi,
  VehicleSummaryReportApi,
  DriverDetailsApi,
  LiveTripTrackSummaryApi,
  LiveTripTrackMapDetailsApi,
  DriverMasterApi,
  RouteMasterApi,
  VehicleMasterApi,
  DriverMonitoringViewApi,
});
