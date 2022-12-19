import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import RouteMasterButton from "../master_route_button";
import "../master_route_update/index.scss";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Workbook from "react-excel-workbook";
import routeMasterApiActions from "../../redux/master_route/actions";
import ReactLoader from "../../component/react-loader/react-loader.component";
const { getRouteMasterAPI } = routeMasterApiActions;
class RouteMasterUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loginId,
      // data1,
      data: [],
      pages: null,
      loading: true,
      message: "",
      messageType: 0,
      dataSet: [],
      selected: null,
      vehicleList: [],
      driverList: [],
      filteredData: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    //getting all the data
    this.getRouteMaster();
  }

  getRouteMaster() {
    this.setState({ loading: true });
    const payload = {
      user_id: "1",
    };
    this.props.getRouteMasterAPI(payload);
  }

  componentDidUpdate(prevProps) {
    console.log("routemaster", this.props);
    if (prevProps !== this.props) {
      if (
        this.props.RouteMasterApi?.routeMasterApi?.result?.data?.responseData
          ?.length > 0
      ) {
        this.setState({
          dataSet:
            this.props.RouteMasterApi.routeMasterApi.result.data.responseData,
        });
        this.setState({
          filteredData:
            this.props.RouteMasterApi.routeMasterApi.result.data.responseData,
        });
      } else {
        this.setState({ dataSet: [] });
      }
    }
  }

  handleroutemaster = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.routeName && item.routeName.toLowerCase().includes(search)) ||
          (item.startLocation && item.startLocation.toLowerCase().includes(search))
      ),
    });
  };

  render() {
    let { searchInput } = this.state;

    return (
      <div>
        {this.props.RouteMasterApi?.routeMasterApi?.loading ? (
           <div className="master-driver-loader-overlay">
           <div className="master-driver-loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <div className="Route-update-subhead">
          {/* <h3 className="Route-update">Route View</h3> */}

          {/* <div className="table-items-count">
            Items: {this.state.filteredData.length}
          </div> */}
          <div className="search-Route-update-report ">
            <form>
              <input
                style={{ width: "400px" }}
                className="search-Route-update-input"
                type="text"
                id="filter"
                placeholder="Search Table ( Route Name/ Route ID )"
                value={searchInput || ""}
                onChange={this.handleroutemaster}
              />
            </form>
          </div>

          <div>
            <Workbook
              filename="Route-master-Report.xlsx"
              element={
                <div className="route-master-Report-download" data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="route-master-Report-download-img"
                  />
                  
      <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </div>
                
              }
            >
              <Workbook.Sheet
                data={this.state.dataSet}
                name="Route-master-Report"
              >
                <Workbook.Column label="ID" value="id" />
                <Workbook.Column label="Route Name" value="routeName" />
                <Workbook.Column
                  label="Route ID"
                  value="routeId"
                />
                <Workbook.Column
                  label="Start Location"
                  value="startLocation"
                />

                <Workbook.Column
                  label="End Location"
                  value="endLocation"
                />

                <Workbook.Column
                  label="Distance"
                  value="distance"
                />
                <Workbook.Column label="Num Of Stops" value="numOfStops" />

                <Workbook.Column label="Estimated Trips" value="estimatedTrips" />
                <Workbook.Column label="Start Latitude" value="startLatitude" />
                <Workbook.Column label="Start Longitude" value="startLongitude" />
                <Workbook.Column label="End Latitude" value="endLatitude" />
               
                <Workbook.Column label="End Longitude" value="endLongitude" />
              
              </Workbook.Sheet>
            </Workbook>
          </div>

        </div>
        <div className="Route-update-table">
          {/* <h2 className="msg">
            Note: Future trips will be reflected in Excel Sheet
          </h2> */}
          <ReactTooltip place="left" type="success" effect="solid" />
          <ReactTable
            NoDataComponent={() => null}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "400px",
              marginTop: "0%",
              // width: "1000px",
            }}
            data={this.state.filteredData}
            showPagination={true}
            columns={[
              {
                Header: "Edit",
                width: 90,
                Cell: (props) => (
                  <RouteMasterButton
                    data={props}
                    driverDropdown={this.state.driverList}
                    vehicleDropdown={this.state.vehicleList}
                  ></RouteMasterButton>
                ),
                resizable: false,
              },
              {
                Header: "ID",
                id: "id",
                accessor: (d) => d.id,
                width: 80,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Route ID",
                id: "routeId",
                accessor: (d) => d.routeId,
                width: 80,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Route Name",
                id: "routeName",
                accessor: (d) => d.routeName,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Start Location",
                id: "startLocation",
                width: 170,
                accessor: (d) => d.startLocation,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "End Location",
                id: "endLocation",
                width: 150,
                accessor: (d) => d.endLocation,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Distance",
                id: "distance",
                accessor: (d) => d.distance,
                width: 70,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "No of Stops",
                id: "numOfStops",
                accessor: (d) => d.numOfStops,
                width: 120,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Estimated Trips",
                id: "estimatedTrips",
                accessor: (d) => d.estimatedTrips,
                width: 150,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Start Latitude",
                id: "startLatitude",
                accessor: (d) => d.startLatitude,
                width: 90,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Start Longitude",
                id: "startLongitude",
                accessor: (d) => d.startLongitude,
                width: 90,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "End Latitude",
                id: "endLatitude",
                accessor: (d) => d.endLatitude,
                width: 90,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "End Longitude",
                id: "endLongitude",
                accessor: (d) => d.endLongitude,
                width: 120,

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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  getRouteMasterAPI,
})(withRouter(RouteMasterUpdate));
