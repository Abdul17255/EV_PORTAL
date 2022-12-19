import actions from "./actions";
import { combineReducers } from "redux";

const initStateBatteryTemp = {
  loading: false,
  result: null,
  error: false,
};

function batteryTempApi(state = initStateBatteryTemp, action) {
  switch (action.type) {
    case actions.GET_BATTERYTEMP:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_BATTERYTEMP_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_BATTERYTEMP_FAILURE:
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
  batteryTempApi,
});
