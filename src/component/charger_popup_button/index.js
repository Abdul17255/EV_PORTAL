import React, { Fragment, Component } from "react";
import { matchSorter } from "match-sorter";
import "../charger_popup_button/index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ReactTable from "react-table";
import ReactLoader from "../../component/react-loader/react-loader.component";
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

class ChargerPopupButton extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      addModalshow: false,
      selecteddata: {},
      open: false,
      show: false,
      occupiedStationView: "",
      buttonClicked: "",
      responseData: [],
      divHeight: {
        height: 2000,
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({ show: this.props.show });
      this.setState({ buttonClick: this.props.buttonClicked });
      this.setState({ responseData: this.props.data });
    }
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (
      nextProps?.occupiedStationApi?.occupiedStationApi?.result?.data?.values
    ) {
      this.setState({
        occupiedStationView:
          nextProps.occupiedStationApi.occupiedStationApi.result.data.values,
      });
    }
    // if (nextProps?.chargerEfficiency?.chargerEfficiencyApi?.result?.data) {
    //   this.setState({
    //     chargerEfficiencyView:
    //       nextProps?.chargerEfficiency.chargerEfficiencyApi.result.data
    //         .values,
    //   });
    // }
  }

  setdata = (data) => {};

  close = () => {
    this.setState({ show: false });
    this.setState({ addModalshow: false });
    sessionStorage.removeItem("popupClicked");
    // window.location.reload(false);
  };

  render() {
    const renderPopup = () => {
      if (sessionStorage.getItem("popupClicked") === "occupiedStation") {
        return (
          <Modal
            show={this.state.show}
            size="xl"
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
            // contentLabel="Minimal Modal Example"
            onHide={this.close}
          >
            <Modal.Header closeButton style={{ borderBottom: "none" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="title"
                style={{ marginLeft: "526px" }}
              >
                OCCUPIED CHARGING POINTS
              </Modal.Title>
            </Modal.Header>
            <form
              className="popup-update"
              autocomplete="off"
              // onSubmit={this.handleSubmit}
            >
              <Modal.Body
                style={{
                  "max-height": "calc(100vh - 210px)",
                }}
              >
                <div className="occuipaide-table">
                  {this.props.occupiedStationApi?.occupiedStationApi
                    ?.loading ? (
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
                      marginTop: "-30px",
                    }}
                    data={this.state.responseData}
                    // filterable
                    // defaultFilterMethod={(filter, row) =>
                    //   String(row[filter.id]) === filter.value
                    // }
                    columns={[
                      {
                        Header: "Charging Station Name",
                        id: "charging_station_name",
                        accessor: (d) => d.charging_station_name,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charging_station_name"],
                          }),
                        filterAll: true,
                        width: 240,
                        resizable: false,
                      },

                      {
                        Header: "Vehicle No",
                        id: "vehicle_number",

                        accessor: (d) => d.vehicle_number,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["vehicle_number"],
                          }),
                        filterAll: true,
                        width: 250,
                        resizable: false,
                      },
                      {
                        Header: "Start Timestamp",
                        id: "start_timestamp",

                        accessor: (d) => d.start_timestamp,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["start_timestamp"],
                          }),
                        filterAll: true,
                        width: 280,
                        resizable: false,
                      },
                      // {
                      //   Header: "End Timestamp",
                      //   id: "end_timestamp",

                      //   accessor: (d) => d.end_timestamp,
                      //   filterMethod: (filter, rows) =>
                      //     matchSorter(rows, filter.value, {
                      //       keys: ["end_timestamp"],
                      //     }),
                      //   filterAll: true,
                      //   width: 200,
                      //   resizable: false,
                      // },

                      {
                        Header: "Charge Of Status(SOC%)",
                        id: "soc",
                        accessor: (d) => d.soc,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["soc"],
                          }),
                        filterAll: true,
                        width: 250,
                        resizable: false,
                      },
                      {
                        Header: "Remaining Time",
                        id: "remaining_time",
                        accessor: (d) => d.remaining_time,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["remaining_time"],
                          }),
                        filterAll: true,
                        width: 250,
                        resizable: false,
                      },
                    ]}
                    defaultSorted={[
                      {
                        id: "charging_station_name",
                        desc: true,
                      },
                      {
                        id: "vehicle_number",
                        desc: true,
                      },
                      {
                        id: "start_timestamp",
                        desc: true,
                      },
                      {
                        id: "end_timestamp",
                        desc: true,
                      },
                      {
                        id: "soc",
                        desc: true,
                      },
                      {
                        id: "remaining_time",
                        desc: true,
                      },
                    ]}
                    defaultPageSize={50}
                    showPagination={false}
                    //pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
                    // loading={this.state.loading}

                    className="-striped -highlight"
                  />
                </div>
              </Modal.Body>
            </form>
          </Modal>
        );
      } else if (
        sessionStorage.getItem("popupClicked") === "chargerEfficiency"
      ) {
        return (
          <Modal
            show={this.state.show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-90w"
            onHide={this.close}
          >
            <Modal.Header closeButton style={{ borderBottom: "none" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="title"
                style={{ marginLeft: "626px" }}
              >
                CHARGER EFFICIENCY
              </Modal.Title>
            </Modal.Header>
            <form
              className="popup-update"
              autocomplete="off"
              // onSubmit={this.handleSubmit}
            >
              <Modal.Body
                style={{
                  "max-height": "calc(100vh - 210px)",
                }}
              >
                <div>
                  {this.props.chargerEfficiency?.chargerEfficiencyApi
                    ?.loading ? (
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
                      marginTop: "-30px",
                      // width: "1000px",
                    }}
                    data={this.state.responseData}
                    // filterable
                    // defaultFilterMethod={(filter, row) =>
                    //   String(row[filter.id]) === filter.value
                    // }
                    columns={[
                      {
                        Header: "Charger Name",
                        id: "charging_station_name",
                        accessor: (d) => d.charging_station_name,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charging_station_name"],
                          }),
                        filterAll: true,
                        width: 150,
                        resizable: false,
                      },

                      {
                        Header: "Charger Point No",
                        id: "charge_point_identifier",

                        accessor: (d) => d.charge_point_identifier,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charge_point_identifier"],
                          }),
                        filterAll: true,
                        width: 150,
                        resizable: false,
                      },
                      {
                        Header: "Vehicle No",
                        id: "reg_no",

                        accessor: (d) => d.reg_no,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["reg_no"],
                          }),
                        filterAll: true,
                        width: 150,
                        resizable: false,
                      },
                      {
                        Header: "Start Timestamp",
                        id: "start_timestamp",

                        accessor: (d) => d.start_timestamp,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["start_timestamp"],
                          }),
                        filterAll: true,
                        width: 180,
                        resizable: false,
                      },
                      {
                        Header: "End Timestamp",
                        id: "end_timestamp",

                        accessor: (d) => d.end_timestamp,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["end_timestamp"],
                          }),
                        filterAll: true,
                        width: 200,
                        resizable: false,
                      },

                      {
                        Header: "Efficiency(%)",
                        id: "efficiency",
                        accessor: (d) => d.efficiency,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["efficiency"],
                          }),
                        filterAll: true,
                        width: 170,
                        resizable: false,
                      },
                      {
                        Header: () => (
                          <div>
                            Power Consumed By
                            <br />
                            The Charger(Kwh)
                          </div>
                        ),
                        id: "power_consumed_by_charger",
                        accessor: (d) => d.power_consumed_by_charger,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["power_consumed_by_charger"],
                          }),
                        filterAll: true,
                        width: 290,
                        resizable: false,
                      },
                    ]}
                    defaultSorted={[
                      {
                        id: "charging_station_name",
                        desc: true,
                      },
                      {
                        id: "charge_point_identifier",
                        desc: true,
                      },
                      {
                        id: "reg_no",
                        desc: true,
                      },
                      {
                        id: "start_timestamp",
                        desc: true,
                      },
                      {
                        id: "end_timestamp",
                        desc: true,
                      },
                      {
                        id: "efficiency",
                        desc: true,
                      },
                      {
                        id: "power_consumed_by_charger",
                        desc: true,
                      },
                    ]}
                    defaultPageSize={50}
                    showPagination={false}
                    //pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
                    // loading={this.state.loading}
                    //manual
                    //onFetchData={this.fetchData}
                    className="-striped -highlight"
                  />
                </div>
              </Modal.Body>
            </form>
          </Modal>
        );
      } else if (
        sessionStorage.getItem("popupClicked") === "availableStation"
      ) {
        return (
          <Modal
            style={{
              maxWidth: "100%",
              width: "100%",
              maxheight: "100%",
              height: "100%",
              minHeight: "80%",
            }}
            modalClassName={this.state.divHeight}
            show={this.state.show}
            size="xl"
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
            // contentLabel="Minimal Modal Example"
            onHide={this.close}
          >
            <Modal.Header closeButton style={{ borderBottom: "none" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="title"
                style={{ marginLeft: "526px" }}
              >
                AVAILABLE CHARGING POINTS
              </Modal.Title>
            </Modal.Header>
            <form
              className="popup-update"
              autocomplete="off"
              // onSubmit={this.handleSubmit}
            >
              <Modal.Body
                style={{
                  "max-height": "calc(100vh - 210px)",
                }}
              >
                <div className="occuipaide-table">
                  {/*{this.props.occupiedStationApi?.occupiedStationApi?.loading? (
            <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
                ) : null}*/}
                  <ReactTable
                    NoDataComponent={() => null}
                    pageSizeOptions={[
                      20, 30, 50, 80, 90, 100, 125, 130, 200, 500,
                    ]}
                    style={{
                      height: "460px",
                      marginTop: "-30px",
                    }}
                    data={this.state.responseData}
                    // filterable
                    // defaultFilterMethod={(filter, row) =>
                    //   String(row[filter.id]) === filter.value
                    // }
                    columns={[
                      {
                        Header: "Charging Station Name",
                        id: "charging_station_name",
                        accessor: (d) => d.charging_station_name,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charging_station_name"],
                          }),
                        filterAll: true,
                        width: 320,
                        resizable: false,
                      },

                      {
                        Header: "Charger ID",
                        id: "charger_id",

                        accessor: (d) => d.charger_id,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charger_id"],
                          }),
                        filterAll: true,
                        width: 230,
                        resizable: false,
                      },

                      {
                        Header: "Gun ID",
                        id: "gun_id",
                        accessor: (d) => d.gun_id,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["gun_id"],
                          }),
                        filterAll: true,
                        width: 100,
                        resizable: false,
                      },
                      {
                        Header: "Status",
                        id: "status",
                        accessor: (d) => d.status,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["status"],
                          }),
                        filterAll: true,
                        width: 270,
                        resizable: false,
                      },

                      {
                        Header: "Address",
                        id: "address",
                        accessor: (d) => d.address,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["address"],
                          }),
                        filterAll: true,
                        width: 390,
                        resizable: false,
                      },
                    ]}
                    defaultSorted={[
                      {
                        id: "charging_station_name",
                        desc: true,
                      },
                      {
                        id: "charger_id",
                        desc: true,
                      },
                      {
                        id: "gun_id",
                        desc: true,
                      },
                      {
                        id: "status",
                        desc: true,
                      },
                      {
                        id: "address",
                        desc: true,
                      },
                    ]}
                    defaultPageSize={50}
                    showPagination={false}
                    //pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
                    // loading={this.state.loading}

                    className="-striped -highlight"
                  />
                </div>
              </Modal.Body>
            </form>
          </Modal>
        );
      } else if (
        sessionStorage.getItem("popupClicked") === "opportunityCharging"
      ) {
        return (
          <Modal
            style={{
              maxWidth: "100%",
              width: "100%",
              maxheight: "100%",
              height: "100%",
              minHeight: "80%",
            }}
            modalClassName={this.state.divHeight}
            show={this.state.show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-90w"
            onHide={this.close}
          >
            <Modal.Header closeButton style={{ borderBottom: "none" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="title"
                style={{ marginLeft: "626px" }}
              >
                OPPORTUNITY CHARGING
              </Modal.Title>
            </Modal.Header>
            <form
              className="popup-update"
              autocomplete="off"
              // onSubmit={this.handleSubmit}
            >
              <Modal.Body
                style={{
                  "max-height": "calc(100vh - 210px)",
                }}
              >
                <div>
                  {/*{this.props.chargerEfficiency?.chargerEfficiencyApi?.loading? (
            <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
                ) : null}*/}
                  <ReactTable
                    NoDataComponent={() => null}
                    pageSizeOptions={[
                      20, 30, 50, 80, 90, 100, 125, 130, 200, 500,
                    ]}
                    style={{
                      height: "460px",
                      marginTop: "-30px",
                      // width: "1000px",
                    }}
                    data={this.state.responseData}
                    // filterable
                    // defaultFilterMethod={(filter, row) =>
                    //   String(row[filter.id]) === filter.value
                    // }
                    columns={[
                      {
                        Header: "Vehicle No.",
                        id: "reg_no",
                        accessor: (d) => d.reg_no,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["reg_no"],
                          }),
                        filterAll: true,
                        width: 300,
                        resizable: false,
                      },

                      {
                        Header: "State of Charge(SOC%)",
                        id: "soc",

                        accessor: (d) => d.soc,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["soc"],
                          }),
                        filterAll: true,
                        width: 300,
                        resizable: false,
                      },

                      {
                        Header: "Charging Time(mm.ss)",
                        id: "chargingTime",
                        accessor: (d) => d.chargingTime,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["chargingTime"],
                          }),
                        filterAll: true,
                        width: 300,
                        resizable: false,
                      },
                      {
                        Header: () => <div>Location</div>,
                        id: "location",
                        accessor: (d) => d.location,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["location"],
                          }),
                        filterAll: true,
                        width: 390,
                        resizable: false,
                      },
                    ]}
                    defaultSorted={[
                      {
                        id: "reg_no",
                        desc: true,
                      },
                      {
                        id: "soc",
                        desc: true,
                      },
                      {
                        id: "chargingTime",
                        desc: true,
                      },
                      {
                        id: "location",
                        desc: true,
                      },
                    ]}
                    defaultPageSize={50}
                    showPagination={false}
                    //pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
                    // loading={this.state.loading}
                    //manual
                    //onFetchData={this.fetchData}
                    className="-striped -highlight"
                  />
                </div>
              </Modal.Body>
            </form>
          </Modal>
        );
      } else if (
        sessionStorage.getItem("popupClicked") === "breakdownCharger"
      ) {
        return (
          <Modal
            show={this.state.show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-90w"
            onHide={this.close}
          >
            <Modal.Header closeButton style={{ borderBottom: "none" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="title"
                style={{ marginLeft: "526px" }}
              >
                BREAKDOWN CHARGING POINTS
              </Modal.Title>
            </Modal.Header>
            <form
              className="popup-update"
              autocomplete="off"
              // onSubmit={this.handleSubmit}
            >
              <Modal.Body
                style={{
                  "max-height": "calc(100vh - 210px)",
                }}
              >
                <div>
                  {/* {this.props.chargerEfficiency?.chargerEfficiencyApi?.loading? (
            <div className="loader-overlay">
            <div className="loader-container">
              <ReactLoader />
            </div>
          </div>
               ) : null}*/}
                  <ReactTable
                    NoDataComponent={() => null}
                    pageSizeOptions={[
                      20, 30, 50, 80, 90, 100, 125, 130, 200, 500,
                    ]}
                    style={{
                      height: "460px",
                      marginTop: "-30px",
                      // width: "1000px",
                    }}
                    data={this.state.responseData}
                    // filterable
                    // defaultFilterMethod={(filter, row) =>
                    //   String(row[filter.id]) === filter.value
                    // }
                    columns={[
                      {
                        Header: "Charger Station Name",
                        id: "charging_station_name",
                        accessor: (d) => d.charging_station_name,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charging_station_name"],
                          }),
                        filterAll: true,
                        width: 300,
                        resizable: false,
                      },

                      {
                        Header: "Charger Point No",
                        id: "charger_id",

                        accessor: (d) => d.charger_id,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["charger_id"],
                          }),
                        filterAll: true,
                        width: 220,
                        resizable: false,
                      },

                      {
                        Header: "Gun ID",
                        id: "gun_id",
                        accessor: (d) => d.gun_id,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["gun_id"],
                          }),
                        filterAll: true,
                        width: 120,
                        resizable: false,
                      },

                      {
                        Header: "Status",
                        id: "status",
                        accessor: (d) => d.status,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["status"],
                          }),
                        filterAll: true,
                        width: 280,
                        resizable: false,
                      },
                      {
                        Header: () => <div>Location</div>,
                        id: "address",
                        accessor: (d) => d.address,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["address"],
                          }),
                        filterAll: true,
                        width: 360,
                        resizable: false,
                      },
                    ]}
                    defaultSorted={[
                      {
                        id: "charging_station_name",
                        desc: true,
                      },
                      {
                        id: "charger_id",
                        desc: true,
                      },
                      {
                        id: "gun_id",
                        desc: true,
                      },
                      {
                        id: "status",
                        desc: true,
                      },
                      {
                        id: "address",
                        desc: true,
                      },
                    ]}
                    defaultPageSize={50}
                    showPagination={false}
                    //pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
                    // loading={this.state.loading}
                    //manual
                    //onFetchData={this.fetchData}
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

export default connect(mapStateToProps, {})(withRouter(ChargerPopupButton));
