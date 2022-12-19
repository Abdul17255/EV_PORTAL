import actions from "./actions";
import { combineReducers } from "redux";

const initStateBreakdownReport = {
  loading: false,
  result: null,
  error: false,
};

function breakdownReportApi(state = initStateBreakdownReport, action) {
  switch (action.type) {
    case actions.GET_BREAKDOWNREPORT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_BREAKDOWNREPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_BREAKDOWNREPORT_FAILURE:
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
  breakdownReportApi,
});
