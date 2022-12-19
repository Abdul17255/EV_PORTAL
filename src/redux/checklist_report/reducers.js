import actions from "./actions";
import { combineReducers } from "redux";

const initStateChecklistReport = {
  loading: false,
  result: null,
  error: false,
};

function checklistReportApi(state = initStateChecklistReport, action) {
  switch (action.type) {
    case actions.GET_CHECKLISTREPORT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHECKLISTREPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_CHECKLISTREPORT_FAILURE:
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
  checklistReportApi,
});
