import actions from "./actions";
import { combineReducers } from "redux";

const initStateVehiclePerformanceDetails = {
  loading: false,
  result: null,
  error: false,
};

function vehiclePerformanceDetailsApi(
  state = initStateVehiclePerformanceDetails,
  action
) {
  switch (action.type) {
    case actions.GET_VEHICLEPERFORMANCEDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_VEHICLEPERFORMANCEDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_VEHICLEPERFORMANCEDETAILS_FAILURE:
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
  vehiclePerformanceDetailsApi,
});
