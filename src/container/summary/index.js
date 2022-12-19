// import React, { Component } from "react";

// //import { Button, ButtonToolbar } from "react-bootstrap";
// //import Popup from "../popup";
// import ReactTooltip from "react-tooltip";
// import { matchSorter } from "match-sorter";
// import summaryApiActions from "../../redux/summary/actions";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import "../summary/index.scss";
// import ReactLoader from "../../component/react-loader/react-loader.component";
// import ReactTable from "react-table";
// import Map from "../../container/map";
// //import ReactExport from "react-data-export";
// import "react-table/react-table.css";
// //Actions
// let start_date = "";
// let end_date = "";
// let duration = "";
// const { getSummaryAPI } = summaryApiActions;
// class Summary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       filteredDatas: [],
//       inputSearch: "",
//       vehicleClicked: false,
//     };
//     this.getSummaryDetails = this.getSummaryDetails.bind(this);
//   }

//   componentDidMount() {
//     start_date = sessionStorage.getItem("start_timestamp");
//     end_date = sessionStorage.getItem("end_timestamp");
//     duration = sessionStorage.getItem("duration");
//     this.getSummaryDetails();
//   }

//   getSummaryDetails = async () => {
//     let payLoad = {
//       api_key: "CONNECTED_VEHICLE_TRACK_SUMMARY",
//       charger_location: "Bangalore",
//       user_id: "1",
//       vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
//       start_timestamp: start_date,
//       end_timestamp: end_date,
//       duration: duration,
//     };

//     await this.props.getSummaryAPI(payLoad);
//   };

//   componentWillReceiveProps(nextProps) {
//     // console.log("summary", nextProps);
//     if (nextProps?.summaryApi?.summaryApi?.result?.data?.data) {
//       this.setState({
//         data: nextProps.summaryApi.summaryApi.result.data.data,
//       });

//       this.setState({
//         filteredDatas: nextProps.summaryApi.summaryApi.result.data.data,
//       });
//     }
//   }

//   mapViewClicked = () => {
//     console.log("mapViewClicked");
//     this.setState({ vehicleClicked: true });
//   };

//   componentWillUnmount() {
//     this.setState({ vehicleClicked: false });
//   }

//   handleSearchSummary = (event) => {
//     //console.log("serach ele summary", this.state.data);
//     const search = event.target.value.toLowerCase();
//     this.setState({
//       inputSearch: search,
//       filteredDatas: this.state.data.filter(
//         (item) =>
//           (item.status && item.status.toLowerCase().includes(search)) ||
//           (item.regNo && item.regNo.toLowerCase().includes(search))
//       ),
//     });
//   };

//   getLoader = () => (
//     <div className="loader-overlay">
//       <div className="loader-container">
//         <ReactLoader />
//       </div>
//     </div>
//   );
//   render() {
//    // console.log("clicked", this.state.vehicleClicked);
//     let { inputSearch } = this.state;
//     return (
//       <div>
//         {this.state.vehicleClicked == false ? (
//           <div className="summary-table">

//            {this.props.summaryApi&&
//           this.props.summaryApi.summaryApi &&
//           this.props.summaryApi.summaryApi.loading &&
//           this.getLoader()}

//             <div className="search-summary-report ">
//               <form>
//                 <input
//                   style={{ width: "380px" }}
//                   className=""
//                   type="text"
//                   id="filter"
//                   placeholder="Search Table ( Status / Vehicle No. )"
//                   value={inputSearch || ""}
//                   onChange={this.handleSearchSummary}
//                 />
//               </form>
//             </div>
//             <ReactTooltip place="left" type="success" effect="solid" />
//             <ReactTable
//               NoDataComponent={() => null}
//               pageSizeOptions={[20, 30, 50, 80, 90, 100, 125, 130, 200, 500]}
//               style={{
//                 height: "490px",
//                 marginTop: "0%",
//                 // width: "1000px",
//               }}
//               data={this.state.filteredDatas}
//               // filterable
//               // defaultFilterMethod={(filter, row) =>
//               //   String(row[filter.id]) === filter.value
//               // }
//               columns={[
//                 {
//                   Header: "Status",

//                   id: "status",
//                   accessor: (d) => d.status,
//                   Cell: (rows) => {
//                     /* Add data-tip */
//                     return <span title={rows.value}>{rows.value}</span>;
//                   },
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["status"],
//                     }),
//                   //filterAll: true,
//                   width: 130,
//                   resizable: false,
//                 },

//                 {
//                   Header: "Vehicle No.",
//                   id: "regNo",

//                   accessor: (d) => d.regNo,
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["regNo"],
//                     }),
//                   //filterAll: true,
//                   width: 110,
//                   resizable: false,
//                 },
//                 {
//                   Header: "Pilot Name",
//                   id: "driverName",

//                   accessor: (d) => d.driverName,
//                   Cell: (rows) => {
//                     /* Add data-tip */
//                     return <span title={rows.value}>{rows.value}</span>;
//                   },
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["driverName"],
//                     }),
//                   //filterAll: true,
//                   width: 130,
//                   resizable: false,
//                 },
//                 {
//                   Header: "Route Name",
//                   id: "routeName",

//                   accessor: (d) => d.routeName,
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["routeName"],
//                     }),
//                   //filterAll: true,
//                   width: 90,
//                   resizable: false,
//                 },
//                 {
//                   Header: "Distance Travelled",
//                   id: "distanceTravelled",

//                   accessor: (d) => d.distanceTravelled,
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["distanceTravelled"],
//                     }),
//                   //filterAll: true,
//                   width: 140,
//                   resizable: false,
//                 },

//                 {
//                   Header: "Location",
//                   id: "location",
//                   accessor: (d) => d.location,
//                   Cell: (rows) => {
//                     /* Add data-tip */
//                     return <span title={rows.value}>{rows.value}</span>;
//                   },
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["location"],
//                     }),
//                   //filterAll: true,
//                   width: 285,
//                   resizable: false,
//                 },
//                 {
//                   Header: "Current SOC (%)",
//                   id: "soc",
//                   accessor: (d) => d.soc,
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["soc"],
//                     }),
//                   //filterAll: true,
//                   width: 120,
//                   resizable: false,
//                 },

//                 {
//                   Header: "Power Consumption",
//                   id: "powerConsumption",
//                   accessor: (d) => d.powerConsumption,
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["powerConsumption"],
//                     }),
//                   //filterAll: true,
//                   width: 150,
//                   resizable: false,
//                 },
//                 {
//                   Header: "Last Communicated Time",
//                   id: "lastCommunicated",
//                   accessor: (d) => d.lastCommunicated,
//                   filterMethod: (filter, rows) =>
//                     matchSorter(rows, filter.value, {
//                       keys: ["lastCommunicated"],
//                     }),
//                   //filterAll: true,
//                   width: 190,
//                   resizable: false,
//                 },

//                 {
//                   Header: "Action",
//                   Cell: (props) => (
//                     <p
//                       className="onclick-action"
//                       // data={props}
//                       onClick={this.mapViewClicked}
//                     >
//                       <img
//                         src={require("../../assets/images/Icon awesome-map-marked-alt/summary-1.jpg")}
//                         alt=""
//                       />{" "}
//                       VIEW ON MAP
//                     </p>
//                   ),

//                   // filterAll: true,
//                   width: 165,
//                   resizable: false,
//                 },
//               ]}
//               // data={this.state.sosData} // should default to []
//               defaultPageSize={50}
//               className="-striped -highlight"
//             />
//           </div>
//         ) : (
//           <div>{<Map />}</div>
//         )}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     // chargeSummary: state.chargeSummary,
//   };
// };

// export default connect(mapStateToProps, {
//   getSummaryAPI,
// })(withRouter(Summary));

import React, { Component } from "react";

//import { Button, ButtonToolbar } from "react-bootstrap";
//import Popup from "../popup";
import ReactTooltip from "react-tooltip";
import { matchSorter } from "match-sorter";
import summaryApiActions from "../../redux/summary/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../summary/index.scss";
import ReactLoader from "../../component/react-loader/react-loader.component";
import ReactTable from "react-table";
import Map from "../../container/map";
//import ReactExport from "react-data-export";
import "react-table/react-table.css";
//Actions
let start_date = "";
let end_date = "";
let duration = "";
let singleVehicle = [];
const { getSummaryAPI } = summaryApiActions;
class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredDatas: [],
      inputSearch: "",
      vehicleClicked: false,
    };
    this.getSummaryDetails = this.getSummaryDetails.bind(this);
  }

  componentDidMount() {
    start_date = sessionStorage.getItem("start_timestamp");
    end_date = sessionStorage.getItem("end_timestamp");
    duration = sessionStorage.getItem("duration");
    this.getSummaryDetails();
  }

  getSummaryDetails = async () => {
    let payLoad = {
      api_key: "CONNECTED_VEHICLE_TRACK_SUMMARY",
      charger_location: "Bangalore",
      user_id: "1",
      vehicle_number: ["BLR001", "BLR002", "BLR003", "BLR004"],
      start_timestamp: start_date,
      end_timestamp: end_date,
      duration: duration,
    };

    await this.props.getSummaryAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    // console.log("summary", nextProps);
    if (nextProps?.summaryApi?.summaryApi?.result?.data?.data) {
      this.setState({
        data: nextProps.summaryApi.summaryApi.result.data.data,
      });

      this.setState({
        filteredDatas: nextProps.summaryApi.summaryApi.result.data.data,
      });
    }
  }

  // mapViewClicked = () => {
  //   console.log("mapViewClicked", this.state.data);

  // };

  setdata = (data) => {
    // let rowData = this.params;
    // let i = rowData.rowIndex;
    //this.setState({ addModalshow: true, selecteddata: data });
    this.setState({ vehicleClicked: true });
    singleVehicle.push(data.original);
  };

  componentWillUnmount() {
    this.setState({ vehicleClicked: false });
    singleVehicle.splice(0, singleVehicle.length);
  }

  handleSearchSummary = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      inputSearch: search,
      filteredDatas: this.state.data.filter(
        (item) =>
          (item.status && item.status.toLowerCase().includes(search)) ||
          (item.regNo && item.regNo.toLowerCase().includes(search))
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
    let { inputSearch } = this.state;
    return (
      <div>
        {this.state.vehicleClicked == false ? (
          <div className="summary-table">
            {this.props.summaryApi &&
              this.props.summaryApi.summaryApi &&
              this.props.summaryApi.summaryApi.loading &&
              this.getLoader()}

            <div className="search-summary-report ">
              <form>
                <input
                  style={{ width: "380px" }}
                  className=""
                  type="text"
                  id="filter"
                  placeholder="Search Table ( Status / Vehicle No. )"
                  value={inputSearch || ""}
                  onChange={this.handleSearchSummary}
                />
              </form>
            </div>
            <ReactTooltip place="left" type="success" effect="solid" />
            <ReactTable
              NoDataComponent={() => null}
              pageSizeOptions={[20, 30, 50, 80, 90, 100, 125, 130, 200, 500]}
              style={{
                height: "490px",
                marginTop: "0%",
                // width: "1000px",
              }}
              data={this.state.filteredDatas}
              // filterable
              // defaultFilterMethod={(filter, row) =>
              //   String(row[filter.id]) === filter.value
              // }
              columns={[
                {
                  Header: "Status",

                  id: "status",
                  accessor: (d) => d.status,
                  Cell: (rows) => {
                    /* Add data-tip */
                    return <span title={rows.value}>{rows.value}</span>;
                  },
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["status"],
                    }),
                  //filterAll: true,
                  width: 130,
                  resizable: false,
                },

                {
                  Header: "Vehicle No.",
                  id: "reg_no",

                  accessor: (d) => d.reg_no,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["reg_no"],
                    }),
                  //filterAll: true,
                  width: 110,
                  resizable: false,
                },
                {
                  Header: "Pilot Name",
                  id: "driverName",

                  accessor: (d) => d.driverName,
                  Cell: (rows) => {
                    /* Add data-tip */
                    return <span title={rows.value}>{rows.value}</span>;
                  },
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["driverName"],
                    }),
                  //filterAll: true,
                  width: 130,
                  resizable: false,
                },
                {
                  Header: "Route Name",
                  id: "routeName",

                  accessor: (d) => d.routeName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["routeName"],
                    }),
                  //filterAll: true,
                  width: 90,
                  resizable: false,
                },
                {
                  Header: "Distance Travelled",
                  id: "distanceTravelled",

                  accessor: (d) => d.distanceTravelled,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["distanceTravelled"],
                    }),
                  //filterAll: true,
                  width: 140,
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
                  width: 285,
                  resizable: false,
                },
                {
                  Header: "Current SOC (%)",
                  id: "soc",
                  accessor: (d) => d.soc,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["soc"],
                    }),
                  //filterAll: true,
                  width: 120,
                  resizable: false,
                },

                {
                  Header: "Power Consumption",
                  id: "powerConsumption",
                  accessor: (d) => d.powerConsumption,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["powerConsumption"],
                    }),
                  //filterAll: true,
                  width: 150,
                  resizable: false,
                },
                {
                  Header: "Last Communicated Time",
                  id: "current_timestamp",
                  accessor: (d) => d.current_timestamp,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["current_timestamp"],
                    }),
                  //filterAll: true,
                  width: 190,
                  resizable: false,
                },

                {
                  Header: "Action",
                  Cell: (props) => (
                    <a
                      className="onclick-action"
                      //data={props}
                      // style="text-decoration: none;"
                      href="#"
                      //style="text-decoration:none;"
                      target=""
                      onClick={() => this.setdata(props)}
                    >
                      <img
                        src={require("../../assets/images/Icon awesome-map-marked-alt/summary-1.jpg")}
                        alt=""
                      />{" "}
                      VIEW ON MAP
                    </a>
                  ),

                  // filterAll: true,
                  width: 165,
                  resizable: false,
                },
              ]}
              // data={this.state.sosData} // should default to []
              defaultPageSize={50}
              className="-striped -highlight"
            />
          </div>
        ) : (
          <div>{<Map clickedVehicle={singleVehicle} />}</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
    // chargeSummary: state.chargeSummary,
  };
};

export default connect(mapStateToProps, {
  getSummaryAPI,
})(withRouter(Summary));
