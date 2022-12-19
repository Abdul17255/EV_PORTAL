import actions from "./actions";
import { combineReducers } from "redux";

const initStateDashboardStatusCounts = {
  loading: false,
  result: null,
  error: false,
};

function dashboardStatusCountsApi(
  state = initStateDashboardStatusCounts,
  action
) {
  switch (action.type) {
    case actions.GET_DASHBOARDSTATUSCOUNTS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DASHBOARDSTATUSCOUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_DASHBOARDSTATUSCOUNTS_FAILURE:
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
  dashboardStatusCountsApi,
});
