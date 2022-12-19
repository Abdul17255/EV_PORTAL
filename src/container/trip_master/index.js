// // Library
// import React, { Component } from "react";
// import "./index.scss";
// //import { connect } from "react-redux";
// //import { withRouter } from "react-router";

// // containers
// //import Subheader from "../sub_header";

// //components
// //import TripCreation from "../../component/trip_creation";
// import TripUpdate from "../../component/trip_updation";
// //import SubMenuHeader from "../sub_menu_header/index"
// //import MenuHeader from "../menu_header/index"
// //Actions
// //import vehicleTripActions from "../../redux/trip/actions";
// import ReactLoader from "../../component/react-loader/react-loader.component";
// //import * as User from "../../shared/app-data/user";

// // const {
// //   resetPostInsertTripAction,
// //   POST_INSERT_TRIP_SUCCESS,
// //   POST_INSERT_TRIP_ERROR,
// // } = vehicleTripActions;

// class TripMaster extends Component {
//   constructor(props) {
//     super(props);
//     this.messageTimeOut = null;
//     //let loginId = User.getLoginId();
//     this.state = {
//       // loginId,
//       // selTab: 0,
//       // message: "",
//       // messageType: 0,
//       // trip_id: "",
//       tabs: [
//         // {
//         //   tabIndex: 0,
//         //   tabName: "CREATE TRIP",
//         // },
//         // {
//         //   tabIndex: 1,
//         //   tabName: "UPDATE TRIP",
//         // },
//       ],
//     };

//     // this.tabClick = this.tabClick.bind(this);
//   }

//   // componentDidMount() {
//   //   let tripId = sessionStorage.getItem("tripFromFleet");
//   //   if (tripId && tripId != "") {
//   //     this.setState({ selTab: 1 });
//   //   }
//   // }

//   // componentWillUnmount() {
//   //   sessionStorage.setItem("tripFromFleet", "");
//   // }

//   // componentWillReceiveProps(nextProps) {
//   //   if (nextProps.trip !== this.props.trip) {
//   //     if (nextProps.trip.insertTrip && nextProps.trip.insertTrip.actionType) {
//   //       if (nextProps.trip.insertTrip.actionType == POST_INSERT_TRIP_SUCCESS) {
//   //         this.setState({
//   //           message: "Success! Trip has been created successfully",
//   //           messageType: 1,
//   //         });
//   //         this.messageTimeOut = setTimeout(
//   //           () => this.onClickCloseMessage(),
//   //           3 * 1000
//   //         );
//   //       } else if (
//   //         nextProps.trip.insertTrip.actionType == POST_INSERT_TRIP_ERROR
//   //       ) {
//   //         this.setState({
//   //           message: "Insertion failed",
//   //           messageType: -1,
//   //         });
//   //         this.messageTimeOut = setTimeout(
//   //           () => this.onClickCloseMessage(),
//   //           3 * 1000
//   //         );
//   //       }
//   //       this.props.resetPostInsertTripAction();
//   //     }
//   //   }
//   // }

//   // tabClick = (evt, tabItem) => {
//   //   const { selectedTab } = this.props;
//   //   this.onClickCloseMessage();

//   //   if (evt.target.parentElement) {
//   //     let tabs = evt.target.parentElement.getElementsByClassName(
//   //       "trip-creation__layout__col-1__block__wrapper__header__left__tab"
//   //     );
//   //     Array.prototype.forEach.call(tabs, function (tab) {
//   //       tab.classList.remove("active");
//   //     });
//   //   }
//   //   evt.currentTarget.classList.add("active");

//   //   this.setState({ selTab: tabItem.tabIndex });
//   //   selectedTab && selectedTab(evt, tabItem);
//   // };

//   // onClickCloseMessage() {
//   //   this.messageTimeOut = null;
//   //   this.setState({
//   //     message: "",
//   //     messageType: 0,
//   //   });
//   // }

//   getLoader = () => (
//     <div className="loader-overlay">
//       <div className="loader-container">{/* <ReactLoader /> */}</div>
//     </div>
//   );

//   render() {
//     const { tabs, selTab } = this.state;

//     let tabDom = [];
//     if (tabs && tabs.length > 0) {
//       tabs.map(function (tabItem, index) {
//         let className =
//           selTab === tabItem.tabIndex
//             ? "active trip-creation__layout__col-1__block__wrapper__header__left__tab ripple-effect"
//             : "trip-creation__layout__col-1__block__wrapper__header__left__tab ripple-effect";
//         tabDom.push(
//           <li
//             className={className}
//             key={tabItem.tabIndex}
//             onClick={(e) => this.tabClick(e, tabItem)}
//           >
//             <a>{tabItem.tabName}</a>
//             <span className="trip-creation__layout__col-1__block__wrapper__header__left__tab-strip"></span>
//           </li>
//         );
//       }, this);
//     }

//     // let title;
//     // if (selTab === 0) {
//     //   title = "CREATE TRIP";
//     // } else {
//     //   title = "UPDATE TRIP";
//     // }

//     return (
//       <div className="trip-creation">
//         <div className="trip-creation__layout">
//           <div className="trip-creation__layout__col-1">
//             <div className="trip-creation__layout__col-1__block">
//               <div className="trip-creation__layout__col-1__block__wrapper">
//                 <div className="trip-creation__layout__col-1__block__wrapper__header">
//                   <div className="trip-creation__layout__col-1__block__wrapper__header__left">
//                     {tabDom}
//                     {this.state.message && (
//                       <div
//                         className={`alert ${
//                           this.state.messageType == 1
//                             ? "success"
//                             : this.state.messageType == -1
//                             ? "error"
//                             : ""
//                         }`}
//                       >
//                         <span
//                           className="closebtn"
//                           onClick={() => this.onClickCloseMessage()}
//                         >
//                           &times;
//                         </span>
//                         <strong>{this.state.message}</strong>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 {/* <hr className="trip-creation__layout__col-1__block__wrapper__horizontal-line" /> */}
//                 <div className="trip-creation__layout__col-1__block__wrapper__content">
//                   <TripUpdate />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // const mapStateToProps = (state) => {
// //   return {
// //     ...state,
// //     trip: state.trip,
// //     uploadTrip: state.trip.uploadTrip,
// //     insertTrip: state.trip.insertTrip,
// //     editTrip: state.trip.editTrip,
// //     deleteTrip: state.trip.deleteTrip,
// //     tripReport: state.trip.tripReport,
// //   };
// // };

// // export default connect(mapStateToProps, {
// //   //resetPostInsertTripAction,
// // })(withRouter(Trip));

// export default TripMaster;
