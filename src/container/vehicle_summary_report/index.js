import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//import ReactExport from "react-data-export";
import { matchSorter } from "match-sorter";
import ReactLoader from "../../component/react-loader/react-loader.component";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import DatePicker from "react-datepicker";
import "../../container/vehicle_summary_report/index.scss";
import "react-datepicker/dist/react-datepicker.css";

import Workbook from "react-excel-workbook";
import vehicleSummaryReportApiActions from "../../redux/vehicle_summary_report/actions";
const { getvehicleSummaryReportAPI } = vehicleSummaryReportApiActions;
var now = new Date();
now.setDate(now.getDate());
class VehicleSummaryReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      start_date: now,
      end_date: now,
      //dataSet: [],
      inputSearch: "",
      filteredDatas: [],
    };
  }

  componentDidMount() {
    //getting all the data
    this.getVehicleSummaryReport();
  }

  getVehicleSummaryReport() {
    const { start_date, end_date } = this.state;
    this.setState({ loading: true });
    const payload = {
      user_id: "1",
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };
    this.props.getvehicleSummaryReportAPI(payload);
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
  componentDidUpdate(prevProps) {
    //console.log("vehiclesummarydetails", this.props);
    if (prevProps !== this.props) {
      if (
        this.props.VehicleSummaryReportApi?.vehicleSummaryReportApi?.result
          ?.data?.responseData?.length > 0
      ) {
        this.setState({
          data: this.props.VehicleSummaryReportApi.vehicleSummaryReportApi
            .result.data.responseData,
        });
        this.setState({
          filteredDatas:
            this.props.VehicleSummaryReportApi.vehicleSummaryReportApi.result
              .data.responseData,
        });
      } else {
        this.setState({ data: [] });
      }
    }
  }

  onSubmit = (e) => {
    this.getVehicleSummaryReport();
  };

  handleSearchvehicleSummary = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      inputSearch: search,
      filteredDatas: this.state.data.filter(
        (item) =>
          item.vehicleId && item.vehicleId.toLowerCase().includes(search)
      ),
    });
  };
  render() {
    let { inputSearch } = this.state;
    return (
      <div className="vehicle_summary_report">
        {this.props.VehicleSummaryReportApi?.vehicleSummaryReportApi
          ?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <div>
          <h3 className="vehicle_summary_report-head">Vehicle Summary</h3>
        </div>

        <div className="vehicle_summary_report_div">
          <div className="vehicle_summary_report_div_labels">
            <label className="vehicle_summary_report_div_labels_style">
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

            <label className="vehicle_summary_report_div_labels_style">
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
              className="vehicle_summary_report_div_button-submit"
              onClick={this.onSubmit}
            >
              <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
              Submit
            </button>
          </div>
          <div>
            <button
              className="vehicle_summary_report_div_button-submit-1"
              onClick={this.reset}
            >
              <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
              Reset
            </button>
          </div>

          <div className="vehicle_summary_report_search">
            <form>
              <input
                className="vehicle_summary_report_search-input"
                type="text"
                id="filter"
                placeholder="Search Table"
                value={inputSearch || ""}
                onChange={this.handleSearchvehicleSummary}
              />
            </form>
          </div>

          <div>
            <Workbook
              filename="vehicle-summary-Report.xlsx"
              element={
                <div className="vehicle_summary_report-download" data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="vehicle_summary_report-download-img"
                  />
                  
      <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </div>
                
              }
            >
              <Workbook.Sheet
                data={this.state.data}
                name="vehicle-summary-Report"
              >
                <Workbook.Column label="Vehicle ID" value="vehicleId" />
                <Workbook.Column label="Vehicle Name" value="vehicleName" />
                <Workbook.Column
                  label="Total Trip Time"
                  value="totalTripsCompleted"
                />
                <Workbook.Column
                  label="Total Distance travelled"
                  value="totalDistanceCovered"
                />

                <Workbook.Column
                  label="Total Power consumed"
                  value="totalPowerConsumed"
                />

                <Workbook.Column
                  label="Total KWH Charged"
                  value="totalKwhCharged"
                />
                <Workbook.Column label="On Time Trips" value="onTimeTrips" />
                <Workbook.Column label="Delayed Trips" value="delayedTrips" />

                <Workbook.Column label="Alerts" value="alerts" />
                <Workbook.Column label="Route Name" value="routeName" />
                <Workbook.Column label="Efficiency" value="efficiency" />
                <Workbook.Column
                  label="Max temperature"
                  value="maxTemperature"
                />
                <Workbook.Column
                  label="Min temperature"
                  value="minTemperature"
                />
              </Workbook.Sheet>
            </Workbook>
          </div>
        </div>

        <div className="vehicle_summary_report_table">
          <ReactTable
            NoDataComponent={() => null}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "500px",
              marginTop: "0%",
            }}
            data={this.state.filteredDatas}
            showPagination={true}
            columns={[
              {
                Header: "Reg No.",
                id: "vehicleId",
                accessor: (d) => d.vehicleId,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Chassis No.",
                id: "vehicleName",
                accessor: (d) => d.vehicleName,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: " Total Distance travelled",
                id: "totalDistanceCovered",
                accessor: (d) => d.totalDistanceCovered,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Total Power consumed",
                id: "totalPowerConsumed",
                accessor: (d) => d.totalPowerConsumed,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Total KWH Charged",
                id: "totalKwhCharged",
                accessor: (d) => d.totalKwhCharged,
                width: 160,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Efficiency (Kwh/km)",
                id: "efficiency",
                accessor: (d) => d.efficiency,
                width: 160,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "On Time Trips",
                id: "onTimeTrips",
                accessor: (d) => d.onTimeTrips,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Delayed Trips",
                id: "delayedTrips",
                accessor: (d) => d.delayedTrips,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Alerts",
                id: "alerts",
                accessor: (d) => d.alerts,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Route Name",
                id: "routeName",
                accessor: (d) => d.routeName,
                width: 160,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Max temperature",
                id: "maxTemperature",
                accessor: (d) => d.maxTemperature,
                width: 200,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Min temperature",
                id: "minTemperature",
                accessor: (d) => d.minTemperature,
                width: 200,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Total Trip Time",
                id: "totalTripsCompleted",
                accessor: (d) => d.totalTripsCompleted,
                width: 160,

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
                    <span className="records-info">{recordsInfoText}</span>
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
  getvehicleSummaryReportAPI,
})(withRouter(VehicleSummaryReport));
