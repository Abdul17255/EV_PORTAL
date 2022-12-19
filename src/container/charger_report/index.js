import React, { Component } from "react";
import "../charger_report/index.scss";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//import ReactExport from "react-data-export";
import { matchSorter } from "match-sorter";

import ReactTooltip from "react-tooltip";
import ReactLoader from "../../component/react-loader/react-loader.component";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Workbook from "react-excel-workbook";
import chargersReportApiActions from "../../redux/charger_report/actions";

const { getChargersReportAPI } = chargersReportApiActions;

var now = new Date();
now.setDate(now.getDate());
class ChargerReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: now,
      end_date: now,
      chargersdata: [],
      filterData: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    this.getChargersReport();
  }

  getChargersReport() {
    const { start_date, end_date } = this.state;
    this.setState({ loading: true });
    const payload = {
      user_id: "1",
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };
    this.props.getChargersReportAPI(payload);
  }
  componentWillReceiveProps(nextProps) {
    //console.log("chargesreport", nextProps);
    if (
      nextProps?.ChargersReportApi?.chargersReportApi?.result?.data
        ?.responseData
    ) {
      this.setState({
        chargersdata:
          nextProps.ChargersReportApi.chargersReportApi.result.data
            .responseData,
      });
      this.setState({
        filterData:
          nextProps.ChargersReportApi.chargersReportApi.result.data
            .responseData,
      });
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
    this.getChargersReport();
  };

  chargersreporthandleChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filterData: this.state.chargersdata.filter(
        (item) =>
          (item.chargerId && item.chargerId.toLowerCase().includes(search)) ||
          (item.reg_no && item.reg_no.toLowerCase().includes(search))
      ),
    });
  };
  render() {
    let { searchInput } = this.state;
    return (
      <div className="charger_report">
        {this.props.ChargersReportApi?.chargersReportApi?.loading ? (
          <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}

        <h3 className="charger_report-head">Charger Report</h3>

        <div className="charger_report_div">
          <div className="charger_report_div_labels">
            <label className="charger_report_div_labels_style">
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

            <label className="charger_report_div_labels_style">End Date:</label>
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
              className="charger_report_div_button-submit"
              onClick={this.onSubmit}
            >
              <i className="fa fa-check" style={{ paddingRight: "5px" }}></i>
              Submit
            </button>
          </div>
          <div>
            <button
              className="charger_report_div_button-submit-1"
              onClick={this.reset}
            >
              <i className="fa fa-refresh" style={{ paddingRight: "5px" }}></i>{" "}
              Reset
            </button>
          </div>

          <div className="charger_report_search">
            <form>
              <input
                className="charger_report_search-input"
                type="text"
                id="filter"
                placeholder="Search Table(Charger ID)"
                value={searchInput || ""}
                onChange={this.chargersreporthandleChange}
              />
            </form>
          </div>

          <div>
            <Workbook
              filename="chargers-Report.xlsx"
              element={
                <div className="charger_report-download"  data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="charger_report-download-img"
                  />
                  
 <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </div>
              }
            >
              <Workbook.Sheet
                data={this.state.chargersdata}
                name="chargers-Report"
              >
                <Workbook.Column label="Charger ID" value="chargerId" />
                <Workbook.Column label="Date" value="date" />
                <Workbook.Column label="AC Consumption" value="acConsumption" />
                <Workbook.Column
                  label="DC consumption by Charger"
                  value="dcConsumptionByCharger"
                />

                <Workbook.Column
                  label="Power Drawn By Vehicle"
                  value="powerDrawnByVehicle"
                />

                <Workbook.Column
                  label="AC-DC conversion Charger"
                  value="ac_dc_conversionCharger"
                />
                <Workbook.Column
                  label="DC-DC Power conversion"
                  value="dc_dc_powerConversion"
                />
                <Workbook.Column
                  label="AC Input TO Vehicle Battery"
                  value="acInputToDcVehicleBattery"
                />
              </Workbook.Sheet>
            </Workbook>
          </div>
        </div>

        <div className="charger_report_table">
          <ReactTable
            NoDataComponent={() => null}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "500px",
              marginTop: "0%",
            }}
            data={this.state.filterData}
            showPagination={true}
            columns={[
              {
                Header: "Charger ID",
                id: "chargerId",
                accessor: (d) => d.chargerId,
                width: 150,

                resizable: false,
              },
              {
                Header: "Date",
                id: "date",
                accessor: (d) => d.date,
                width: 240,

                filterAll: true,
                resizable: false,
              },
              {
                Header: " AC Consumption",
                id: "acConsumption",
                accessor: (d) => d.acConsumption,
                width: 270,

                resizable: false,
              },
              {
                Header: "DC consumption by Charger",
                id: "dcConsumptionByCharger",
                accessor: (d) => d.dcConsumptionByCharger,
                width: 220,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Power Drawn By Vehicle",
                id: "powerDrawnByVehicle",
                accessor: (d) => d.powerDrawnByVehicle,
                width: 220,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "AC-DC conversion Charger",
                id: "ac_dc_conversionCharger",
                accessor: (d) => d.ac_dc_conversionCharger,
                width: 260,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "DC-DC Power conversion",
                id: "dc_dc_powerConversion",
                accessor: (d) => d.dc_dc_powerConversion,
                width: 260,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "AC Input TO Vehicle Battery",
                id: "acInputToDcVehicleBattery",
                accessor: (d) => d.acInputToDcVehicleBattery,
                width: 260,

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
  getChargersReportAPI,
})(withRouter(ChargerReport));
