// import React, { Component } from "react";
// import ReactTable from "react-table";
// import "react-table/react-table.css";
// import Buttons from "../button";
// import "./index.scss";
// //import * as User from "shared/app-data/user";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// //import ReactExport from "react-data-export";
// import { matchSorter } from "match-sorter";
// import moment from "moment";
// import DatePicker from "react-datepicker";
// import { addDays } from "date-fns";
// import "react-datepicker/dist/react-datepicker";
// import ReactLoader from "../react-loader/react-loader.component";
// import checklistReportActions from "../../redux/checklist_report/actions";
// //  const ExcelFile = ReactExport.ExcelFile;
// //  const ExcelColumn = ReactExport.ExcelColumn;
// //  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

// const { getChecklistReportAPI } = checklistReportActions;
// var now = new Date();
// now.setDate(now.getDate());
// class CheckListReport extends Component {
//   constructor(props) {
//     super(props);
//     //Initial data from API
//     //let loginId = User.getLoginId();
//     this.state = {
//       // loginId,
//       data: [],
//       pages: null,
//       loading: true,
//       message: "",
//       messageType: 0,
//       dataSet: [],
//       selected: null,
//       start_date: now,
//       end_date: now,
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
//     this.getChecklistReport();
//   }

//   getChecklistReport() {
//     const { start_date, end_date } = this.state;
//     this.setState({ loading: true });
//     const payload = {
//       api_key: "REPORT_CHECKLIST_DETAILS",
//       start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
//       end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
//     };
//     this.props.getChecklistReportAPI(payload);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps !== this.props) {
//       if (
//         this.props.checklistReportApi?.checklistReportApi?.result?.data?.data
//           ?.length > 0
//       ) {
//         this.setState({
//           dataSet:
//             this.props.checklistReportApi.checklistReportApi.result.data.data,
//         });
//       } else {
//         this.setState({ dataSet: [] });
//       }
//     }
//   }

//   onSubmit = (e) => {
//     this.getChecklistReport();
//   };

//   // getexceldata() {
//   //   let userId = User.getUserId();
//   //   const tripParams = {
//   //     body: {
//   //       loginId: "aluser",
//   //       userId,
//   //       from_date: this.getFromDate(82),
//   //       to_date: this.getCurrentDate(10),
//   //     },
//   //   };
//   //   this.props.tripReportAPI(tripParams);
//   // }
//   // getSummary = () => {
//   //   document.getElementById("summaryExcelDownloadBtn").click();
//   // };

//   render() {
//     return (
//       <div>
//         {this.props.checklistReportApi?.checklistReportApi?.loading ? (
//           <div className="loader-overlay">
//             <div className="loader-container">
//               <ReactLoader />
//             </div>
//           </div>
//         ) : null}

//         <div>
//           <h3 className="checklistsummary">Driver Feedback</h3>
//         </div>
//         <div className="first-div">
//           <div className="labels">
//             <label className="labels_style-1">Start Date:</label>
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
//           </div>
//           <div className="labels">
//             <label className="labels_style">End Date:</label>
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
//           <div>
//             <button className="button-submit-kpi" onClick={this.onSubmit}>
//               <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
//               Submit
//             </button>
//           </div>
//           <div>
//             <button className="button-submit-kpi" onClick={this.reset}>
//               <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
//               Reset
//             </button>
//           </div>
//         </div>
//         {/* <ExcelFile
//               filename={"Trips"}
//               element={
//                 <button
//                   id={"summaryExcelDownloadBtn"}
//                   //style={{ display: "none" }}
//                   className="downloadImgblue"
//                 >
//                   <i class="fa fa-download"></i>
//                 </button>
//               } */}

//         {/*  <ExcelSheet data={this.state.dataSet} name="Trips">
//                 <ExcelColumn label="Trip ID" value="trip_id" />
//                 <ExcelColumn label="Driver Name" value="driverName" />
//                 <ExcelColumn label="Trip Date(yyyy-mm-dd)" value="trip_date" />
//                 <ExcelColumn label="Trip Status" value="trip_status" />
//                 <ExcelColumn label="Registration Number" value="regn_number" />
//                 <ExcelColumn label="Schedule ID" value="schedule_id" />
//                 <ExcelColumn
//                   label="Planned Duration(hh.mm)"
//                   value="planned_duration"
//                 />
//                 <ExcelColumn
//                   label="Planned Distance(km)"
//                   value="planned_distance"
//                 />
//                 <ExcelColumn
//                   label="Actual Duration(hh.mm)"
//                   value="actual_duration"
//                 />
//                 <ExcelColumn
//                   label="Actual Distance(km)"
//                   value="actual_distance"
//                 />

//                 <ExcelColumn label="Start Location" value="start_location" />
//                 <ExcelColumn label="End Location" value="end_location" />
//                 <ExcelColumn label="SOC(%)" value="soc" />
//                 <ExcelColumn
//                   label="Planned Start Time(hh:mm:ss)"
//                   value="planned_start_time"
//                 />
//                 <ExcelColumn
//                   label="Planned End Time(hh:mm:ss)"
//                   value="planned_end_time"
//                 />
//                 <ExcelColumn
//                   label="Actual Start Timestamp(yyyy-mm-dd hh:mm:ss)"
//                   value="actual_start_time"
//                 />
//                 <ExcelColumn
//                   label="Actual End Timestamp(yyyy-mm-dd hh:mm:ss)"
//                   value="actual_end_time"
//                 />
//                 <ExcelColumn label="With Regen(kWh)" value="with_regen" />
//                 <ExcelColumn label="Without Regen(kWh)" value="without_regen" />
//                 <ExcelColumn
//                   label="Distance Travelled(km)"
//                   value="distance_travelled"
//                 />
//               </ExcelSheet>
//             </ExcelFile> */}

//         <div className="upload-container icon_pos">
//           {/* <h2 className="msg">
//             Note: Future trips will be reflected in Excel Sheet
//           </h2> */}
//           <ReactTable
//             NoDataComponent={() => null}
//             // previousText={myCustomPreviousText}
//             // nextText={myCustomNextText}
//             pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
//             style={{
//               height: "520px",
//               // width: "1300px",
//               //marginLeft: "120px",
//             }}
//             data={this.state.dataSet}
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
//                 Header: "Driver Name",
//                 id: "name",
//                 accessor: (d) => d.name,
//                 width: 220,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["name"] }),
//                 filterAll: true,
//               },
//               {
//                 Header: "Reg No.",
//                 id: "reg_no",
//                 accessor: (d) => d.reg_no,
//                 width: 220,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["reg_no"] }),
//                 filterAll: true,
//               },
//               {
//                 Header: "Checklist Name",
//                 id: "checklist_name",
//                 accessor: (d) => d.checklist_name,
//                 width: 300,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["checklist_name"] }),
//                 filterAll: true,
//               },
//               {
//                 Header: "Checklist Type",
//                 id: "checklist_type",
//                 accessor: (d) => d.checklist_type,
//                 width: 140,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, { keys: ["checklist_type"] }),
//                 filterAll: true,
//               },
//               {
//                 Header: "Checklist Description",
//                 id: "checklist_description",
//                 accessor: (d) => d.checklist_description,
//                 width: 400,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["checklist_description"],
//                   }),
//                 filterAll: true,
//               },
//               {
//                 Header: "Reported Time",
//                 id: "created_timestamp",
//                 accessor: (d) => d.created_timestamp,
//                 width: 270,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["created_timestamp"],
//                   }),
//                 filterAll: true,
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
//   getChecklistReportAPI,
// })(withRouter(CheckListReport));

// //export default CheckListReport;
