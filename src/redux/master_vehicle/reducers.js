import actions from "./actions";
import { combineReducers } from "redux";

const initStateVehiclemasterdetails = {
  loading: false,
  result: null,
  error: false,
};

const initStateVehiclemastercreate = {
  loading: false,
  result: null,
  error: false,
};

const initStateVehiclemasterdelete = {
  loading: false,
  result: null,
  error: false,
};

const initStateVehiclemasterupdate = {
  loading: false,
  result: null,
  error: false,
};

function vehicleMasterApi(state = initStateVehiclemasterdetails, action) {
  switch (action.type) {
    case actions.GET_VEHICLEMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_VEHICLEMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_VEHICLEMASTERDETAILS_FAILURE:
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

function CreateVehicleMasterApi(state = initStateVehiclemastercreate, action) {
  switch (action.type) {
    case actions.CREATE_VEHICLEMASTER:
      return {
        ...state,
        loading: true,
      };
    case actions.CREATE_VEHICLEMASTER_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.CREATE_VEHICLEMASTER_FAILURE:
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

function DeleteVehicleMasterApi(state = initStateVehiclemasterdelete, action) {
  switch (action.type) {
    case actions.DELETE_VEHICLEMASTER:
      return {
        ...state,
        loading: true,
      };
    case actions.DELETE_VEHICLEMASTER_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.DELETE_VEHICLEMASTER_FAILURE:
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

function UpdateVehicleMasterApi(state = initStateVehiclemasterupdate, action) {
  switch (action.type) {
    case actions.UPDATE_VEHICLEMASTER:
      return {
        ...state,
        loading: true,
      };
    case actions.UPDATE_VEHICLEMASTER_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.UPDATE_VEHICLEMASTER_FAILURE:
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
  vehicleMasterApi,
  CreateVehicleMasterApi,
  DeleteVehicleMasterApi,
  UpdateVehicleMasterApi,
});
