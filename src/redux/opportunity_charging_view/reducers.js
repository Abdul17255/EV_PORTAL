import actions from "./actions";
import { combineReducers } from "redux";

const initStateOpportunityCharging = {
  loading: false,
  result: null,
  error: false,
};

function OpportunityChargingApi(state = initStateOpportunityCharging, action) {
  switch (action.type) {
    case actions.GET_OPPORTUNITYCHARGING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_OPPORTUNITYCHARGING_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_OPPORTUNITYCHARGING_FAILURE:
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
  OpportunityChargingApi,
});
