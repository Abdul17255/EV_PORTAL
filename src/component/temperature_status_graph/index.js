// import React from "react";
// //import { Chart, Geom, Axis, Tooltip } from "bizcharts";

// import BarChart from "react-bar-chart";
// import "./temperaturegraph.scss";

// class TemperaturestatusChart extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {}

//   convertRemToPixels(rem) {
//     var pxvalue =
//       rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
//     return pxvalue;
//   }
//   render() {
//     const data = [
//       { text: "0-15%", value: 500 },
//       { text: "15-30%", value: 300 },
//       { text: "30-45%", value: 900 },
//       { text: "45-75%", value: 100 },
//     ];

//     const margin = { top: 20, right: 20, bottom: 250, left: 110 };

//     return (
//       <div ref={this.chartContainerRef}>
//         <div style={{ width: "100px" }}>
//           <BarChart
//             //ylabel="Quantity"
//             width={500}
//             height={500}
//             margin={margin}
//             data={data}
//             xlabel="Temperature"
//             //style={{ color: "blue" }}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default TemperaturestatusChart;
