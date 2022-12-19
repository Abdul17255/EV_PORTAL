import React, { Component } from "react";
import "./index.scss";

class Searchbox extends Component {
  render() {
    return (
      <div className="div">
        <div className="rectangle">
          {/*  <img src='../../../assets/images/Rectangle 847/Rectangle 847.png' alt=""/> */}
          <div className="search"></div>
          <div className="input">
          <input placeholder=""/>
          </div>
          <div className="filter"></div>
        </div>
      </div>
    );
  }
}
export default Searchbox;
