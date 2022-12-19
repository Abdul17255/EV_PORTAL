import actions from "./actions";
import { combineReducers } from "redux";

const initStateOccupiedStation = {
  loading: false,
  result: null,
  error: false,
};

function occupiedStationApi(state = initStateOccupiedStation, action) {
  switch (action.type) {
    case actions.GET_OCCUPIEDSTATION:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_OCCUPIEDSTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_OCCUPIEDSTATION_FAILURE:
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
  occupiedStationApi,
});
