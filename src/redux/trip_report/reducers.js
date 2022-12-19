import actions from "./actions";
import { combineReducers } from "redux";

const initStateTripReport = {
  loading: false,
  result: null,
  error: false,
};

function tripReportApi(state = initStateTripReport, action) {
  switch (action.type) {
    case actions.GET_TRIPREPORT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_TRIPREPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_TRIPREPORT_FAILURE:
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
  tripReportApi,
});
