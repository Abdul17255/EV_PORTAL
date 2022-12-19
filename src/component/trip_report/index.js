// // import React, { Component } from "react";
// // import ReactTable from "react-table";
// // import "react-table/react-table.css";
// // import Buttons from "../../component/button";
// // import "./index.scss";
// // //import * as User from "shared/app-data/user";
// // import { connect } from "react-redux";
// // import { withRouter } from "react-router";
// // //import ReactExport from "react-data-export";
// // import { matchSorter } from "match-sorter";
// // import ReactLoader from "../react-loader/react-loader.component";
// // import moment from "moment";
// // import DatePicker from "react-datepicker";
// // import { addDays } from "date-fns";
// // import "react-datepicker/dist/react-datepicker.css";
// // // //Actions
// // import tripReportActions from "../../redux/trip_report/actions";
// // //  const ExcelFile = ReactExport.ExcelFile;
// // //  const ExcelColumn = ReactExport.ExcelColumn;
// // //  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

// // const { getTripReportAPI } = tripReportActions;
// // var now = new Date();
// // now.setDate(now.getDate());
// // class TripReport extends Component {
// //   constructor(props) {
// //     super(props);
// //     //Initial data from API
// //     //let loginId = User.getLoginId();
// //     this.state = {
// //       // loginId,
// //       data: [],
// //       pages: null,
// //       loading: true,
// //       message: "",
// //       messageType: 0,
// //       dataSet: [],
// //       selected: null,
// //       start_date: now,
// //       end_date: now,
// //     };
// //   }

// //   reset = () => {
// //     this.setState({
// //       start_date: now,
// //       end_date: now,
// //     });
// //   };

// //   Compare = (name, value) => {
// //     if (name == "start_date") {
// //       //if
// //       this.setState({ start_date: value });
// //     } else if (name == "end_date") {
// //       if (
// //         this.state.start_date != "" &&
// //         this.state.end_date != "" &&
// //         value >= this.state.start_date
// //       ) {
// //         this.setState({ end_date: value });
// //       } else {
// //         if (value < this.state.start_date) {
// //           alert("End Date should be greater than Start Date");
// //         }
// //       }
// //     }
// //   };
// //   componentDidMount() {
// //     //getting all the data
// //     this.getTripReport();
// //   }

// //   getTripReport() {
// //     const { start_date, end_date } = this.state;
// //     this.setState({ loading: true });
// //     const payload = {
// //       api_key: "REPORT_TRIP_DETAILS",
// //       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
// //       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
// //     };
// //     this.props.getTripReportAPI(payload);
// //   }

// //   componentDidUpdate(prevProps) {
// //     if (prevProps !== this.props) {
// //       if (
// //         this.props.tripReportApi?.tripReportApi?.result?.data?.data?.length > 0
// //       ) {
// //         this.setState({
// //           dataSet: this.props.tripReportApi.tripReportApi.result.data.data,
// //         });
// //       } else {
// //         this.setState({ dataSet: [] });
// //       }
// //     }
// //   }

// //   onSubmit = (e) => {
// //     this.getTripReport();
// //     // const {
// //     //   start_date,
// //     //   end_date,
// //     // } = this.state;
// //     // this.setState({ loading: true });
// //     // const payload = {
// //     //   api_key: "REPORT_TRIP_DETAILS",
// //     //   start_date:moment(start_date).format("YYYY-MM-DD 00:00:00"),
// //     //   end_date:moment(end_date).format("YYYY-MM-DD 23:59:59"),
// //     // };
// //     // this.props.getTripReportAPI(payload);
// //   };

// //   // getexceldata() {
// //   //   let userId = User.getUserId();
// //   //   const tripParams = {
// //   //     body: {
// //   //       loginId: "aluser",
// //   //       userId,
// //   //       from_date: this.getFromDate(82),
// //   //       to_date: this.getCurrentDate(10),
// //   //     },
// //   //   };
// //   //   this.props.tripReportAPI(tripParams);
// //   // }
// //   // getSummary = () => {
// //   //   document.getElementById("summaryExcelDownloadBtn").click();
// //   // };

// //   render() {
// //     // const { data } = this.state;
// //     // console.log("dropdown props", this.props);

// //     return (
// //       <div>
// //         {this.props.tripReportApi?.tripReportApi?.loading ? (
// //           <div className="loader-overlay">
// //             <div className="loader-container">
// //               <ReactLoader />
// //             </div>
// //           </div>
// //         ) : null}

// //         <div>
// //           <h3 className="tripsummary">Trip Details</h3>
// //         </div>
// //         <div className="first-div">
// //           <div className="labels">
// //             <label className="labels_style-1">Start Date:</label>
// //             <DatePicker
// //               name="start_date"
// //               selected={this.state.start_date}
// //               maxDate={moment().toDate()}
// //               // minDate={addDays(new Date(), -90)}
// //               value={this.state.start_date}
// //               // onChange={(value) => {
// //               //   this.setState({ start_date: value }, () => this.Compare());
// //               // }}
// //               onChange={(value) => this.Compare("start_date", value)}
// //               dateFormat="yyyy-MM-dd"
// //             />
// //           </div>
// //           <div className="labels">
// //             <label className="labels_style">End Date:</label>
// //             <DatePicker
// //               wrapperClassName="datepicker"
// //               name="end_date"
// //               selected={this.state.end_date}
// //               maxDate={moment().toDate()}
// //               // minDate={addDays(new Date(), -90)}
// //               value={this.state.end_date}
// //               // onChange={(value) => {
// //               //   this.setState({ end_date: value }, () => this.Compare());
// //               // }}
// //               onChange={(value) => this.Compare("end_date", value)}
// //               dateFormat="yyyy-MM-dd"
// //             />
// //           </div>

// //           <div>
// //             <button className="button-submit-kpi" onClick={this.onSubmit}>
// //               <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
// //               Submit
// //             </button>
// //           </div>
// //           <div>
// //             <button className="button-submit-kpi" onClick={this.reset}>
// //               <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
// //               Reset
// //             </button>
// //           </div>

// //           {/* <div>
// //             <button className="button-submit-kpi">
// //               <i className="fa fa-download" style={{ paddingRight: "5px" }}></i>
// //               Download
// //             </button>
// //           </div> */}
// //         </div>
// //         {/*<div>
// //              <ExcelFile
// //               filename={"Trips"}
// //               element={
// //                 <button
// //                   id={"summaryExcelDownloadBtn"}
// //                   //style={{ display: "none" }}
// //                   className="downloadImgblue"
// //                 >
// //                   <i class="fa fa-download"></i>
// //                 </button>
// //               } */}

// //         {/*  <ExcelSheet data={this.state.dataSet} name="Trips">
// //                 <ExcelColumn label="Trip ID" value="trip_id" />
// //                 <ExcelColumn label="Driver Name" value="driverName" />
// //                 <ExcelColumn label="Trip Date(yyyy-mm-dd)" value="trip_date" />
// //                 <ExcelColumn label="Trip Status" value="trip_status" />
// //                 <ExcelColumn label="Registration Number" value="regn_number" />
// //                 <ExcelColumn label="Schedule ID" value="schedule_id" />
// //                 <ExcelColumn
// //                   label="Planned Duration(hh.mm)"
// //                   value="planned_duration"
// //                 />
// //                 <ExcelColumn
// //                   label="Planned Distance(km)"
// //                   value="planned_distance"
// //                 />
// //                 <ExcelColumn
// //                   label="Actual Duration(hh.mm)"
// //                   value="actual_duration"
// //                 />
// //                 <ExcelColumn
// //                   label="Actual Distance(km)"
// //                   value="actual_distance"
// //                 />

// //                 <ExcelColumn label="Start Location" value="start_location" />
// //                 <ExcelColumn label="End Location" value="end_location" />
// //                 <ExcelColumn label="SOC(%)" value="soc" />
// //                 <ExcelColumn
// //                   label="Planned Start Time(hh:mm:ss)"
// //                   value="planned_start_time"
// //                 />
// //                 <ExcelColumn
// //                   label="Planned End Time(hh:mm:ss)"
// //                   value="planned_end_time"
// //                 />
// //                 <ExcelColumn
// //                   label="Actual Start Timestamp(yyyy-mm-dd hh:mm:ss)"
// //                   value="actual_start_time"
// //                 />
// //                 <ExcelColumn
// //                   label="Actual End Timestamp(yyyy-mm-dd hh:mm:ss)"
// //                   value="actual_end_time"
// //                 />
// //                 <ExcelColumn label="With Regen(kWh)" value="with_regen" />
// //                 <ExcelColumn label="Without Regen(kWh)" value="without_regen" />
// //                 <ExcelColumn
// //                   label="Distance Travelled(km)"
// //                   value="distance_travelled"
// //                 />
// //               </ExcelSheet>
// //             </ExcelFile>
// //             </div>*/}
// //         <div className="trip-report-table">
// //           {/* <h2 className="msg">
// //             Note: Future trips will be reflected in Excel Sheet
// //           </h2> */}
// //           <ReactTable
// //             NoDataComponent={() => null}
// //             // previousText={myCustomPreviousText}
// //             // nextText={myCustomNextText}
// //             pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
// //             style={{
// //               height: "520px",
// //               // margin_right: "2%",
// //               // width: "1560px",
// //             }}
// //             data={this.state.dataSet}
// //             showPagination={true}
// //             // // defaultPageSize={initialSize}
// //             // //pageSize={updatedSize}
// //             // loading={this.state.loading}
// //             // filterable
// //             // defaultFilterMethod={(filter, row) =>
// //             //   String(row[filter.id]) === filter.value
// //             // }
// //             columns={[
// //               {
// //                 Header: "Trip ID",
// //                 id: "trip_id",
// //                 accessor: (d) => d.trip_id,
// //                 width: 100,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["trip_id"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Route ID",
// //                 id: "route_id",
// //                 accessor: (d) => d.route_id,
// //                 width: 120,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["route_id"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Route Name",
// //                 id: "route_name",
// //                 accessor: (d) => d.route_name,
// //                 width: 120,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["route_name"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Driver ID",
// //                 id: "driver_id",
// //                 accessor: (d) => d.driver_id,
// //                 width: 100,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, {
// //                     keys: ["driver_id"],
// //                   }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Driver Name ",
// //                 id: "driver_name",
// //                 accessor: (d) => d.driver_name,
// //                 width: 150,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["driver_name"] }),
// //                 filterAll: true,
// //               },

// //               {
// //                 Header: "Registration Number",
// //                 id: "reg_no",
// //                 accessor: (d) => d.reg_no,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["reg_no"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Vin No",
// //                 id: "vin_no",
// //                 width: 150,
// //                 accessor: (d) => d.vin_no,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["vin_no"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Status",
// //                 id: "status",
// //                 accessor: (d) => d.status,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["status"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Trip Date",
// //                 id: "trip_date",
// //                 width: 120,
// //                 accessor: (d) => d.trip_date,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["trip_date"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Start ODO",
// //                 id: "start_odo",
// //                 width: 120,
// //                 accessor: (d) => d.start_odo,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["start_odo"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "End ODO",
// //                 id: "end_odo",
// //                 width: 120,
// //                 accessor: (d) => d.end_odo,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["end_odo"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Start SOC",
// //                 id: "start_soc",
// //                 width: 120,
// //                 accessor: (d) => d.start_soc,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["start_soc"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "End SOC",
// //                 id: "end_soc",
// //                 width: 120,
// //                 accessor: (d) => d.end_soc,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["end_soc"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Distance Travelled",
// //                 id: "distance_travelled",
// //                 width: 150,
// //                 accessor: (d) => d.charging_time,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["charging_time"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Start Time",
// //                 id: "start_time",
// //                 width: 150,
// //                 accessor: (d) => d.start_time,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["start_time"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "End Time",
// //                 id: "end_time",
// //                 width: 150,
// //                 accessor: (d) => d.start_time,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["end_time"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "kWh consumed",
// //                 id: "kwh_consumed",
// //                 width: 150,
// //                 accessor: (d) => d.kwh_consumed,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, {
// //                     keys: ["kwh_consumed"],
// //                   }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Efficiency",
// //                 id: "efficiency",
// //                 width: 150,
// //                 accessor: (d) => d.efficiency,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, {
// //                     keys: ["efficiency"],
// //                   }),
// //                 filterAll: true,
// //               },

// //               {
// //                 Header: "Charging Time Taken",
// //                 id: "charging_time",
// //                 width: 120,
// //                 accessor: (d) => d.charging_time,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, { keys: ["charging_time"] }),
// //                 filterAll: true,
// //               },
// //               {
// //                 Header: "Planned Distance",
// //                 id: "planned_distance",
// //                 width: 120,
// //                 accessor: (d) => d.planned_distance,
// //                 filterMethod: (filter, rows) =>
// //                   matchSorter(rows, filter.value, {
// //                     keys: ["planned_distance"],
// //                   }),
// //                 filterAll: true,
// //               },
// //             ]}
// //             defaultPageSize={50}
// //             className="-striped -highlight"
// //           />
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // const mapStateToProps = (state) => {
// //   return {
// //     ...state,
// //   };
// // };

// // export default connect(mapStateToProps, {
// //   getTripReportAPI,
// // })(withRouter(TripReport));

// // //export default TripReport;

// import React, { Component } from "react";
// import ReactTable from "react-table";
// import "react-table/react-table.css";
// //import Buttons from "../../component/button";
// import "./index.scss";
// import ReactTooltip from "react-tooltip";
// //import * as User from "shared/app-data/user";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// //import ReactExport from "react-data-export";
// import { matchSorter } from "match-sorter";
// import ReactLoader from "../react-loader/react-loader.component";
// import moment from "moment";
// import DatePicker from "react-datepicker";
// import { addDays } from "date-fns";
// import "react-datepicker/dist/react-datepicker.css";

// import Workbook from "react-excel-workbook";
// // //Actions
// import tripReportActions from "../../redux/trip_report/actions";

// const { getTripReportAPI } = tripReportActions;
// var now = new Date();
// now.setDate(now.getDate());
// class TripReport extends Component {
//   constructor(props) {
//     super(props);
//     //Initial data from API
//     //let loginId = User.getLoginId();
//     this.state = {
//       // loginId,
//       data: [],
//       //data1,
//       pages: null,
//       loading: true,
//       message: "",
//       messageType: 0,
//       dataSet: [],
//       selected: null,
//       start_date: now,
//       end_date: now,
//       filteredData: [],
//       searchInput: "",
//     };
//   }

//   reset = () => {
//     this.setState({
//       start_date: now,
//       end_date: now,
//     });
//   };

//   Compare = (name, value) => {
//     if (name == "start_date") {
//       //if
//       this.setState({ start_date: value });
//     } else if (name == "end_date") {
//       if (
//         this.state.start_date != "" &&
//         this.state.end_date != "" &&
//         value >= this.state.start_date
//       ) {
//         this.setState({ end_date: value });
//       } else {
//         if (value < this.state.start_date) {
//           alert("End Date should be greater than Start Date");
//         }
//       }
//     }
//   };
//   componentDidMount() {
//     //getting all the data
//     this.getTripReport();
//   }

//   getTripReport() {
//     const { start_date, end_date } = this.state;
//     this.setState({ loading: true });
//     const payload = {
//       api_key: "REPORT_TRIP_DETAILS",
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//     };
//     this.props.getTripReportAPI(payload);
//   }

//   componentDidUpdate(prevProps) {
//     // console.log("tripdetails",this.props)
//     if (prevProps !== this.props) {
//       if (
//         this.props.tripReportApi?.tripReportApi?.result?.data?.data?.length > 0
//       ) {
//         this.setState({
//           dataSet: this.props.tripReportApi.tripReportApi.result.data.data,
//         });
//         this.setState({
//           filteredData: this.props.tripReportApi.tripReportApi.result.data.data,
//         });
//       } else {
//         this.setState({ dataSet: [] });
//       }
//     }
//   }

//   onSubmit = (e) => {
//     this.getTripReport();
//   };

//   handleChange = (event) => {
//     const search = event.target.value.toLowerCase();
//     this.setState({
//       searchInput: search,
//       filteredData: this.state.dataSet.filter(
//         (item) =>
//           (item.driver_name &&
//             item.driver_name.toLowerCase().includes(search)) ||
//           (item.reg_no && item.reg_no.toLowerCase().includes(search)) ||
//           (item.trip_date && item.trip_date.toLowerCase().includes(search))
//       ),
//     });
//   };

//   render() {
//     let { searchInput } = this.state;
//     // const { data } = this.state;
//     // console.log("dropdown props", this.props);

//     return (
//       <div>
//         {this.props.tripReportApi?.tripReportApi?.loading ? (
//           <div className="loader-overlay">
//             <div className="loader-container">
//               <ReactLoader />
//             </div>
//           </div>
//         ) : null}

//         <div>
//           <h3 className="trip-details">Trip Details</h3>
//         </div>

//         <div className="trip_details_div">
//           <div className="trip_details_div_labels">
//             <label className="trip_details_div_labels_style-1">
//               Start Date:
//             </label>
//             <DatePicker
//               name="start_date"
//               selected={this.state.start_date}
//               maxDate={moment().toDate()}
//               // minDate={addDays(new Date(), -90)}
//               value={this.state.start_date}
//               // onChange={(value) => {
//               //   this.setState({ start_date: value }, () => this.Compare());
//               // }}
//               onChange={(value) => this.Compare("start_date", value)}
//               dateFormat="yyyy-MM-dd"
//             />

//             <label className="trip_details_div_labels_style">End Date:</label>
//             <DatePicker
//               wrapperClassName="datepicker"
//               name="end_date"
//               selected={this.state.end_date}
//               maxDate={moment().toDate()}
//               // minDate={addDays(new Date(), -90)}
//               value={this.state.end_date}
//               // onChange={(value) => {
//               //   this.setState({ end_date: value }, () => this.Compare());
//               // }}
//               onChange={(value) => this.Compare("end_date", value)}
//               dateFormat="yyyy-MM-dd"
//             />
//           </div>

//           <div style={{ marginRight: "20px", marginLeft: "-70px" }}>
//             <button
//               className="trip_details_div_button-submit-kpi"
//               onClick={this.onSubmit}
//             >
//               <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
//               Submit
//             </button>
//           </div>
//           <div style={{ marginRight: "20px" }}>
//             <button
//               className="trip_details_div_button-submit-kpi"
//               onClick={this.reset}
//             >
//               <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
//               Reset
//             </button>
//           </div>

//           <div>
//             <Workbook
//               filename="Trip-Report.xlsx"
//               element={
//                 <button className="trip_details_div_button-submit-kpi">
//                   <i
//                     className="fa fa-download"
//                     style={{ paddingRight: "5px" }}
//                   ></i>
//                   Download
//                 </button>
//               }
//             >
//               <Workbook.Sheet data={this.state.dataSet} name="Trip-Report">
//                 <Workbook.Column label="Trip ID" value="trip_id" />
//                 <Workbook.Column label="Route ID" value="route_id" />
//                 <Workbook.Column label="Route Name" value="route_name" />
//                 <Workbook.Column label="Driver ID" value="driver_id" />

//                 <Workbook.Column label="Trip ID" value="schedule" />

//                 <Workbook.Column label="Driver Name" value="driver_name" />
//                 <Workbook.Column label="Registration Number" value="reg_no" />
//                 <Workbook.Column label="Vin No" value="vin_no" />

//                 <Workbook.Column label="Status" value="status" />
//                 <Workbook.Column label="Start ODO" value="start_odo" />
//                 <Workbook.Column label="End ODO" value="end_odo" />

//                 <Workbook.Column label="Start SOC" value="start_soc" />
//                 <Workbook.Column label="End SOC" value="end_soc" />
//                 <Workbook.Column
//                   label="Distance Travelled"
//                   value="distance_travelled"
//                 />

//                 <Workbook.Column label="Start Time" value="start_time" />
//                 <Workbook.Column label="End Time" value="end_time" />
//                 <Workbook.Column label="kWh consumed" value="totalSoc" />

//                 <Workbook.Column label="Efficiency" value="efficiency" />
//                 <Workbook.Column
//                   label="Charging Time Taken"
//                   value="charging_time"
//                 />
//                 <Workbook.Column
//                   label="Planned Distance"
//                   value="planned_distance"
//                 />
//               </Workbook.Sheet>
//             </Workbook>
//           </div>

//           <div className="search-trip-report">
//           <form>
//             <input
//               style={{ width: "310px",marginTop:"10px" }}
//               className=""
//               type="text"
//               id="filter"
//               placeholder="Search Table (Driver Name / Reg No / Trip Date)"
//               value={searchInput || ""}
//               onChange={this.handleChange}
//             />
//           </form>
//         </div>
//         </div>

      
//         <div className="trip-report-table">
//           {/* <h2 className="msg">
//             Note: Future trips will be reflected in Excel Sheet
//           </h2> */}
//             <ReactTooltip place="left" type="success" effect="solid" />
//           <ReactTable
//             NoDataComponent={() => null}
//             // previousText={myCustomPreviousText}
//             // nextText={myCustomNextText}
//             pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
//             style={{
//               height: "465px",
//               marginTop: "0%",
//               // margin_right: "2%",
//               // width: "1560px",
//             }}
//             data={this.state.filteredData}
//             showPagination={true}
//             // // defaultPageSize={initialSize}
//             // //pageSize={updatedSize}
//             // loading={this.state.loading}
//             // filterable
//             // defaultFilterMethod={(filter, row) =>
//             //   String(row[filter.id]) === filter.value
//             // }
//             columns={[
//               {
//                 Header: "Trip ID",
//                 id: "trip_id",
//                 accessor: (d) => d.trip_id,
//                 width: 100,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["trip_id"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Route ID",
//                 id: "route_id",
//                 accessor: (d) => d.route_id,
//                 width: 120,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["route_id"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Route Name",
//                 id: "route_name",
//                 accessor: (d) => d.route_name,
//                 width: 120,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["route_name"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Driver ID",
//                 id: "driver_id",
//                 accessor: (d) => d.driver_id,
//                 width: 100,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["driver_id"],
//                   }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Driver Name ",
//                 id: "driver_name",
//                 accessor: (d) => d.driver_name,
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 width: 150,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["driver_name"] }),
//                 filterAll: true,
//                 resizable: false,
//               },

//               {
//                 Header: "Reg No",
//                 id: "reg_no",
//                 accessor: (d) => d.reg_no,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["reg_no"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Vin No",
//                 id: "vin_no",
//                 width: 150,
//                 accessor: (d) => d.vin_no,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["vin_no"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Status",
//                 id: "status",
//                 accessor: (d) => d.status,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["status"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Trip Date",
//                 id: "trip_date",
//                 width: 120,
//                 accessor: (d) => d.trip_date,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["trip_date"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Start ODO",
//                 id: "start_odo",
//                 width: 120,
//                 accessor: (d) => d.start_odo,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["start_odo"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "End ODO",
//                 id: "end_odo",
//                 width: 120,
//                 accessor: (d) => d.end_odo,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["end_odo"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Start SOC",
//                 id: "start_soc",
//                 width: 120,
//                 accessor: (d) => d.start_soc,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["start_soc"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "End SOC",
//                 id: "end_soc",
//                 width: 120,
//                 accessor: (d) => d.end_soc,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["end_soc"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Distance Travelled",
//                 id: "distance_travelled",
//                 width: 150,
//                 accessor: (d) => d.distance_travelled,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["distance_travelled"],
//                   }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Start Time",
//                 id: "start_time",
//                 width: 150,
//                 accessor: (d) => d.start_time,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["start_time"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "End Time",
//                 id: "end_time",
//                 width: 150,
//                 accessor: (d) => d.end_time,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["end_time"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "kWh consumed",
//                 id: "totalSoc",
//                 width: 150,
//                 accessor: (d) => d.totalSoc,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["totalSoc"],
//                   }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Efficiency",
//                 id: "efficiency",
//                 width: 150,
//                 accessor: (d) => d.efficiency,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["efficiency"],
//                   }),
//                 filterAll: true,
//                 resizable: false,
//               },

//               {
//                 Header: "Charging Time Taken",
//                 id: "totalTime",
//                 width: 150,
//                 accessor: (d) => d.totalTime,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["totalTime"] }),
//                 filterAll: true,
//                 resizable: false,
//               },
//               {
//                 Header: "Planned Distance",
//                 id: "planned_distance",
//                 width: 120,
//                 accessor: (d) => d.planned_distance,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["planned_distance"],
//                   }),
//                 filterAll: true,
//                 resizable: false,
//               },
//             ]}
//             defaultPageSize={50}
//             className="-striped -highlight"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//   };
// };

// export default connect(mapStateToProps, {
//   getTripReportAPI,
// })(withRouter(TripReport));

// //export default TripReport;
