// import React, { Component } from "react";
// import "../../component/dashboard_driver_details/index.scss";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// class DashboardDriverDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   render() {
//     return (
//       <div className="driver-details">
//         {/* <div  className="driver-progress-1"><CircularProgressbar
//             strokeWidth={25}

//           /></div>
//           <div style={{width:"20px",height:"20px"}}><CircularProgressbar
//             strokeWidth={25}

//           /></div> */}

//         <div className="countNumberBoxss">
//           <span style={{ color: "white", fontSize: "20px" }}>
//             <b>{this.props.total}</b>
//           </span>
//         </div>
//         <p className="drivers">Total No.of Drivers</p>

//         <div>
//           <img
//             className="driver-details-image"
//             src={require("../../assets/images/driverdetails/driver-details.png")}
//             alt="next"
//           />
//         </div>
//         <div className="countNumberBoxss-1">
//           <span style={{ color: "white", fontSize: "20px" }}>
//             <b>{this.props.present}</b>
//           </span>
//         </div>
//         <p className="present">Present</p>
//         <div className="countNumberBoxss-2">
//           <span style={{ color: "white", fontSize: "20px" }}>
//             <b>{this.props.absent}</b>
//           </span>
//         </div>

//         <p className="absent">Absent</p>
//         <div className="countNumberBoxss-3">
//           <span style={{ color: "white", fontSize: "20px" }}>
//             <b>{this.props.reportedlate}</b>
//           </span>
//         </div>
//         <p className="late">Reported Late</p>

//         <p
//           style={{
//             width: "50px",
//             height: "50px",
//             marginLeft: "415px",
//             marginTop: "-180px",
//           }}
//         >
//           <CircularProgressbar
//             value={this.props.present}
//             styles={buildStyles({
//               pathColor: "#72B448",
//               trailColor: "#C0E594",
//               strokeLinecap: "butt",
//             })}
//             strokeWidth={20}
//           />
//         </p>
//         <p className="progress-text-3">
//           On Time<span className="progress-text-no">-</span>
//         </p>
//         <p className="progress-text-4">
//           Early<span className="progress-text-no">-</span>
//         </p>
//         <p className="progress-text-1">
//           Late Less 1 Hour<span className="progress-text-no">-</span>
//         </p>
//         <p className="progress-text-2">
//           Late More than 1 Hour<span className="progress-text-no">-</span>
//         </p>

//         <div
//           style={{
//             width: "50px",
//             height: "50px",
//             marginLeft: "422px",
//             marginTop: "-58px",
//           }}
//         >
//           <CircularProgressbar
//             // styles={buildStyles({
//             //   pathColor: "#EDA252",
//             // })}
//             value={this.props.reportedlate}
//             styles={buildStyles({
//               pathColor: "orange",
//               trailColor: "#F5C06B",
//               strokeLinecap: "butt",
//             })}
//             strokeWidth={20}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// export default DashboardDriverDetails;

// import React, { Component } from "react";
// import "../../component/dashboard_driver_details/index.scss";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// class DashboardDriverDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   render() {
//     return (
//       <div className="driver-details">

//         <div>
//           <div className="countNumberBoxss">
//             <img
//               src={require("../../assets/images/driver-details/men.png")}
//               alt="home"
//               className="DD-driver-image"
//             />
//             <span style={{ color: "white", fontSize: "19px" }}>
//               <b>{this.props.total}</b>
//             </span>
//           </div>
//           <p className="drivers">Total No.of Drivers</p>
//           <div className="countNumberBoxss-1">
//             <span style={{ color: "white", fontSize: "20px" }}>
//               <b>{this.props.present}</b>
//             </span>
//           </div>
//           <p className="reported">Reported</p>

//           <img
//             src={require("../../assets/images/driver-details/Rectangle 1387.png")}
//             alt="home"
//             className="driverdetails_reported_img"
//           />

//           <div
//             style={{
//               width: "50px",
//               height: "50px",
//               marginLeft: "412px",
//               marginTop: "-80px",
//             }}
//           >
//             <CircularProgressbar
//               value={this.props.present}
//               styles={buildStyles({
//                 pathColor: "#7BC84E",
//                 trailColor: "#D7EEC9",
//                 strokeLinecap: "butt",
//               })}
//               strokeWidth={20}
//             />
//           </div>
//           <div className="green-dot-driver-details">
//             <img
//               src={require("../../assets/images/driver-details/Ellipse 9291.png")}
//               alt="home"
//               className=""
//             />
//             <span className="driver_details_textss">
//               {this.props.present}% <span>Adherence</span>
//             </span>
//           </div>
//         </div>

//         <div>
//           <div className="blue">
//             <span style={{ color: "white", fontSize: "20px" }}>
//               <b>{this.props.start}</b>
//             </span>
//           </div>
//           <p className="started">Trip Started</p>

//           <div className="orange">
//             <span style={{ color: "white", fontSize: "20px" }}>
//               <b>{this.props.completed}</b>
//             </span>
//           </div>
//           <p className="completed">Trip completed</p>

//           <div className="countNumberBoxss_blue">
//             <img
//               src={require("../../assets/images/driver-details/vehicle.png")}
//               alt="home"
//               className="DD-bus-image"
//             />
//             <span style={{ color: "white", fontSize: "19px" }}>
//               <b>{this.props.estimatedtrips}</b>
//             </span>
//           </div>
//           <p className="drivers">Estimated Trips</p>

//           <img
//             src={require("../../assets/images/driver-details/Group 10027.png")}
//             alt="home"
//             className="driver_details_second_img"
//           />

//           <div
//             style={{
//               width: "50px",
//               height: "50px",
//               marginLeft: "411px",
//               marginTop: "-143px",
//             }}
//           >
//             <CircularProgressbar
//               value={this.props.start}
//               styles={buildStyles({
//                 pathColor: "#19397C",
//                 trailColor: "#DCE8FD",
//                 strokeLinecap: "butt",
//               })}
//               strokeWidth={20}
//             />
//           </div>
//           <div className="green-dot-driver-details-1">
//             {/* <img
//               src={require("../../assets/images/driver-details/Ellipse 9291.png")}
//               alt="home"
//               className=""
//             /> */}

//             <img
//               src={require("../../assets/blue-circle.svg").default}
//               alt="home"
//               // className="home-svg"
//             />
//             <span className="driver_details_textss">
//               {this.props.start}% <span>Adherence</span>
//             </span>
//           </div>

//           <div
//             style={{
//               width: "50px",
//               height: "50px",
//               marginLeft: "412px",
//               marginTop: "31px",
//             }}
//           >
//             <CircularProgressbar
//               value={this.props.completed}
//               styles={buildStyles({
//                 pathColor: "#EDA252",
//                 trailColor: "#FAE3CB",
//                 strokeLinecap: "butt",
//               })}
//               strokeWidth={20}
//             />
//           </div>
//           <div className="green-dot-driver-details-orange">
//             <img
//               src={require("../../assets/orange-circle.svg").default}
//               alt="home"
//               // className="home-svg"
//             />
//             <span className="driver_details_textss">
//               {this.props.completed}% <span>Adherence</span>
//             </span>
//           </div>
//         </div>

//       </div>
//     );
//   }
// }
// export default DashboardDriverDetails;

import React, { Component } from "react";
import "../../component/dashboard_driver_details/index.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
class DashboardDriverDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="driver-details">
        <div className="driver-details-div-first-img">
          <img
            src={require("../../assets/images/driver-details/Rectangle 1387.png")}
            alt="home"
            className="driver-details-first-img"
          />
          <div className="driver-details-img-data">
            <div className="countNumberBoxss">
              <img
                src={require("../../assets/images/driver-details/men.png")}
                alt="home"
                className="DD-driver-image"
              />
              <span style={{ color: "white", fontSize: "19px" }}>
                <b>{this.props.total}</b>
              </span>
            </div>
            <p className="drivers">Total No.of Drivers</p>
          </div>

          <div className="driver-details-img-data-blue">
            <div className="countNumberBoxss-1">
              <span style={{ color: "white", fontSize: "20px" }}>
                <b>{this.props.present}</b>
              </span>
            </div>
            <p className="reported">Reported</p>
          </div>

          <div
            style={{
              width: "50px",
              height: "50px",
              marginLeft: "462px",
              marginTop: "-49px",
              position: "relative",
            }}
          >
            <CircularProgressbar
              value={this.props.present}
              styles={buildStyles({
                pathColor: "#7BC84E",
                trailColor: "#D7EEC9",
                strokeLinecap: "butt",
              })}
              strokeWidth={20}
            />
          </div>
          <div className="green-dot-driver-details">
            <img
              src={require("../../assets/images/driver-details/Ellipse 9291.png")}
              alt="home"
              className="driver-detils-dot-img"
            />
            <span className="driver_details_textss">
              {this.props.driverreportedAdh}% <span>Adherence</span>
            </span>
          </div>
        </div>

        <div className="driver-details-div-second-img">
          <img
            src={require("../../assets/images/driver-details/Group 10027.png")}
            alt="home"
            className="driver_details_second_img"
          />

          <div className="driver-details-img-data-two">
            <div className="countNumberBoxss_second-img-blue">
              <img
                src={require("../../assets/images/driver-details/vehicle.png")}
                alt="home"
                className="DD-bus-image"
              />
              <span style={{ color: "white", fontSize: "18px" }}>
                <b>{this.props.estimatedtrips}</b>
              </span>
            </div>
            <p className="drivers">Estimated Trips</p>
          </div>

          <div>
            <div className="countNumberBoxss_blue">
              <span style={{ color: "white", fontSize: "20px" }}>
                <b>{this.props.start}</b>
              </span>
            </div>
            <p className="started">Trip Started</p>

            <div className="countNumberBoxss_orange">
              <span style={{ color: "white", fontSize: "20px" }}>
                <b>{this.props.completed}</b>
              </span>
            </div>
            <p className="completed">Trip completed</p>
          </div>

          <div>
            <div
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "461px",
                marginTop: "-123px",
                position: "relative",
              }}
            >
              <CircularProgressbar
                value={this.props.start}
                styles={buildStyles({
                  pathColor: "#19397C",
                  trailColor: "#DCE8FD",
                  strokeLinecap: "butt",
                })}
                strokeWidth={20}
              />
            </div>
            <div className="green-dot-driver-details-1">
              <img
                src={require("../../assets/blue-circle.svg").default}
                alt="home"
                className="driver-detils-dot-img"
              />
              <span className="driver_details_textss">
                {this.props.tripstartedAdh}% <span>Adherence</span>
              </span>
            </div>
          </div>

          <div>
            <div
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "462px",
                marginTop: "40px",
                position: "relative",
              }}
            >
              <CircularProgressbar
                value={this.props.completed}
                styles={buildStyles({
                  pathColor: "#EDA252",
                  trailColor: "#FAE3CB",
                  strokeLinecap: "butt",
                })}
                strokeWidth={20}
              />
            </div>
            <div className="green-dot-driver-details-orange">
              <img
                src={require("../../assets/orange-circle.svg").default}
                alt="home"
                //className="driver-detils-dot-img"
              />
              <span className="driver_details_textss">
                {this.props.tripcompletedAdh}% <span>Adherence</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardDriverDetails;
