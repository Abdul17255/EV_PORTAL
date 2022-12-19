import React, { Component } from 'react';
import ReactTable from "react-table";
import "./index.scss"
import "react-table/react-table.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactLoader from "../react-loader/react-loader.component";
import driverMonitoringviewApiActions from "../../redux/driver_monitoring_list_view/actions";
const { getDriverMonitoringViewAPI } = driverMonitoringviewApiActions;

class CalanderListview extends Component {
  constructor(props) {
    super(props);
 
  
    this.state = {
    
      data: [],
      filteredData:[],
      searchInput:"",

   
    };
  }

 
  componentDidMount() {
    //getting all the data
    this.getDriverMonitoringListview();
  }

  getDriverMonitoringListview() {
    
    this.setState({ loading: true });
    const payload = {
    	"id":"1"
    };
    this.props.getDriverMonitoringViewAPI(payload);
  }

  componentDidUpdate(prevProps) {
   console.log("driver-monitoring-list-view",this.props)
    if (prevProps !== this.props) {
      if (
        this.props.DriverMonitoringViewApi?.driverMonitoringViewApi?.result?.data?.responseData?.length > 0
      ) {
        this.setState({
          data: this.props.DriverMonitoringViewApi.driverMonitoringViewApi.result.data.responseData,
        });
        this.setState({
          filteredData: this.props.DriverMonitoringViewApi.driverMonitoringViewApi.result.data.responseData,
        });
      } else {
        this.setState({ data: [] });
      }
    }
  }


  handledrivermonitoringview= (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchInput: search,
      filteredData: this.state.data.filter(
        (item) =>
          (item.status &&
            item.status.toLowerCase().includes(search))
          
      ),
    });
  };

  render() {
    let { searchInput } = this.state;
        return (
            <div>
                {this.props.DriverMonitoringViewApi?.driverMonitoringViewApi?.loading ? (
          <div className="master-driver-loader-overlay">
            <div className="master-driver-loader-container">
              <ReactLoader />
            </div>
          </div>
        ) : null}
        <div className='driver-monitoring-div'>
<p className='driver-monitoring-driver'>Kulwinder Singh | Pilot</p>
<div className="calanderListview-search ">
            <form>
              <input
               
                className="calanderListview-search-input"
                type="text"
                id="filter"
                placeholder="Search Table ( Driver Name / Reg No. / Route ID )"
                value={searchInput || ""}
                onChange={this.handledrivermonitoringview}
              />
            </form>
          </div>
          </div>
          <div>

          <ReactTable
            NoDataComponent={() => null}
            // previousText={myCustomPreviousText}
            // nextText={myCustomNextText}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "400px",
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
                Header: "Date",
                id: "date",
                accessor: (d) => d.date,
                width: 220,
              
                resizable: false,
              },
              {
                Header: "Status",
                id: "status",
                accessor: (d) => d.status,
                width: 220,
              
                resizable: false,
              },
              {
                Header: "Check In",
                id: "checkedInTime",
                accessor: (d) => d.checkedInTime,
                width: 380,
              
                resizable: false,
              },
             
              {
                Header: "checkout",
                id: "checkedOutTime",
                accessor: (d) => d.checkedOutTime,
                width: 350,
             
                resizable: false,
              },
              {
                Header: "Total Hours",
                id: "duration",
                accessor: (d) => d.duration,
                width: 270,
              
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
  getDriverMonitoringViewAPI
})(withRouter( CalanderListview));
