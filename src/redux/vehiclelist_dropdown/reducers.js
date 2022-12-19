import actions from "./actions";
import { combineReducers } from "redux";

const initStateVehiclelistDropdown = {
  loading: false,
  result: null,
  error: false,
};

function vehiclelistDropdownApi(state = initStateVehiclelistDropdown, action) {
  switch (action.type) {
    case actions.GET_VEHICLELISTDROPDOWN:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_VEHICLELISTDROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_VEHICLELISTDROPDOWN_FAILURE:
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
  vehiclelistDropdownApi,
});
