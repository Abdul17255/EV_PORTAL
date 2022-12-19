import actions from "./actions";
import { combineReducers } from "redux";

const initStateTripSummaryReport = {
  loading: false,
  result: null,
  error: false,
};

function tripSummaryReportApi(state = initStateTripSummaryReport, action) {
  switch (action.type) {
    case actions.GET_TRIPSUMMARYREPORT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_TRIPSUMMARYREPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_TRIPSUMMARYREPORT_FAILURE:
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
    tripSummaryReportApi,
});
