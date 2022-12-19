import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
//import Buttons from "../../component/button";
import "./index.scss";
//import * as User from "shared/app-data/user";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Workbook from "react-excel-workbook";
//import ReactExport from "react-data-export";
import { matchSorter } from "match-sorter";
import moment from "moment";
import ReactLoader from "../react-loader/react-loader.component";
import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
// //Actions
import driverReportingDetailsActions from "../../redux/driver_reporting_details/actions";

const { getDriverReportingDetailsAPI } = driverReportingDetailsActions;

var now = new Date();
now.setDate(now.getDate());
class ReportingDetails extends Component {
  constructor(props) {
    super(props);
    //Initial data from API
    //let loginId = User.getLoginId();
    this.state = {
      // loginId,
      data: [],
      pages: null,
      loading: true,
      message: "",
      messageType: 0,
      driverdataSet: [],
      selected: null,
      start_date: now,
      end_date: now,
      filteredData: [],
      searchInput: "",
    };
  }
  reset = () => {
    this.setState({
      start_date: now,
      end_date: now,
    });
  };
  Compare = (name, value) => {
    if (name == "start_date") {
      //if
      this.setState({ start_date: value });
    } else if (name == "end_date") {
      if (
        this.state.start_date != "" &&
        this.state.end_date != "" &&
        value >= this.state.start_date
      ) {
        this.setState({ end_date: value });
      } else {
        if (value < this.state.start_date) {
          alert("End Date should be greater than Start Date");
        }
      }
    }
  };

  componentDidMount() {
    //getting all the data
    this.getReportingDetails();
  }

  // getReportingDetails() {
  //   const { start_date, end_date } = this.state;
  //   this.setState({ loading: true });
  //   const payload = {
  //     api_key: "REPORT_TRIP_DETAILS",
  //     start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
  //     end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
  //   };
  //   this.props.getReportingDetails(payload);
  // }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      // console.log("this.props",this.props)
      if (
        this.props.driverReportingDetailsApi?.driverReportingDetailsApi?.result
          ?.data?.data?.length > 0
      ) {
        this.setState({
          driverdataSet:
            this.props.driverReportingDetailsApi.driverReportingDetailsApi
              .result.data.data,
        });

        this.setState({
          filteredData:
            this.props.driverReportingDetailsApi.driverReportingDetailsApi
              .result.data.data,
        });
      } else {
        this.setState({ driverdataSet: [] });
      }
    }
  }

  onSubmit = (e) => {
    this.getReportingDetails();
  };

  getReportingDetails() {
    const { start_date, end_date } = this.state;
    const payload = {
      api_key: "REPORT_DRIVER_REPORTING_DETAILS",
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };
    this.props.getDriverReportingDetailsAPI(payload);
  }
  // getSummary = () => {
  //   document.getElementById("summaryExcelDownloadBtn").click();
  // };

  reportingdetailshandleChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.driverdataSet.filter(
        (item) =>
          (item.name && item.name.toLowerCase().includes(search)) ||
          (item.driverid && item.driverid.toLowerCase().includes(search))
      ),
    });
  };
  render() {
    let { searchInput } = this.state;
    // const { data } = this.state;
    // console.log("dropdown props", this.props);
    return (
      <div>
        {this.props.driverReportingDetailsApi?.driverReportingDetailsApi
          ?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}

        <div>
          <h3 className="tripsummary">Reporting Details</h3>
        </div>

        <div className="container-fluid">
          <div className="row d-flex ms-2">
            <div className="col-6 d-flex">
              <div className="reporting_details_labels">
                <label className="reporting_details_labels_styles">
                  Start Date:
                </label>
                <DatePicker
                  name="start_date"
                  selected={this.state.start_date}
                  maxDate={moment().toDate()}
                  // minDate={addDays(new Date(), -90)}
                  value={this.state.start_date}
                  // onChange={(value) => {
                  //   this.setState({ start_date: value }, () => this.Compare());
                  // }}
                  onChange={(value) => this.Compare("start_date", value)}
                  dateFormat="yyyy-MM-dd"
                />

                <label className="reporting_details_labels_styles">
                  End Date:
                </label>
                <DatePicker
                  wrapperClassName="datepicker"
                  name="end_date"
                  selected={this.state.end_date}
                  maxDate={moment().toDate()}
                  // minDate={addDays(new Date(), -90)}
                  value={this.state.end_date}
                  // onChange={(value) => {
                  //   this.setState({ end_date: value }, () => this.Compare());
                  // }}
                  onChange={(value) => this.Compare("end_date", value)}
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <div>
                <button
                  className="reporting_details_button-submit-kpis"
                  onClick={this.onSubmit}
                >
                  <i
                    className="fa fa-check"
                    style={{ paddingRight: "5px" }}
                  ></i>
                  Submit
                </button>
              </div>
              <div>
                <button
                  className="reporting_details_button-submit-kpis-1"
                  onClick={this.reset}
                >
                  <i
                    className="fa fa-refresh"
                    style={{ paddingRight: "5px" }}
                  ></i>{" "}
                  Reset
                </button>
              </div>
            </div>
            <div className="col-6 d-flex">
              <div className="reporting_details_report">
                <form>
                  <input
                    className="reporting_details_input"
                    type="text"
                    id="filter"
                    placeholder="Search Table (Driver Name / Driver ID)"
                    value={searchInput || ""}
                    onChange={this.reportingdetailshandleChange}
                  />
                </form>
              </div>
              <div>
                <Workbook
                  filename="Reporting-Details.xlsx"
                  element={
                    <div className="reporting_details_download" data-tip data-for="registerTip">
                      Export
                      <img
                        src={require("../../assets/images/export/export.png")}
                        alt=""
                        className="reporting_details_download-img"
                      />
                      <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                    </div>
                  }
                >
                  <Workbook.Sheet
                    data={this.state.driverdataSet}
                    name="Reporting-Details"
                  >
                  <Workbook.Column label="Driver ID" value="driverid" />
                    <Workbook.Column label="Driver name" value="name" />
                    <Workbook.Column
                      label="Reporting timestamp"
                      value="reportingtime"
                    />
                    <Workbook.Column label="Location" value="location" />
                  </Workbook.Sheet>
                </Workbook>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="tripsummary-first-div">
            <div className="tripsummary-labels">
              <label className="tripsummary-labels_style-1">Start Date:</label>
              <DatePicker
                name="start_date"
                selected={this.state.start_date}
                maxDate={moment().toDate()}
                // minDate={addDays(new Date(), -90)}
                value={this.state.start_date}
                // onChange={(value) => {
                //   this.setState({ start_date: value }, () => this.Compare());
                // }}
                onChange={(value) => this.Compare("start_date", value)}
                dateFormat="yyyy-MM-dd"
              />

              <label className="tripsummary-labels_style">End Date:</label>
              <DatePicker
                wrapperClassName="datepicker"
                name="end_date"
                selected={this.state.end_date}
                maxDate={moment().toDate()}
                // minDate={addDays(new Date(), -90)}
                value={this.state.end_date}
                // onChange={(value) => {
                //   this.setState({ end_date: value }, () => this.Compare());
                // }}
                onChange={(value) => this.Compare("end_date", value)}
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div style={{ marginLeft: "-140px" }}>
              <button
                className="tripsummary-button-submit-kpi"
                onClick={this.onSubmit}
              >
                <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
                Submit
              </button>
            </div>
            <div>
              <button
                className="tripsummary-button-submit-kpi"
                onClick={this.reset}
              >
                <i
                  className="fa fa-refresh"
                  style={{ paddingRight: "5px" }}
                ></i>{" "}
                Reset
              </button>
            </div>

          
            <div className="Reporting-Details-report">
          <form>
            <input
             
              className="Reporting-Details-input"
              type="text"
              id="filter"
              placeholder="Search Table (Driver Name / Driver ID)"
              value={searchInput || ""}
              onChange={this.reportingdetailshandleChange}
            />
          </form>
        </div>

        <div>
              <Workbook
                filename="Reporting-Details.xlsx"
                element={
                  <div className="Reporting-Details-download">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="Reporting-Details-download-img"
                  />
                </div>
                }
              >
                <Workbook.Sheet
                  data={this.state.driverdataSet}
                  name="Reporting-Details"
                >
                  <Workbook.Column label="Driver name" value="name" />
                  <Workbook.Column
                    label="Reporting timestamp"
                    value="reportingtime"
                  />
                  <Workbook.Column label="Location" value="location" />
                </Workbook.Sheet>
              </Workbook>
             
            </div>


          </div> */}

        <div className="upload-container icon_pos">
          {/* <h2 className="msg">
            Note: Future trips will be reflected in Excel Sheet
          </h2> */}
          <ReactTable
            NoDataComponent={() => null}
            // previousText={myCustomPreviousText}
            // nextText={myCustomNextText}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "500px",
              // width: "1570px",
              marginLeft: "30px",
              marginTop: "0%",
            }}
            data={this.state.filteredData}
            // // defaultPageSize={initialSize}
            // //pageSize={updatedSize}
            // loading={this.state.loading}
            // filterable
            // defaultFilterMethod={(filter, row) =>
            //   String(row[filter.id]) === filter.value
            // }
            columns={[
              {
                Header: "Driver ID",
                id: "driverid",
                accessor: (d) => d.driverid,
                width: 100,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["driverid"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Driver name",
                id: "name",
                accessor: (d) => d.name,
                width: 400,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["name"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Reporting timestamp",
                id: "reportingtime",
                accessor: (d) => d.reportingtime,
                width: 419,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["reportingtime"],
                  }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Location",
                id: "location",
                accessor: (d) => d.location,
                width: 550,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["location"] }),
                filterAll: true,
                resizable: false,
              },
            ]}
            defaultPageSize={50}
            showPagination={true}
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
  getDriverReportingDetailsAPI,
})(withRouter(ReportingDetails));

//export default ReportingDetails;
