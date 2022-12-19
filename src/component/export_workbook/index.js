import React, { Component } from "react";
import Workbook from "react-excel-workbook";
import ReactTooltip from "react-tooltip";
class ExportWorkbook extends Component {
  render() {
    console.log("this.props excel", this.props.data);
    return (
      <div>
        {this.props.component == "chargeSummary" && (
          <div>
            <Workbook
              filename="charge-summary.xlsx"
              element={
                <span className="export" data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="export-image"
                  />
                  <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </span>
              }
            >
              <Workbook.Sheet data={this.props.data} name="charge-summary">
                <Workbook.Column
                  label="Charging Station Name"
                  value="charging_station_name"
                />
                <Workbook.Column
                  label="Charging point name"
                  value="charge_point_identifier"
                />
                <Workbook.Column label="Register Number" value="reg_no" />
                <Workbook.Column label="Timestamp" value="created_timestamp" />
                <Workbook.Column
                  label="Start Timestamp"
                  value="start_timestamp"
                />

                <Workbook.Column label="End Timestamp" value="end_timestamp" />

                <Workbook.Column
                  label="AC Power input To Charger"
                  value="ac_power_input_to_charger"
                />

                <Workbook.Column
                  label="DC Power aCharging Point "
                  value="dc_power_at_charging_point"
                />
                <Workbook.Column
                  label="AC to DC Conversion"
                  value="ac_dc_conversion"
                />
                <Workbook.Column
                  label="Power drawn by Vehicle"
                  value="power_consumed_by_vehicle"
                />

                <Workbook.Column label="START SOC" value="start_soc" />

                <Workbook.Column label="END SOC" value="end_soc" />

                <Workbook.Column
                  label="Time Taken for Full Charge"
                  value="time_taken"
                />
              </Workbook.Sheet>
            </Workbook>
          </div>
        )}
        {this.props.component == "driverDetails" && (
          <div>
            <Workbook
              filename="driver-details.xlsx"
              element={
                <span className="export" data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="export-image"
                  />
                  <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </span>
              }
            >
              <Workbook.Sheet data={this.props.data} name="driver-details">
                <Workbook.Column label="Driver Name" value="driverName" />
                <Workbook.Column label="Status" value="status" />
                <Workbook.Column label="Driver ID" value="driverId" />
                <Workbook.Column label="Report Time" value="reportTime" />
              </Workbook.Sheet>
            </Workbook>
          </div>
        )}
      </div>
    );
  }
}

export default ExportWorkbook;
