import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import VehicleMasterButton from "../master_vehicle_button";
import "../master_driver_update/index.scss";
//import * as User from "shared/app-data/user";
import ReactTooltip from "react-tooltip";
import Workbook from "react-excel-workbook";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../master_vehicle_update/index.scss";
import vehicleMasterApiActions from "../../redux/master_vehicle/actions";
import ReactLoader from "../../component/react-loader/react-loader.component";
const {
  getVehicleMasterAPI,
  DELETE_VEHICLEMASTER_SUCCESS,
  DELETE_VEHICLEMASTER_FAILURE,
} = vehicleMasterApiActions;
class VehicleMasterUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loginId,
      // data1,
      dataSet: [],
      pages: null,
      loading: true,
      message: "",
      messageType: 0,
      dataSet: [],
      selected: null,
      // vehicleList: [],
      // driverList: [],
      filteredData: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    //getting all the data
    this.getVehicleMaster();
  }

  getVehicleMaster() {
    this.setState({ loading: true });
    const payload = {
      user_id: "1",
    };
    this.props.getVehicleMasterAPI(payload);
  }

  onClickCloseMessage() {
    this.messageTimeOut = null;
    this.setState({
      message: "",
      messageType: 0,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (
        this.props.VehicleMasterApi?.vehicleMasterApi?.result?.data
          ?.responseData?.length > 0
      ) {
        this.setState({
          dataSet:
            this.props.VehicleMasterApi.vehicleMasterApi.result.data
              .responseData,
        });
        this.setState({
          filteredData:
            this.props.VehicleMasterApi.vehicleMasterApi.result.data
              .responseData,
        });
      } else {
        this.setState({ dataSet: [] });
      }

      if (prevProps.deleteTrip !== this.props.deleteTrip) {
        if (
          this.props.deleteTrip.actionType === DELETE_VEHICLEMASTER_SUCCESS &&
          this.props.deleteTrip.loading === false
        ) {
          this.setState({
            message: "Vehicle has been deleted successfully",
            messageType: 1,
          });
          this.messageTimeOut = setTimeout(
            () => this.onClickCloseMessage(),
            3 * 1000
          );
          this.getVehicleMaster();
        } else if (
          this.props.deleteTrip.actionType === DELETE_VEHICLEMASTER_FAILURE &&
          this.props.deleteTrip.loading === false
        ) {
          this.setState({
            message: "Vehicle can not be deleted",
            messageType: -1,
          });
          this.messageTimeOut = setTimeout(
            () => this.onClickCloseMessage(),
            3 * 1000
          );
        }
      }
    }
  }

  handleVehiclemaster = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.regNo && item.regNo.toLowerCase().includes(search)) ||
          (item.vin && item.vin.toLowerCase().includes(search)) ||
          (item.modal && item.modal.toLowerCase().includes(search))
      ),
    });
  };

  render() {
    let { searchInput } = this.state;

    return (
      <div>
        {this.props.VehicleMasterApi?.vehicleMasterApi?.loading ? (
          <div className="master-driver-loader-overlay">
          <div className="master-driver-loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <div className="Vehicle-update-subhead">
          {/* <h3 className="Vehicle-update">Vehicle View</h3> */}

          {/* <div className="table-items-count">
            Items: {this.state.filteredData.length}
          </div> */}
          <div className="search-Vehicle-update-report ">
            <form>
              <input
                style={{ width: "400px" }}
                className="search-Vehicle-update-input"
                type="text"
                id="filter"
                placeholder="Search Table ( Driver Name / Reg No. / Route ID )"
                value={searchInput || ""}
                onChange={this.handleVehiclemaster}
              />
            </form>
          </div>


          <div>
            <Workbook
              filename="vehicle-master-Report.xlsx"
              element={
                <div className="vehicle-master-Report-download" data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="vehicle-master-Report-download-img"
                  />
                  
      <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </div>
                
              }
            >
              <Workbook.Sheet
                data={this.state.dataSet}
                name="vehicle-master-Report"
              >
                <Workbook.Column label="ID" value="id" />
                <Workbook.Column label="Reg No" value="regNo" />
                <Workbook.Column
                  label="Vin"
                  value="vin"
                />
                <Workbook.Column
                  label="Vehicle ID"
                  value="vehicleId"
                />
               

                <Workbook.Column
                  label="Device ID"
                  value="deviceId"
                />

                <Workbook.Column
                  label="Model"
                  value="model"
                />
                <Workbook.Column label="Make" value="make" />
               
                <Workbook.Column label="Type" value="type" />
                <Workbook.Column label="Battery Capacity" value="batteryCapacity" />
              
              </Workbook.Sheet>
            </Workbook>
          </div>

        </div>
        <div className="Vehicle-update-table">
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
                  <VehicleMasterButton
                    data={props}
                   
                  ></VehicleMasterButton>
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
                Header: "Reg. No",
                id: "regNo",
                accessor: (d) => d.regNo,
                width: 200,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Vin",
                id: "vin",
                accessor: (d) => d.vin,
                width: 180,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Vehicle ID",
                id: "vehicleId",
                accessor: (d) => d.vehicleId,
                width: 90,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Device ID",
                id: "deviceId",
                accessor: (d) => d.deviceId,
                width: 120,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Model",
                id: "model",
                accessor: (d) => d.model,
                Cell: (rows) => {
                  /* Add data-tip */
                  return <span title={rows.value}>{rows.value}</span>;
                },
                width: 120,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Make",
                id: "make",
                accessor: (d) => d.make,
                width: 100,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Type",
                id: "type",
                accessor: (d) => d.type,
                width: 170,

                filterAll: true,
                resizable: false,
              },
              {
                Header: "Battery Capacity",
                id: "batteryCapacity",
                accessor: (d) => d.batteryCapacity,
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
  getVehicleMasterAPI,
})(withRouter(VehicleMasterUpdate));
