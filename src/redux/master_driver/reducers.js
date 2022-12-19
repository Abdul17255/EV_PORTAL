import actions from "./actions";
import { combineReducers } from "redux";

const initStateDrivermasterdetails = {
  loading: false,
  result: null,
  error: false,
};

const initStateCreateDrivermasterdetails = {
  loading: false,
  result: null,
  error: false,
};

const initStateDeleteDrivermasterdetails = {
  loading: false,
  result: null,
  error: false,
};

const initStateUpdateDrivermasterdetails = {
  loading: false,
  result: null,
  error: false,
};

function driverMasterApi(state = initStateDrivermasterdetails, action) {
  switch (action.type) {
    case actions.GET_DRIVERMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_DRIVERMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_DRIVERMASTERDETAILS_FAILURE:
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

function createDriverMasterApi(
  state = initStateCreateDrivermasterdetails,
  action
) {
  switch (action.type) {
    case actions.CREATE_DRIVERMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.CREATE_DRIVERMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.CREATE_DRIVERMASTERDETAILS_FAILURE:
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

function deleteDriverMasterApi(
  state = initStateDeleteDrivermasterdetails,
  action
) {
  switch (action.type) {
    case actions.DELETE_DRIVERMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.DELETE_DRIVERMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.DELETE_DRIVERMASTERDETAILS_FAILURE:
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

function updateDriverMasterApi(
  state = initStateUpdateDrivermasterdetails,
  action
) {
  switch (action.type) {
    case actions.UPDATE_DRIVERMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.UPDATE_DRIVERMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.UPDATE_DRIVERMASTERDETAILS_FAILURE:
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
  driverMasterApi,
  createDriverMasterApi,
  deleteDriverMasterApi,
  updateDriverMasterApi,
});
