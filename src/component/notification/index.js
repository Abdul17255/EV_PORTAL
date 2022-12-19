import React, { Component } from "react";
import "./index.scss"
////import bell from "../../../assets/images/notification/bell.png"
// import notification_icon from "images/icon-notification1.png";
//import ToolTip from "../Tooltip";

class Notification extends Component {
  render() {
    return (
      <div
        className="notification"
        data-tip
        data-for="Notification"
        // onClick={this.notificationClick}
      >
        <img
         // src={require("../../assets/images/Group 5204/Group 5204.png")}
         src={require("../../assets/images/Group 5204/Group 5204.png")}
          className=""
        />
      </div>
    );
  }
}

export default Notification;
