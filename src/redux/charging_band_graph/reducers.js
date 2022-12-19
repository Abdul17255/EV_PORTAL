import actions from "./actions";
import { combineReducers } from "redux";

const initStateChargeBandGraph = {
  loading: false,
  result: null,
  error: false,
};

function chargeBandGraphApi(state = initStateChargeBandGraph, action) {
  switch (action.type) {
    case actions.GET_CHARGEBANDGRAPH:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHARGEBANDGRAPH_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_CHARGEBANDGRAPH_FAILURE:
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
  chargeBandGraphApi,
});
