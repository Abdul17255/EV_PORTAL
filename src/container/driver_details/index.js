import React, { Component } from "react";
import "../driver_details/index.scss";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SubMenuHeader from "../../container/sub_menu_header";
import ReactLoader from "../../component/react-loader/react-loader.component";
import driverDetailsApiActions from "../../redux/driver_details/actions";
const { getDriverdetailsAPI } = driverDetailsApiActions;
class DriverDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [],
      inputSearch: "",
      filteredData: [],
    };
    this.navToAttandance = this.navToAttandance.bind(this);
  }

  componentDidMount() {
    this.getdriverDetails();
  }

  getdriverDetails = async () => {
    let payLoad = {
      user_id: "1",
    };
    await this.props.getDriverdetailsAPI(payLoad);
  };

  componentWillReceiveProps(nextProps) {
    // console.log("driverdetails", nextProps);
    if (
      nextProps?.DriverDetailsApi?.driverDetailsApi?.result?.data?.responseData
    ) {
      this.setState({
        dataSet:
          nextProps.DriverDetailsApi.driverDetailsApi.result.data.responseData,
      });

      this.setState({
        filteredData:
          nextProps.DriverDetailsApi.driverDetailsApi.result.data.responseData,
      });
    }
  }

  handledriverdetailsSearch = (event) => {
    //console.log("serach ele");
    const search = event.target.value.toLowerCase();
    this.setState({
      inputSearch: search,
      filteredData: this.state.dataSet.filter(
        (item) =>
          (item.driverName && item.driverName.toLowerCase().includes(search)) ||
          (item.driverId && item.driverId.toLowerCase().includes(search)) ||
          (item.status && item.status.toLowerCase().includes(search))
      ),
    });
  };



  navToAttandance() {
    let tabItem = {
      tabIndex: 27,
      tabName: "Attandance",
    };
    this.props.selectedTab(null, tabItem);
  }

  render() {
    let { inputSearch } = this.state;

   
    return (
      <div>
        {this.props.DriverDetailsApi?.driverDetailsApi?.loading ? (
          <div className="master-driver-loader-overlay">
            <div className="master-driver-loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <h3 className="driver-details-text">Driver Details</h3>

        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-8 d-flex">
              <SubMenuHeader
                visible="false"
                component="driverDetails"
                data={this.state.filteredData}
              />
            </div>
            <div className="col-4 d-flex">
              <form>
                <input
                  className="driver-details-search"
                  type="text"
                  id="filter"
                  placeholder="Search Table"
                  value={inputSearch || ""}
                  onChange={this.handledriverdetailsSearch}
                />
              </form>
            </div>
          </div>
        </div>
        {/* <div classname="driver-details-submenu">
          <SubMenuHeader
            visible="false"
            component="driverDetails"
            data={this.state.filteredData}
          />

          <div className="driver-details-search-div">
            <form>
              <input
                className="driver-details-search"
                type="text"
                id="filter"
                placeholder="Search Table"
                value={inputSearch || ""}
                onChange={this.handledriverdetailsSearch}
              />
            </form>
          </div>
        </div> */}

        <div>
          <ReactTable
            NoDataComponent={() => null}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "490px",
              marginTop: "0%",
              marginLeft: "40px",
            }}
            data={this.state.filteredData}
            showPagination={true}
            columns={[
              {
                Header: "Driver Name",
                id: "driverName",
                accessor: (d) => d.driverName,
                width: 350,
                filterAll: true,
                resizable: false,
              },
              {
                Header: "Status",
                id: "status",
                accessor: (d) => d.status,
                width: 250,

                filterAll: true,
                resizable: false,
              },
              {
                Header: " Driver ID",
                id: "driverId",
                accessor: (d) => d.driverId,
                width: 300,

                resizable: false,
              },
              {
                Header: "Report Time",
                id: "reportTime",
                accessor: (d) => d.reportTime,
                width: 300,

                filterAll: true,
                resizable: false,
              },

              {
                Header: "Action",
              
                Cell: (props) => (
                  <a
                    className="driver-details-action"
                    href="#"
                    //style="text-decoration:none;"
                    target=""
                    onClick={this.navToAttandance}
                  >
                    VIEW MORE{" "}
                    <img className="driverdetails-action-img"
                      src={require("../../assets/images/driver-monitoring/view-more.png")}
                      alt=""
                    />
                  </a>
                ),
             
                width: 330,

                filterAll: true,
                resizable: false,
              },
            ]}


            defaultSorted={[
              {
                id: "driverName",
                desc: true,
              },
              {
                id: "status",
                desc: true,
              },
              {
                id: "driverId",
                desc: true,
              },
              {
                id: "reportTime",
                desc: true,
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
                      <span className="records-info-1">{recordsInfoText}</span>
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
  getDriverdetailsAPI,
})(withRouter(DriverDetails));
