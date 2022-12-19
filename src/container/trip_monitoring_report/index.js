import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SubMenuHeader from "../../container/sub_menu_header";
import "../trip_monitoring_report/index.scss";
class TripMonitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [],
      inputSearch: "",
      filteredData: [],
    };
  }
  render() {
    const dataSet = [
      {
        driverName: "Ashok Singh Kathayat",
        route: "R1-Del-Jpr",
        soc_start: "12",
        soc_end: "23",
        efficiency: "12",
        odometer: "12",
        no_of_trip: "4",
        action: "VIEW MORE",
      },
      {
        driverName: "Ashok Singh Kathayat",
        route: "R1-Del-Jpr",
        soc_start: "12",
        soc_end: "23",
        efficiency: "12",
        odometer: "12",
        no_of_trip: "4",
        action: "VIEW MORE",
      },
      {
        driverName: "Ashok Singh Kathayat",
        route: "R1-Del-Jpr",
        soc_start: "12",
        soc_end: "23",
        efficiency: "12",
        odometer: "12",
        no_of_trip: "4",
        action: "VIEW MORE",
      },
      {
        driverName: "Ashok Singh Kathayat",
        route: "R1-Del-Jpr",
        soc_start: "12",
        soc_end: "23",
        efficiency: "12",
        odometer: "12",
        no_of_trip: "4",
        action: "VIEW MORE",
      },
      {
        driverName: "Ashok Singh Kathayat",
        route: "R1-Del-Jpr",
        soc_start: "12",
        soc_end: "23",
        efficiency: "12",
        odometer: "12",
        no_of_trip: "4",
        action: "VIEW MORE",
      },
      {
        driverName: "Ashok Singh Kathayat",
        route: "R1-Del-Jpr",
        soc_start: "12",
        soc_end: "23",
        efficiency: "12",
        odometer: "12",
        no_of_trip: "4",
        action: "VIEW MORE",
      },
    ];

    return (
      <div>
        <h3 className="TripMonitoring-text">Trip Monitoring</h3>

        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-8 d-flex">
              <SubMenuHeader
                visible="false"
                component="tripmonitoring"
                // data={this.state.filteredData}
              />
            </div>
            <div className="col-4 d-flex">
              <form>
                <input
                  className="TripMonitoring-search"
                  type="text"
                  id="filter"
                  placeholder="Search Table"
                  // value={inputSearch || ""}
                  //onChange={this.handledriverdetailsSearch}
                />
              </form>
            </div>
          </div>
        </div>

        {/* <div classname="TripMonitoring-submenu">
          <SubMenuHeader
            visible="false"
            component="tripmonitoring"
            // data={this.state.filteredData}
          />

          <div className="TripMonitoring-search-div">
            <form>
              <input
                className="TripMonitoring-search"
                type="text"
                id="filter"
                placeholder="Search Table"
                // value={inputSearch || ""}
                //onChange={this.handledriverdetailsSearch}
              />
            </form>
          </div>
        </div> */}

        <div>
          <ReactTable
            NoDataComponent={() => null}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "490px",
              marginTop: "0%",
              marginLeft: "50px",
            }}
            data={dataSet}
            showPagination={true}
            columns={[
              {
                Header: "Driver Name",
                id: "driverName",
                accessor: (d) => d.driverName,
                width: 250,

                resizable: false,
              },
              {
                Header: "Route",
                id: "route",
                accessor: (d) => d.route,
                width: 250,

                resizable: false,
              },
              {
                Header: "SOC Start",
                id: "soc_start",
                accessor: (d) => d.soc_start,
                width: 150,

                resizable: false,
              },
              {
                Header: "SOC End",
                id: "soc_end",
                accessor: (d) => d.soc_end,
                width: 150,

                resizable: false,
              },
              {
                Header: () => (
                  <div>
                    Driver
                    <br />
                    Efficiency(%)
                  </div>
                ),

                id: "efficiency",
                accessor: (d) => d.efficiency,
                width: 150,

                filterAll: true,
                resizable: false,
              },
              {
                Header: () => (
                  <div>
                    Start
                    <br />
                    Odometer
                  </div>
                ),
                id: "odometer",
                accessor: (d) => d.odometer,
                width: 150,

                resizable: false,
              },
              {
                Header: "No Of Trips",
                id: "no_of_trip",
                accessor: (d) => d.no_of_trip,
                width: 130,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Action",
                id: "action",

                accessor: (d) => d.action,
                Cell: (props) => (
                  <a
                    className="driver-details-action"
                    // data={props}
                    //onClick={this.mapViewClicked}
                  >
                    View Trip Log{" "}
                    <img
                      src={require("../../assets/images/driver-monitoring/view-more.png")}
                      alt=""
                    />
                  </a>
                ),

                width: 220,

                filterAll: true,
                resizable: false,
              },
            ]}
            defaultPageSize={50}
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
                  <div className="col-sm-12">
                    <span className="records-info-trip-monitoring">{recordsInfoText}</span>
                  </div>

                  {makeTable()}
                </div>
              );
            }}
          </ReactTable>
        </div>
      </div>
    );
  }
}

export default TripMonitoring;
