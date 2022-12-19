import React, { Fragment, Component } from "react";
import { matchSorter } from "match-sorter";
import "../../component/map_infowindow_popup/index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import ReactTable from "react-table";
// import ReactLoader from "../../component/react-loader/react-loader.component";
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

class MapInfowindowPopup extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = {
      addModalshow: false,
      selecteddata: {},
      open: false,
      show: false,
      //occupiedStationView: "",
      buttonClicked: "",
      responseData: [],
      reg: "",
      soc: "",
      timestamp: "",
      loc: "",
      odo: "",
      speed: "",
      powerConsumption: "",
      model: "",
      ignitionTime: "",
      routeNumber: "",
      distanceTravelled: "",
      viewDetailsClicked: false,
    };
    //this.gotoLiveTracking = this.gotoLiveTracking.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      sessionStorage.setItem("mapVehClicked", this.props.reg_no);
      this.setState({ reg: this.props.reg_no });
      this.setState({
        soc: this.props.soc,
      });
      this.setState({
        timestamp: this.props.current_timestamp,
      });
      this.setState({
        loc: this.props.vehicle_location,
      });
      this.setState({
        odo: this.props.odo,
      });
      this.setState({
        speed: this.props.speed,
      });
      this.setState({
        powerConsumption: this.props.powerConsumption,
      });
      this.setState({
        model: this.props.model,
      });
      this.setState({
        ignitionTime: this.props.ignitionTime,
      });
      this.setState({
        routeNumber: this.props.routeNumber,
      });
      this.setState({
        distanceTravelled: this.props.distanceTravelled,
      });

      this.setState({ show: this.props.show });
      this.setState({ buttonClick: this.props.buttonClicked });
      this.setState({ responseData: this.props.data });

      sessionStorage.setItem("clickedVeh", this.state.reg);
      sessionStorage.setItem("clickedVehModel", this.state.model);
    }
  }
  componentDidMount() {
    // this.setState({
    //   reg:this.props.reg_no
    // })
    // this.setState({
    //   soc: this.props.soc,
    // });
    // this.setState({
    //   timestamp: this.props.current_timestamp,
    // });
    // this.setState({
    //   loc: this.props.vehicle_location,
    // });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (
        nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result?.data
      ) {
        this.setState({
          vehicleResponse:
            nextProps?.vehicleMapDashboardApi.vehicleMapDashboardApi.result
              .data,
        });
      }
    }
  }

  // gotoLiveTracking() {
  //   console.log("clicked");
  //   let tabItem = {
  //     tabIndex: 8,
  //     tabName: "LiveTripTracking",
  //   };
  //   this.props.selectedTab(null, tabItem);
  // }

  setdata = (data) => {};

  close = () => {
    this.setState({ show: false });
    this.setState({ addModalshow: false });
    sessionStorage.removeItem("Clicked");
    // window.location.reload(false);
  };

  render() {
    //  const renderPopup = () => {

    return (
      <div>
        if (sessionStorage.getItem("Clicked") === "vehicleResponse")
        {
          <div>
            <div>
              <Modal
                // width="100%"
                onCloseModal={this.close}
                //dialogClassName='modal-container'
                show={this.state.show}
                size="lg"
                portalClassName="modal"
                //dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                //left="true"
                //centered
                style={{ marginLeft: "6%", marginTop: "12%", width: "450px" }}
                // contentLabel="Minimal Modal Example"
                // onHide={this.close}
              >
                <Modal.Header>
                  <Modal.Title
                    // id="contained-modal-title-vcenter"
                    className="popup-veh-no"
                    style={{ marginBottom: "-20px" }}
                  >
                    <div className="closebutton" onClick={this.close}>
                      <span>X close</span>
                    </div>
                    <img
                      style={{
                        marginTop: "-16px",
                        marginLeft: "13px",
                        width: "12%",
                      }}
                      src={require("../../assets/images/noun-bus-1260937/bus.png")}
                      alt=""
                    />
                    <div className="vehicle-no">
                      <span> Vehicle Number</span>
                    </div>
                    <div className="reg">
                      {this.state.reg}{" "}
                      <span className="skyline">{this.state.model}</span>
                    </div>
                    <div className="time-to-charge-text">
                      <span className="time-fullcharge">
                        {/* Remaining Time for Full Charge */}
                      </span>
                      <br />
                      <span className="fullcharge">{/* 3 Hrs 35 Mins */}</span>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <form
                  // className="popup-update"
                  autocomplete="off"
                  // onSubmit={this.handleSubmit}
                >
                  <Modal.Body
                  // style={{
                  //   "max-height": "calc(100vh - 210px)",
                  // }}
                  >
                    {/*<p className="odo">
                  Odometer <span>092320 Km</span>
                </p>
                
                <p className="speed">
                  Vehicle Speed <span>40 Km/h</span>
                </p>
                <p className="soc">
                  SOC % <span>{this.state.soc}</span>
                </p>
                <p className="location">
                  Location<span>{this.state.loc}</span>
                </p>
                <p className="timestamp">
                  Timestamp<span>{this.state.timestamp}</span>
                </p>
                <p className="distance">
                  Distance Travelled <span>35 Km</span>
                </p>
              
                <p className="power">
                  Power Consumption<span>600 KwH</span>
                </p>
                <p className="route">
                  Route No<span>CHD- MHLI 04</span>
                </p>

                <p className="time">
                  Ignition Time<span>6Hrs 20 Min</span>
                </p>

                <div className="map-button">
                  <button
                    type="button"
                    className="map-btn"
                    //onClick={this.availableCharger}
                  >
                    VIEW DETAILS
                    <img
                      className="map-button-png"
                      src={require("../../assets/images/Icon feather-arrow-up-left/black-up-arrow.png")}
                      alt="next"
                    />
                  </button>
        </div>*/}

                    <div
                      className="table-col"
                      style={{ marginTop: "-15px", marginLeft: "10px" }}
                    >
                      <table
                        style={{
                          width: "90%",
                          marginBottom: "20px",
                          tableLayout: "fixed",
                        }}
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <td className="td-1"> Odometer</td>
                          <td className="td-2">{this.state.odo} Km</td>
                        </tr>
                        <tr>
                          <td className="td-1"> Vehicle Speed</td>
                          <td className="td-2">{this.state.speed} Km/h</td>
                        </tr>
                        <tr>
                          <td className="td-1"> SOC %</td>
                          <td className="td-2">{this.state.soc}</td>
                        </tr>
                        <tr>
                          <td className="td-1">Location</td>
                          <td className="td-2">{this.state.loc}</td>
                        </tr>

                        <tr>
                          <td className="td-1">Timestamp</td>
                          <td className="td-2">{this.state.timestamp}</td>
                        </tr>

                        <tr>
                          <td className="td-1">Distance Travelled</td>
                          <td className="td-2">
                            {this.state.distanceTravelled} Km
                          </td>
                        </tr>
                        <tr>
                          <td className="td-1">Power Consumption</td>
                          <td className="td-2">
                            {this.state.powerConsumption} KwH
                          </td>
                        </tr>
                        <tr>
                          <td className="td-1"> Route No</td>
                          <td className="td-2">{this.state.routeNumber}</td>
                        </tr>
                        {/* <tr>
                      <td className="td-1">Ignition Time</td>
                      <td className="td-2">{this.state.ignitionTime}</td>
                    </tr> */}
                      </table>
                      <div className="map-button">
                        <button
                          type="button"
                          className="map-btn"
                          onClick={this.props.navButton}
                        >
                          VIEW DETAILS
                          <img
                            className="map-button-png"
                            src={require("../../assets/images/Icon feather-arrow-up-left/black-up-arrow.png")}
                            alt="next"
                          />
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                  {/* <Modal.Footer>
              
              </Modal.Footer> */}
                </form>
              </Modal>
            </div>
          </div>
        }
      </div>
    );
  }
  // return <div className="popup-box">{renderPopup()}</div>;
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(withRouter(MapInfowindowPopup));
