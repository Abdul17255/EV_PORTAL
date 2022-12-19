import React, { Component } from "react";
import "../../container/footer/index.scss";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <img
            src={require("../../assets/images/footer/footer.png")}
            className="footer-logo"
            alt="logo"
          />
        </div>
        <div className="footer-right">
          <span>© 2022 Eicher. All rights reserved</span>
        </div>
      </div>
    );
  }
}

export default Footer;
