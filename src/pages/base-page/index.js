// Library
import React from "react";
import PropTypes from "prop-types";

class BasePage extends React.Component {
  componentDidMount() {}

  componentWillReceiveProps() {}

  render() {
    const { pageIdentifier, children } = this.props;

    return (
      <div id="base-page" key={pageIdentifier ? pageIdentifier : "base-page"}>
        {children}
      </div>
    );
  }
}

BasePage.propTypes = {
  pageIdentifier: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BasePage;
