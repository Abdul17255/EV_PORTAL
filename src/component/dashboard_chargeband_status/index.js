import React, { Component } from "react";
import "./index.scss";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class DashboardChargeBandStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const response = this.props.piedata;
    let data1 = response[0].text;
    let data2 = response[1].text;
    let data3 = response[2].text;
    let data4 = response[3].text;
    return (
      <div
        style={{
          width: "500px",
          display: "flex",
          gap: "80px",
          marginTop: "20px",
          marginLeft: "80px",
        }}
        className=""
      >
        <div>
          <CircularProgressbar
            className="circle-text"
            strokeWidth={8}
            value={data1}
            text={data1}
            styles={buildStyles({
              // rotation: 0.25,
              // strokeLinecap: "butt",
              //fontWeight:"bold",
              fontStyle: "Roboto",
              textSize: "37px",
              pathTransitionDuration: 0.5,
              pathColor: "red",
              textColor: "#052A5F",
            })}
          />
          <p className="bar-text">0-25</p>
        </div>

        <div>
          <CircularProgressbar
            strokeWidth={8}
            value={data2}
            text={data2}
            className="circle-text"
            styles={buildStyles({
              // rotation: 0.25,
              // strokeLinecap: "butt",
              textSize: "37px",
              fontName: "Roboto-Bold",
              pathTransitionDuration: 0.5,
              pathColor: "orange",
              textColor: "#052A5F",
            })}
          />
          <p className="bar-text">26-50</p>
        </div>

        <div>
          <CircularProgressbar
            strokeWidth={8}
            value={data3}
            text={data3}
            className="circle-text"
            styles={buildStyles({
              // rotation: 0.25,
              // strokeLinecap: "butt",
              textSize: "37px",
              fontName: "Roboto-Bold",
              pathTransitionDuration: 0.5,
              pathColor: "blue",
              textColor: "#052A5F",
            })}
          />
          <p className="bar-text">51-75</p>
        </div>

        <div>
          <CircularProgressbar
            strokeWidth={8}
            value={data4}
            text={data4}
            className="circle-text"
            styles={buildStyles({
              // rotation: 0.25,
              // strokeLinecap: "butt",
              textSize: "37px",
              pathTransitionDuration: 0.5,
              pathColor: "green",
              textColor: "#052A5F",
            })}
          />
          <p className="bar-text">76-100</p>
        </div>
      </div>
    );
  }
}

export default DashboardChargeBandStatus;
