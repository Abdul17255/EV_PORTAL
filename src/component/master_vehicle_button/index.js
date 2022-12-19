import React, { Component, Fragment } from "react";
//import { Button, ButtonToolbar } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import VehicleMasterPopup from "../master_vehicle_popup";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

import vehicleMasterApiActions from "../../redux/master_vehicle/actions";

const { deleteVehicleMasterAPI } = vehicleMasterApiActions;

class VehicleMasterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalshow: false,
      selecteddata: {},
      open: false,
      //   driverDetails: [],
      //   vehicleDetails: [],
    };
  }

  submit = (data) => {
    this.setState({ selecteddata: data });
    confirmAlert({
      title: "Are you sure you want to delete this Vehicle Details?",
      //message: "",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.handleDelete(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  handleDelete = (event) => {
    //event.preventDefault();
    const { id } = this.state.selecteddata;
    const payload = {
      id,
    };
    this.props.deleteVehicleMasterAPI(payload);
  };

  setdata = (data) => {
    this.setState({
      addModalshow: true,
      selecteddata: data,
    });
  };

  addModalClose = () => this.setState({ addModalshow: false });

  render() {
    return (
      <Fragment>
        {this.state.addModalshow === true ? (
          <VehicleMasterPopup
            show={this.state.addModalshow}
            vehiclePopupData={this.state.selecteddata}
            closemodal={this.addModalClose}
          />
        ) : (
          ""
        )}

        <i
          className="fa fa-edit"
          title="Edit"
          style={{ fontSize: "22px" }}
          onClick={() => this.setdata(this.props.data.original)}
        ></i>

        <i
          className="fa fa-trash"
          title="Delete"
          style={{
            fontSize: "22px",
            marginLeft: "10px",
            color: "red",
          }}
          onClick={() => this.submit(this.props.data.original)}
        ></i>
      </Fragment>
    );
  }
}

///export default VehicleMasterButton;

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { deleteVehicleMasterAPI })(
  withRouter(VehicleMasterButton)
);
