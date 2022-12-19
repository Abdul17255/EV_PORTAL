import React from "react";
//import { Chart, Geom, Axis, Tooltip } from "bizcharts";
//import "./index.scss";
import Chart from "react-google-charts";
import chargeBandGraphApiAction from "../../redux/charging_band_graph/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../charging_band_chart/index.scss";
import moment from "moment";
import ReactLoader from "../../component/react-loader/react-loader.component";
const { getChargeBandGraphAPI } = chargeBandGraphApiAction;
// let start_date = "";
// let end_date = "";

var now = new Date();
now.setDate(now.getDate());

class ChargingBandChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showPopup: "true",
      FirstText: "",
      FirstValue: "",
      SecondText: "",
      SecondValue: "",
      ThirdText: "",
      ThirdValue: "",
      FourthText: "",
      FourthValue: "",
      start_timestamp: "",
      end_timestamp: "",
      start_date: now,
      end_date: now,
    };

    this.getChargeBandGraphDetails = this.getChargeBandGraphDetails.bind(this);
  }

  componentDidMount() {
    // this.setState({start_timestamp:sessionStorage.getItem('start_timestamp')})
    // this.setState({end_timestamp:sessionStorage.getItem('end_timestamp')})
    // start_date = sessionStorage.getItem("start_timestamp");
    // end_date = sessionStorage.getItem("end_timestamp");

    this.getChargeBandGraphDetails();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(
    //   "inside temp",
    //   nextProps?.chargeBandGraph?.chargeBandGraphApi?.result?.data
    //     ?.bargraph_payload[0].value
    // );
    if (
      nextProps?.chargeBandGraph?.chargeBandGraphApi?.result?.data
        ?.bargraph_payload
    ) {
      let firstconv = parseInt(
        nextProps.chargeBandGraph.chargeBandGraphApi.result.data
          .bargraph_payload[0].text,
        10
      );

      this.setState({
        FirstText: firstconv,
      });
      this.setState({
        FirstValue:
          nextProps.chargeBandGraph?.chargeBandGraphApi.result.data
            .bargraph_payload[0].value,
      });

      let secondconv = parseInt(
        nextProps.chargeBandGraph.chargeBandGraphApi.result.data
          .bargraph_payload[1].text,
        10
      );
      this.setState({
        SecondText: secondconv,
      });
      this.setState({
        SecondValue:
          nextProps.chargeBandGraph.chargeBandGraphApi.result.data
            .bargraph_payload[1].value,
      });

      let thirdconv = parseInt(
        nextProps.chargeBandGraph.chargeBandGraphApi.result.data
          .bargraph_payload[2].text,
        10
      );
      this.setState({
        ThirdText: thirdconv,
      });
      this.setState({
        ThirdValue:
          nextProps.chargeBandGraph.chargeBandGraphApi.result.data
            .bargraph_payload[2].value,
      });

      let fourthconv = parseInt(
        nextProps.chargeBandGraph.chargeBandGraphApi.result.data
          .bargraph_payload[3].text,
        10
      );
      this.setState({
        FourthText: fourthconv,
      });
      this.setState({
        FourthValue:
          nextProps.chargeBandGraph.chargeBandGraphApi.result.data
            .bargraph_payload[3].value,
      });
    }
  }

  getChargeBandGraphDetails = async () => {
    const { start_date, end_date } = this.state;
    let payLoad = {
      api_key: "DASHBOARD_BARGRAPH",
      request_type: "CHARGE_BAND",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };

    await this.props.getChargeBandGraphAPI(payLoad);
  };

  render() {
    let {
      FirstValue,
      FirstText,
      SecondValue,
      SecondText,
      ThirdValue,
      ThirdText,
      FourthText,
      FourthValue,
    } = this.state;
    const data = [
      [
        "Element",
        "no of vehicles",
        { role: "style" },
        {
          sourceColumn: 0,
          role: "annotation",
          type: "string",
          calc: "stringify",
        },
      ],
      [FirstValue, FirstText, " #4B85F7", FirstText], // RGB value
      [SecondValue, SecondText, " #4B85F7", SecondText], // English color name
      [ThirdValue, ThirdText, "  #4B85F7", ThirdText],
      [FourthValue, FourthText, "#4B85F7", FourthText], // CSS-style declaration
    ];
    return (
      <div>
        {this.props.chargeBandGraph?.chargeBandGraphApi?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <Chart
          id="chart_div"
          chartType="ColumnChart"
          width="98%"
          height="270px"
          data={data}
          loader={<div>Loading....</div>}
          options={{
            chartArea: {
              width: "70%",
              height: "70%",
              paddingRight: "10px",
              paddingLeft: "10px",
              bottom: 50,
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
                fontSize: 14,
                fontName: "Roboto-Bold",
              },
              alwaysOutside: true,
            },
            bar: { groupWidth: "20%" },
            legend: { position: "none" },
            hAxis: {
              textStyle: {
                fontSize: 14,
                fontName: "Roboto-Medium",
                marginTop: "10",
                color: "#747892",
              },
              gridlines: { color: "#383B46" },
              title: "CHARGE PERCENTAGE ( % )", //  getting output
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

            vAxis: {
              baseline: 0,
              viewWindowMode: "explicit",
              viewWindow: { min: 0, max: 30 },
              gridlines: { color: "#f3f3f3", count: 4 },
              textPosition: "none",
              title: "NO. OF VEHICLES",
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

//export default ChargingBandChart;
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  getChargeBandGraphAPI,
})(withRouter(ChargingBandChart));
