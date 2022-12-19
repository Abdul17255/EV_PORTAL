
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import DriverMasterButton from "../master_driver_button";
import "../master_driver_update/index.scss"
//import * as User from "shared/app-data/user";
import Workbook from "react-excel-workbook";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactLoader from "../../component/react-loader/react-loader.component";
// //Actions
import driverMasterApiActions from "../../redux/master_driver/actions";
const { getDriverMasterAPI } = driverMasterApiActions;
class  DriverMasterUpdate extends Component {
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
    this.getDriverMaster();
  }

  getDriverMaster() {
    
    this.setState({ loading: true });
    const payload = {
    	"user_id":"1"
    };
    this.props.getDriverMasterAPI(payload);
  }

  componentDidUpdate(prevProps) {
   console.log("masterdriver",this.props)
    if (prevProps !== this.props) {
      if (
        this.props.DriverMasterApi?.driverMasterApi?.result?.data?.responseData?.length > 0
      ) {
        this.setState({
          dataSet: this.props.DriverMasterApi.driverMasterApi.result.data.responseData,
        });
        this.setState({
          filteredData: this.props.DriverMasterApi.driverMasterApi.result.data.responseData,
        });
      } else {
        this.setState({ dataSet: [] });
      }
    }
  }

  handleDrivermaster = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.driverName &&
            item.driverName.toLowerCase().includes(search)) ||
          (item.driverId && item.driverId.toLowerCase().includes(search))
      ),
    });
  };

  render() {
    let { searchInput } = this.state;
    return (
      <div>
        {this.props.DriverMasterApi?.driverMasterApi?.loading ? (
          <div className="master-driver-loader-overlay">
            <div className="master-driver-loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
          <div className="driver-update-subhead">
        {/* <h3 className="driver-update">Driver View</h3> */}
      
          {/* <div className="table-items-count">
            Items: {this.state.filteredData.length}
          </div> */}
          <div className="search-driver-update-report ">
            <form>
              <input
                style={{ width: "400px" }}
                className="search-driver-update-input"
                type="text"
                id="filter"
                placeholder="Search Table ( Driver Name / Reg No. / Route ID )"
                value={searchInput || ""}
                onChange={this.handleDrivermaster}
              />
            </form>

            <div>
            <Workbook
              filename="driver-master-Report.xlsx"
              element={
                <div className="driver-master-Report-download" data-tip data-for="registerTip">
                  Export
                  <img
                    src={require("../../assets/images/export/export.png")}
                    alt=""
                    className="driver-master-Report-download-img"
                  />
                  
      <ReactTooltip id="registerTip" place="top" effect="solid">
       Download
      </ReactTooltip>
                </div>
                
              }
            >
              <Workbook.Sheet
                data={this.state.dataSet}
                name="driver-master-Report"
              >
                <Workbook.Column label="ID" value="id" />
                <Workbook.Column label="Driver Name" value="driverName" />
                <Workbook.Column
                  label="Driver ID"
                  value="driverId"
                />
                <Workbook.Column
                  label="Phone Number"
                  value="phoneNumber"
                />

                <Workbook.Column
                  label="Date Of Birth"
                  value="dob"
                />

                <Workbook.Column
                  label="Anniversary Date"
                  value="anniversary"
                />
                <Workbook.Column label="Duty" value="duty" />
               

              
              </Workbook.Sheet>
            </Workbook>
          </div>

          </div>
       
        </div>
        <div className="driver-update-table">
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
                  <DriverMasterButton
                    data={props}
                   // driverDropdown={this.state.driverList}
                   // vehicleDropdown={this.state.vehicleList}
                  ></DriverMasterButton>
                ),
                resizable: false,
              },
              {
                Header: "ID",
                id: "id",
                accessor: (d) => d.id,
                width: 180,
               
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Driver Name",
                id: "driverName",
                accessor: (d) => d.driverName,
                width: 250,
              
                filterAll: true,
                resizable: false,
              },

              {
                Header: "Driver ID",
                id: "driverId",
                accessor: (d) => d.driverId,
                width: 190,
             
                filterAll: true,
                resizable: false,
              },

              {
                Header: "Phone Number",
                id: "phoneNumber",
                accessor: (d) => d.phoneNumber,
                width: 220,
               
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Date of Birth",
                id: "dob",
                accessor: (d) => d.dob,
                width: 190,
              
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Anniversary Date",
                id: "anniversary",
                accessor: (d) => d.anniversary,
                width: 120,
              
                filterAll: true,
                resizable: false,
              },
           
              {
                Header: "Duty",
                id: "duty",
                accessor: (d) => d.duty,
                width: 50,
                
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
  getDriverMasterAPI
})(withRouter( DriverMasterUpdate));

