// import React, { Component } from "react";
// import "../../component/dashboard_vehicle_readlines/index.scss";
// class DashboardVehicleReadlines extends Component {
//   render() {
//     return (

//         <div className="vehicle-readliness-div">

//           <img className="readliness-img-1"
//               src={require("../../assets/images/redliness/wash.png")}
//               alt=""
//             />
//               <div className="vehicle-readliness-wash">
//           <h3 className="vehicle-readliness-number">04</h3>
//           <p className="vehicle-readliness-text-1">WASHING</p>
//           </div>
//           {/* <hr className="hori"/> */}

//           <img className="readliness-img-2"
//               src={require("../../assets/images/redliness/charge.png")}
//               alt=""
//             />
//  <div className="vehicle-readliness-charge">
//           <h3 className="vehicle-readliness-number">04</h3>
//           <p className="vehicle-readliness-text-2">CHARGING</p>
//           </div>
//           {/* <hr className="hori"/> */}
//           <img className="readliness-img-3"
//               src={require("../../assets/images/redliness/clean.png")}
//               alt=""
//             />
//    <div className="vehicle-readliness-breakdown">
//           <h3 className="vehicle-readliness-number">04</h3>
//           <p className="vehicle-readliness-text-3">CLEANING</p>

//           </div>
//           {/* <hr className="hori"/> */}
//           <img className="readliness-img-4"
//               src={require("../../assets/images/redliness/maintain.png")}
//               alt=""
//             />
//   <div className="vehicle-readliness-maintain">
//           <h3 className="vehicle-readliness-number">04</h3>
//           <p className="vehicle-readliness-text-4">MAINTENANCE</p>

//           </div>
//           {/* <hr className="hori"/> */}

//           <img className="readliness-img-5"
//               src={require("../../assets/images/redliness/ready.png")}
//               alt=""
//             />
//              <div className="vehicle-readliness-trip">
//           <h3 className="vehicle-readliness-number">04</h3>
//           <p className="vehicle-readliness-text-5">READY FOR <br/>TRIP</p>
//           </div>
//         </div>

//     );
//   }
// }
// export default DashboardVehicleReadlines;

import React, { Component } from "react";

import "../../component/dashboard_vehicle_readlines/index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class DashboardVehicleReadlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div class="container-fluid">
        <div className="row">
          <div className="col-sm bg-body  d-flex border-right readliness-hover">
            
            <img
              className="readliness-img-1"
              src={require("../../assets/images/redliness/wash.png")}
              alt=""
            />
 
            <div className="vehicle-readliness-wash">
              <h3 className="vehicle-readliness-number">
                {this.props.washing}
              </h3>
              <p className="vehicle-readliness-text-1">WASHING</p>
            </div>
            
          </div>
          <div className="col-sm bg-body d-flex border-right readliness-hover-1">
            <img
              className="readliness-img-2"
              src={require("../../assets/images/redliness/charge.png")}
              alt=""
            />
            <div className="vehicle-readliness-charge">
              <h3 className="vehicle-readliness-number">
                {this.props.occupiedcharger}
              </h3>
              <p className="vehicle-readliness-text-2">CHARGING</p>
            </div>
          </div>
          <div className="col-sm bg-body d-flex border-right readliness-hover-2">
            <img
              className="readliness-img-3"
              src={require("../../assets/images/redliness/clean.png")}
              alt=""
            />
            <div className="vehicle-readliness-breakdown">
              <h3 className="vehicle-readliness-number">
                {this.props.cleaning}
              </h3>
              <p className="vehicle-readliness-text-3">CLEANING</p>
            </div>
          </div>
          <div className="col-sm bg-body d-flex border-right readliness-hover-3">
            <img
              className="readliness-img-4"
              src={require("../../assets/images/redliness/maintain.png")}
              alt=""
            />
            <div className="vehicle-readliness-maintain">
              <h3 className="vehicle-readliness-number">
                {this.props.maintenance}
              </h3>
              <p className="vehicle-readliness-text-4">MAINTENANCE</p>
            </div>
          </div>
          <div className="col-sm bg-body d-flex border-right readliness-hover-4">
            <img
              className="readliness-img-5"
              src={require("../../assets/images/redliness/ready.png")}
              alt=""
            />
            <div className="vehicle-readliness-trip">
              <h3 className="vehicle-readliness-number">
                {this.props.readyfortrip}
              </h3>
              <p className="vehicle-readliness-text-5">
                READY FOR <br />
                TRIP
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default DashboardVehicleReadlines;

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(DashboardVehicleReadlines));
