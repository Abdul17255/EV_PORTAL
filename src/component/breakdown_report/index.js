import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import BreakdownButtons from "../../component/breakdown_report_button";
import "./index.scss";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//import ReactExport from "react-data-export";
import { matchSorter } from "match-sorter";
import moment from "moment";
import Workbook from "react-excel-workbook";
import ReactLoader from "../react-loader/react-loader.component";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
//Actions
import breakdownReportActions from "../../redux/breakdown_report/actions";

//  const ExcelFile = ReactExport.ExcelFile;
//  const ExcelColumn = ReactExport.ExcelColumn;
//  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const { getBreakdownReportAPI } = breakdownReportActions;
var now = new Date();
now.setDate(now.getDate());
class BreakdownReport extends Component {
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
      dataSet: [],
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
    this.getBreakdownReport();
  }

  getBreakdownReport() {
    const { start_date, end_date } = this.state;
    this.setState({ loading: true });
    const payload = {
      api_key: "REPORT_COMPLAINT_DETAILS",
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };
    this.props.getBreakdownReportAPI(payload);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      //console.log("checking props", this.props);
      if (
        this.props.breakdownReportApi?.breakdownReportApi?.result?.data?.data
          ?.length > 0
      ) {
        this.setState({
          dataSet:
            this.props.breakdownReportApi.breakdownReportApi.result.data.data,
        });
        this.setState({
          filteredData:
            this.props.breakdownReportApi.breakdownReportApi.result.data.data,
        });
      } else {
        this.setState({ dataSet: [] });
      }
    }
  }

  onSubmit = (e) => {
    this.getBreakdownReport();
  };

  breakdowndetrailshandleChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.name && item.name.toLowerCase().includes(search)) ||
          (item.reg_no && item.reg_no.toLowerCase().includes(search)) ||
          (item.location && item.location.toLowerCase().includes(search))
      ),
    });
  };

  render() {
    let { searchInput } = this.state;
    // const { data } = this.state;
    // console.log("dropdown props", this.props);

    return (
      <div>
        {this.props.tripReportApi?.tripReportApi?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}

        <div>
          <h3 className="breakdownsummary">Breakdown Details</h3>
        </div>
        <div className="container-fluid">
          <div className="row d-flex ms-2">
            <div className="col-6 d-flex">
              <div className="labels">
                <label className="labels_styles">Start Date:</label>
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

                <label className="labels_styles">End Date:</label>
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
                <button className="button-submit-kpis" onClick={this.onSubmit}>
                  <i
                    className="fa fa-check"
                    style={{ paddingRight: "5px" }}
                  ></i>
                  Submit
                </button>
              </div>
              <div>
                <button className="button-submit-kpis-1" onClick={this.reset}>
                  <i
                    className="fa fa-refresh"
                    style={{ paddingRight: "5px" }}
                  ></i>{" "}
                  Reset
                </button>
              </div>
            </div>
            <div className="col-6 d-flex">
              <div className="Breakdown-Details-report">
                <form>
                  <input
                    className="Breakdown-Details-input"
                    type="text"
                    id="filter"
                    placeholder="Search Table (Driver Name / Registartion Number / Location)"
                    value={searchInput || ""}
                    onChange={this.breakdowndetrailshandleChange}
                  />
                </form>
              </div>
              <div>
                <Workbook
                  filename="Breakdown-Details.xlsx"
                  element={
                    <div className="braekdown-details-download"  data-tip data-for="registerTip">
                      Export
                      <img
                        src={require("../../assets/images/export/export.png")}
                        alt=""
                        className="braekdown-details-download-img"
                      />
                       <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                    </div>
                  }
                >
                  <Workbook.Sheet
                    data={this.state.dataSet}
                    name="breakdown-details"
                  >
                    <Workbook.Column
                      label="Complaint ID"
                      value="complaint_id"
                    />
                    <Workbook.Column
                      label="Breakdown Details"
                      value="description"
                    />
                    <Workbook.Column label="Driver Name" value="name" />
                    <Workbook.Column
                      label="Registration Number"
                      value="reg_no"
                    />

                    <Workbook.Column label="Location" value="location" />

                    <Workbook.Column
                      label="Phone Number"
                      value="phone_number"
                    />
                    <Workbook.Column
                      label="Alternate Phone Number"
                      value="alternate_phone_number"
                    />
                    <Workbook.Column
                      label="Complaint Date"
                      value="complaint_date"
                    />
                  </Workbook.Sheet>
                </Workbook>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="first-divss">
          <div className="labelss"></div> */}

        {/* <div style={{ marginRight: "20px", marginLeft: "-140px" }}>
            <button className="button-submit-kpis" onClick={this.onSubmit}>
              <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
              Submit
            </button>
          </div>
          <div style={{ marginRight: "20px" }}>
            <button className="button-submit-kpis" onClick={this.reset}>
              <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
              Reset
            </button>
          </div> */}

        {/*        
        </div> */}

        <div>
          {this.props.breakdownReportApi?.breakdownReportApi?.loading ? (
            <div className="loader-overlay">
              <div className="loader-container">
                <ReactLoader />
              </div>
            </div>
          ) : null}
          <ReactTable
            NoDataComponent={() => null}
            // previousText={myCustomPreviousText}
            // nextText={myCustomNextText}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "500px",
              marginTop: "0%",
              // width: "1000px",
            }}
            data={this.state.filteredData}
            showPagination={true}
            // // defaultPageSize={initialSize}
            // //pageSize={updatedSize}
            // loading={this.state.loading}
            // filterable
            // defaultFilterMethod={(filter, row) =>
            //   String(row[filter.id]) === filter.value
            // }
            columns={[
              {
                Header: "Action",
                width: 100,
                Cell: (props) => (
                  <BreakdownButtons
                    data={props}
                    driverDropdown={this.state.driverList}
                    vehicleDropdown={this.state.vehicleList}
                  ></BreakdownButtons>
                ),
                resizable: false,
              },
              {
                Header: "Complaint ID",
                id: "complaint_id",
                accessor: (d) => d.complaint_id,
                width: 100,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["complaint_id"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Breakdown Details",
                id: "description",
                accessor: (d) => d.description,
                width: 240,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["description"],
                  }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Breakdown Comments",
                id: "tech_description",
                accessor: (d) => d.tech_description,
                width: 260,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["tech_description"],
                  }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Driver Name",
                id: "name",
                accessor: (d) => d.name,
                width: 120,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["name"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Registration Number",
                id: "reg_no",
                accessor: (d) => d.reg_no,
                width: 150,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["reg_no"],
                  }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Location",
                id: "location",
                accessor: (d) => d.location,
                width: 270,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["location"] }),
                filterAll: true,
                resizable: false,
              },

              {
                Header: "Phone Number ",
                id: "phone_number",
                accessor: (d) => d.phone_number,
                width: 150,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["phone_number"] }),
                filterAll: true,
                resizable: false,
              },
              // {
              //   Header: "Alternate Phone Number",
              //   id: "alternate_phone_number",
              //   accessor: (d) => d.alternate_phone_number,
              //   width: 180,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, {
              //       keys: ["alternate_phone_number"],
              //     }),
              //   filterAll: true,
              //   resizable: false,
              // },
              {
                Header: "Complaint Date",
                id: "complaint_date",
                accessor: (d) => d.complaint_date,
                width: 160,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["complaint_date"] }),
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
    // trip: state.trip.viewTrip.result,
    // editTrip: state.trip.editTrip,
    // tripReport: state.trip.tripReport.result,
    // //trip: state.trip.tripReport.result,
    // deleteTrip: state.trip.deleteTrip,
  };
};

export default connect(mapStateToProps, {
  getBreakdownReportAPI,
})(withRouter(BreakdownReport));

//export default BreakdownReport;
