import { all } from "redux-saga/effects";
//import QuicksightApiSagas from "../redux/user/sagas";
import loginApiSagas from "../redux/login/sagas";
import stationApiSagas from "../redux/station_details/sagas";
import chargeSummaryApiSagas from "../redux/charge_summary/sagas";
import occupiedStationApiSagas from "../redux/occupied_station_view/sagas";
import chargerEficiencyApiSagas from "../redux/charger_efficiency_view/sagas";
import batteryTempApiSagas from "../redux/battery_temp_view/sagas";
import chargeBandSagas from "../redux/charging_band_view/sagas";
import batteryTempGraphApiSagas from "../redux/battery_temp_graph/sagas";
import chargeBandGraphApiSagas from "../redux/charging_band_graph/sagas";
import getChargerMapDashboardApiSagas from "../redux/charger_map_dashboard/sagas";
import getVehicleMapDashboardApiSagas from "../redux/vehicle_map_dashboard/sagas";
import breakdownReportApiSagas from "../redux/breakdown_report/sagas";
import checklistReportApiSagas from "../redux/checklist_report/sagas";
import tripReportApiSagas from "../redux/trip_report/sagas";
import tripMasterDetailsApiSagas from "../redux/trip_master_details/sagas";
import driverlistDropdownApiSagas from "../redux/driverlist_dropdown/sagas";
import vehiclelistDropdownApiSagas from "../redux/vehiclelist_dropdown/sagas";
import tripMasterUpdateApiSagas from "../redux/trip_master_update/sagas";
import driverReportingDetailsApiSagas from "../redux/driver_reporting_details/sagas";
import availableChargersApiSagas from "../redux/available_chargers_view/sagas";
import breakdownChargersApiSagas from "../redux/breakdown_chargers_view/sagas";
import opportunityChargingApiSagas from "../redux/opportunity_charging_view/sagas";
import summaryApiSagas from "../redux/summary/sagas";
import mapActionApiSagas from "../redux/mapactions/sagas";
import tripUploadApiSagas from "../redux/trip-upload/sagas";
import technicianFeedbackUpdateApiSagas from "../redux/technician_feedback_update/sagas";
import dashboardStatusCountsApiSagas from "../redux/dashboard_status_counts/sagas";
import fleetUptimeDetailsApiSagas from "../redux/fleet_uptime_details/sagas";
import vehiclePerformanceDetailsApiSagas from "../redux/vehicle_performance_details/sagas";
import ChargersReportApiSagas from "../redux/charger_report/sagas";
import TripSummaryReportApiSagas from "../redux/trip_summary_report/sagas";
import VehicleSummaryReportApiSagas from "../redux/vehicle_summary_report/sagas";
import DriverDetailsApiSagas from "../redux/driver_details/sagas";
import LiveTripTrackSummaryApiSagas from "../redux/live_trip_track_summary/sagas";
import LiveTripTrackMapDetailsApiSagas from "../redux/live_trip_track_map_details/sagas";
import DriverMasterApiSagas from "../redux/master_driver/sagas"
import RouteMasterApiSagas from "../redux/master_route/sagas"
import VehicleMasterApiSagas from "../redux/master_vehicle/sagas"
import DriverMonitoringViewApiSagas from "../redux/driver_monitoring_list_view/sagas"
export default function* rootSaga(getState) {
  yield all([
    loginApiSagas(),
    stationApiSagas(),
    chargeSummaryApiSagas(),
    occupiedStationApiSagas(),
    chargerEficiencyApiSagas(),
    batteryTempApiSagas(),
    chargeBandSagas(),
    batteryTempGraphApiSagas(),
    chargeBandGraphApiSagas(),
    getChargerMapDashboardApiSagas(),
    getVehicleMapDashboardApiSagas(),
    breakdownReportApiSagas(),
    checklistReportApiSagas(),
    tripReportApiSagas(),
    tripMasterDetailsApiSagas(),
    driverlistDropdownApiSagas(),
    vehiclelistDropdownApiSagas(),
    tripMasterUpdateApiSagas(),
    driverReportingDetailsApiSagas(),
    availableChargersApiSagas(),
    breakdownChargersApiSagas(),
    opportunityChargingApiSagas(),
    summaryApiSagas(),
    mapActionApiSagas(),
    tripUploadApiSagas(),
    technicianFeedbackUpdateApiSagas(),
    dashboardStatusCountsApiSagas(),
    fleetUptimeDetailsApiSagas(),
    vehiclePerformanceDetailsApiSagas(),
    ChargersReportApiSagas(),
    TripSummaryReportApiSagas(),
    VehicleSummaryReportApiSagas(),
    DriverDetailsApiSagas(),
    LiveTripTrackSummaryApiSagas(),
    LiveTripTrackMapDetailsApiSagas(),
    DriverMasterApiSagas(),
    RouteMasterApiSagas(),
    VehicleMasterApiSagas(),
    DriverMonitoringViewApiSagas(),
  ]);
}
