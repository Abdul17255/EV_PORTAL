import actions from "./actions";
import { combineReducers } from "redux";

const initStateChargeBand = {
  loading: false,
  result: null,
  error: false,
};

function chargeBandApi(state = initStateChargeBand, action) {
  switch (action.type) {
    case actions.GET_CHARGEBAND:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHARGEBAND_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_CHARGEBAND_FAILURE:
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
  chargeBandApi,
});
