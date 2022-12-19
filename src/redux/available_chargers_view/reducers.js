import actions from "./actions";
import { combineReducers } from "redux";

const initStateAvailableChargers = {
  loading: false,
  result: null,
  error: false,
};

function AvailableChargersApi(state = initStateAvailableChargers, action) {
  switch (action.type) {
    case actions.GET_AVAILABLECHARGERS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_AVAILABLECHARGERS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_AVAILABLECHARGERS_FAILURE:
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
  AvailableChargersApi,
});
