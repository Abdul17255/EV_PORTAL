import React, { Fragment } from "react";
//import { Button, ButtonToolbar } from "react-bootstrap";
import Popup from "../popup";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import confirmAlert from "react-confirm-alert";



class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalshow: false,
      selecteddata: {},
      open: false,
      driverDetails: [],
      vehicleDetails: [],
    };
  }

  submit = (data) => {
    this.setState({ selecteddata: data });
    confirmAlert({
      title: "Are you sure you want to delete the Trip Details?",
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

  setdata = (data) => {
    // let rowData = this.params;
    // let i = rowData.rowIndex;
    this.setState({
      addModalshow: true,
      selecteddata: data,
      driverDetails: this.props.driverDropdown,
      vehicleDetails: this.props.vehicleDropdown,
    });
  };
 

  addModalClose = () => this.setState({ addModalshow: false });

  render() {
    return (
      <Fragment>
        {this.state.addModalshow === true ? (
          <Popup
            show={this.state.addModalshow}
            data={this.state.selecteddata}
            driverData={this.state.driverDetails}
            vehicleData={this.state.vehicleDetails}
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

        {/* <i
          className="fa fa-trash"
          title="Delete"
          style={{
            fontSize: "22px",
            marginLeft: "10px",
            color: "red",
          }}
          onClick={() => this.submit(this.props.data.original)}
        ></i> */}
      </Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     viewtrip: state.trip.viewTrip.result,
//   };
// };

// export default connect(mapStateToProps, {
//   getDeleteAPI,
//   getVinListAPI,
//   getDriverListAPI,
// })(withRouter(Buttons));

export default Buttons;
