import React, { Component } from "react";
import "../../component/dashboard_vehicle_tendays/index.scss";
import Chart from "react-google-charts";
class DashboardVehicletenDays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    // console.log("tshis 10 days", this.props.vehrunning10days);
    // const response = this.props.vehrunning10days;

    // const data = [
    //   [
    //     "Element",
    //     "no of vehicles",
    //     { role: "style" },
    //     {
    //       sourceColumn: 0,
    //       role: "annotation",
    //       type: "string",
    //       calc: "stringify",
    //     },
    //   ],
    //   ["20th-30th Oct", 24, " #4B85F7", 24],
    //   ["30th-9th Nov", 12, " #4B85F7", 12],
    //   ["9th-19th Nov", 160, " #4B85F7", 160],
    //   ["19th-29th Nov", 40, " #4B85F7", 40], // RGB value
    // ];

    const response = this.props.vehrunning10days;
    const data = [
      [
        "Element",
        "No of Kms",
        { role: "style" },
        {
          sourceColumn: 0,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
      [response[0].text, response[0].value, " #4B85F7", response[0].value],
      [response[1].text, response[1].value, " #4B85F7", response[1].value],
      [response[2].text, response[2].value, " #4B85F7", response[2].value],
      [response[3].text, response[3].value, " #4B85F7", response[3].value],
      [response[4].text, response[4].value, " #4B85F7", response[4].value],
    ];
    return (
      <div className="dashboard-vehicle-tendays">
        <Chart
          id="chart_div"
          chartType="ColumnChart"
          width="98%"
          height="200px"
          data={data}
          loader={<div>Loading....</div>}
          options={{
            chartArea: {
              width: "70%",
              height: "56%",
              marginLeft: "30px",
              paddingRight: "10px",
              left: 100,
              // paddingLeft: "10px",
              //marginTop:"-20px"
              bottom: 70,
            },

            isStacked: true,
            displayAnnotations: true,
            annotations: {
              stemColor: "none",
              textStyle: {
                // The color of the text.
                color: "#353844",
                //opacity: 0.8,
                auraColor: "none",
                //stem: {color: "black"},
                fontSize: 10,
                fontName: "Roboto-Bold",
              },
              alwaysOutside: true,
            },
            bar: { groupWidth: "25%" },
            legend: { position: "none" },
            hAxis: {
              textStyle: {
                fontSize: 10,
                fontName: "Roboto-Medium",
                marginTop: "10",
                color: "#747892",
              },
              gridlines: { color: "#383B46" },
              title: "LAST 5 DAYS", //  getting output
              minValue: 0,
              titleTextStyle: {
                italic: false,
                fontName: "Roboto-Medium",
                // bold:true,
                marginTop: "15",
                //fontStyle: "bold",
                color: "black",
                fontSize: "12",
              },
            },
            backgroundColor: "transparent",
            vAxis: {
              textStyle: {
                fontSize: 10,
                fontName: "Roboto-Medium",
                marginTop: "10",
                color: "#747892",
              },
              baseline: 0,
              viewWindowMode: "explicit",
              viewWindow: { min: 0, max: 10000 },
              gridlines: { color: "#f3f3f3", count: 4 },
              textPosition: true,
              title: "NO. OF KMS",
              titleTextStyle: {
                italic: false,
                fontName: "Roboto-Medium",
                // bold:true,
                //fontStyle: "medium",
                color: "black",
                fontSize: "12",
              },
            },
          }}
        />
      </div>
    );
  }
}

export default DashboardVehicletenDays;
