import actions from "./actions";
import { combineReducers } from "redux";

const initStateBatteryTempGraph = {
  loading: false,
  result: null,
  error: false,
};

function batteryTempGraphApi(state = initStateBatteryTempGraph, action) {
  switch (action.type) {
    case actions.GET_BATTERYTEMPGRAPH:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_BATTERYTEMPGRAPH_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_BATTERYTEMPGRAPH_FAILURE:
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
  batteryTempGraphApi,
});
