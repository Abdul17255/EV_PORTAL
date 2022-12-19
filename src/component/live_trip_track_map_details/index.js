// import React, { Component } from "react";
// import "../live_trip_track_map_details/index.scss";
// class LiveTripDetails extends Component {
//   render() {
//     return (
//       <div className="container-fluid border Scroll">

//         <div className="row ">
//           <div className="LiveTripDetails_start">
//             <img
//               src={require("../../assets/images/livetrip/mapp.png")}
//               className="LiveTripDetails_image"
//               alt=""
//             />

//             <p className="LiveTripDetails_head">Start</p>
//             <p className="LiveTripDetails_head_end">08:35 AM | 15/09/22</p>
//           </div>
//           <div className="row">
//             <div className="col"></div>
//             <div className="col">
//               <p className="LiveTripDetails_head_text">Driver Name</p>
//               <p className="LiveTripDetails_head_text-1">ABC</p>
//             </div>
//             <div className="col">
//               <p className="LiveTripDetails_head_text">No Of Trips</p>
//               <p className="LiveTripDetails_head_text-1">4</p>
//             </div>
//             <div className="col">
//               <p className="LiveTripDetails_head_text">Route No</p>
//               <p className="LiveTripDetails_head_text-1">5</p>
//             </div>
//             <div className="col-4"></div>
//           </div>

//           <div className="row">
//             <p className="LiveTripDetails_head_text-2">
//               Sector 17 Bus Terminal, Chandigarh
//             </p>
//           </div>
//           <div className="row">
//             <p className="LiveTripDetails_head_text-3">Start SOC</p>
//             <p className="LiveTripDetails_head_text-2">2</p>
//           </div>
//         </div>

//         <div className="row">
//           <div className="LiveTripDetails_start">
//             <img
//               src={require("../../assets/images/livetrip/red-dot.png")}
//               className="LiveTripDetails_image-stop-dot"
//               alt=""
//             />

//             <p className="LiveTripDetails_head">Stopped</p>
//             <p className="LiveTripDetails_head_end">08:35 AM | 15/09/22</p>
//           </div>
//           <p className="LiveTripDetails_head_text-2">
//             Sector 28 Phase 1, Chandigarh
//           </p>
//           <p className="LiveTripDetails_head_text-3">Current SOC</p>
//           <p className="LiveTripDetails_head_text-2">89%</p>
//         </div>
//         <div className="row">
//           <div className="LiveTripDetails_start">
//             <img
//               src={require("../../assets/images/livetrip/red-dot.png")}
//               className="LiveTripDetails_image-stop-dot"
//               alt=""
//             />
//             <p className="LiveTripDetails_head">Stopped</p> <img
//               src={require("../../assets/images/availableicon/available.png")}
//               className="LiveTripDetails_image-stop"
//               alt=""
//             />
//             <p className="LiveTripDetails_stop_text">Charging Event</p>
//             <p className="LiveTripDetails_head_end-1">08:35 AM | 15/09/22</p>
//           </div>
//           <p className="LiveTripDetails_head_text-2">Tata Power Charge Grid Sector 28 Phase 1, Chandigarh</p>
//           <div className="row">
//             <div className="col"></div>

//             <div className="col">
//                 <p className="LiveTripDetails_head_text">Start SOC</p>
//                 <p className="LiveTripDetails_head_text-1">23%</p>
//                 </div>
//             <div className="col">
//                 <p className="LiveTripDetails_head_text">End SOC</p>
//                 <p className="LiveTripDetails_head_text-1">32%</p>
//                 </div>

//             <div className="col-6"></div>
//           </div>

//           <div className="row">
//             <div className="col"></div>

//             <div className="col">
//                 <p className="LiveTripDetails_head_text">Start Time</p>
//                 <p className="LiveTripDetails_head_text-1">10.35 PM</p>
//                 </div>
//             <div className="col">
//                 <p className="LiveTripDetails_head_text">End Time</p>
//                 <p className="LiveTripDetails_head_text-1">4 AM</p>
//                 </div>

//             <div className="col-6"></div>
//           </div>
//         </div>
//         <div className="row border shadow">
//           <div className="LiveTripDetails_start">
//             <p className="pulsatingDotlive-trip" />
//             <p className="LiveTripDetails_head">Moving</p>
//           </div>
//           <p className="LiveTripDetails_head_text-2">Sector 37 Industrial area Chandigarh</p>
//           <div className="row">
//           <div className="col"></div>
//             <div className="col"><p className="LiveTripDetails_head_text">Current SOC</p>
//             <p className="LiveTripDetails_head_text-1">76%</p>
//             </div>

//             <div className="col"><p className="LiveTripDetails_head_text">Distance Travelled</p>
//             <p className="LiveTripDetails_head_text-1">12 Km</p>
//             </div>
//             <div className="col"><p className="LiveTripDetails_head_text">Average Speed</p>
//             <p className="LiveTripDetails_head_text-1">41 km/H</p>
//             </div>
//             <div className="col-4"></div>
//             <div className="row">

//             <div className="col"></div>
//             <div className="col"><p className="LiveTripDetails_head_text">Consumed SOC</p>
//             <p className="LiveTripDetails_head_text-1">76%</p>
//             </div>
//             <div className="col"><p className="LiveTripDetails_head_text">Distance Remaining</p>
//             <p className="LiveTripDetails_head_text-1">12 Km</p>
//             </div>
//             <div className="col-6"></div>
//             </div>

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default LiveTripDetails;
import React, { Component } from "react";
import "../live_trip_track_map_details/index.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router";

const stopResponse = [
  {
    latitude: 30.75414,
    longitude: 76.74863,
    location: null,
    stoppageTime: null,
    startSoc: 98.4,
    endSoc: 98.4,
    startOdometer: 1150.54,
    endOdometer: 1150.54,
    startTime: "2022-10-29 04:51:30.000",
    endTime: "2022-10-29 04:51:30.000",
    duration: 0.0,
    stoppageCrossed: false,
  },
  {
    latitude: 30.7484,
    longitude: 76.75917,
    location: null,
    stoppageTime: null,
    startSoc: 52.8,
    endSoc: 52.8,
    startOdometer: 1140.82,
    endOdometer: 1140.82,
    startTime: "2022-10-28 18:08:00.000",
    endTime: "2022-10-28 18:08:00.000",
    duration: 0.0,
    stoppageCrossed: false,
  },
  {
    latitude: 30.7484,
    longitude: 76.75917,
    location: null,
    stoppageTime: null,
    startSoc: 52.8,
    endSoc: 52.8,
    startOdometer: 1140.82,
    endOdometer: 1140.82,
    startTime: "2022-10-28 18:08:00.000",
    endTime: "2022-10-28 18:08:00.000",
    duration: 0.0,
    stoppageCrossed: false,
  },
  {
    latitude: 30.7484,
    longitude: 76.75917,
    location: null,
    stoppageTime: null,
    startSoc: 52.8,
    endSoc: 52.8,
    startOdometer: 1140.82,
    endOdometer: 1140.82,
    startTime: "2022-10-28 18:08:00.000",
    endTime: "2022-10-28 18:08:00.000",
    duration: 0.0,
    stoppageCrossed: false,
  },
  {
    latitude: 30.7484,
    longitude: 76.75917,
    location: null,
    stoppageTime: null,
    startSoc: 52.8,
    endSoc: 52.8,
    startOdometer: 1140.82,
    endOdometer: 1140.82,
    startTime: "2022-10-28 18:08:00.000",
    endTime: "2022-10-28 18:08:00.000",
    duration: 0.0,
    stoppageCrossed: false,
  },
  {
    latitude: 30.7484,
    longitude: 76.75917,
    location: null,
    stoppageTime: null,
    startSoc: 52.8,
    endSoc: 52.8,
    startOdometer: 1140.82,
    endOdometer: 1140.82,
    startTime: "2022-11-30 18:08:00.000",
    endTime: "2022-11-30 18:08:00.000",
    duration: 0.0,
    stoppageCrossed: false,
  },
];

let arrSize = "";

class LiveTripSummaryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftCardDetails: [],
    };
  }

  componentDidMount() {
    // this.setState({ leftCardDetails: stopResponse });
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi?.result
        ?.data?.responseData
    ) {
      this.setState({
        leftCardDetails:
          nextProps.LiveTripTrackMapDetailsApi?.liveTripTrackMapDetailsApi
            ?.result?.data?.responseData.stoppages,
      });
      arrSize = this.state.leftCardDetails.length;
      //
    }
  }

  render() {
    return (
      <div className="container-fluid border Scroll">
        <div className="row ">
          <div className="LiveTripDetails_start">
            <img
              src={require("../../assets/images/livetrip/mapp.png")}
              className="LiveTripDetails_image"
              alt=""
            />

            <p className="LiveTripDetails_head">Start</p>
            <p className="LiveTripDetails_head_end">
              {this.state.leftCardDetails.length > 0
                ? this.state.leftCardDetails[0].startTime
                : "-"}
            </p>
          </div>

          {/* <div className="row">
            <p className="LiveTripDetails_head_text-2">-</p>
          </div>

          <div className="row">
            <p className="LiveTripDetails_head_text-3">Start ODO</p>
            <p className="LiveTripDetails_head_text-2">
              {stopResponse[0].startOdometer}
            </p>
          </div>
          <div className="row">
            <p className="LiveTripDetails_head_text-3">End ODO</p>
            <p className="LiveTripDetails_head_text-2">
              {stopResponse[0].endOdometer}
            </p>
          </div> */}
          <div className="row">
            <p className="LiveTripDetails_head_text-2">
              {this.state.leftCardDetails.length > 0
                ? this.state.leftCardDetails[0].location
                : "-"}
            </p>
          </div>

          <div className="row">
            <div className="col"></div>

            <div className="col">
              <p className="LiveTripDetails_head_text">SOC</p>
              <p className="LiveTripDetails_head_text-1">
                {this.state.leftCardDetails.length > 0
                  ? this.state.leftCardDetails[0].startSoc
                  : "-"}
              </p>
            </div>
            <div className="col">
              <p className="LiveTripDetails_head_text">ODO</p>
              <p className="LiveTripDetails_head_text-1">
                {this.state.leftCardDetails.length > 0
                  ? this.state.leftCardDetails[0].startOdometer
                  : "-"}
              </p>
            </div>

            <div className="col-6"></div>
          </div>

          <div className="row">
            <div className="col"></div>

            {/* <div className="col">
              <p className="LiveTripDetails_head_text">ODO</p>
              <p className="LiveTripDetails_head_text-1">
                {this.state.leftCardDetails.length > 0
                  ? this.state.leftCardDetails[0].startOdometer
                  : "-"}
              </p>
            </div> */}
            {/* <div className="col">
              <p className="LiveTripDetails_head_text">End ODO</p>
              <p className="LiveTripDetails_head_text-1">
                {this.state.leftCardDetails.length > 0
                  ? this.state.leftCardDetails[0].endOdometer
                  : "-"}
              </p>
            </div> */}

            <div className="col-6"></div>
          </div>
        </div>

        <div className="row">
          {this.state.leftCardDetails.length > 0 ? (
            this.state.leftCardDetails.map((item, index) => (
              <div className="indent" key={index}>
                <div className="LiveTripDetails_start">
                  <img
                    src={require("../../assets/images/livetrip/red-dot.png")}
                    className="LiveTripDetails_image-stop-dot"
                    alt=""
                  />

                  <p className="LiveTripDetails_head">Stopped</p>
                  <p className="LiveTripDetails_head_end">
                    {this.state.leftCardDetails[index].startTime}
                  </p>
                </div>

                <div className="row">
                  <p className="LiveTripDetails_head_text-2">
                    {this.state.leftCardDetails[index].location}
                  </p>
                </div>

                <div className="row">
                  <div className="col"></div>

                  <div className="col">
                    <p className="LiveTripDetails_head_text">SOC</p>
                    <p className="LiveTripDetails_head_text-1">
                      {this.state.leftCardDetails[index].startSoc}
                    </p>
                  </div>
                  <div className="col">
                    <p className="LiveTripDetails_head_text">ODO</p>
                    <p className="LiveTripDetails_head_text-1">
                      {this.state.leftCardDetails[index].startOdometer}
                    </p>
                  </div>

                  <div className="col-6"></div>
                </div>

                <div className="row">
                  <div className="col"></div>

                  {/* <div className="col">
                    <p className="LiveTripDetails_head_text">ODO</p>
                    <p className="LiveTripDetails_head_text-1">
                      {this.state.leftCardDetails[index].startOdometer}
                    </p>
                  </div> */}
                  {/* <div className="col">
                    <p className="LiveTripDetails_head_text">End ODO</p>
                    <p className="LiveTripDetails_head_text-1">
                      {this.state.leftCardDetails[index].endOdometer}
                    </p>
                  </div> */}

                  <div className="col-6"></div>
                </div>
              </div>
            ))
          ) : (
            <div className="indent">
              <div className="LiveTripDetails_start">
                <img
                  src={require("../../assets/images/livetrip/red-dot.png")}
                  className="LiveTripDetails_image-stop-dot"
                  alt=""
                />

                <p className="LiveTripDetails_head">Stopped</p>
                <p className="LiveTripDetails_head_end">-</p>
              </div>

              <div className="row">
                <p className="LiveTripDetails_head_text-2">-</p>
              </div>

              <div className="row">
                <div className="col"></div>

                <div className="col">
                  <p className="LiveTripDetails_head_text">SOC</p>
                  <p className="LiveTripDetails_head_text-1">-</p>
                </div>
                <div className="col">
                  <p className="LiveTripDetails_head_text">ODO</p>
                  <p className="LiveTripDetails_head_text-1">-</p>
                </div>

                <div className="col-6"></div>
              </div>

              <div className="row">
                <div className="col"></div>

                {/* <div className="col">
                  <p className="LiveTripDetails_head_text">Start ODO</p>
                  <p className="LiveTripDetails_head_text-1">-</p>
                </div> */}
                {/* <div className="col">
                  <p className="LiveTripDetails_head_text">End ODO</p>
                  <p className="LiveTripDetails_head_text-1">-</p>
                </div> */}

                <div className="col-6"></div>
              </div>
            </div>
          )}
        </div>

        {/* <div className="row">
          <div className="LiveTripDetails_start">
            <img
              src={require("../../assets/images/livetrip/red-dot.png")}
              className="LiveTripDetails_image-stop-dot"
              alt=""
            />
            <p className="LiveTripDetails_head">Stopped</p>{" "}
            <img
              src={require("../../assets/images/availableicon/available.png")}
              className="LiveTripDetails_image-stop"
              alt=""
            />
            <p className="LiveTripDetails_stop_text">Charging Event</p>
            <p className="LiveTripDetails_head_end-1">08:35 AM | 15/09/22</p>
          </div>
          <p className="LiveTripDetails_head_text-2">
            Tata Power Charge Grid Sector 28 Phase 1, Chandigarh
          </p>
          <div className="row">
            <div className="col"></div>

            <div className="col">
              <p className="LiveTripDetails_head_text">Start SOC</p>
              <p className="LiveTripDetails_head_text-1">23%</p>
            </div>
            <div className="col">
              <p className="LiveTripDetails_head_text">End SOC</p>
              <p className="LiveTripDetails_head_text-1">32%</p>
            </div>

            <div className="col-6"></div>
          </div>

          <div className="row">
            <div className="col"></div>

            <div className="col">
              <p className="LiveTripDetails_head_text">Start Time</p>
              <p className="LiveTripDetails_head_text-1">10.35 PM</p>
            </div>
            <div className="col">
              <p className="LiveTripDetails_head_text">End Time</p>
              <p className="LiveTripDetails_head_text-1">4 AM</p>
            </div>
 //arrSize
            <div className="col-6"></div>
          </div>
        </div> */}

        {/* <div className="row border shadow">
          <div className="LiveTripDetails_start">
            <p className="pulsatingDotlive-trip" />
            <p className="LiveTripDetails_head">Moving</p>
          </div>
          <p className="LiveTripDetails_head_text-2">
            Sector 37 Industrial area Chandigarh
          </p>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <p className="LiveTripDetails_head_text">Current SOC</p>
              <p className="LiveTripDetails_head_text-1">76%</p>
            </div>

            <div className="col">
              <p className="LiveTripDetails_head_text">Distance Travelled</p>
              <p className="LiveTripDetails_head_text-1">12 Km</p>
            </div>
            <div className="col">
              <p className="LiveTripDetails_head_text">Average Speed</p>
              <p className="LiveTripDetails_head_text-1">41 km/H</p>
            </div>
            <div className="col-4"></div>
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <p className="LiveTripDetails_head_text">Consumed SOC</p>
                <p className="LiveTripDetails_head_text-1">76%</p>
              </div>
              <div className="col">
                <p className="LiveTripDetails_head_text">Distance Remaining</p>
                <p className="LiveTripDetails_head_text-1">12 Km</p>
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(withRouter(LiveTripSummaryDetails));

//export default LiveTripDetails;
