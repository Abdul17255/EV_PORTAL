import actions from "./actions";
import { combineReducers } from "redux";

const initUploadTripState = {
    loading: false,
    result: null,
    error: false,
    message: null,
  };
  

function tripUploadApi(state = initUploadTripState, action) {
  switch (action.type) {
    case actions.GET_UPLOAD_TRIP_EXCEL:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_UPLOAD_TRIP_EXCEL_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_UPLOAD_TRIP_EXCEL_ERROR:
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
    tripUploadApi,
});
