import actions from "./actions";
import { combineReducers } from "redux";

const initStateLogin = {
  loading: false,
  result: null,
  error: false,
};

function loginApi(state = initStateLogin, action) {
  switch (action.type) {
    case actions.GET_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_LOGIN_FAILURE:
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
  loginApi,
});
