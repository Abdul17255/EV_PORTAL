import actions from "./actions";
import { combineReducers } from "redux";

const initStateChargersReport = {
  loading: false,
  result: null,
  error: false,
};

function chargersReportApi(state = initStateChargersReport, action) {
  switch (action.type) {
    case actions.GET_CHARGERSREPORT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHARGERSREPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_CHARGERSREPORT_FAILURE:
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
    chargersReportApi,
});
