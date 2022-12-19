// import React, { Component } from "react";
// import "../dashboard_opportunity_chargers/index.scss";
// import { Collapse } from "react-collapse";
// class  DashboardOpportunityChargers extends Component {
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
//       <div className="opportynity">
//         <div className="opportynity-chargers">
//         <img
//               className="oppotunity-png"
//               src={require("../../assets/images/depot/oppor.png")}
//               alt="next"
//             />
//           <div className="opportynity-chargers-content">
//           <p className="opportynity-chargers-text"> OPPORTUNITY CHARGERS</p>

//           <button
//               style={{ borderRadius: "50%",height:"30px",marginTop:"-13px" }}
//               onClick={this.onDropdownClicked}
//             >
//               {this.state.dropdownToggleIcon}
//             </button>

//             {/* <p className='clicktosee'> CLICK TO SEE THE VIEW </p> */}

//           </div>
//         </div>
//         <Collapse
//           isOpened={this.state.isDropdownOpen}
//           className="opportynity-charger-status"
//         >

//             <p className="opportynity-charger-status-text">Charger Status</p>
//             <div className="opportynity-charger-div">
//               <div className="opportynity-charger-wash">
//                 <img className="imagesss"
//                    src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
//                   alt=""
//                 />
//                 <h3 className="opportynity-charger-number-1">04</h3>
//                 <p className="opportynity-chargerss-text">AVAILABLE CHARGERS</p>

//                   <button
//                     type="button"
//                     className="opportynity-charger-btn-1"
//                     //onClick={this.availableCharger}
//                   >
//                     LIST VIEW
//                     <img
//                       className="opportynity-charger-button-png"
//                       src={require("../../assets/images/arrow-red/red.png")}
//                       alt="next"
//                     />
//                   </button>

//               </div>

//               <div className="opportynity-charger-charge">
//                 <img className="imagesss"
//                    src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
//                   alt=""
//                 />
//                 <h3 className="opportynity-charger-number-2">04</h3>
//                 <p className="opportynity-chargerss-text">OCCUPIED CHARGERS</p>

//                   <button
//                     type="button"
//                     className="opportynity-charger-btn-1"
//                     //onClick={this.availableCharger}
//                   >
//                     LIST VIEW
//                     <img
//                       className="opportynity-charger-button-png"
//                       src={require("../../assets/images/arrow-red/red.png")}
//                       alt="next"
//                     />
//                   </button>

//               </div>

//               <div className="opportynity-charger-breakdown">
//                 <img className="imagesss"
//                    src={require("../../assets/images/DEPOT-3/DEPOT-3.png")}
//                   alt=""
//                 />
//                 <h3 className="opportynity-charger-number-3">04</h3>
//                 <p className="opportynity-chargerss-text">BREAKDOWN CHARGERS</p>

//                   <button
//                     type="button"
//                     className="opportynity-charger-btn-1"
//                     //onClick={this.availableCharger}
//                   >
//                     LIST VIEW
//                     <img
//                       className="opportynity-charger-button-png"
//                       src={require("../../assets/images/arrow-red/red.png")}
//                       alt="next"
//                     />
//                   </button>

//               </div>

//               <div className="opportynity-charger-maintain">
//                 <img className=""
//                    src={require("../../assets/images/DEPOT-2/DEPOT-2.png")}
//                   alt=""
//                 />

//                 <h3 className="opportynity-charger-number-4">04</h3>
//                 <p className="opportynity-chargerss-text">CHARGER EFFCIENCY</p>

//                   <button
//                     type="button"
//                     className="opportynity-charger-btn-1"
//                     //onClick={this.availableCharger}
//                   >
//                     LIST VIEW
//                     <img
//                       className="opportynity-charger-button-png"
//                       src={require("../../assets/images/arrow-red/red.png")}
//                       alt="next"
//                     />
//                   </button>

//               </div>

//           </div>
//         </Collapse>
//       </div>
//     );
//   }
// }

// export default DashboardOpportunityChargers;

import React, { Component } from "react";
import "../dashboard_opportunity_chargers/index.scss";
import { Collapse } from "react-collapse";
class DashboardOpportunityChargers extends Component {
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
    return (
      <div className="opportynity">
        <div className="opportynity-chargers">
        <img
                  style={{marginLeft:"5px",marginTop:"-30px"}}
                  src={require("../../assets/images/headernew/head.png")}
                  alt="next"
                />
          <img
            className="oppotunity-png"
            src={require("../../assets/images/depot/oppor.png")}
            alt="next"
          />
          <div className="opportynity-chargers-content">
            <p className="opportynity-chargers-text"> OPPORTUNITY CHARGERS</p>

            <button
              className=""
              style={{
                borderRadius: "50%",
                height: "11px",
                width: "32px",
                marginTop: "-19px",
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
          className="opportynity-charger-status"
        >
          {/* <p className="opportynity-charger-status-text">Charger Status</p>
            <div className="opportynity-charger-div">
              <div className="opportynity-charger-wash">
                <img className="imagesss"
                   src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
                  alt=""
                />
                <h3 className="opportynity-charger-number-1">04</h3>
                <p className="opportynity-chargerss-text">AVAILABLE CHARGERS</p>

               
                  <button
                    type="button"
                    className="opportynity-charger-btn-1"
                    //onClick={this.availableCharger}
                  >
                    LIST VIEW
                    <img
                      className="opportynity-charger-button-png"
                      src={require("../../assets/images/arrow-red/red.png")}
                      alt="next"
                    />
                  </button>
                
              </div>

              <div className="opportynity-charger-charge">
                <img className="imagesss"
                   src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
                  alt=""
                />
                <h3 className="opportynity-charger-number-2">04</h3>
                <p className="opportynity-chargerss-text">OCCUPIED CHARGERS</p>
               
                  <button
                    type="button"
                    className="opportynity-charger-btn-1"
                    //onClick={this.availableCharger}
                  >
                    LIST VIEW
                    <img
                      className="opportynity-charger-button-png"
                      src={require("../../assets/images/arrow-red/red.png")}
                      alt="next"
                    />
                  </button>
              
              </div>

              <div className="opportynity-charger-breakdown">
                <img className="imagesss"
                   src={require("../../assets/images/DEPOT-3/DEPOT-3.png")}
                  alt=""
                />
                <h3 className="opportynity-charger-number-3">04</h3>
                <p className="opportynity-chargerss-text">BREAKDOWN CHARGERS</p>
               
                  <button
                    type="button"
                    className="opportynity-charger-btn-1"
                    //onClick={this.availableCharger}
                  >
                    LIST VIEW
                    <img
                      className="opportynity-charger-button-png"
                      src={require("../../assets/images/arrow-red/red.png")}
                      alt="next"
                    />
                  </button>
                
              </div>

              <div className="opportynity-charger-maintain">
                <img className=""
                   src={require("../../assets/images/DEPOT-2/DEPOT-2.png")}
                  alt=""
                />

                <h3 className="opportynity-charger-number-4">04</h3>
                <p className="opportynity-chargerss-text">CHARGER EFFCIENCY</p>
               
                  <button
                    type="button"
                    className="opportynity-charger-btn-1"
                    //onClick={this.availableCharger}
                  >
                    LIST VIEW
                    <img
                      className="opportynity-charger-button-png"
                      src={require("../../assets/images/arrow-red/red.png")}
                      alt="next"
                    />
                  </button>
              
              </div>

             
             
            
          </div> */}

          <div className="container-fluid">
            <p className="opportynity-charger-status-text">Charger Status</p>
            <div class="row mt-3 mb-3">
              <div class="col-sm ms-3">
                <img
                  className="imagesss"
                  src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
                  alt=""
                />
                <h3 className="opportynity-charger-number-1">
                  {this.props.oppoavailablecharger}
                </h3>
                <p className="opportynity-chargerss-text">AVL CHARGING POINTS</p>

                <button
                  type="button"
                  className="opportynity-charger-btn-1"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="opportynity-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
              </div>
              <div class="col-sm">
                <img
                  className="imagesss"
                  src={require("../../assets/images/DEPOT-1/DEPOT-1.png")}
                  alt=""
                />
                <h3 className="opportynity-charger-number-2">
                  {this.props.oppooccupiedcharger}
                </h3>
                <p className="opportynity-chargerss-text">OCU CHARGING POINTS</p>

                <button
                  type="button"
                  className="opportynity-charger-btn-1"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="opportynity-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
              </div>
              <div class="col-sm">
                <img
                  className="imagesss"
                  src={require("../../assets/images/DEPOT-3/DEPOT-3.png")}
                  alt=""
                />
                <h3 className="opportynity-charger-number-3">
                  {this.props.oppobreakdowncharger}
                </h3>
                <p className="opportynity-chargerss-text">BKD CHARGING POINTS</p>

                <button
                  type="button"
                  className="opportynity-charger-btn-1"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="opportynity-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
              </div>
              <div class="col-sm">
                <img
                  className="imagess-1"
                  src={require("../../assets/images/DEPOT-2/DEPOT-2.png")}
                  alt=""
                />

                <h3 className="opportynity-charger-number-4">
                  {this.props.oppochargerefficiency} %
                </h3>
                <p className="opportynity-chargerss-text">CHARGER EFFCIENCY</p>

                <button
                  type="button"
                  className="opportynity-charger-btn-1"
                  onClick={this.props.clickdata}
                >
                  LIST VIEW
                  <img
                    className="opportynity-charger-button-png"
                    src={require("../../assets/images/arrow-red/red.png")}
                    alt="next"
                  />
                </button>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default DashboardOpportunityChargers;
