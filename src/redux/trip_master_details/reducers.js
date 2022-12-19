import actions from "./actions";
import { combineReducers } from "redux";

const initStateTripMasterDetails = {
  loading: false,
  result: null,
  error: false,
};

function tripMasterDetailsApi(state = initStateTripMasterDetails, action) {
  switch (action.type) {
    case actions.GET_TRIPMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_TRIPMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_TRIPMASTERDETAILS_FAILURE:
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
  tripMasterDetailsApi,
});
