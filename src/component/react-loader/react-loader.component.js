import React, { Component } from "react";
import { ClipLoader, BeatLoader } from "react-spinners";

// import { css } from 'react-emotion';
//import { css } from "emotion";
import classes from "./react-loader.module.scss";

class ReactLoader extends Component {
  render() {
    return (
      <BeatLoader
        className={classes.spinner}
        sizeUnit={"px"}
        size={14}
        color={"#0089D3"}
        // loading={this.state.loading}
      />
    );
  }
}

export default ReactLoader;
