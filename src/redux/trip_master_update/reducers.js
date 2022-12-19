import actions from "./actions";
import { combineReducers } from "redux";

const initStateTripMasterUpdate = {
  loading: false,
  result: null,
  error: false,
};

function tripMasterUpdateApi(state = initStateTripMasterUpdate, action) {
  switch (action.type) {
    case actions.GET_TRIPMASTERUPDATE:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_TRIPMASTERUPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_TRIPMASTERUPDATE_FAILURE:
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
  tripMasterUpdateApi,
});
