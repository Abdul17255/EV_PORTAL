import React, { Component } from "react";
import "../../component/pop_down_component/index.scss";
export default class PopDownComponent extends Component {
  render() {
    return (
      <div>
        <div className="dropdown">
          <select name="English" id="English">
            <option value="eng">English</option>
            <option value="saab">Hindi</option>
          </select>
        </div>
      </div>
    );
  }
}
