

// Library
import React, { Component } from "react";
import "../master_driver/index.scss"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import DriverMasterUpdate  from "../master_driver_update"
import DriverMasterCreate from "../master_driver_create"


class DriverMaster extends Component {
  constructor(props) {
    super(props);
    this.messageTimeOut = null;
    this.state = {
      selTab: 0,
      message: "",
      messageType: 0,
      tabs: [
        {
          tabIndex: 0,
          tabName: "UPDATE",
        },
        {
          tabIndex: 1,
         tabName: "CREATE",
        },
      
      ],
    };

    this.tabClick = this.tabClick.bind(this);
  }

  tabClick = (evt, tabItem) => {
    const { selectedTab } = this.props;
    this.onClickCloseMessage();

    if (evt.target.parentElement) {
      let tabs = evt.target.parentElement.getElementsByClassName(
        "on-boarding__layout__col-1__block__wrapper__header__left__tab"
      );
      Array.prototype.forEach.call(tabs, function (tab) {
        tab.classList.remove("active");
      });
    }
    evt.currentTarget.classList.add("active");

    this.setState({ selTab: tabItem.tabIndex });
    selectedTab && selectedTab(evt, tabItem);
  };

  onClickCloseMessage() {
    this.messageTimeOut = null;
    this.setState({
      message: "",
      messageType: 0,
    });
  }

//   getLoader = () => (
//     <div className="loader-overlay">
//       <div className="loader-container">
//         <ReactLoader />
//       </div>
//     </div>
//   );

  render() {
    const { tabs, selTab } = this.state;

    let tabDom = [];

    if (tabs && tabs.length > 0) {
      tabs.map(function (tabItem, index) {
        let className =
          selTab === tabItem.tabIndex
            ? "active on-boarding__layout__col-1__block__wrapper__header__left__tab ripple-effect"
            : "on-boarding__layout__col-1__block__wrapper__header__left__tab ripple-effect";
        tabDom.push(
          <li
            className={className}
            key={tabItem.tabIndex}
            onClick={(e) => this.tabClick(e, tabItem)}
          >
            <a>{tabItem.tabName}</a>
            <span className="on-boarding__layout__col-1__block__wrapper__header__left__tab-strip"></span>
          </li>
        );
      }, this);
    }

   

    return (
      <div className="on-boarding ">
        <div className="on-boarding__layout tabMargin">
          <div className="on-boarding__layout__col-1">
            <div className="on-boarding__layout__col-1__block">
              <div className="on-boarding__layout__col-1__block__wrapper tabHeight">
              <h2 className="driver-master-heading">Driver Master</h2>
                <div className="on-boarding__layout__col-1__block__wrapper__header">
                  <div className="on-boarding__layout__col-1__block__wrapper__header__left">
                    {tabDom}
                    {/* {this.state.message && (
                      <div
                        className={`alert ${
                          this.state.messageType === 1
                            ? "success"
                            : this.state.messageType === -1
                            ? "error"
                            : ""
                        }`}
                      >
                        <span
                          className="closebtn"
                          onClick={() => this.onClickCloseMessage()}
                        >
                          &times;
                        </span>
                        <strong>{this.state.message}</strong>
                      </div>
                    )} */}
                  </div>
                </div>
                <hr className="on-boarding__layout__col-1__block__wrapper__horizontal-line" />
                <div className="on-boarding__layout__col-1__block__wrapper__content tabHeightTrend">
                  {(() => {
                    if (selTab === 0) {
                      return <DriverMasterUpdate/>;
                    } else{
                      return <DriverMasterCreate/>;
                    } 
                  })()}
                </div>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, {})(withRouter(DriverMaster));

//export default DriverMaster
