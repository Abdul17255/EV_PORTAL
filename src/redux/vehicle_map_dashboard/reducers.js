import actions from "./actions";
import { combineReducers } from "redux";

const initStateVehicleMapDashboard = {
  loading: false,
  result: null,
  error: false,
};

function vehicleMapDashboardApi(state = initStateVehicleMapDashboard, action) {
  switch (action.type) {
    case actions.GET_VEHICLEMAPDASHBOARD:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_VEHICLEMAPDASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_VEHICLEMAPDASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        result: {
          errorResponse: action.saveStatusCode,
          message: action.message,
        },
      };
    default:
      return state;
  }
}

export default combineReducers({
  vehicleMapDashboardApi,
});
