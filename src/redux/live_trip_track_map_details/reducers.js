import actions from "./actions";
import { combineReducers } from "redux";

const initStateLiveTripTrackMapDetails = {
  loading: false,
  result: null,
  error: false,
};

function liveTripTrackMapDetailsApi(
  state = initStateLiveTripTrackMapDetails,
  action
) {
  switch (action.type) {
    case actions.GET_LIVETRIPTRACKMAPDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_LIVETRIPTRACKMAPDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_LIVETRIPTRACKMAPDETAILS_FAILURE:
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
  liveTripTrackMapDetailsApi,
});
