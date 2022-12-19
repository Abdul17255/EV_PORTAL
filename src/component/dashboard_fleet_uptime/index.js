import React, { Component } from "react";
import "./index.scss";
// class DashboardFleetUptime extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   render() {
//     return (
//       <div className="vehicle-perday">
//         <div>
//           {" "}
//           <img
//             className="perday-image"
//             src={require("../../assets/images/vehicleperday/perday.png")}
//             alt=""
//           />
//         </div>

//         <div className="perday-content">
//           <div className="perday-texts">
//             <h3 className="perday-number">{this.props.avgvehrunning}</h3>
//             <p className="perday-text">
//               AVERAGE VEHICLES
//               <br /> RUNNING KM PER DAY
//             </p>
//           </div>
//           <div className="perday-texts">
//             <h3 className="perday-number-one">{this.props.vehabove200}</h3>
//             <p className="perday-text-one">
//               VEHICLES RUNNING
//               <br /> ABOVE 200 KMS/DAY
//             </p>
//           </div>
//           <div className="perday-texts">
//             <h3 className="perday-number-one">{this.props.vehbelow200}</h3>
//             <p className="perday-text-one">
//               VEHICLES RUNNING
//               <br /> BELOW 200 KMS/DAY
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default DashboardFleetUptime;

class DashboardFleetAvailabity extends Component {
  render() {
    return (
      <div className="vehicle-perday">
        <div className="perday-content">
          <div>
            {" "}
            <img
              className="perday-image"
              src={require("../../assets/images/vehicleperday/perday.png")}
              alt=""
            />
          </div>
          <div>
            <h3 className="perday-number">{this.props.avgvehrunning}</h3>
            <p className="perday-text">
              AVERAGE
              <br /> RUNNING KM PER DAY
            </p>
          </div>
        </div>
        <hr className="perday-hr" />
        <div className="perday-double-image">
          <div className="double-image-one">
            {/* <div>  <img className='perday-image-one' src={require("../../assets/images/vehicleperday/perday.png")} alt=""/>
  </div> */}
            <div>
              <div className="perday-number-one">{this.props.vehbelow200}</div>
              <p className="perday-text-one">
                {" "}
                VEH RUNNING
                <br /> BELOW
                <br />
                200 KMS/DAY
              </p>
            </div>
          </div>
          <hr class="perpendiculars-line" />
          <div className="double-image-two">
            {/* <div>  <img className='perday-image-one' src={require("../../assets/images/vehicleperday/perday.png")} alt=""/>
</div> */}

            <div className="perday-number-one-1">{this.props.vehabove200}</div>
            <p className="perday-text-one-1">
              VEH RUNNING <br />
              ABOVE <br />
              200 KMS/DAY
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardFleetAvailabity;
