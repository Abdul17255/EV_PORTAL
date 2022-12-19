import actions from "./actions";
import { combineReducers } from "redux";

const initStateDriverMonitoringview = {
  loading: false,
  result: null,
  error: false,
};

function driverMonitoringViewApi(state = initStateDriverMonitoringview, action) {
  switch (action.type) {
    case actions.GET_DRIVERMONITORINGVIEW:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DRIVERMONITORINGVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_DRIVERMONITORINGVIEW_FAILURE:
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
    driverMonitoringViewApi
});
