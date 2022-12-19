import actions from "./actions";
import { combineReducers } from "redux";

const initStateDriverReportingDetails = {
  loading: false,
  result: null,
  error: false,
};

function driverReportingDetailsApi(state = initStateDriverReportingDetails, action) {
  switch (action.type) {
    case actions.GET_DRIVERREPORTINGDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DRIVERREPORTINGDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_DRIVERREPORTINGDETAILS_FAILURE:
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
    driverReportingDetailsApi,
});
