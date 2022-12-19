import React, { Component } from "react";
import "../../component/dashboard_vehicle_effciency/index.scss";
class DashboardVehicleEffciency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      // <div>
      //   <div className="vehicle-effciency">


      //   <div className="vehicle-effciency-charge">
      //       <img
      //         className="vehicle-effciency-img-2"
      //         src={require("../../assets/images/effciencys/red.png")}
      //         alt=""
      //       />
      //       <h3 className="vehicle-effciency-number-2">
      //         {this.props.vehoperatingabove1kwh}
      //       </h3>
      //       <p className="vehicle-effciency-text">
      //         NO. OF VEHICLES <br />
      //         OPERATING ABOVE 1 KWH/KM
      //       </p>
      //     </div>

      //     {/* <hr className="effciencys-line"/> */}
      //     <div className="vehicle-effciency-wash">
      //       <img
      //         className="vehicle-effciency-img-1"
      //         src={require("../../assets/images/effciencys/red-bus.png")}
      //         alt=""
      //       />
      //       <h3 className="vehicle-effciency-number-1">
      //         {this.props.vehoperatingunder1kwh}
      //       </h3>
      //       <p className="vehicle-effciency-text">
      //         NO. OF VEHICLES <br />
      //         OPERATING UNDER 1 KWH/KM
      //       </p>
      //     </div>
      //      {/* <hr className="effciencys-line"/> */}

         

      //     <div style={{ marginTop: "15px", paddingLeft: "1.5%" }} className="effciency-rightside">
      //       <div>
      //       <img
      //         src={require("../../assets/images/effciencys/red-small-dot.png")}
      //         alt=""
      //       />
      //       <span className="button-text-1">{">"} 1</span>
      //       </div>
      //       <div style={{marginLeft:"-10px"}}>
      //       <img
      //         className="dot-image"
      //         src={require("../../assets/images/effciencys/green-small-dot.png")}
      //         alt=""
      //       />
      //       <span className="button-text-1">{"<"} 1</span>
      //       </div>
      //     </div>
          
      //   </div>
      //   <div>
      //     <hr className="effciency-hr" />
      //     {/* <div style={{ marginTop: "-15px", paddingLeft: "1.5%" }}>
      //       <img
      //         src={require("../../assets/images/effciencys/red-small-dot.png")}
      //         alt=""
      //       />
      //       <span className="button-text">0.5 - 0.89</span>
      //       <img
      //         className="dot-image"
      //         src={require("../../assets/images/effciencys/green-small-dot.png")}
      //         alt=""
      //       />
      //       <span className="button-text">0.9 - 1.5</span>
      //     </div> */}
      //   </div>

        
      // </div>


      <div className="container">

<div class="row">
 
  <div class="col-5 border-on-right ">
  
     <div className="vehicle-effciency-charge">
             <img
               className="vehicle-effciency-img-2"
               src={require("../../assets/images/effciencys/red.png")}
               alt=""
             />
             <h3 className="vehicle-effciency-number-2">
               {this.props.vehoperatingabove1kwh}
             </h3>
             <p className="vehicle-effciency-text">
               NO. OF VEHICLES <br />
               OPERATING UNDER 1 KWH/KM
             </p>
           </div>
  </div>
  <div class="col-5 border-on-right ">

  <div className="vehicle-effciency-wash">
            <img
               className="vehicle-effciency-img-1"
               src={require("../../assets/images/effciencys/red-bus.png")}
               alt=""
             />
           <h3 className="vehicle-effciency-number-1">
               {this.props.vehoperatingunder1kwh}
             </h3>
             <p className="vehicle-effciency-text">
              NO. OF VEHICLES <br />
               OPERATING ABOVE 1 KWH/KM
             </p>
           </div>
  
  </div>
  <div class="col-2">
  <div style={{ marginTop: "15px", paddingLeft: "1.5%" }} className="effciency-rightside">
            <div>
             <img
               src={require("../../assets/images/effciencys/red-small-dot.png")}
               alt=""
             />
             <span className="button-text-1">{">"} 1</span>
             </div>
             <div style={{marginLeft:"-10px"}}>
             <img
               className="dot-image"
               src={require("../../assets/images/effciencys/green-small-dot.png")}
               alt=""
             />
             <span className="button-text-1">{"<"} 1</span>
             </div>
           </div>
  
  </div>
  <div class="col-10 border-on-right"><hr className="vehicle-effciency-hr"/></div>
</div>

      </div>
    );
  }
}

export default DashboardVehicleEffciency;
