import React, { Component } from "react";
import "./index.scss"

class HeaderLogo extends Component {
  onLogoClick = () => {
    window.location.href = "/dashboard";
  };

  render() {
    return (
      <div className="header-logo">
        <img
          src={require("../../assets/images/headernew/Group 8275.png")}
          className="header-logo_volvo__image"
          alt="logo"
          onClick={this.onLogoClick}
        />
      </div>
    );
  }
}

export default HeaderLogo;
