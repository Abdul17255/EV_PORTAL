import React, { Component } from "react";
import "./index.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import moment from "moment";
const mark = ["05-12-2022", "06-12-2022", "07-12-2022"];

var now = new Date();
now.setDate(now.getDate());
class CalanderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
    };
  }
  render() {
    return (
      <div className="calendar-container">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileClassName={({ date, view }) => {
            if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
              return "highlight";
            }
          }}
          tileDisabled={({ date }) => date.getDay() === 0}
          /*maxDate={new Date(2020, 1, 0)}</div>*/
          minDate={new Date()}
        />
      </div>
    );
  }
}

export default CalanderView;
