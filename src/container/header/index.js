import React, { Component } from "react";
import HeaderLogo from "../../component/header_logo";
import Searchbox from "../../component/search_box/index";
import PopDownComponent from "../../component/pop_down_component";
import Notification from "../../component/notification";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./index.scss";
import {
  TAB_MY_DASHBOARD as TabMyDashboard,
  TAB_CHARGING_SUMMARY as TabChargingSummary,
  TAB_CHARGING_INFRASTRUCTURE as TabChargingInfrastructure,
} from "../../constants/app-contants";

let usr = "";
let pwd = "";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      flag: "",
      role: "",
    };
    usr = sessionStorage.getItem("userName");
    pwd = localStorage.getItem("password");
  }

  componentDidMount() {
    this.setState({
      username: sessionStorage.getItem("userName"),
      role: sessionStorage.getItem("role"),
    });
  }

  // pageRefresh = () => {
  //   window.location.reload(false);
  // };

  logOut = () => {
    sessionStorage.clear();
    window.location.reload(false);
    this.setState({ flag: "true" });
  };

  render() {
    return (
      <div>
        {usr ? (
          <div className="header">
            <div className="header__left">
              <HeaderLogo />
            </div>
{/*<div className="header_text">
<h2>VE COMMERCIAL VEHICLES – EV MOBILITY</h2>
        </div>*/}
            {/*<div className="center">
              <Searchbox notificationCount="" handleNotificationClick="" />
      </div>*/}
            <div className="header__right">
              <div className="profile-info-1">
               {/* <PopDownComponent
                  idvalue="header_profile"
                  titleValue=""
                  signOutFunction=""
        />*/}
              </div>
              <div className="notification">
                <Notification />
              </div>
              <div className="profile-info-2">
                {this.state.username ? (
                  <Nav>
                    <img
                      src={require("../../assets/images/contact/My-Eicher fff.png")}
                      className="admin-logo"
                      alt="logo"
                      onClick={this.onLogoClick}
                    />
                    <NavDropdown
                      style={{ marginTop: "-8px" }}
                      title={
                        <span className="userName">{this.state.username}</span>
                      }
                      id="nav-dropdown"
                    >
                      <NavDropdown.Item onClick={this.logOut}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="header">
            <div className="header__left">
              <HeaderLogo />
            </div>

            <div className="center"></div>
            <div className="header__right">
              <div className="profile-info-1"></div>
              <div className="notification">{/* <Notification /> */}</div>
              <div className="profile-info-2"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
