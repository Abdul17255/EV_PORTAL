import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../driver_monitoring_listview/index.scss"
class CalanderListview extends Component {

    render() {
        return (
            <div>

<div className="calanderListview-search ">
            <form>
              <input
                style={{ width: "380px" }}
                className=""
                type="text"
                id="filter"
                placeholder="Search Table ( Driver Name / Reg No. / Route ID )"
                //value={searchInput || ""}
                //onChange={this.handleChangemaster}
              />
            </form>
          </div>

          <div>

          <ReactTable
            NoDataComponent={() => null}
            // previousText={myCustomPreviousText}
            // nextText={myCustomNextText}
            pageSizeOptions={[20, 30, 50, 80, 100, 130, 200, 500]}
            style={{
              height: "460px",
              marginTop: "0%",
              // width: "1300px",
              //marginLeft: "120px",
            }}
            //data={this.state.dataSet}
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
                id: "name",
                accessor: (d) => d.name,
                width: 220,
              
                resizable: false,
              },
              {
                Header: "Check In",
                id: "reg_no",
                accessor: (d) => d.reg_no,
                width: 580,
              
                resizable: false,
              },
             
              {
                Header: "checkout",
                id: "checklist_description",
                accessor: (d) => d.checklist_description,
                width: 400,
             
                resizable: false,
              },
              {
                Header: "Total Hours",
                id: "created_timestamp",
                accessor: (d) => d.created_timestamp,
                width: 270,
              
                resizable: false,
              },
            ]}
            defaultPageSize={50}
            className="-striped -highlight"
          />


          </div>


            </div>
        );
    }
}

export default CalanderListview;