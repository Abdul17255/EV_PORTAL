import actions from "./actions";
import { combineReducers } from "redux";

const initStateChargeSummary = {
  loading: false,
  result: null,
  error: false,
};

function chargeSummaryApi(state = initStateChargeSummary, action) {
  switch (action.type) {
    case actions.GET_CHARGESUMMARY:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHARGESUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_CHARGESUMMARY_FAILURE:
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
  chargeSummaryApi,
});
