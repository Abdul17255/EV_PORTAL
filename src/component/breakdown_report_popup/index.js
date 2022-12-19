import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
  Button,
  closeButton,
} from "react-bootstrap";
import moment from "moment";
import DatePicker from "react-datepicker";

import "./index.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router";
//import * as User from "../../shared/app-data/user";
import DateTimePicker from "react-datepicker";

//Actions
import technicianFeedbackUpdateApiActions from "../../redux/technician_feedback_update/actions";
import breakdownReportActions from "../../redux/breakdown_report/actions";

let description_value = "";
const { getFeedbackUpdateAPI } = technicianFeedbackUpdateApiActions;
const { getBreakdownReportAPI } = breakdownReportActions;

class BreakdownPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      editingfields: {},
      message: "",
      messageType: 0,
      date: new Date(),
      description_value: "",

      // actual_trip_start: "",
      // actual_trip_end: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({
        show: this.props.show,
        editingfields: this.props.data,
      });
    }
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      description_value: evt.target.value,
    });
  }
  componentDidMount() {
    this.setState({
      show: this.props.show,
      editingfields: this.props.data,
    });
  }

  getBreakdownReport() {
    const { start_date, end_date } = this.state;
    this.setState({ loading: true });
    const payload = {
      api_key: "REPORT_COMPLAINT_DETAILS",
      start_timestamp: moment(start_date).format("YYYY-MM-DD 00:00:00"),
      end_timestamp: moment(end_date).format("YYYY-MM-DD 23:59:59"),
    };
    this.props.getBreakdownReportAPI(payload);
  }

  handleSubmit = (event) => {
    console.log();
    event.preventDefault();
    const { id } = this.state.editingfields;

    const payload = {
      id: this.state.editingfields.complaint_id,
      description: this.state.description_value,
    };
    this.props.getFeedbackUpdateAPI(payload);

    setTimeout(() => {
      this.getBreakdownReport();
    }, 2000);
  };

  render() {
    //let val = this.state.editingfields.reg_no;
    //console.log("searching", this.state.editingfields.name_tagid);
    return (
      <div className="popup-box">
        <Modal
          style={{
            height: "1000px",
            minHeight: "500px",
          }}
          show={this.state.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={this.props.closemodal}
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ fontSize: "1rem", marginLeft: "15px" }}
            >
              Breakdown ID :{this.state.editingfields.complaint_id}
            </Modal.Title>
          </Modal.Header>
          <form
            className="trip-popup"
            autocomplete="off"
            onSubmit={this.handleSubmit}
          >
            <Modal.Body
              style={{
                "max-height": "calc(80vh - 210px)",

                "overflow-y": "auto",
              }}
            >
              <div className="formwidth">
                <div className="col_50_col">
                  <div className="col_100_col">
                    <label className="desc">Description :</label>
                    <span style={{ color: "red", marginLeft: "2%" }}> *</span>
                  </div>
                </div>
                <div className="col_50_col">
                  <div className="col_100_col">
                    <input
                      // placeholder="Registration Number:"
                      name="reg_vin"
                      onChange={this.handleChange}
                      // value={this.state.editingfields.reg_vin}
                    ></input>
                  </div>
                </div>

                {/* <div className="col_50">
                  <div className="col_100">
                    <label>Driver Name:</label>
                    <span style={{ color: "red", marginLeft: "2%" }}> *</span>
                  </div>
                  {/*<div className="col_100">
                    <select
                      placeholder="Driver Name:"
                      name="name_tagid"
                     // onChange={this.handleChange}
                     // value={this.state.editingfields.name_tagid}
                    >
                      <option defaultValue=""> </option>
                      {this.state.driverList.map((e, i) => (
                        <option key={i} value={e.name_tagid}>
                          {e.name_tagid}
                        </option>
                      ))}
                    </select>
               
                    
                      </div>
                    </div>*/}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <input
                className="button-breakdown"
                type="submit"
                value="Submit"
              />
            </Modal.Footer>
          </form>
        </Modal>
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
  getFeedbackUpdateAPI,
  getBreakdownReportAPI,
})(withRouter(BreakdownPopup));

//export default Popup;
