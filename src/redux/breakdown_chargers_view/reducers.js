import actions from "./actions";
import { combineReducers } from "redux";

const initStateBreakdownChargers = {
  loading: false,
  result: null,
  error: false,
};

function BreakdownChargersApi(state = initStateBreakdownChargers, action) {
  switch (action.type) {
    case actions.GET_BREAKDOWNCHARGERS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_BREAKDOWNCHARGERS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_BREAKDOWNCHARGERS_FAILURE:
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
  BreakdownChargersApi,
});
