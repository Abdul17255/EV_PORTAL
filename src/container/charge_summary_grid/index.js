import React, { Component } from "react";
import "../charge_summary_grid/index.scss";
import stationApiActions from "../../redux/station_details/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactLoader from "../../component/react-loader/react-loader.component";

import moment from "moment";
// let start_date = "";
// let end_date = "";
let duration = "";
const { getStationAPI } = stationApiActions;

var now = new Date();
now.setDate(now.getDate());

class ChargeSummaryGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oppurtunityCharging: "",
      chargingCycles: "",
      chargerUtilization: "",
      powerConsumed: "",
      powerDrawn: "",
      chargingPoints: "",
      chargingEvents: "",
      chargingHalfCycle: "",
      powerConsumedByVehPerDay: "",
      start_date: now,
      end_date: now,
      vehInOperation: "",
      cummKm: "",
      avgVehRunning: "",
      energyEfficiency: "",
    };

    this.getStationDetails = this.getStationDetails.bind(this);
  }

  componentDidMount() {
    // this.setState({start_timestamp:sessionStorage.getItem('start_timestamp')})
    // this.setState({end_timestamp:sessionStorage.getItem('end_timestamp')})
    // start_date = sessionStorage.getItem("start_timestamp");
    // end_date = sessionStorage.getItem("end_timestamp");
    duration = sessionStorage.getItem("duration");
    this.getStationDetails();
  }

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
      duration: duration,
    };

    await this.props.getStationAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      console.log("grid props", nextProps);
      if (
        nextProps?.stationApi?.stationApi?.result?.data?.chargeStationInsights
      ) {
        this.setState({
          oppurtunityCharging:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .opportunity_charge,
        });
        this.setState({
          chargingCycles:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .charging_cycle,
        });
        this.setState({
          chargerUtilization:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .charger_utilization,
        });
        this.setState({
          powerConsumed:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .power_consumption,
        });
        this.setState({
          powerDrawn:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .power_drawn,
        });
        this.setState({
          chargingPoints:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .charge_point,
        });
        this.setState({
          chargingEvents:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .charge_event,
        });
        this.setState({
          chargingHalfCycle:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .half_cycle,
        });
        this.setState({
          powerConsumedByVehPerDay:
            nextProps.stationApi.stationApi.result.data.chargeStationInsights
              .power_consume_by_vehicle_per_day,
        });
        this.setState({
          vehInOperation:
            nextProps.dashboardStatusCountsApi.dashboardStatusCountsApi.result
              .data.data.fleetAvailablity.operatingVehicle,
        });
        this.setState({
          vehInOperation:
            nextProps.dashboardStatusCountsApi.dashboardStatusCountsApi.result
              .data.data.fleetAvailablity.operatingVehicle,
        });
        this.setState({
          cummKm:
            nextProps.dashboardStatusCountsApi.dashboardStatusCountsApi.result
              .data.data.fleetAvailablity.kmOperatedPerDay,
        });
        this.setState({
          avgVehRunning:
            nextProps.fleetUptimeDetailsApi.fleetUptimeDetailsApi.result.data
              .data.avgVehicleRunPerDay,
        });
        this.setState({
          energyEfficiency:
            nextProps.fleetUptimeDetailsApi.fleetUptimeDetailsApi.result.data
              .data.energyStatus.acInputToDcVehicleBattery,
        });
      } else {
        this.setState({
          oppurtunityCharging: "",
        });
        this.setState({
          chargingCycles: "",
        });
        this.setState({
          chargerUtilization: "",
        });
        this.setState({
          powerConsumed: "",
        });
        this.setState({
          powerDrawn: "",
        });
        this.setState({
          chargingPoints: "",
        });
        this.setState({
          chargingEvents: "",
        });
        this.setState({
          chargingHalfCycle: "",
        });
        this.setState({
          powerConsumedByVehPerDay: "",
        });
      }
    }
  }

  render() {
    return (
      <div className="container-1">
        {this.props.stationApi?.stationApi?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <div className="row">
          {/* <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.oppurtunityCharging}</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  NO. OF OPPORTUNITY <br />
                  CHARGING
                </p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/icon-1.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div> */}
          <div className="col-2">
            <div className="left-charge">
              <div className="number">
                <p>{this.state.chargingEvents}</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  NO OF CHARGING <br /> EVENTS
                </p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/icon-7.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div>
          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.chargingHalfCycle}</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  NO OF SHORT CHARGING
                  <br /> CYCLES TODAY
                </p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/half.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div>

          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.chargingCycles}</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  NO OF FULL CHARGING <br /> CYCLES
                </p>
              </div>
            </div>

            <div className="right-charge-1">
              <p className="charge-text-1"></p>
              <img
                src={require("../../assets/images/vehicle-icon/full.png")}
                className="chargingevent-1"
                alt=""
              />
            </div>
          </div>

          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.chargerUtilization} %</p>
                {""}
              </div>

              <div className="text-1">
                <p>
                  CHARGER <br /> UTILIZATION
                </p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/icon-3.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.powerConsumed} Kwh</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  TOTAL POWER CONSUMED <br /> BY THE CHARGER
                </p>
              </div>
            </div>

            <div className="right-charge-1">
              <p className="charge-text-1"></p>
              <img
                src={require("../../assets/images/vehicle-icon/icon-4.png")}
                className="chargingevent-1"
                alt=""
              />
            </div>
          </div>

          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.powerDrawn} Kwh</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  TOTAL POWER <br /> DRAWN BY VEHICLES
                </p>
              </div>
            </div>

            <div className="right-charge-1">
              <p className="charge-text-1"></p>
              <img
                src={require("../../assets/images/vehicle-icon/icon-5.png")}
                className="chargingevent-1"
                alt=""
              />
            </div>
          </div>

          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.powerConsumedByVehPerDay} Kwh</p>
              </div>

              <div className="text-1">
                <p>AC POWER CONSUMPTION</p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/icon-4.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div>
          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.chargingPoints}</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  NO OF CHARGING <br /> POINTS USED TODAY
                </p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/icon-6.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.vehInOperation}</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  NO OF VEHICLES <br /> IN OPERATION
                </p>
              </div>
            </div>

            <div className="right-charge-1">
              <p className="charge-text-1"></p>
              <img
                src={require("../../assets/images/vehicle-icon/no-vehicle.png")}
                className="chargingevent-1"
                alt=""
              />
            </div>
          </div>

          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.cummKm}/7990</p>
              </div>

              <div className="text-1">
                <p>
                  CUMULATIVE KMS RUN <br />
                  VS ESTIMATED
                </p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/avg-vehicle.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div>
          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.avgVehRunning} Km</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  AVERAGE VEHICLE <br /> RUNNING KM
                </p>
              </div>
            </div>

            <div className="right-charge">
              <img
                src={require("../../assets/images/vehicle-icon/avg-vehicle.png")}
                className="chargingevent"
                alt=""
              />
            </div>
          </div>

          <div className="col-2" style={{}}>
            <div className="left-charge">
              <div className="number">
                <p>{this.state.energyEfficiency} %</p>{" "}
              </div>

              <div className="text-1">
                <p>
                  ENERGY EFFICIENCY (AC INPUT <br /> VS VEHICLE BATTERY POWER
                  IN)
                </p>
              </div>
            </div>

            <div className="right-charge-1">
              <p className="charge-text-1"></p>
              <img
                src={require("../../assets/images/vehicle-icon/icon-5.png")}
                className="chargingevent-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default ChargeSummaryDetails;
const mapStateToProps = (state) => {
  return {
    ...state,
    station: state.station,
  };
};

export default connect(mapStateToProps, {
  getStationAPI,
})(withRouter(ChargeSummaryGrid));
