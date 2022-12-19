import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//import ReactExport from "react-data-export";
import { matchSorter } from "match-sorter";
//import ReactLoader from "../react-loader/react-loader.component";
import "../trip_summary_report/index.scss";
import moment from "moment";

import ReactTooltip from "react-tooltip";
import ReactLoader from "../../component/react-loader/react-loader.component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Workbook from "react-excel-workbook";
import tripSummaryReportApiActions from "../../redux/trip_summary_report/actions";
const { gettripSummaryReportAPI } = tripSummaryReportApiActions;
var now = new Date();
now.setDate(now.getDate());
class TripSummaryReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      start_date: now,
      end_date: now,
      dataSet: [],
      filteredData: [],
      inputSearch: "",
    };
    this.getTripSummaryReport = this.getTripSummaryReport.bind(this);
  }

  componentDidMount() {
    //getting all the data
    this.getTripSummaryReport();
  }

  getTripSummaryReport() {
    const { start_date, end_date } = this.state;
    this.setState({ loading: true });
    const payload = {
      user_id: "1",
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };
    this.props.gettripSummaryReportAPI(payload);
  }

  componentDidUpdate(prevProps) {
    // console.log("tripsummarydetails", this.props);
    if (prevProps !== this.props) {
      if (
        this.props.TripSummaryReportApi?.tripSummaryReportApi?.result?.data
          ?.responseData?.length > 0
      ) {
        this.setState({
          dataSet:
            this.props.TripSummaryReportApi.tripSummaryReportApi.result.data
              .responseData,
        });
        this.setState({
          filteredData:
            this.props.TripSummaryReportApi.tripSummaryReportApi.result.data
              .responseData,
        });
      } else {
        this.setState({ dataSet: [] });
      }
    }
  }

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
  onSubmit = (e) => {
    this.getTripSummaryReport();
  };

  handletripsummarySearch = (event) => {
    //console.log("serach ele");
    const search = event.target.value.toLowerCase();
    this.setState({
      inputSearch: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.route_name && item.route_name.toLowerCase().includes(search)) ||
          (item.driver_name &&
            item.driver_name.toLowerCase().includes(search)) ||
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
      <div className="trip_summary_report">
        {this.props.TripSummaryReportApi &&
          this.props.TripSummaryReportApi.tripSummaryReportApi &&
          this.props.TripSummaryReportApi.tripSummaryReportApi.loading &&
          this.getLoader()}
        <div>
          <h3 className="trip_summary_report-head">Trip Summary Report</h3>
        </div>

        <div className="trip_summary_report_div">
          <div className="trip_summary_report_div_labels">
            <label className="trip_summary_report_div_labels_style">
              Start Date:
            </label>
            <DatePicker
              name="start_date"
              selected={this.state.start_date}
              maxDate={moment().toDate()}
              value={this.state.start_date}
              onChange={(value) => this.Compare("start_date", value)}
              dateFormat="yyyy-MM-dd"
            />

            <label className="trip_summary_report_div_labels_style">
              End Date:
            </label>
            <DatePicker
              wrapperClassName="datepicker"
              name="end_date"
              selected={this.state.end_date}
              maxDate={moment().toDate()}
              value={this.state.end_date}
              onChange={(value) => this.Compare("end_date", value)}
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div>
            <button
              className="trip_summary_report_div_button-submit"
              onClick={this.onSubmit}
            >
              <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
              Submit
            </button>
          </div>
          <div>
            <button
              className="trip_summary_report_div_button-submit-1"
              onClick={this.reset}
            >
              <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
              Reset
            </button>
          </div>

          <div className="trip_summary_report_search">
            <form>
              <input
                className="trip_summary_report_search-input"
                type="text"
                id="filter"
                placeholder="Search ( Reg No / Driver Name / Route Name )"
                value={inputSearch || ""}
                onChange={this.handletripsummarySearch}
              />
            </form>
          </div>

          <div>
            <Workbook
              filename="Trip-summary-report.xlsx"
              element={
                <div className="trip_summary_report_download"  data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="trip_summary_report_download-img"
                  />
                   <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </div>
              }
            >
              <Workbook.Sheet
                data={this.state.dataSet}
                name="Trip-summary-report"
              >
                <Workbook.Column label="ID" value="id" />
                <Workbook.Column label="Trip ID" value="trip_id" />
                <Workbook.Column label="Trip Date" value="trip_Date" />
                <Workbook.Column label="Status" value="status" />
                <Workbook.Column label="Start Time" value="start_time" />
                <Workbook.Column label="End Time" value="end_time" />
                <Workbook.Column label="Reg No" value="reg_no" />
                <Workbook.Column label="Vin No" value="vin_no" />
                <Workbook.Column label="Route ID" value="route_id" />
                <Workbook.Column label="Route Name" value="route_name" />
                <Workbook.Column label="Driver ID" value="driver_id" />
                <Workbook.Column label="Driver Name" value="driver_name" />
                <Workbook.Column label="Start SOC" value="start_soc" />
                <Workbook.Column label="End SOC" value="end_soc" />
                <Workbook.Column label="Total SOC" value="totalSoc" />
                <Workbook.Column label="Start ODO" value="start_odo" />
                <Workbook.Column label="End ODO" value="end_odo" />
                <Workbook.Column
                  label="Distance Travelled"
                  value="distance_travelled"
                />
                <Workbook.Column label="Efficiency" value="efficiency" />
                <Workbook.Column label="Charging Time" value="charging_time" />
                <Workbook.Column
                  label="No of Stops"
                  value="repono_of_stopsrtingTime"
                />
                <Workbook.Column
                  label="Charger on Route"
                  value="charger_on_route"
                />
                <Workbook.Column
                  label="Planned Distance"
                  value="plannedDistance"
                />
                <Workbook.Column
                  label="Created Timestamp"
                  value="createdTimestamp"
                />
              </Workbook.Sheet>
            </Workbook>
          </div>
        </div>

        <div className="trip_summary_report_table">
          <ReactTable
            NoDataComponent={() => null}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "500px",
              marginTop: "0%",
            }}
            data={this.state.filteredData}
            showPagination={true}
            columns={[
              {
                Header: "ID",
                id: "id",
                accessor: (d) => d.id,
                width: 70,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Trip ID",
                id: "trip_id",
                accessor: (d) => d.trip_id,
                width: 80,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Trip Date",
                id: "trip_Date",
                accessor: (d) => d.trip_Date,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Route ID",
                id: "route_id",
                accessor: (d) => d.route_id,
                width: 90,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Route Name",
                id: "route_name",
                accessor: (d) => d.route_name,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Reg No.",
                id: "reg_no",
                accessor: (d) => d.reg_no,
                width: 120,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Vin",
                id: "vin_no",
                accessor: (d) => d.vin_no,
                width: 160,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Driver ID",
                id: "driver_id",
                accessor: (d) => d.driver_id,
                width: 90,

                resizable: false,
              },
              {
                Header: "Driver Name",
                id: "driver_name",
                accessor: (d) => d.driver_name,
                width: 160,

                resizable: false,
              },

              {
                Header: "Status",
                id: "status",
                accessor: (d) => d.status,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Start ODO",
                id: "start_odo",
                accessor: (d) => d.start_odo,
                width: 100,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "End ODO",
                id: "end_odo",
                accessor: (d) => d.end_odo,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Distance Travelled",
                id: "distance_travelled",
                accessor: (d) => d.distance_travelled,
                width: 130,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Start SOC",
                id: "start_soc",
                accessor: (d) => d.start_odo,
                width: 100,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "End SOC",
                id: "end_soc",
                accessor: (d) => d.end_odo,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Total SOC",
                id: "totalSoc",
                accessor: (d) => d.totalSoc,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Efficiency",
                id: "efficiency",
                accessor: (d) => d.efficiency,
                width: 100,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "No. of Stops",
                id: "no_of_stops",
                accessor: (d) => d.no_of_stops,
                width: 120,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Start Time ",
                id: "start_time",
                accessor: (d) => d.start_time,
                width: 120,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "End Time",
                id: "end_time",
                accessor: (d) => d.end_time,
                width: 120,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Total Time",
                id: "totalTime",
                accessor: (d) => d.totalTime,
                width: 120,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Planned Distance",
                id: "plannedDistance",
                accessor: (d) => d.plannedDistance,
                width: 150,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Charger on Route",
                id: "charger_on_route",
                accessor: (d) => d.charger_on_route,
                width: 130,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Charging Time",
                id: "charging_time",
                accessor: (d) => d.charging_time,
                width: 120,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Created Timestamp",
                id: "tripOcreatedTimestamprder",
                accessor: (d) => d.createdTimestamp,
                width: 190,

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
  gettripSummaryReportAPI,
})(withRouter(TripSummaryReport));
