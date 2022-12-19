import React, { Component } from "react";
import "./index.scss";

import ReactTable from "react-table";
import "react-table/react-table.css";

// let response = [
//   {
//     regNo: "KA01AB0001",
//     routeName: "Route 7",
//     soc: "20",
//     powerConsumption: "88.90",
//   },
//   {
//     regNo: "KA01AB0001",
//     routeName: "Route 7",
//     soc: "30",
//     powerConsumption: "58.90",
//   },
// ];

class DashboardPerfomanceInsight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="consuming-power">
 

        <div className="table-align">
          {/* <h2 className="msg">
            Note: Future trips will be reflected in Excel Sheet
          </h2> */}
          <ReactTable
            NoDataComponent={() => null}
            // previousText={myCustomPreviousText}
            // nextText={myCustomNextText}
            // pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "236px",
              marginTop: "0%",
              width:"93%"
              // margin_right: "2%",
              // width: "1560px",
            }}
            data={this.props.tabledata}
            showPagination={false}
            // // defaultPageSize={initialSize}
            // //pageSize={updatedSize}
            // loading={this.state.loading}
            // filterable
            // defaultFilterMethod={(filter, row) =>
            //   String(row[filter.id]) === filter.value
            // }
            columns={[
              {
                Header: () => (
                  <div>
                    Vehicle
                    <br />
                    No
                  </div>
                ),
                // Header: "Vehicle No",
                id: "regNo",
                accessor: (d) => d.regNo,
                width: 100,
                // filterMethod: (filter, rows) =>
                //   matchSorter(rows, filter.value, { keys: ["trip_id"] }),
                // filterAll: true,
                resizable: false,
                sortable: false,
              },
              {
                Header: () => (
                  <div>
                    Route
                    <br />
                    Name
                  </div>
                ),
                // Header: "Route Name",
                id: "routeName",
                accessor: (d) => d.routeName,
                width: 100,
                // filterMethod: (filter, rows) =>
                //   matchSorter(rows, filter.value, { keys: ["route_id"] }),
                // filterAll: true,
                resizable: false,
                sortable: false,
              },
              {
                Header: () => (
                  <div>
                    Power
                    <br />
                    Consumption
                  </div>
                ),
                // Header: "Power Consumption",
                id: "powerConsumption",
                accessor: (d) => d.powerConsumption,
                width: 135,
                // filterMethod: (filter, rows) =>
                //   matchSorter(rows, filter.value, { keys: ["power"] }),
                // filterAll: true,
                resizable: false,
                sortable: false,
              },
              {
                Header: () => (
                  <div>
                    SOC
                    <br />
                    (%)
                  </div>
                ),
                //Header: "SOC (%)",
                id: "soc",
                accessor: (d) => d.soc,
                width: 100,
                // filterMethod: (filter, rows) =>
                //   matchSorter(rows, filter.value, {
                //     keys: ["driver_id"],
                //   }),
                // filterAll: true,
                resizable: false,
                sortable: false,
              },
            ]}
            // defaultPageSize={50}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default DashboardPerfomanceInsight;
