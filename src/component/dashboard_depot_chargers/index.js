// import React, { Component } from "react";
// import "../dashboard_depot_chargers/index.scss";
// import { Collapse } from "react-collapse";
// class DashboardDepotChargers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDropdownOpen: false,
//       dropdownToggleIcon: "+",
//     };
//   }

//   onDropdownClicked = () => {
//     this.setState((prevState) => ({
//       isDropdownOpen: !prevState.isDropdownOpen,
//       dropdownToggleIcon: prevState.dropdownToggleIcon === "+" ? "-" : "+",
//     }));
//   };
//   render() {
//     return (
//       <div className="depot">

//         <div className="depot-chargers">
//         <img
//                   style={{marginLeft:"5px",marginTop:"-30px"}}
//                   src={require("../../assets/images/headernew/head.png")}
//                   alt="next"
//                 />
//           <img
//             className="depot-img"
//             src={require("../../assets/images/depot/depot.png")}
//             alt="next"
//           />
//           <div className="depot-chargers-content">
//             <p className="depot-chargers-text"> DEPOT CHARGERS</p>

//             <button
//               className="colapse"
//               style={{
//                 borderRadius: "50%",
//                 height: "11px",
//                 width: "32px",
//                 marginTop: "-17px",
//                 backgroundColor: "#353844",
//                 color: "white",
//                 marginLeft: "10px",
//                 paddingBottom: "26px",
//               }}
//               onClick={this.onDropdownClicked}
//             >
//               {this.state.dropdownToggleIcon}
//             </button>

//             {/* <p className='clicktosee'> CLICK TO SEE THE VIEW </p> */}
//           </div>
//         </div>

//         <Collapse
//           isOpened={this.state.isDropdownOpen}
//           className="depot-charger-status"
//         >
//           <div className="container-fluid">
//             <p className="depot-charger-status-text">Charger Status</p>
//             <div class="row ms-3 mb-3">
//               <div class="col-sm ms-2">
//                 {/* <div className="depot-charger-wash"> */}
//                 <img
//                   className="imgs"
//                   src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
//                   alt=""
//                 />
//                 <h3 className="depot-charger-number-1">
//                   {this.props.availablecharger}
//                 </h3>
//                 <p className="depot-chargerss-text-2">AVAILABLE CHARGERS</p>

//                 <button
//                   type="button"
//                   className="depot-charger-btn"
//                   //onClick={this.availableCharger}
//                 >
//                   LIST VIEW
//                   <img
//                     className="depot-charger-button-png"
//                     src={require("../../assets/images/arrow-red/red.png")}
//                     alt="next"
//                   />
//                 </button>
//                 {/* </div> */}
//               </div>
//               <div class="col-sm ">
//                 {/* <div className="depot-charger-charge"> */}
//                 <img
//                   className="imgs"
//                   src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
//                   alt=""
//                 />
//                 <h3 className="depot-charger-number-2">
//                   {this.props.occupiedcharger}
//                 </h3>
//                 <p className="depot-chargerss-text">OCCUPIED CHARGERS</p>

//                 <button
//                   type="button"
//                   className="depot-charger-btn"
//                   //onClick={this.availableCharger}
//                 >
//                   LIST VIEW
//                   <img
//                     className="depot-charger-button-png"
//                     src={require("../../assets/images/arrow-red/red.png")}
//                     alt="next"
//                   />
//                 </button>
//                 {/* </div> */}
//               </div>
//               <div class="col-sm ">
//                 {/* <div className="depot-charger-breakdown"> */}
//                 <img
//                   className="imgs"
//                   src={require("../../assets/images/DEPOT-3/DEPOT-3.png")}
//                   alt=""
//                 />
//                 <h3 className="depot-charger-number-3">
//                   {this.props.breakdowncharger}
//                 </h3>
//                 <p className="depot-chargerss-text-3">BREAKDOWN CHARGERS</p>

//                 <button
//                   type="button"
//                   className="depot-charger-btn"
//                   //onClick={this.availableCharger}
//                 >
//                   LIST VIEW
//                   <img
//                     className="depot-charger-button-png"
//                     src={require("../../assets/images/arrow-red/red.png")}
//                     alt="next"
//                   />
//                 </button>
//                 {/* </div> */}
//               </div>
//               <div class="col-sm me-2">
//                 {/* <div className="depot-charger-maintain"> */}
//                 <img
//                   className="imgss"
//                   src={require("../../assets/images/DEPOT-2/DEPOT-2.png")}
//                   alt=""
//                 />

//                 <h3 className="depot-charger-number-4">
//                   {this.props.chargerefficiency} %
//                 </h3>
//                 <p className="depot-chargerss-text-4">CHARGER EFFCIENCY</p>

//                 <button
//                   type="button"
//                   className="depot-charger-btn"
//                   //onClick={this.availableCharger}
//                 >
//                   LIST VIEW
//                   <img
//                     className="depot-charger-button-png"
//                     src={require("../../assets/images/arrow-red/red.png")}
//                     alt="next"
//                   />
//                 </button>
//                 {/* </div> */}
//               </div>
//             </div>
//           </div>
//         </Collapse>
//       </div>
//     );
//   }
// }

// export default DashboardDepotChargers;
import React, { Component } from "react";
import "../dashboard_depot_chargers/index.scss";
import { Collapse } from "react-collapse";
class DashboardDepotChargers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      dropdownToggleIcon: "+",
    };
  }

  onDropdownClicked = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "+" ? "-" : "+",
    }));
  };
  render() {
    //console.log("test props", this.props.clickdata);
    return (
      <div className="depot">
        <div className="depot-chargers">
          <img
            style={{ marginLeft: "5px", marginTop: "-30px" }}
            src={require("../../assets/images/headernew/head.png")}
            alt="next"
          />
          <img
            className="depot-img"
            src={require("../../assets/images/depot/depot.png")}
            alt="next"
          />
          <div className="depot-chargers-content">
            <p className="depot-chargers-text"> DEPOT CHARGERS</p>

            <button
              className="colapse"
              style={{
                borderRadius: "50%",
                height: "11px",
                width: "32px",
                marginTop: "-17px",
                backgroundColor: "#353844",
                color: "white",
                marginLeft: "10px",
                paddingBottom: "26px",
              }}
              onClick={this.onDropdownClicked}
            >
              {this.state.dropdownToggleIcon}
            </button>

            {/* <p className='clicktosee'> CLICK TO SEE THE VIEW </p> */}
          </div>
        </div>

        <Collapse
          isOpened={this.state.isDropdownOpen}
          className="depot-charger-status"
        >
          <div className="container-fluid">
            <p className="depot-charger-status-text">Charger Status</p>
            <div class="row ms-3 mb-3">
              <div class="col-sm ms-2">
                {/* <div className="depot-charger-wash"> */}
                <img
                  className="imgs"
                  src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
                  alt=""
                />
                <h3 className="depot-charger-number-1">
                  {this.props.availablecharger}
                </h3>
                <p className="depot-chargerss-text-2">AVL CHARGING POINTS</p>

                <button
                  type="button"
                  className="depot-charger-btn"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="depot-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
                {/* </div> */}
              </div>
              <div class="col-sm ">
                {/* <div className="depot-charger-charge"> */}
                <img
                  className="imgs"
                  src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
                  alt=""
                />
                <h3 className="depot-charger-number-2">
                  {this.props.occupiedcharger}
                </h3>
                <p className="depot-chargerss-text">OCU CHARGING POINTS</p>

                <button
                  type="button"
                  className="depot-charger-btn"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="depot-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
                {/* </div> */}
              </div>
              <div class="col-sm ">
                {/* <div className="depot-charger-breakdown"> */}
                <img
                  className="imgs"
                  src={require("../../assets/images/DEPOT-3/DEPOT-3.png")}
                  alt=""
                />
                <h3 className="depot-charger-number-3">
                  {this.props.breakdowncharger}
                </h3>
                <p className="depot-chargerss-text-3">BKD CHARGING POINTS</p>

                <button
                  type="button"
                  className="depot-charger-btn"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="depot-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
                {/* </div> */}
              </div>
              <div class="col-sm me-2">
                {/* <div className="depot-charger-maintain"> */}
                <img
                  className="imgss"
                  src={require("../../assets/images/DEPOT-2/DEPOT-2.png")}
                  alt=""
                />

                <h3 className="depot-charger-number-4">
                  {this.props.chargerefficiency} %
                </h3>
                <p className="depot-chargerss-text-4">CHARGER EFFCIENCY</p>

                <button
                  type="button"
                  className="depot-charger-btn"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="depot-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default DashboardDepotChargers;
