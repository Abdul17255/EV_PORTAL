import actions from "./actions";
import { combineReducers } from "redux";

const initStateSummary = {
  loading: false,
  result: null,
  error: false,
};

function summaryApi(state = initStateSummary, action) {
  switch (action.type) {
    case actions.GET_SUMMARY:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_SUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_SUMMARY_FAILURE:
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
  summaryApi,
});
