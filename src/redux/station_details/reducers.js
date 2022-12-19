import actions from "./actions";
import { combineReducers } from "redux";

const initStateStation = {
  loading: false,
  result: null,
  error: false,
};

function stationApi(state = initStateStation, action) {
  switch (action.type) {
    case actions.GET_STATION:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_STATION_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_STATION_FAILURE:
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
  stationApi,
});
