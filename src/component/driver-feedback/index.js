import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
//import Buttons from "../button";
import "./index.scss";
//import * as User from "shared/app-data/user";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//import ReactExport from "react-data-export";
import { matchSorter } from "match-sorter";
import Workbook from "react-excel-workbook";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker";
import ReactLoader from "../react-loader/react-loader.component";
import checklistReportActions from "../../redux/checklist_report/actions";
//  const ExcelFile = ReactExport.ExcelFile;
//  const ExcelColumn = ReactExport.ExcelColumn;
//  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const { getChecklistReportAPI } = checklistReportActions;
var now = new Date();
now.setDate(now.getDate());
class CheckListReport extends Component {
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
    this.getChecklistReport();
  }

  getChecklistReport() {
    const { start_date, end_date } = this.state;
    this.setState({ loading: true });
    const payload = {
      api_key: "REPORT_CHECKLIST_DETAILS",
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };
    this.props.getChecklistReportAPI(payload);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (
        this.props.checklistReportApi?.checklistReportApi?.result?.data?.data
          ?.length > 0
      ) {
        this.setState({
          dataSet:
            this.props.checklistReportApi.checklistReportApi.result.data.data,
        });

        this.setState({
          filteredData:
            this.props.checklistReportApi.checklistReportApi.result.data.data,
        });
      } else {
        this.setState({ dataSet: [] });
      }
    }
  }

  onSubmit = (e) => {
    this.getChecklistReport();
  };

  driverfeedbackhandleChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.name && item.name.toLowerCase().includes(search)) ||
          (item.reg_no && item.reg_no.toLowerCase().includes(search))
      ),
    });
  };

  render() {
    let { searchInput } = this.state;
    return (
      <div>
        {this.props.checklistReportApi?.checklistReportApi?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}

        <div>
          <h3 className="checklistsummary">Driver Feedback</h3>
        </div>

        <div className="container-fluid">
          <div className="row d-flex ms-2">
            <div className="col-6 d-flex">
              <div className="driver-feedback_labels">
                <label className="driver-feedback_labels_styles">
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

                <label className="driver-feedback_labels_styles">
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
                  className="driver-feedback-button-submit-kpis"
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
                  className="driver-feedback-button-submit-kpis-1"
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
              <div className="driver-feedback-report">
                <form>
                  <input
                    className="driver-feedback-input"
                    type="text"
                    id="filter"
                    placeholder="Search Table (Driver Name / Reg No)"
                    value={searchInput || ""}
                    onChange={this.driverfeedbackhandleChange}
                  />
                </form>
              </div>
              <div>
                <Workbook
                  filename="Driver-Feedback.xlsx"
                  element={
                    <div className="driver-feedback-download"  data-tip data-for="registerTip">
                      Export
                      <img
                        src={require("../../assets/images/export/export.png")}
                        alt=""
                        className="driver-feedback-download-img"
                      />
                       <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                    </div>
                  }
                >
                  <Workbook.Sheet
                    data={this.state.dataSet}
                    name="Driver-Feedback"
                  >
                    <Workbook.Column label="Driver Name" value="name" />
                    <Workbook.Column label="Reg No" value="reg_no" />
                    <Workbook.Column
                      label="Checklist Name"
                      value="checklist_name"
                    />
                    <Workbook.Column
                      label="Checklist Type"
                      value="checklist_type"
                    />
                    <Workbook.Column
                      label="Checklist Description"
                      value="checklist_description"
                    />
                    <Workbook.Column
                      label="Reported Time"
                      value="created_timestamp"
                    />
                  </Workbook.Sheet>
                </Workbook>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="first-div">
          <div className="label_1">
            <label className="diverfeedback-label">Start Date:</label>
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
          
          
            <label className="diverfeedback-label-1">End Date:</label>
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
          <div style={{marginRight:"20px", marginLeft: "-140px" }}>
            <button className="feedback-button-submit" onClick={this.onSubmit}>
              <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
              Submit
            </button>
          </div>
          <div style={{marginRight:"20px"}}>
            <button className="feedback-button-submit" onClick={this.reset}>
              <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
              Reset
            </button>
          </div>

       

          <div className="driver-feedback-report">
          <form>
            <input
             
              className="driver-feedback-input"
              type="text"
              id="filter"
              placeholder="Search Table (Driver Name / Reg No)"
              value={searchInput || ""}
             onChange={this.driverfeedbackhandleChange}
            />
          </form>
        </div>


        <div style={{marginRight:"20px"}}>
            <Workbook
              filename="Driver-Feedback.xlsx"
              element={
                <div className="driver-feedback-download">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="driver-feedback-download-img"
                  />
                </div>
              }
            >
              <Workbook.Sheet data={this.state.dataSet} name="Driver-Feedback">
                <Workbook.Column label="Driver Name" value="name" />
                <Workbook.Column label="Reg No" value="reg_no" />
                <Workbook.Column
                  label="Checklist Name"
                  value="checklist_name"
                />
                <Workbook.Column
                  label="Checklist Type"
                  value="checklist_type"
                />
                <Workbook.Column
                  label="Checklist Description"
                  value="checklist_description"
                />
                <Workbook.Column
                  label="Reported Time"
                  value="created_timestamp"
                />
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
              height: "520px",
              marginTop: "0%",
              // width: "1300px",
              //marginLeft: "120px",
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
                Header: "Driver Name",
                id: "name",
                accessor: (d) => d.name,
                width: 220,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["name"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Reg No.",
                id: "reg_no",
                accessor: (d) => d.reg_no,
                width: 220,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["reg_no"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Checking Area",
                id: "checklist_name",
                accessor: (d) => d.checklist_name,
                width: 300,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["checklist_name"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Check Points",

                id: "checklist_type",
                accessor: (d) => d.checklist_type,
                width: 140,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["checklist_type"] }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Description",
                id: "checklist_description",
                accessor: (d) => d.checklist_description,
                width: 400,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["checklist_description"],
                  }),
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Reported Time",
                id: "created_timestamp",
                accessor: (d) => d.created_timestamp,
                width: 270,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["created_timestamp"],
                  }),
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
  getChecklistReportAPI,
})(withRouter(CheckListReport));

//export default CheckListReport;
