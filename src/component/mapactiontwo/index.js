// import React, { Component } from 'react'
// import "../mapactiontwo/index.scss"
// export default class MapActionTwo extends Component {
//   render() {
//     return (
//         <div className="mapaction-right">

//               <div >
//                 <p className='mapaction-breakdown'>
//                   <img src={require("../../assets/images/breakdown/breakdown.png")} className="mapaction-img"/>
//                   Breakdown
//                   <div className='counter'>0</div>
//                   </p>
//               </div>

//               <div>
//                 <p  className='mapaction-available'><img  src={require("../../assets/images/availableicon/available.png")} className="mapaction-img"/>
//                 Available
//                 <div className='counter'>10</div>
//                 </p>
//               </div>

//               <div >

//                <p className='mapaction-available'><img src={require("../../assets/images/occuipiedicon/occuicon.png")} className="mapaction-img"/>
//                Occupied
//                <div className='counter'>0</div>
//                </p>
//               </div>

//             </div>
//     )
//   }
// }
import React, { Component } from "react";
import "../mapactiontwo/index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class MapActionTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakdown_count: "",
      available_count: "",
      occuipied_count: "",
    };
  }
  componentWillReceiveProps(nextProps) {
    //console.log("mapaction",nextProps?.mapActionApi?.mapActionApi?.result?.data?.data)
    if (nextProps?.mapActionApi?.mapActionApi?.result?.data?.data) {
      this.setState({
        breakdown_count:
          nextProps.mapActionApi.mapActionApi.result.data.data
            .breakdown_charger_count,
      });
      this.setState({
        available_count:
          nextProps.mapActionApi.mapActionApi.result.data.data
            .available_charger_count,
      });
      this.setState({
        occuipied_count:
          nextProps.mapActionApi.mapActionApi.result.data.data
            .occupied_charger_count,
      });
    }
  }
  render() {
    return (
      <div>
        {/* <div className="chargerText">Charger Status:</div> */}
        <div className="mapaction-right">
          <div className="mapaction-breakdown">
            <img
              src={require("../../assets/images/breakdown/breakdown.png")}
              className="mapaction-img"
              alt=""
            />
            <p className="mapaction-breakdown-para">
              Breakdown
              <span className="counter">{this.state.breakdown_count}</span>
            </p>
          </div>
          <div className="mapaction-available">
            <img
              src={require("../../assets/images/availableicon/available.png")}
              className="mapaction-img"
              alt=""
            />
            <p className="mapaction-available-para">
              Available
              <span className="counter-one">{this.state.available_count}</span>
            </p>
          </div>
          <div className="mapaction-Occupied">
            <img
              src={require("../../assets/images/occuipiedicon/occuicon.png")}
              className="mapaction-img"
              alt=""
            />
            <p className="mapaction-Occupied-para">
              Occupied
              <span className="counter">{this.state.occuipied_count}</span>
            </p>
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

export default connect(mapStateToProps, {})(withRouter(MapActionTwo));
