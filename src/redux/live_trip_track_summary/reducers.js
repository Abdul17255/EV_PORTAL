import actions from "./actions";
import { combineReducers } from "redux";

const initStateLiveTripTrackSummary = {
  loading: false,
  result: null,
  error: false,
};

function liveTripTrackSummaryApi(
  state = initStateLiveTripTrackSummary,
  action
) {
  switch (action.type) {
    case actions.GET_LIVETRIPTRACKSUMMARY:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_LIVETRIPTRACKSUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_LIVETRIPTRACKSUMMARY_FAILURE:
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
  liveTripTrackSummaryApi,
});
