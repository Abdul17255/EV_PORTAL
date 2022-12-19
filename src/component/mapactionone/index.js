// import React, { Component } from "react";
// import "../mapactionone/index.scss";
// export default class MapactionOne extends Component {

//   constructor(props){
//     super(props)
//     this.state ={
//       button: true,
//       buttonone:true,
//       buttontwo:true,
//       buttonthree:true
//     }
//     this.handleClick = this.handleClick.bind(this);
//     this.handleClickone = this.handleClickone.bind(this);
//     this.handleClicktwo = this.handleClicktwo.bind(this);
//     this.handleClickthree = this.handleClickthree.bind(this);
//   }
//   handleClick(){
//     this.setState({
//       button:!this.state.button
//     })
//   }
//   handleClickone(){
//     this.setState({
//       buttonone:!this.state.buttonone
//     })
//   }

//   handleClicktwo(){
//     this.setState({
//       buttontwo:!this.state.buttontwo
//     })
//   }

//   handleClickthree(){
//     this.setState({
//       buttonthree:!this.state.buttonthree
//     })
//   }

//   render() {
//     return (
//       <div className="container-7">
//         <div className="row">
//           <div className="col-sm" onclick="addShadow(event);">
//             <div className="card" style={{ backgroundColor: "blue" }}>
//               <div className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>
//                 <p className="cardtext-2">All</p>
//                 <div className="countNumberBox-2">
//                   <span style={{ color: "red" }}>
//                     <b>36</b>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-sm">
//             <div className="card" style={{ backgroundColor: "green" }}>
//             <div className={this.state.buttonone ? "buttonone": "buttontwo"} onClick={this.handleClickone}>
//                 {/*<img src={require("../../assets/images/movingrectagleicon/Rect.png")}  className="headImg"/> */}
//                 <p className="cardtext">Moving</p>
//                 <div className="countNumberBox-3">
//                   <span style={{ color: "red" }}>
//                     <b>30</b>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="card" style={{ backgroundColor: "red" }}>
//             <div className={this.state.buttontwo ? "buttonthree": "buttonfour"} onClick={this.handleClicktwo}>
//                 {/*<img src={require("../../assets/images/stoppedrectangle/stopped.png")}className="headImg"/>*/}
//                 <p className="cardtext">Stopped</p>
//                 <div className="countNumberBox-4">
//                   <span style={{ color: "red" }}>
//                     <b>0</b>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="card" style={{ backgroundColor: "gray" }}>
//             <div className={this.state.buttonthree ? "buttonfive": "buttonsix"} onClick={this.handleClickthree}>
//                 {/*<img src={require("../../assets/images/notreachable/notreach.png")} className="headImg"/>*/}

//                 <p className="cardtext-1">Not Reachable</p>
//                 <div className="countNumberBox-1">
//                   <span style={{ color: "red" }}>
//                     <b>0</b>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import "../mapactionone/index.scss";
import mapActionApiActions from "../../redux/mapactions/actions";
import { connect } from "react-redux";
import ReactLoader from "../../component/react-loader/react-loader.component";
import { withRouter } from "react-router";
let start_date = "";
let end_date = "";
let duration = "";

const { getMapActionAPI } = mapActionApiActions;
class MapactionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
      buttonone: true,
      buttontwo: true,
      buttonthree: true,
      running_count: "",
      stopped_count: "",
      not_reachable_count: "",
      all: "",
    };
    // this.handleClick = this.handleClick.bind(this);
    // this.handleClickone = this.handleClickone.bind(this);
    // this.handleClicktwo = this.handleClicktwo.bind(this);
    // this.handleClickthree = this.handleClickthree.bind(this);
    this.getMapActionDetails = this.getMapActionDetails.bind(this);
  }

  componentDidMount() {
    start_date = sessionStorage.getItem("start_timestamp");
    end_date = sessionStorage.getItem("end_timestamp");
    duration = sessionStorage.getItem("duration");
    this.getMapActionDetails();
  }

  getMapActionDetails = async () => {
    let payLoad = {
      api_key: "CONNECTED_VEHICLE_TRACK_CHARGER_AND_VEHICLE_COUNT",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: start_date,
      end_timestamp: end_date,
      duration: duration,
    };

    await this.props.getMapActionAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    //console.log("mapaction",nextProps?.mapActionApi?.mapActionApi?.result?.data?.data)
    if (nextProps?.mapActionApi?.mapActionApi?.result?.data?.data) {
      this.setState({
        running_count:
          nextProps.mapActionApi.mapActionApi.result.data.data
            .moving_vehicle_count,
      });
      this.setState({
        stopped_count:
          nextProps.mapActionApi.mapActionApi.result.data.data.stopped_vehicle,
      });
      this.setState({
        not_reachable_count:
          nextProps.mapActionApi.mapActionApi.result.data.data
            .non_respond_vehicle,
      });
      this.setState({
        all:
          this.state.running_count +
          this.state.stopped_count +
          this.state.not_reachable_count,
      });
    }
  }

  // handleClick() {
  //   this.setState({
  //     button: !this.state.button,
  //   });
  // }
  // handleClickone() {
  //   this.setState({
  //     buttonone: !this.state.buttonone,
  //   });
  // }

  // handleClicktwo() {
  //   this.setState({
  //     buttontwo: !this.state.buttontwo,
  //   });
  // }

  // handleClickthree() {
  //   this.setState({
  //     buttonthree: !this.state.buttonthree,
  //   });
  // }

  render() {
    return (
      <div className="mapactionone">
        {this.props.mapActionApi?.mapActionApi?.loading ? (
          <div className="loader-overlay-one">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        {/* <div className="vehicleText">Vehicle Status:</div> */}
        <div className="row">
          <div className="col-sm" onclick="addShadow(event);">
            <div className="card" style={{ backgroundColor: "white",border:"1px solid blue" }}>
              <p className="mapaction-cardtext-2">All</p>
              <div className="all_countNumberBox">
                <span style={{ color: "red" }}>
                  <b>{this.state.all}</b>
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card" style={{ backgroundColor: "#7aae4f" }}>
              {/*<img src={require("../../assets/images/movingrectagleicon/Rect.png")}  className="headImg"/> */}
              <p className="mapaction-cardtext">Moving</p>
              <div className="moving_countNumberBox">
                <span style={{ color: "red" }}>
                  <b>{this.state.running_count}</b>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ backgroundColor: "#da3d48" }}>
              {/*<img src={require("../../assets/images/stoppedrectangle/stopped.png")}className="headImg"/>*/}
              <p className="mapaction-cardtext">Stopped</p>
              <div className="stopped_countNumberBox">
                <span style={{ color: "red" }}>
                  <b>{this.state.stopped_count}</b>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ backgroundColor: "#8c98b2" }}>
              {/*<img src={require("../../assets/images/notreachable/notreach.png")} className="headImg"/>*/}

              <p className="mapaction-cardtext-1">Not Reachable</p>
              <div className="reachable_countNumberBox">
                <span style={{ color: "red" }}>
                  <b>{this.state.not_reachable_count}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    //chargeSummary: state.chargeSummary,
  };
};

export default connect(mapStateToProps, {
  getMapActionAPI,
})(withRouter(MapactionOne));
