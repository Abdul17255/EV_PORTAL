// import React from "react";
// //import { Chart, Geom, Axis, Tooltip } from "bizcharts";

// //import BarChart from "react-bar-chart";
// import Chart from "react-google-charts";
// import batteryTempGraphApiAction from "../../redux/battery_temp_graph/actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";

// import moment from "moment";

// const { getBatteryTempGraphAPI } = batteryTempGraphApiAction;
// // let start_date = "";
// // let end_date = "";
// var now = new Date();
// now.setDate(now.getDate());
// class TemperaturestatusChart extends React.Component {
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
//       start_date: now,
//       end_date: now,
//     };

//     this.getBatteryTempGraphDetails =
//       this.getBatteryTempGraphDetails.bind(this);
//   }

//   componentDidMount() {
//     // start_date = sessionStorage.getItem("start_timestamp");
//     // end_date = sessionStorage.getItem("end_timestamp");

//     this.getBatteryTempGraphDetails();
//   }

//   componentWillReceiveProps(nextProps) {
//     // console.log(
//     //   "inside temp",
//     //   nextProps?.batteryTempGraph?.batteryTempGraphApi?.result?.data
//     //     ?.bargraph_payload[0].value
//     // );
//     if (
//       nextProps?.batteryTempGraph?.batteryTempGraphApi?.result?.data
//         ?.bargraph_payload
//     ) {
//       let firstconv = parseInt(
//         nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//           .bargraph_payload[0].text,
//         10
//       );

//       this.setState({
//         FirstText: firstconv,
//       });
//       this.setState({
//         FirstValue:
//           nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//             .bargraph_payload[0].value,
//       });

//       let secondconv = parseInt(
//         nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//           .bargraph_payload[1].text,
//         10
//       );
//       this.setState({
//         SecondText: secondconv,
//       });
//       this.setState({
//         SecondValue:
//           nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//             .bargraph_payload[1].value,
//       });

//       let thirdconv = parseInt(
//         nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//           .bargraph_payload[2].text,
//         10
//       );
//       this.setState({
//         ThirdText: thirdconv,
//       });
//       this.setState({
//         ThirdValue:
//           nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//             .bargraph_payload[2].value,
//       });

//       let fourthconv = parseInt(
//         nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//           .bargraph_payload[3].text,
//         10
//       );
//       this.setState({
//         FourthText: fourthconv,
//       });
//       this.setState({
//         FourthValue:
//           nextProps.batteryTempGraph.batteryTempGraphApi.result.data
//             .bargraph_payload[3].value,
//       });
//     }
//   }

//   getBatteryTempGraphDetails = async () => {
//     const { start_date, end_date } = this.state;
//     let payLoad = {
//       api_key: "DASHBOARD_BARGRAPH",
//       request_type: "BATTERY_TEMP",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       // start_timestamp: start_date,
//       // end_timestamp: end_date,
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//     };

//     await this.props.getBatteryTempGraphAPI(payLoad);
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
//       [
//         "Element",
//         "No. of vehicles",
//         { role: "style" },
//         {
//           sourceColumn: 0,
//           role: "annotation",
//           type: "string",
//           calc: "stringify",
//         },
//       ],
//       [FirstValue + "°C", FirstText, "#A7D8F", FirstText], // RGB value
//       [SecondValue + "°C", SecondText, "#6BB13F", SecondText], // English color name
//       [ThirdValue + "°C", ThirdText, " #F5C06B", ThirdText],
//       [FourthValue + "°C", FourthText, "#E63E33", FourthText], // CSS-style declaration
//     ];
//     return (
//       <div style={{}}>
//         <Chart
//           style={{}}
//           chartType="ColumnChart"
//           width="98%"
//           height="250px"
//           data={data}
//           loader={<div>Loading....</div>}
//           options={{
//             chartArea: {
//               width: "70%",
//               height: "70%",
//               paddingRight: "10px",
//               paddingLeft: "10px",
//               bottom: 60,
//             },
//             bar: { groupWidth: "35%" },
//             legend: { position: "none" },
//             //  colors:['red','#009900','green','red'],
//             hAxis: {
//               gridlines: { color: "#383B46" },
//               title: "TEMPERATURE ( °C )", //  getting output
//               minValue: 0,
//               titleTextStyle: {
//                 italic: false,
//                 marginTop: "15",
//                 fontName: "Roboto-Medium",

//                 //bold: true,

//                 //fontStyle: "bold",
//                 color: "black",
//                 fontSize: "12",
//               },
//             },

//             vAxis: {
//               title: "NO. OF VEHICLES",
//               titleTextStyle: {
//                 italic: false,
//                 fontName: "Roboto-Medium",
//                 // bold:true,
//                 //fontStyle: "medium",
//                 color: "black",
//                 fontSize: "12",
//               },
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }
// //export default TemperaturestatusChart;

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//   };
// };

// export default connect(mapStateToProps, {
//   getBatteryTempGraphAPI,
// })(withRouter(TemperaturestatusChart));
