import actions from "./actions";
import { combineReducers } from "redux";

const initStateChargerEfficiency = {
  loading: false,
  result: null,
  error: false,
};

function chargerEfficiencyApi(state = initStateChargerEfficiency, action) {
  switch (action.type) {
    case actions.GET_CHARGEREFFICIENCY:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHARGEREFFICIENCY_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_CHARGEREFFICIENCY_FAILURE:
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
  chargerEfficiencyApi,
});
