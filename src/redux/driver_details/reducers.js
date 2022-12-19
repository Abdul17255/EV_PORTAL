import actions from "./actions";
import { combineReducers } from "redux";

const initStateDriverdetails = {
  loading: false,
  result: null,
  error: false,
};

function driverDetailsApi(state = initStateDriverdetails, action) {
  switch (action.type) {
    case actions.GET_DRIVERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DRIVERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_DRIVERDETAILS_FAILURE:
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
    driverDetailsApi,
});
