// import React, { Component } from "react";
// import "../battery_graph_status/index.scss";
// import ChargingBandDonutGraph from "../../component/chargingband_donut_graph/index";
// import TemperatureDonutGraph from "../../component/temperature_donut_graph";
// import TemperaturestatusChart from "../../component/temperature_status_chart/index";
// import ChargingBandChart from "../../component/charging_band_chart/index";
// import GraphViewPopup from "../../component/graph_view_popup/index";
// import batteryTempApiAction from "../../redux/battery_temp_view/actions";
// import chargeBandApiAction from "../../redux/charging_band_view/actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import ReactLoader from "../../component/react-loader/react-loader.component";
// let start_date = "";
// let end_date = "";
// let duration = "";
// const { getBatteryTempAPI } = batteryTempApiAction;
// const { getChargeBandAPI } = chargeBandApiAction;

// class BatteryGraphStatus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       showPopup: false,
//       cardClicked: "",
//       popupData: "",
//       batteryTempData: "",
//       chargeBandData: "",
//       addModalshow: false,
//     };
//   }

//   componentDidMount() {
//     start_date = sessionStorage.getItem("start_timestamp");
//     end_date = sessionStorage.getItem("end_timestamp");
//     duration = sessionStorage.getItem("duration");

//     this.getBatteryTempDetails();
//     this.getChargeBandDetails();
//   }

//   getBatteryTempDetails = async () => {
//     let payLoad = {
//       api_key: "DASHBOARD_DETAILS",
//       request_type: "BATTERY_TEMP",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: sessionStorage.getItem("start_timestamp"),
//       end_timestamp: sessionStorage.getItem("end_timestamp"),
//       duration: sessionStorage.getItem("duration"),
//     };

//     await this.props.getBatteryTempAPI(payLoad);
//   };

//   getChargeBandDetails = async () => {
//     let payLoad = {
//       api_key: "DASHBOARD_DETAILS",
//       request_type: "CHARGE_BAND",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: sessionStorage.getItem("start_timestamp"),
//       end_timestamp: sessionStorage.getItem("end_timestamp"),
//       duration: sessionStorage.getItem("duration"),
//     };

//     await this.props.getChargeBandAPI(payLoad);
//   };

//   componentWillReceiveProps(nextProps) {
//     if (nextProps?.batteryTemp?.batteryTempApi?.result?.data?.values) {
//       this.setState({
//         batteryTempData:
//           nextProps.batteryTemp.batteryTempApi.result.data.values,
//       });
//     }
//     if (nextProps?.chargeBand?.chargeBandApi?.result?.data?.values) {
//       this.setState({
//         chargeBandData: nextProps.chargeBand.chargeBandApi.result.data.values,
//       });
//     }
//   }

//   temperatureStatus = () => {
//     sessionStorage.setItem("popupClicked", "temperatureStatus");
//     this.setState({ addModalshow: true });
//     this.getBatteryTempDetails();
//     this.setState({ cardClicked: "temperatureStatus" });
//     this.setState({ showPopup: true });
//     this.setState({
//       popupData: this.state.batteryTempData,
//     });
//   };

//   chargingBand = () => {
//     sessionStorage.setItem("popupClicked", "chargingBand");
//     this.setState({ addModalshow: true });
//     this.getChargeBandDetails();
//     this.setState({ cardClicked: "chargingBand" });
//     this.setState({ showPopup: true });
//     this.setState({
//       popupData: this.state.chargeBandData,
//     });
//   };

//   addModalClose = () => this.setState({ addModalshow: false });

//   render() {
//     return (
//       <div className="container-one">
//         {this.props.batteryTemp?.batteryTempApi?.loading ? (
//           <div className="loader-overlay">
//             <div className="loader-container">
//               <ReactLoader />
//             </div>
//           </div>
//         ) : null}
//         {this.props.chargeBand?.chargeBandApi?.loading ? (
//           <div className="loader-overlay">
//             <div className="loader-container">
//               <ReactLoader />
//             </div>
//           </div>
//         ) : null}

//         <div className="row">
//           <div
//             className="col-xl "
//             style={{
//               border: "1px solid #DBDEE8",
//               height: "350px",
//               borderRadius: "10px",
//               width: "40%",
//               // left: "-10px",
//               marginRight: "12px",
//             }}
//           >
//             <div className="leftview">
//               <h4>TEMPERATURE STATUS OF BATTERY</h4>

//               <div className="buttonview">
//                 <button
//                   type="button"
//                   className="lp_review_err_btn_one"
//                   style={{ width: "90px" }}
//                   onClick={this.temperatureStatus}
//                 >
//                   LIST VIEW
//                   <img
//                     className="lp_next_png_one"
//                     src={require("../../assets/images/arrowblack/black.png")}
//                     alt="next"
//                   />
//                 </button>
//               </div>
//               <div className="line">
//                 <hr />
//               </div>
//               <div>
//                 <TemperaturestatusChart />
//                 {/* <TemperatureDonutGraph/> */}
//               </div>
//             </div>
//           </div>
//           <div
//             class="col-xl"
//             style={{
//               border: "1px solid #DBDEE8",
//               height: "350px",
//               borderRadius: "10px",
//               width: "40%",
//             }}
//           >
//             <div className="rightview">
//               <h4>CHARGING BAND</h4>
//             </div>
//             <div className="buttonview">
//               <button
//                 type="button"
//                 className="lp_review_err_btn_one"
//                 style={{ width: "90px" }}
//                 onClick={this.chargingBand}
//               >
//                 LIST VIEW
//                 <img
//                   className="lp_next_png_one"
//                   src={require("../../assets/images/arrowblack/black.png")}
//                   alt="next"
//                 />
//               </button>
//             </div>
//             <div className="line">
//               <hr />
//             </div>
//             <div>
//               <ChargingBandChart />
//               {/* <ChargingBandDonutGraph/> */}
//             </div>
//           </div>
//         </div>
//         {this.state.showPopup && (
//           <GraphViewPopup
//             buttonClicked={this.state.cardClicked}
//             show={this.state.addModalshow}
//             data={this.state.popupData}
//             closemodal={this.addModalClose}
//           />
//         )}
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
//   getBatteryTempAPI,
//   getChargeBandAPI,
// })(withRouter(BatteryGraphStatus));
import React, { Component } from "react";
import "../battery_graph_status/index.scss";
import ChargingBandDonutGraph from "../../component/chargingband_donut_graph/index";
import TemperatureDonutGraph from "../../component/temperature_donut_graph";
import TemperaturestatusChart from "../../component/temperature_status_chart/index";
import ChargingBandChart from "../../component/charging_band_chart/index";
import GraphViewPopup from "../../component/graph_view_popup/index";
import batteryTempApiAction from "../../redux/battery_temp_view/actions";
import chargeBandApiAction from "../../redux/charging_band_view/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactLoader from "../../component/react-loader/react-loader.component";
let start_date = "";
let end_date = "";
let duration = "";
const { getBatteryTempAPI } = batteryTempApiAction;
const { getChargeBandAPI } = chargeBandApiAction;

class BatteryGraphStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showPopup: false,
      cardClicked: "",
      popupData: "",
      batteryTempData: "",
      chargeBandData: "",
      addModalshow: false,
    };
  }

  componentDidMount() {
    start_date = sessionStorage.getItem("start_timestamp");
    end_date = sessionStorage.getItem("end_timestamp");
    duration = sessionStorage.getItem("duration");

    this.getBatteryTempDetails();
    this.getChargeBandDetails();
  }

  getBatteryTempDetails = async () => {
    let payLoad = {
      api_key: "DASHBOARD_DETAILS",
      request_type: "BATTERY_TEMP",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: sessionStorage.getItem("start_timestamp"),
      end_timestamp: sessionStorage.getItem("end_timestamp"),
      duration: sessionStorage.getItem("duration"),
    };

    await this.props.getBatteryTempAPI(payLoad);
  };

  getChargeBandDetails = async () => {
    let payLoad = {
      api_key: "DASHBOARD_DETAILS",
      request_type: "CHARGE_BAND",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: sessionStorage.getItem("start_timestamp"),
      end_timestamp: sessionStorage.getItem("end_timestamp"),
      duration: sessionStorage.getItem("duration"),
    };

    await this.props.getChargeBandAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps?.batteryTemp?.batteryTempApi?.result?.data?.values) {
      this.setState({
        batteryTempData:
          nextProps.batteryTemp.batteryTempApi.result.data.values,
      });
    }
    if (nextProps?.chargeBand?.chargeBandApi?.result?.data?.values) {
      this.setState({
        chargeBandData: nextProps.chargeBand.chargeBandApi.result.data.values,
      });
    }
  }

  temperatureStatus = () => {
    sessionStorage.setItem("popupClicked", "temperatureStatus");
    this.setState({ addModalshow: true });
    this.getBatteryTempDetails();
    this.setState({ cardClicked: "temperatureStatus" });
    this.setState({ showPopup: true });
    this.setState({
      popupData: this.state.batteryTempData,
    });
  };

  chargingBand = () => {
    sessionStorage.setItem("popupClicked", "chargingBand");
    this.setState({ addModalshow: true });
    this.getChargeBandDetails();
    this.setState({ cardClicked: "chargingBand" });
    this.setState({ showPopup: true });
    this.setState({
      popupData: this.state.chargeBandData,
    });
  };

  addModalClose = () => this.setState({ addModalshow: false });

  render() {
    return (
      <div className="container-one">
    
        <div className="row">
          <div
            className="col-xl "
            style={{
              border: "1px solid #DBDEE8",
              height: "350px",
              borderRadius: "10px",
              width: "40%",
              // left: "-10px",
              marginRight: "12px",
            }}
          >
            <div className="leftview">
              <h4>TEMPERATURE STATUS OF BATTERY</h4>

              <div className="buttonview">
                <button
                  type="button"
                  className="lp_review_err_btn_one"
                  style={{ width: "90px" }}
                  onClick={this.temperatureStatus}
                >
                  LIST VIEW
                  <img
                    className="lp_next_png_one"
                    src={require("../../assets/images/arrowblack/black.png")}
                    alt="next"
                  />
                </button>
              </div>
              <div className="batery-graph-line">
                <hr />
              </div>
              <div>
                <div className="graph_legend">
                  <div>
                    <span className="dot1"> </span>
                    <span className="colorText"> Min </span>
                    <span class="dot2"> </span>{" "}
                    <span className="colorText"> Moderate</span>
                    <span class="dot3"> </span>{" "}
                    <span className="colorText"> High</span>
                    <span class="dot4"> </span>{" "}
                    <span className="colorText"> Very High</span>
                  </div>
                </div>
                <TemperaturestatusChart />
                {/* <TemperatureDonutGraph/> */}
              </div>
            </div>
          </div>
          <div
            class="col-xl"
            style={{
              border: "1px solid #DBDEE8",
              height: "350px",
              borderRadius: "10px",
              width: "40%",
            }}
          >
            <div className="rightview">
              <h4>CHARGING BAND</h4>
            </div>
            <div className="buttonview">
              <button
                type="button"
                className="lp_review_err_btn_one"
                style={{ width: "90px" }}
                onClick={this.chargingBand}
              >
                LIST VIEW
                <img
                  className="lp_next_png_one"
                  src={require("../../assets/images/arrowblack/black.png")}
                  alt="next"
                />
              </button>
            </div>
            <div className="batery-graph-line">
              <hr />
            </div>
            <div>
              <ChargingBandChart />
              {/* <ChargingBandDonutGraph/> */}
            </div>
          </div>
        </div>
        {this.state.showPopup && (
          <GraphViewPopup
            buttonClicked={this.state.cardClicked}
            show={this.state.addModalshow}
            data={this.state.popupData}
            closemodal={this.addModalClose}
          />
        )}
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
  getBatteryTempAPI,
  getChargeBandAPI,
})(withRouter(BatteryGraphStatus));
