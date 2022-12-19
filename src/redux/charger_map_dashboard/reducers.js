import actions from "./actions";
import { combineReducers } from "redux";

const initStateChargeMapDashboard = {
  loading: false,
  result: null,
  error: false,
};

function chargerMapDashboardApi(state = initStateChargeMapDashboard, action) {
  switch (action.type) {
    case actions.GET_CHARGERMAPDASHBOARD:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHARGERMAPDASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_CHARGERMAPDASHBOARD_FAILURE:
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
  chargerMapDashboardApi,
});
