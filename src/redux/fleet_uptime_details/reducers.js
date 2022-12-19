import actions from "./actions";
import { combineReducers } from "redux";

const initStateFleetUptimeDetails = {
  loading: false,
  result: null,
  error: false,
};

function fleetUptimeDetailsApi(state = initStateFleetUptimeDetails, action) {
  switch (action.type) {
    case actions.GET_FLEETUPTIMEDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_FLEETUPTIMEDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_FLEETUPTIMEDETAILS_FAILURE:
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
  fleetUptimeDetailsApi,
});
