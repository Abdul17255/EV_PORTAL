// import React, { Component } from "react";
// import "../vehicle_number/index.scss";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import LiveTripTracking from "../live_trip_tracking";

// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";

// import vehicleMapDashboardApiActions from "../../redux/vehicle_map_dashboard/actions";

// const { getVehicleMapDashboardAPI } = vehicleMapDashboardApiActions;

// class VehicleNumberDropdown extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       regNumbers: [],
//       editingfields: {},
//       vehicleChoosed: false,
//     };
//     // this.signinCheckFunction = this.signinCheckFunction.bind(this);
//   }

//   componentDidMount() {
//     this.getVehicleMap();
//   }

//   getVehicleMap = async () => {
//     let payLoad = {
//       api_key: "MAP_DASHBOARD_VEHICLE",
//     };

//     await this.props.getVehicleMapDashboardAPI(payLoad);
//   };

//   componentWillReceiveProps(nextProps) {
//     console.log("next props", nextProps);
//     if (this.props !== nextProps) {
//       this.setState({
//         regNumbers:
//           nextProps?.vehicleMapDashboardApi?.vehicleMapDashboardApi?.result
//             ?.data,
//       });
//     }
//   }

//   handleChange = (evt) => {
//     // sessionStorage.setItem("mapVehClicked", evt.target.value);
//     this.setState({ vehicleChoosed: true });
//     const value = evt.target.value;

//     const name = evt.target.name;

//     this.setState((prevState) => ({
//       editingfields: {
//         // object that we want to update
//         ...prevState.editingfields, // keep all other key-value pairs
//         [name]: value, // update the value of specific key
//       },
//     }));
//   };

//   render() {
//     return (
//       <div className="submenuheader_vehicle_number">
//         <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
//           <InputLabel id="demo-simple-select-autowidth-label">
//             Vehicle Number
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-autowidth-label"
//             id="demo-simple-select-autowidth"
//             value={this.state.editingfields.reg_no}
//             label="selectedVehicle"
//             onChange={this.handleChange}
//             MenuProps={{
//               style: {
//                 maxHeight: 500,
//               },
//             }}
//           >
//             <MenuItem defaultValue=""> </MenuItem>
//             {this.state.regNumbers.map((e, i) => (
//               <MenuItem key={e.reg_no} value={e.reg_no}>
//                 {e.reg_no}
//               </MenuItem>
//             ))}
//           </Select>
//           {/* <select
//             placeholder="Vehicle Number"
//             name="reg_no"
//             onChange={this.handleChange}
//             value={this.state.reg_no}
//           >
//             <option defaultValue=""> </option>
//             {this.state.regNumbers.map((e, i) => (
//               <option key={i} value={e.reg_no}>
//                 {e.reg_no}
//               </option>
//             ))}
//           </select> */}
//         </FormControl>
//         {/* {this.state.vehicleChoosed && <LiveTripTracking data="abc" />} */}
//       </div>
//     );
//   }
// }

// //export default VehicleNumber;
// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     // loginpage: state.login,
//   };
// };

// export default connect(mapStateToProps, {
//   getVehicleMapDashboardAPI,
// })(withRouter(VehicleNumberDropdown));

import React, { Component } from "react";
import "../vehicle_number/index.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import LiveTripTracking from "../live_trip_tracking";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import vehicleMasterApiActions from "../../redux/master_vehicle/actions";

const { getVehicleMasterAPI } = vehicleMasterApiActions;

class VehicleNumberDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regNumbers: [],
      editingfields: {},
      vehicleChoosed: "",
    };
    // this.signinCheckFunction = this.signinCheckFunction.bind(this);
  }

  componentDidMount() {
    this.getVehicleMap();
  }

  getVehicleMap = async () => {
    const payload = {
      user_id: "1",
    };
    this.props.getVehicleMasterAPI(payload);
  };

  // componentWillReceiveProps(nextProps) {
  //   if (this.props !== nextProps) {
  //     this.setState({
  //       regNumbers:
  //         nextProps.vehicleMapDashboardApi.vehicleMapDashboardApi.result.data,
  //     });
  //   } else {
  //     this.setState({
  //       regNumbers: [],
  //     });
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (
        nextProps.VehicleMasterApi?.vehicleMasterApi?.result?.data?.responseData
          ?.length > 0
      ) {
        this.setState({
          regNumbers:
            nextProps.VehicleMasterApi.vehicleMasterApi.result.data
              .responseData,
        });
      }
    } else {
      this.setState({
        regNumbers: [],
      });
    }
  }
  handleChange = (evt) => {
    sessionStorage.setItem("mapVehClicked", evt.target.value);
    this.setState({ vehicleChoosed: evt.target.value });
    const value = evt.target.value;

    const name = evt.target.name;

    this.setState((prevState) => ({
      editingfields: {
        // object that we want to update
        ...prevState.editingfields, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  };

  render() {
    // console.log("before map", this.state.regNumbers);
    return (
      <div className="submenuheader_vehicle_number">
        <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">
            Vehicle Number
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={sessionStorage.getItem("mapVehClicked")}
            label="selectedVehicle"
            onChange={this.handleChange}
            MenuProps={{
              style: {
                maxHeight: 500,
              },
            }}
          >
            <MenuItem defaultValue=""> </MenuItem>
            {this.state.regNumbers.map((e, i) => (
              <MenuItem key={e.regNo} value={e.regNo}>
                {e.regNo}
              </MenuItem>
            ))}
          </Select>
          {/* <select
            placeholder="Vehicle Number"
            name="reg_no"
            onChange={this.handleChange}
            value={this.state.reg_no}
          >
            <option defaultValue=""> </option>
            {this.state.regNumbers.map((e, i) => (
              <option key={i} value={e.reg_no}>
                {e.reg_no}
              </option>
            ))}
          </select> */}
        </FormControl>
        {/* {this.state.vehicleChoosed && <LiveTripTracking data="abc" />} */}
      </div>
    );
  }
}

//export default VehicleNumber;
const mapStateToProps = (state) => {
  return {
    ...state,
    // loginpage: state.login,
  };
};

export default connect(mapStateToProps, {
  getVehicleMasterAPI,
})(withRouter(VehicleNumberDropdown));
