import actions from "./actions";
import { combineReducers } from "redux";

const initTechnicianFeedbackUpdate = {
  loading: false,
  result: null,
  error: false,
};

function feedBackUpdateApi(state = initTechnicianFeedbackUpdate, action) {
  switch (action.type) {
    case actions.GET_FEEDBACKUPDATE:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_FEEDBACKUPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_FEEDBACKUPDATE_FAILURE:
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
    feedBackUpdateApi,
});
