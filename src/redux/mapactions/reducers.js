import actions from "./actions";
import { combineReducers } from "redux";

const initStateMapAction = {
  loading: false,
  result: null,
  error: false,
};

function mapActionApi(state = initStateMapAction, action) {
  switch (action.type) {
    case actions.GET_MAPACTION:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_MAPACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_MAPACTION_FAILURE:
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
    mapActionApi,
});
