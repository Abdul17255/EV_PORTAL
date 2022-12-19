// import React, { Component } from "react";
// import Chart from "react-google-charts";
// import chargeBandGraphApiAction from "../../redux/charging_band_graph/actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";

// const { getChargeBandGraphAPI } = chargeBandGraphApiAction;
// let start_date = "";
// let end_date = "";
// class ChargingBandDonutGraph extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       showPopup: "true",
//       FirstText: "",
//       FirstValue: "",
//       SecondText: "",
//       SecondValue: "",
//       ThirdText: "",
//       ThirdValue: "",
//       FourthText: "",
//       FourthValue: "",
//       start_timestamp: "",
//       end_timestamp: "",
//     };

//     this.getChargeBandGraphDetails = this.getChargeBandGraphDetails.bind(this);
//   }

//   componentDidMount() {
//     start_date = sessionStorage.getItem("start_timestamp");
//     end_date = sessionStorage.getItem("end_timestamp");
//     this.getChargeBandGraphDetails();
//   }

//   componentWillReceiveProps(nextProps) {
//     if (
//       nextProps?.chargeBandGraph?.chargeBandGraphApi?.result?.data
//         ?.bargraph_payload
//     ) {
//       let firstconv = parseInt(
//         nextProps.chargeBandGraph.chargeBandGraphApi.result.data
//           .bargraph_payload[0].text,
//         10
//       );

//       this.setState({
//         FirstText: firstconv,
//       });
//       this.setState({
//         FirstValue:
//           nextProps.chargeBandGraph?.chargeBandGraphApi.result.data
//             .bargraph_payload[0].value,
//       });

//       let secondconv = parseInt(
//         nextProps.chargeBandGraph.chargeBandGraphApi.result.data
//           .bargraph_payload[1].text,
//         10
//       );
//       this.setState({
//         SecondText: secondconv,
//       });
//       this.setState({
//         SecondValue:
//           nextProps.chargeBandGraph.chargeBandGraphApi.result.data
//             .bargraph_payload[1].value,
//       });

//       let thirdconv = parseInt(
//         nextProps.chargeBandGraph.chargeBandGraphApi.result.data
//           .bargraph_payload[2].text,
//         10
//       );
//       this.setState({
//         ThirdText: thirdconv,
//       });
//       this.setState({
//         ThirdValue:
//           nextProps.chargeBandGraph.chargeBandGraphApi.result.data
//             .bargraph_payload[2].value,
//       });

//       let fourthconv = parseInt(
//         nextProps.chargeBandGraph.chargeBandGraphApi.result.data
//           .bargraph_payload[3].text,
//         10
//       );
//       this.setState({
//         FourthText: fourthconv,
//       });
//       this.setState({
//         FourthValue:
//           nextProps.chargeBandGraph.chargeBandGraphApi.result.data
//             .bargraph_payload[3].value,
//       });
//     }
//   }

//   getChargeBandGraphDetails = async () => {
//     let payLoad = {
//       api_key: "DASHBOARD_BARGRAPH",
//       request_type: "CHARGE_BAND",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: start_date,
//       end_timestamp: end_date,
//     };

//     await this.props.getChargeBandGraphAPI(payLoad);
//   };

//   render() {
//     let {
//       FirstValue,
//       FirstText,
//       SecondValue,
//       SecondText,
//       ThirdValue,
//       ThirdText,
//       FourthText,
//       FourthValue,
//     } = this.state;

//     const data = [
//       ["", "value"],
//       [FirstValue, FirstText],
//       [SecondValue, SecondText],
//       [ThirdValue, ThirdText],
//       [FourthValue, FourthText],
//     ];
//     const options = {
//       pieHole: 0.5,
//       is3D: false,
//       pieSliceText: "none",
//       tooltip: {
//         text: "value",
//         showColorCode: true,
//       },
//       colors: ["#12b4e6", "green", "F16A21", "#e9a227"],
//       fontName: "Roboto",
//       fontSize: 18,
//     };
//     return (
//       <div>
//         <Chart
//           style={{ marginTop: "-15px" }}
//           chartType="PieChart"
//           width="100%"
//           height="280px"
//           data={data}
//           options={options}
//         />
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
//   getChargeBandGraphAPI,
// })(withRouter(ChargingBandDonutGraph));
