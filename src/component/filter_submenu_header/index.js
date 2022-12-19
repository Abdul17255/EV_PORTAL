import React, { Component } from 'react';

class FilterSubmenuHeader extends Component {

    render() {
        return (
            <div>
 <form>
              <input
                className="charging-summary-input"
                type="text"
                id="filter"
                placeholder="Search Table"
                value={this.props.value || ""}
                onChange={this.props.onChange}
              />
            </form>

            </div>
        );
    }
}

export default FilterSubmenuHeader;