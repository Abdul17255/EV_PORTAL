import React, { Component } from "react";
import Header from "../header";
import SubMenuHeader from "../sub_menu_header";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Subheader from "../menu_header";
import Chargers from "../chargers";
import OpportunityChargers from "../opportunity_chargers";
import Dashboard from "../../pages/dashboard-page";

import moment from "moment";

import Footer from "../footer/index";
import "../my_dashboard/index.scss";
import BatteryGraphStatus from "../battery_graph_status/index";
import ChargeSummaryGrid from "../charge_summary_grid/index.js";

class Mydashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userid: "",
      password: "",
    };
  }

  render() {
    //  window.location.reload(false);
    return (
      <div className="mydashboard">
        <div className="child">
          <div className="head-mydashboard">
            <span>Depot Chargers</span>
          <span className="depot-chargers-subtext">Total Number Of Chargers : 9</span>
          
          
          </div>

          {/* <SubMenuHeader component="mydashboard" /> */}
          <Chargers />
          <div className="head-mydashboard"> <span>Opportunity Chargers</span>
          <span className="depot-chargers-subtext-1">Total Number Of Chargers : 0</span>
          </div>
          <OpportunityChargers />
          <BatteryGraphStatus />
          <ChargeSummaryGrid />
          <Footer />
        </div>
      </div>
    );
  }
}

//export default withRouter(Mydashboard);

const mapStateToProps = (state) => {
  return {
    ...state,
    // login: state.login,
  };
};

export default connect(mapStateToProps, {})(withRouter(Mydashboard));
//export default connect(mapStateToProps, {})(withRouter(Mydashboard));
