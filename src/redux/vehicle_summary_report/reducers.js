import actions from "./actions";
import { combineReducers } from "redux";

const initStateVehicleSummaryReport = {
  loading: false,
  result: null,
  error: false,
};

function vehicleSummaryReportApi(state = initStateVehicleSummaryReport, action) {
  switch (action.type) {
    case actions.GET_VEHICLESUMMARYREPORT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_VEHICLESUMMARYREPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_VEHICLESUMMARYREPORT_FAILURE:
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
    vehicleSummaryReportApi,
});
