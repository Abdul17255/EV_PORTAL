import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Buttons from "../../component/trip_updation_button";
import "./index.scss";
//import * as User from "shared/app-data/user";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//import ReactExport from "react-data-export";
import { matchSorter } from "match-sorter";
import Workbook from "react-excel-workbook";
import moment from "moment";
//import ReactTooltip from "react-tooltip";
import ReactLoader from "../react-loader/react-loader.component";
// //Actions
import tripMasterDetailsActions from "../../redux/trip_master_details/actions";
import driverlistDropdownActions from "../../redux/driverlist_dropdown/actions";
import vehiclelistDropdownActions from "../../redux/vehiclelist_dropdown/actions";
import tripUploadApiActions from "../../redux/trip-upload/actions";
//  const ExcelFile = ReactExport.ExcelFile;
//  const ExcelColumn = ReactExport.ExcelColumn;
//  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const { getTripMasterDetailsAPI } = tripMasterDetailsActions;
const { getDriverlistDropdownAPI } = driverlistDropdownActions;
const { getVehiclelistDropdownAPI } = vehiclelistDropdownActions;

const { getTripUploadAPI } = tripUploadApiActions;
class TripUpdate extends Component {
  constructor(props) {
    super(props);
    let data1 = [
      {
        sno: "1",
        busNo: "CH01TB8398",
        routeNo: "7",
        duty: "M",
        driverID: "11035",
        driverName: "SATNAM Sinha",
        mobileNo: "8976453475",
        reportingTime: "31/10/2022 04:55:00 AM",
        startTime: "30/10/2022 05:55:00 AM",
        endTime: "30/10/2022 12:35:00 PM",
        startLocation: "W/shop Depot 3",
        endLocation: "Ramdarbar Bus Terminal",
      },
    ];
    //Initial data from API
    //let loginId = User.getLoginId();
    this.state = {
      // loginId,
      data1,
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

  addZeroInfront = (data) => {
    let item = "" + data;
    if (item.length === 2) return item;
    else return "0" + item;
  };

  getCurrentDate = (num) => {
    let d = new Date();
    d.setDate(d.getDate() + num);
    let month = d.getMonth() + 1;
    let date =
      d.getFullYear() +
      "-" +
      this.addZeroInfront(month) +
      "-" +
      this.addZeroInfront(d.getDate());
    return date;
  };

  getFromDate = (num) => {
    let d = new Date();
    d.setDate(d.getDate() - num);
    let month = d.getMonth() + 1;
    let date =
      d.getFullYear() +
      "-" +
      this.addZeroInfront(month) +
      "-" +
      this.addZeroInfront(d.getDate());
    return date;
  };

  componentDidMount() {
    this.getTripMasterDetails();
    this.getDriverlistDropdown();
    this.getVehiclelistDropdown();
    // this.getTripUploadAPI();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (
        this.props.tripMasterDetailsApi?.tripMasterDetailsApi?.result?.data
          ?.data?.length > 0
      ) {
        this.setState({
          dataSet:
            this.props.tripMasterDetailsApi.tripMasterDetailsApi.result.data
              .data,
        });
        this.setState({
          filteredData:
            this.props.tripMasterDetailsApi.tripMasterDetailsApi.result.data
              .data,
        });
      } else {
        this.setState({ dataSet: [] });
      }
      if (
        this.props.driverlistDropdownApi?.driverlistDropdownApi?.result?.data
          ?.data?.length > 0
      ) {
        this.setState({
          driverList:
            this.props.driverlistDropdownApi.driverlistDropdownApi.result.data
              .data,
        });
      } else {
        this.setState({ driverList: [] });
      }
      if (
        this.props.vehiclelistDropdownApi?.vehiclelistDropdownApi?.result?.data
          ?.data?.length > 0
      ) {
        this.setState({
          vehicleList:
            this.props.vehiclelistDropdownApi.vehiclelistDropdownApi.result.data
              .data,
        });
      } else {
        this.setState({ vehicleList: [] });
      }
    }
  }

  getTripMasterDetails() {
    this.setState({ loading: true });
    const payload = {
      api_key: "ALL_TRIP_DETAILS",
    };
    this.props.getTripMasterDetailsAPI(payload);
  }

  getDriverlistDropdown() {
    this.setState({ loading: true });
    const payload = {
      api_key: "ALL_DRIVER_DETAILS",
    };
    this.props.getDriverlistDropdownAPI(payload);
  }

  getVehiclelistDropdown() {
    this.setState({ loading: true });
    const payload = {
      api_key: "ALL_VEHICLE_DETAILS",
    };
    this.props.getVehiclelistDropdownAPI(payload);
  }

  uploadTripFile = (e) => {
    let fileInput = document.querySelector('input[type="file"]');

    // if (fileInput.type == "xlsx") {
    if (fileInput) {
      this.setState({ uploadingFile: true });
      let data = new FormData();

      data.append("file", fileInput.files[0]);

      this.props.getTripUploadAPI({
        body: data,
      });
    }
  };

  handleChangemaster = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.driver_name &&
            item.driver_name.toLowerCase().includes(search)) ||
          (item.reg_no && item.reg_no.toLowerCase().includes(search)) ||
          (item.route_id && item.route_id.toLowerCase().includes(search))
      ),
    });
  };

  render() {
    let { searchInput } = this.state;
    const dataSet1 = [
      {
        columns: [
          "S.NO",
          "Bus No",
          "Route No",
          "Duty",
          "Driver ID",
          "Driver Name",
          "Mobile No",
          "Reporting Time",
          "Start Time",
          "End Time",
          "Start Location",
          "End Location",
        ],
        data: [],
      },
    ];
    // const { data } = this.state;
    // console.log("dropdown props", this.props);

    return (
      <div>
        {this.props.tripMasterDetailsApi?.tripMasterDetailsApi?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
          <div className="trip-master-subhead">
        <h3 className="tripmaster">Trip Master</h3>
      
          {/* <div className="table-items-count">
            Items: {this.state.filteredData.length}
          </div> */}
          <div className="search-trip-master-report ">
            <form>
              <input
                style={{ width: "400px" }}
                className="search-trip-master-input"
                type="text"
                id="filter"
                placeholder="Search Table ( Driver Name / Reg No. / Route ID )"
                value={searchInput || ""}
                onChange={this.handleChangemaster}
              />
            </form>
          </div>
          <div className="download-upload">
        

            <i
              className="fa fa-upload"
              //title="Edit"
              style={{ fontSize: "22px" }}
              onClick={() => {
                document.querySelector('input[type="file"]').value = null;
                document.querySelector('input[type="file"]').click();
              }}
            ></i>

            <input
              type="file"
              onChange={(e) => {
                this.uploadTripFile(e);
              }}
              style={{ display: "none" }}
            />
          </div>
              <div>
            <Workbook
               filename="Trip-Updation-Details.xlsx"
              element={
                <div className="Trip-Updation_report-download"  data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="Trip-Updation_report-download-img"
                  />
                  
 <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </div>
              }
            >
              <Workbook.Sheet
                data={this.state.dataSet}
                name="Trip-Updation-Details"
              >
                <Workbook.Column label="Route ID" value="route_id" />
                <Workbook.Column label="Route Code" value="route_order" />
                <Workbook.Column label="Duty" value="duty" />
                <Workbook.Column label="Reg No" value="reg_no" />
                <Workbook.Column label="Driver ID" value="driver_id" />
                <Workbook.Column label="Driver Name" value="driver_name" />
                <Workbook.Column label="Mobile No" value="mobile_number" />
                <Workbook.Column label="Reporting Time" value="reporting_time" />
                <Workbook.Column label="Start Time" value="start_time" />
                <Workbook.Column label="End Time" value="end_time" />
                <Workbook.Column label="Start Location" value="start_location" />
                <Workbook.Column label="End Location" value="end_location" />
              </Workbook.Sheet>
            </Workbook>
          
          </div>
        </div>
        <div className="upload-container icon_pos">
          {/* <h2 className="msg">
            Note: Future trips will be reflected in Excel Sheet
          </h2> */}
          <ReactTooltip place="left" type="success" effect="solid" />
          <ReactTable
            NoDataComponent={() => null}
            // previousText={myCustomPreviousText}
            // nextText={myCustomNextText}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "530px",
              marginTop: "0%",
              // width: "1000px",
            }}
            data={this.state.filteredData}
            showPagination={true}
            // defaultPageSize={initialSize}
            //pageSize={updatedSize}
            //loading={this.state.loading}
            // filterable
            // defaultFilterMethod={(filter, row) =>
            //   String(row[filter.id]) === filter.value
            // }
            columns={[
              {
                Header: "Edit",
                width: 90,
                Cell: (props) => (
                  <Buttons
                    data={props}
                    driverDropdown={this.state.driverList}
                    vehicleDropdown={this.state.vehicleList}
                  ></Buttons>
                ),
                resizable: false,
              },
              {
                Header: "Route ID",
                id: "route_id",
                accessor: (d) => d.route_id,
                width: 80,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["route_id"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Route Code",
                id: "route_order",
                accessor: (d) => d.route_order,
                width: 100,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["route_order"] }),
                filterAll: true,
                resizable: false,
              },

              {
                Header: "Duty",
                id: "duty",
                accessor: (d) => d.duty,
                width: 70,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["duty"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Reg. No",
                id: "reg_no",
                accessor: (d) => d.reg_no,
                width: 120,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["reg_no"],
                  }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Driver Name",
                id: "driver_name",
                accessor: (d) => d.driver_name,
                width: 150,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["driver_name"] }),
                filterAll: true,
                resizable: false,
              },

              {
                Header: "Driver ID",
                id: "driver_id",
                accessor: (d) => d.driver_id,
                width: 90,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["driver_id"] }),
                filterAll: true,
                resizable: false,
              },

              {
                Header: "Mobile Number",
                id: "mobile_number",
                accessor: (d) => d.mobile_number,
                width: 120,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["mobile_number"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Reporting Time",
                id: "reporting_time",
                accessor: (d) => d.reporting_time,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                width: 120,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["reporting_time"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Start Time",
                id: "start_time",
                accessor: (d) => d.start_time,
                width: 90,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["start_time"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "End Time",
                id: "end_time",
                accessor: (d) => d.end_time,
                width: 90,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["end_time"] }),
                filterAll: true,
                resizable: false,
              },

              {
                Header: "Start Location",
                id: "start_location",
                width: 210,
                accessor: (d) => d.start_location,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["start_location"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "End Location",
                id: "end_location",
                width: 220,
                accessor: (d) => d.end_location,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["end_location"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Trip ID",
                id: "schedule_id",
                accessor: (d) => d.schedule_id,
                width: 80,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["schedule_id"] }),
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
  getTripMasterDetailsAPI,
  getDriverlistDropdownAPI,
  getVehiclelistDropdownAPI,
  getTripUploadAPI,
})(withRouter(TripUpdate));

//export default TripUpdate;
