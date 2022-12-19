import actions from "./actions";
import { combineReducers } from "redux";

const initStateDriverlistDropdown = {
  loading: false,
  result: null,
  error: false,
};

function driverlistDropdownApi(state = initStateDriverlistDropdown, action) {
  switch (action.type) {
    case actions.GET_DRIVERLISTDROPDOWN:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DRIVERLISTDROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_DRIVERLISTDROPDOWN_FAILURE:
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
  driverlistDropdownApi,
});
