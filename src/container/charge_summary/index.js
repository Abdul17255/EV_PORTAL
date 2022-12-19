// import React, { Component } from "react";
// import "../charge_summary/index.scss";
// import { matchSorter } from "match-sorter";
// import ReactTable from "react-table";
// import ReactTooltip from "react-tooltip";
// import "react-table/react-table.css";
// import ReactLoader from "../../component/react-loader/react-loader.component";
// //import ReactExport from "react-data-export";
// //import ReactExport from "react-export-excel";
// // import ExcelFile from "./ExcelPlugin/components/ExcelFile";
// // import ExcelSheet from "./ExcelPlugin/elements/ExcelSheet";
// // import ExcelColumn from "./ExcelPlugin/elements/ExcelColumn";
// import SubMenuHeader from "../sub_menu_header";
// import Footer from "../footer/index";
// import chargeSummaryApiActions from "../../redux/charge_summary/actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// //import ReactExport from "react-data-export";
// let start_date = "";
// let end_date = "";
// let duration = "";

// const { getChargeSummaryAPI } = chargeSummaryApiActions;

// // const ExcelFile = ReactExport.ExcelFile;
// // const ExcelColumn = ReactExport.ExcelColumn;
// // const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

// class ChargeSummary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       Chargesummaryreport: [],
//       tempData: [],
//     };

//     this.getChargeSummaryDetails = this.getChargeSummaryDetails.bind(this);
//   }

//   componentDidMount() {
//     start_date = sessionStorage.getItem("start_timestamp");
//     end_date = sessionStorage.getItem("end_timestamp");
//     duration = sessionStorage.getItem("duration");
//     this.getChargeSummaryDetails();
//   }

//   getChargeSummaryDetails = async () => {
//     let payLoad = {
//       api_key: "CHARGE_SUMMARY_DETAILS",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: start_date,
//       end_timestamp: end_date,
//       duration: duration,
//     };

//     await this.props.getChargeSummaryAPI(payLoad);
//   };

//   componentWillReceiveProps(nextProps) {
//     if (nextProps?.chargeSummaryApi?.chargeSummaryApi?.result?.data?.values) {
//       this.setState({
//         data: nextProps.chargeSummaryApi.chargeSummaryApi.result.data.values,
//       });
//     }
//   }
//   handleInputChange = () => {
//     this.filterArray(this.search.value);
//   };

//   filterArray = (query) => {
//     let searchString = query;
//     console.log("searchString", this.state.data);
//     var responseData = this.state.data;
//     if (searchString && searchString.length > 0) {
//       responseData = responseData.filter((l) => {
//         console.log("searchString2", l.reg_no);
//         console.log("searchString3", searchString);
//         if (
//           l.charging_station_name.match(searchString) ||
//           l.charge_point_identifier.match(searchString) ||
//           l.reg_no.match(searchString) ||
//           l.created_timestamp.match(searchString) ||
//           l.ac_power_input_to_charger.match(searchString) ||
//           l.dc_power_at_charging_point.match(searchString) ||
//           l.ac_dc_conversion.match(searchString) ||
//           l.power_consumed_by_vehicle.match(searchString)
//         ) {
//           return l;
//         }
//       });
//       this.setState({ data: responseData });
//     } else {
//       this.setState({ data: this.state.data });
//     }
//   };

//   render() {
//     let chargeData = [];
//     if (this.state.data) {
//       chargeData = this.state.data;
//     }
//     // const Chargesummaryreport = [
//     //   {
//     //     charging_station_name: "CH0011",
//     //     charge_point_identifier: "1",
//     //     ac_power_input_to_charger: "30.00",
//     //     dc_power_at_charging_point: "60.00",
//     //     ac_dc_conversion: "3.00",
//     //     power_consumed_by_vehicle: "14.00",
//     //   },
//     //   {
//     //     charging_station_name: "CH0011",
//     //     charge_point_identifier: "1",
//     //     ac_power_input_to_charger: "30.00",
//     //     dc_power_at_charging_point: "60.00",
//     //     ac_dc_conversion: "3.00",
//     //     power_consumed_by_vehicle: "14.00",
//     //   },
//     //   {
//     //     charging_station_name: "CH0011",
//     //     charge_point_identifier: "1",
//     //     ac_power_input_to_charger: "30.00",
//     //     dc_power_at_charging_point: "60.00",
//     //     ac_dc_conversion: "3.00",
//     //     power_consumed_by_vehicle: "14.00",
//     //   },
//     // ];
//     return (
//       <div>
//         {this.props.chargeSummaryApi?.chargeSummaryApi?.loading ? (
//           <div className="loader-overlay-one">
//             <div className="loader-container">
//               <ReactLoader />
//             </div>
//           </div>
//         ) : null}
//         <h3 className="chargingsummary">Charging Summary</h3>
//         <div classname="charge-summary-submenu">
//           <SubMenuHeader
//             visible="true"
//             component="chargesummary"
//             data={chargeData}
//           />
//         </div>
//         <div className="blockseps">
//           <form>
//             <input
//               className="chargerinput"
//               type="text"
//               id="filter"
//               placeholder="Search Table"
//               ref={(input) => (this.search = input)}
//               onChange={this.handleInputChange}
//             />
//           </form>
//         </div>

//         <div className="charge-summary-table">
//           <ReactTooltip place="left" type="success" effect="solid" />
//           <ReactTable
//             NoDataComponent={() => null}
//             pageSizeOptions={[20, 30, 50, 80, 90, 100, 125, 130, 200, 500]}
//             style={{
//               height: "480px",
//               overflowX: "auto",
//               fontSize: "14px",
//               marginTop: "0%",
//               // width: "1000px",
//             }}
//             data={chargeData}
//             // filterable
//             // defaultFilterMethod={(filter, row) =>
//             //   String(row[filter.id]) === filter.value
//             // }
//             columns={[
//               {
//                 Header: "Charging Station Name",
//                 //  Cell: () => (
//                 //   <img src={require("../../assets/images/arrow-up/up.png")}
//                 //   />
//                 //  ),
//                 id: "charging_station_name",
//                 accessor: (d) => d.charging_station_name,
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["charging_station_name"],
//                   }),
//                 filterAll: true,
//                 width: 220,
//                 resizable: false,
//               },

//               {
//                 Header: "Charging point name",
//                 id: "charge_point_identifier",

//                 accessor: (d) => d.charge_point_identifier,
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["charge_point_identifier"],
//                   }),
//                 filterAll: true,
//                 width: 180,
//                 resizable: false,
//               },

//               {
//                 Header: "Register Number",
//                 id: "reg_no",

//                 accessor: (d) => d.reg_no,
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["reg_no"],
//                   }),
//                 filterAll: true,
//                 width: 170,
//                 resizable: false,
//               },
//               {
//                 Header: "Timestamp",
//                 id: "created_timestamp",
//                 accessor: (d) => d.created_timestamp,
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["created_timestamp"],
//                   }),
//                 filterAll: true,
//                 width: 140,
//                 resizable: false,
//               },

//               {
//                 Header: () => (
//                   <div>
//                     AC Power input
//                     <br />
//                     to charger(kwh)
//                   </div>
//                 ),
//                 id: "ac_power_input_to_charger",
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 accessor: (d) => d.ac_power_input_to_charger,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["ac_power_input_to_charger"],
//                   }),
//                 filterAll: true,
//                 width: 180,
//                 resizable: false,
//               },
//               {
//                 Header: () => (
//                   <div>
//                     DC Power at
//                     <br />
//                     charging point(kwh)
//                   </div>
//                 ),
//                 id: "dc_power_at_charging_point",
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 accessor: (d) => d.dc_power_at_charging_point,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["dc_power_at_charging_point"],
//                   }),
//                 filterAll: true,
//                 width: 170,
//                 resizable: false,
//               },
//               {
//                 Header: () => (
//                   <div>
//                     AC to DC
//                     <br /> Conversion(%)
//                   </div>
//                 ),
//                 id: "ac_dc_conversion",
//                 accessor: (d) => d.ac_dc_conversion,
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["ac_dc_conversion"],
//                   }),
//                 filterAll: true,
//                 width: 170,
//                 resizable: false,
//               },
//               {
//                 Header: () => (
//                   <div>
//                     Power drawn by
//                     <br />
//                     Vehicle(kwh)
//                   </div>
//                 ),
//                 id: "power_consumed_by_vehicle",
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 accessor: (d) => d.power_consumed_by_vehicle,
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["power_consumed_by_vehicle"],
//                   }),
//                 filterAll: true,
//                 width: 160,
//                 resizable: false,
//               },
//               {
//                 Header: "SOC",
//                 id: "soc",
//                 accessor: (d) => d.soc,
//                 Cell: (rows) => {
//                   /* Add data-tip */
//                   return <span title={rows.value}>{rows.value}</span>;
//                 },
//                 filterMethod: (filter, rows) =>
//                   matchSorter(rows, filter.value, {
//                     keys: ["soc"],
//                   }),
//                 filterAll: true,
//                 width: 90,
//                 resizable: false,
//               },
//             ]}
//             defaultSorted={[
//               {
//                 id: "charging_station_name",
//                 desc: true,
//               },
//               {
//                 id: "charge_point_identifier",
//                 desc: true,
//               },
//               {
//                 id: "reg_no",
//                 desc: true,
//               },
//               {
//                 id: "created_timestamp",
//                 desc: true,
//               },
//               {
//                 id: "ac_power_input_to_charger",
//                 desc: true,
//               },
//               {
//                 id: "dc_power_at_charging_point",
//                 desc: true,
//               },
//               {
//                 id: "ac_dc_conversion",
//                 desc: true,
//               },
//               {
//                 id: "power_consumed_by_vehicle",
//                 desc: true,
//               },
//               {
//                 id: "soc",
//                 desc: true,
//               },
//             ]}
//             // data={this.state.sosData} // should default to []
//             defaultPageSize={50}
//             //pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
//             // loading={this.state.loading}
//             //manual
//             //onFetchData={this.fetchData}
//             onPageSizeChange={() => {
//               ReactTooltip.rebuild();
//             }}
//             className="-striped -highlight"
//           />
//         </div>

//         <Footer />
//       </div>
//     );
//   }
// }

// //export default ChargeSummary;
// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     chargeSummary: state.chargeSummary,
//   };
// };

// export default connect(mapStateToProps, {
//   getChargeSummaryAPI,
// })(withRouter(ChargeSummary));

import React, { Component } from "react";
import "../charge_summary/index.scss";
import { matchSorter } from "match-sorter";
import ReactTable from "react-table";
import ReactTooltip from "react-tooltip";
import "react-table/react-table.css";
import ReactLoader from "../../component/react-loader/react-loader.component";
//import ReactExport from "react-data-export";
//import ReactExport from "react-export-excel";
// import ExcelFile from "./ExcelPlugin/components/ExcelFile";
// import ExcelSheet from "./ExcelPlugin/elements/ExcelSheet";
// import ExcelColumn from "./ExcelPlugin/elements/ExcelColumn";
import SubMenuHeader from "../sub_menu_header";
import Footer from "../footer/index";
import chargeSummaryApiActions from "../../redux/charge_summary/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//import ReactExport from "react-data-export";
let start_date = "";
let end_date = "";
let duration = "";

const { getChargeSummaryAPI } = chargeSummaryApiActions;

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelColumn = ReactExport.ExcelColumn;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

class ChargeSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Chargesummaryreport: [],
      tempData: [],
      filteredData: [],
      searchInput: "",
    };

    this.getChargeSummaryDetails = this.getChargeSummaryDetails.bind(this);
  }

  componentDidMount() {
    start_date = sessionStorage.getItem("start_timestamp");
    end_date = sessionStorage.getItem("end_timestamp");
    duration = sessionStorage.getItem("duration");
    this.getChargeSummaryDetails();
  }

  getChargeSummaryDetails = async () => {
    let payLoad = {
      api_key: "CHARGE_SUMMARY_DETAILS",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: start_date,
      end_timestamp: end_date,
      duration: duration,
    };

    await this.props.getChargeSummaryAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    console.log("chargesummary", nextProps);
    if (nextProps?.chargeSummaryApi?.chargeSummaryApi?.result?.data?.values) {
      this.setState({
        data: nextProps.chargeSummaryApi.chargeSummaryApi.result.data.values,
      });
      this.setState({
        filteredData:
          nextProps.chargeSummaryApi.chargeSummaryApi.result.data.values,
      });
    }
  }
  // handleInputChange = () => {
  //   this.filterArray(this.search.value);
  // };

  // filterArray = (query) => {
  //   let searchString = query;
  //   console.log("searchString", this.state.data);
  //   var responseData = this.state.data;
  //   if (searchString && searchString.length > 0) {
  //     responseData = responseData.filter((l) => {
  //       console.log("searchString2", l.reg_no);
  //       console.log("searchString3", searchString);
  //       if (
  //         l.charging_station_name.match(searchString) ||
  //         l.charge_point_identifier.match(searchString) ||
  //         l.reg_no.match(searchString) ||
  //         l.created_timestamp.match(searchString) ||
  //         l.ac_power_input_to_charger.match(searchString) ||
  //         l.dc_power_at_charging_point.match(searchString) ||
  //         l.ac_dc_conversion.match(searchString) ||
  //         l.power_consumed_by_vehicle.match(searchString)
  //       ) {
  //         return l;
  //       }
  //     });
  //     this.setState({ data: responseData });
  //   } else {
  //     this.setState({ data: this.state.data });
  //   }
  // };

  chargesummaryhandleChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.data.filter(
        (item) =>
          (item.charging_station_name &&
            item.charging_station_name.toLowerCase().includes(search)) ||
          (item.charge_point_identifier &&
            item.charge_point_identifier.toLowerCase().includes(search)) ||
          (item.reg_no && item.reg_no.toLowerCase().includes(search))
      ),
    });
  };
  getLoader = () => (
    <div className="loader-overlay">
      <div className="loader-container">
        <ReactLoader />
      </div>
    </div>
  );
  render() {
    let { searchInput } = this.state;
    let chargeData = [];
    if (this.state.data) {
      chargeData = this.state.data;
    }

    return (
      <div>
        {this.props.chargeSummaryApi &&
          this.props.chargeSummaryApi.chargeSummaryApi &&
          this.props.chargeSummaryApi.chargeSummaryApi.loading &&
          this.getLoader()}
        <h3 className="charging-summary">Charging Summary</h3>
        <div classname="charge-summary-submenu">
          <SubMenuHeader
            visible="true"
            component="chargeSummary"
            data={chargeData}
          />

          <div className="charging-summary-blockseps">
            <form>
              <input
                className="charging-summary-input"
                type="text"
                id="filter"
                placeholder="Search Table"
                value={searchInput || ""}
                onChange={this.chargesummaryhandleChange}
              />
            </form>
          </div>
        </div>

        <div className="charge-summary-table">
          <ReactTooltip place="left" type="success" effect="solid" />
          <ReactTable
            NoDataComponent={() => null}
            pageSizeOptions={[20, 30, 50, 80, 90, 100, 125, 130, 200, 500]}
            style={{
              height: "480px",
              overflowX: "auto",
              fontSize: "14px",
              marginTop: "0%",
              // width: "1000px",
            }}
            data={this.state.filteredData}
            // filterable
            // defaultFilterMethod={(filter, row) =>
            //   String(row[filter.id]) === filter.value
            // }
            columns={[
              {
                Header: "Charger name",
                id: "charge_point_identifier",

                accessor: (d) => d.charge_point_identifier,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["charge_point_identifier"],
                  }),
                //filterAll: true,
                width: 160,
                resizable: false,
              },

              {
                Header: "Reg No.",
                id: "reg_no",

                accessor: (d) => d.reg_no,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["reg_no"],
                  }),
                //filterAll: true,
                width: 120,
                resizable: false,
              },
              {
                Header: "Odometer",
                id: "odometer",
                accessor: (d) => d.odometer,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["odometer"],
                  }),
                //filterAll: true,
                width: 140,
                resizable: false,
              },

              {
                Header: () => (
                  <div>
                    DC Power at
                    <br />
                    charging point(kwh)
                  </div>
                ),
                id: "dc_power_at_charging_point",
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                accessor: (d) => d.dc_power_at_charging_point,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["dc_power_at_charging_point"],
                  }),
                //filterAll: true,
                width: 150,
                resizable: false,
              },

              {
                Header: () => (
                  <div>
                    Power drawn by
                    <br />
                    Vehicle(kwh)
                  </div>
                ),
                id: "power_consumed_by_vehicle",
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                accessor: (d) => d.power_consumed_by_vehicle,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["power_consumed_by_vehicle"],
                  }),
                //filterAll: true,
                width: 150,
                resizable: false,
              },

              {
                Header: " Start SOC",
                id: "start_soc",
                accessor: (d) => d.start_soc,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["start_soc"],
                  }),
                //filterAll: true,
                width: 120,
                resizable: false,
              },

              {
                Header: "End SOC",
                id: "end_soc",
                accessor: (d) => d.end_soc,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["end_soc"],
                  }),
                //filterAll: true,
                width: 120,
                resizable: false,
              },
              {
                Header: () => (
                  <div>
                    Time Taken for
                    <br />
                    Charging
                  </div>
                ),
                id: "time_taken",
                accessor: (d) => d.time_taken,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["time_taken"],
                  }),
                //filterAll: true,
                width: 150,
                resizable: false,
              },
              {
                Header: "Start Timestamp",
                id: "start_timestamp",
                accessor: (d) => d.start_timestamp,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["start_timestamp"],
                  }),
                //filterAll: true,
                width: 160,
                resizable: false,
              },
              {
                Header: "End Timestamp",
                id: "end_timestamp",
                accessor: (d) => d.end_timestamp,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["end_timestamp"],
                  }),
                //filterAll: true,
                width: 160,
                resizable: false,
              },

              {
                Header: "Location",
                id: "location",
                accessor: (d) => d.location,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["location"],
                  }),
                //filterAll: true,
                width: 280,
                resizable: false,
              },
              {
                Header: "Charging Station Name",
                //  Cell: () => (
                //   <img src={require("../../assets/images/arrow-up/up.png")}
                //   />
                //  ),
                id: "charging_station_name",
                accessor: (d) => d.charging_station_name,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["charging_station_name"],
                  }),
                //filterAll: true,
                width: 220,
                resizable: false,
              },
            ]}
            defaultSorted={[
              {
                id: "charging_station_name",
                desc: true,
              },
              {
                id: "charge_point_identifier",
                desc: true,
              },
              {
                id: "reg_no",
                desc: true,
              },
              {
                id: "created_timestamp",
                desc: true,
              },
              {
                id: "start_timestamp",
                desc: true,
              },
              {
                id: "dc_power_at_charging_point",
                desc: true,
              },
              {
                id: "end_timestamp",
                desc: true,
              },
              {
                id: "power_consumed_by_vehicle",
                desc: true,
              },
              {
                id: "start_soc",
                desc: true,
              },
              {
                id: "end_soc",
                desc: true,
              },
              {
                id: "location",
                desc: true,
              },
              {
                id: "odometer",
                desc: true,
              },
              {
                id: "time_taken",
                desc: true,
              },
            ]}
            // data={this.state.sosData} // should default to []
            defaultPageSize={50}
            //pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
            // loading={this.state.loading}
            //manual
            //onFetchData={this.fetchData}
            onPageSizeChange={() => {
              ReactTooltip.rebuild();
            }}
            className="-striped -highlight"
          >
            {(state, makeTable, instance) => {
              let recordsInfoText = "";

              const { filtered, pageRows, pageSize, sortedData, page } = state;

              if (sortedData && sortedData.length > 0) {
                let isFiltered = filtered.length > 0;

                let totalRecords = sortedData.length;

                let recordsCountFrom = page * pageSize + 1;

                let recordsCountTo = recordsCountFrom + pageRows.length - 1;

                if (isFiltered)
                  recordsInfoText = `${recordsCountFrom}-${recordsCountTo} of ${totalRecords} filtered records`;
                else
                  recordsInfoText = `${recordsCountFrom}-${recordsCountTo} of ${totalRecords} records`;
              } else recordsInfoText = "No records";

              return (
                <div className="main-grid">
                  <div className="above-table text-right">
                    <div className="col-sm-12">
                      <span className="records-info">{recordsInfoText}</span>
                    </div>
                  </div>

                  {makeTable()}
                </div>
              );
            }}
          </ReactTable>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

//export default ChargeSummary;
const mapStateToProps = (state) => {
  return {
    ...state,
    chargeSummary: state.chargeSummary,
  };
};

export default connect(mapStateToProps, {
  getChargeSummaryAPI,
})(withRouter(ChargeSummary));
