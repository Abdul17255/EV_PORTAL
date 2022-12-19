import React, { Fragment, Component } from "react";
//import { Button, ButtonToolbar } from "react-bootstrap";
//import Popup from "../popup";
import { matchSorter } from "match-sorter";
import "./index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactLoader from "../../component/react-loader/react-loader.component";
import ReactTable from "react-table";
//import ReactExport from "react-data-export";
import "react-table/react-table.css";
//Actions
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
  Button,
  closeButton,
} from "react-bootstrap";

class GraphViewPopup extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      addModalshow: false,
      selecteddata: {},
      open: false,
      show: false,
      buttonClicked: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({ show: this.props.show });
      this.setState({ buttonClicked: this.props.buttonClicked });
    }
  }

  componentDidMount() {}

  setdata = (data) => {};

  close = () => {
    this.setState({ show: false });
    sessionStorage.removeItem("popupClicked");
  };

  render() {
    const renderPopup = () => {
      if (sessionStorage.getItem("popupClicked") === "temperatureStatus") {
        return (
          <Modal
            show={this.state.show}
            size="xl"
            aria-labelledby="example-modal-sizes-title-xl"
            centered
            keyboard={false}
            dialogClassName="modal-90w"
            //data-backdrop="static"
            onHide={this.close}
          >
            <Modal.Header closeButton style={{borderBottom: "none"}}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="title"
                style={{ marginLeft: "546px" }}
              >
                TEMPERATURE STATUS OF BATTERY
              </Modal.Title>
            </Modal.Header>
            <form
              className="trip-popup-update"
              autocomplete="off"
              // onSubmit={this.handleSubmit}
            >
              <Modal.Body
                style={{
                  "max-height": "calc(100vh - 210px)",
                }}
              >
                <div>
                  {this.props.batteryTemp?.batteryTempApi?.loading ? (
                    <div className="loader-overlay">
                      <div className="loader-container">
                        <ReactLoader />
                      </div>
                    </div>
                  ) : null}
                  <ReactTable
                    NoDataComponent={() => null}
                    pageSizeOptions={[
                      20, 30, 50, 80, 90, 100, 125, 130, 200, 500,
                    ]}
                    style={{
                      height: "460px",
                      marginTop: "-20px",
                      // width: "1000px",
                    }}
                    data={this.props.data}
                    // filterable
                    // defaultFilterMethod={(filter, row) =>
                    //   String(row[filter.id]) === filter.value
                    // }
                    columns={[
                      {
                        Header: "Vehicle No",

                        id: "vehicle_number",
                        accessor: (d) => d.vehicle_number,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["vehicle_number"],
                          }),
                        filterAll: true,
                        width: 440,
                        resizable: false,
                      },

                      {
                        Header: "Temperature (°C)",
                        id: "temperature",

                        accessor: (d) => d.temperature,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["temperature"],
                          }),
                        filterAll: true,
                        width: 440,
                        resizable: false,
                      },

                      {
                        Header: "Route No",
                        id: "route_number",
                        accessor: (d) => d.route_number,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["route_number"],
                          }),
                        filterAll: true,
                        width: 420,
                        resizable: false,
                      },
                      // {
                      //   Header: () => (
                      //     <div>
                      //       Vehicle Performance
                      //       <br />
                      //       (Kwh/Km)
                      //     </div>
                      //   ),
                      //   id: "vehicle_performance",
                      //   accessor: (d) => d.vehicle_performance,
                      //   filterMethod: (filter, rows) =>
                      //     matchSorter(rows, filter.value, {
                      //       keys: ["vehicle_performance"],
                      //     }),
                      //   filterAll: true,
                      //   width: 250,
                      //   resizable: false,
                      // },

                      // {
                      //   Header: () => (
                      //     <div>
                      //       No.of Charging
                      //       <br />
                      //       Cycles
                      //     </div>
                      //   ),
                      //   id: "charging_cycles",
                      //   accessor: (d) => d.charging_cycles,
                      //   filterMethod: (filter, rows) =>
                      //     matchSorter(rows, filter.value, {
                      //       keys: ["charging_cycles"],
                      //     }),
                      //   filterAll: true,
                      //   width: 250,
                      //   resizable: false,
                      // },
                    ]}
                    defaultSorted={[
                      {
                        id: "vehicle_number",
                        desc: true,
                      },
                      {
                        id: "temperature",
                        desc: true,
                      },
                      {
                        id: "route_number",
                        desc: true,
                      },
                      {
                        id: "vehicle_performance",
                        desc: true,
                      },
                      {
                        id: "charging_cycles",
                        desc: true,
                      },
                    ]}
                    // data={this.state.sosData} // should default to []
                    defaultPageSize={50}
                    showPagination={false}
                    className="-striped -highlight"
                  />
                </div>
              </Modal.Body>
            </form>
          </Modal>
        );
      } else if (sessionStorage.getItem("popupClicked") === "chargingBand") {
        return (
          <Modal
            show={this.state.show}
            size="xl"
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
            onHide={this.close}
          
          >
            <Modal.Header closeButton   style={{borderBottom: "none"}}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ marginLeft: "626px" }}
                className="title"
              >
                CHARGING BAND
              </Modal.Title>
            </Modal.Header>
            <form
              className="trip-popup-update"
              autocomplete="off"
              // onSubmit={this.handleSubmit}
            >
              <Modal.Body border
                style={{
                  "max-height": "calc(100vh - 210px)",
                }}
              >
                <div>
                  {this.props.chargeBand?.chargeBandApi?.loading ? (
                    <div className="loader-overlay">
                      <div className="loader-container">
                        <ReactLoader />
                      </div>
                    </div>
                  ) : null}
                  <ReactTable
                    NoDataComponent={() => null}
                    pageSizeOptions={[
                      20, 30, 50, 80, 90, 100, 125, 130, 200, 500,
                    ]}
                    style={{
                      height: "460px",
                      marginTop: "-20px",
                      // width: "1000px",
                    }}
                    data={this.props.data}
                    // filterable
                    // defaultFilterMethod={(filter, row) =>
                    //   String(row[filter.id]) === filter.value
                    // }
                    columns={[
                      {
                        Header: "Vehicle No",
                        id: "vehicle_number",
                        accessor: (d) => d.vehicle_number,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["vehicle_number"],
                          }),
                        filterAll: true,
                        width: 220,
                        resizable: false,
                      },

                      {
                        Header: "Current SOC(%)",
                        id: "current_soc",

                        accessor: (d) => d.current_soc,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["current_soc"],
                          }),
                        filterAll: true,
                        width: 280,
                        resizable: false,
                      },

                      {
                        Header: "Route No",
                        id: "route_number",
                        accessor: (d) => d.route_number,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["route_number"],
                          }),
                        filterAll: true,
                        width: 240,
                        resizable: false,
                      },
                      {
                        Header: () => (
                          <div>
                            No of Charger on
                            <br />
                            particular Route
                          </div>
                        ),
                        id: "charger_count_on_particular_route",
                        accessor: (d) => d.charger_count_on_particular_route,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charger_count_on_particular_route"],
                          }),
                        filterAll: true,
                        width: 180,
                        resizable: false,
                      },
                      {
                       
                        Header: () => (
                          <div>
                           Distance to cover
                            <br />
                            for current day
                          </div>
                        ),
                        id: "distance_to_cover",
                        accessor: (d) => d.distance_to_cover,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["distance_to_cover"],
                          }),
                        filterAll: true,
                        width: 180,
                        resizable: false,
                      },
                      {
                        Header: () => (
                          <div>
                            Average time for
                            <br />
                            one charging cycle
                          </div>
                        ),
                        id: "avg_time_charging_cycles",
                        accessor: (d) => d.avg_time_charging_cycles,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["avg_time_charging_cycles"],
                          }),
                        filterAll: true,
                        width: 200,
                        resizable: false,
                      },
                    ]}
                    defaultSorted={[
                      {
                        id: "vehicle_number",
                        desc: true,
                      },
                      {
                        id: "current_soc",
                        desc: true,
                      },
                      {
                        id: "route_number",
                        desc: true,
                      },
                      {
                        id: "charger_count_on_particular_route",
                        desc: true,
                      },
                      {
                        id: "distance_to_cover",
                        desc: true,
                      },
                      {
                        id: "avg_time_charging_cycles",
                        desc: true,
                      },
                    ]}
                    // data={this.state.sosData} // should default to []
                    defaultPageSize={50}
                    showPagination={false}
                    className="-striped -highlight"
                  />
                </div>
              </Modal.Body>
            </form>
          </Modal>
        );
      }
    };

    return <div className="popup-box">{renderPopup()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(withRouter(GraphViewPopup));
