import actions from "./actions";
import { combineReducers } from "redux";

const initStateRoutemasterdetails = {
  loading: false,
  result: null,
  error: false,
};

const initStateCreateRoutemasterdetails = {
  loading: false,
  result: null,
  error: false,
};

const initStateDeleteRoutemasterdetails = {
  loading: false,
  result: null,
  error: false,
};

const initStateUpdateRoutemasterdetails = {
  loading: false,
  result: null,
  error: false,
};

function routeMasterApi(state = initStateRoutemasterdetails, action) {
  switch (action.type) {
    case actions.GET_ROUTEMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_ROUTEMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.GET_ROUTEMASTERDETAILS_FAILURE:
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

function createRouteMasterApi(
  state = initStateCreateRoutemasterdetails,
  action
) {
  switch (action.type) {
    case actions.CREATE_ROUTEMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.CREATE_ROUTEMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.CREATE_ROUTEMASTERDETAILS_FAILURE:
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

function deleteRouteMasterApi(
  state = initStateDeleteRoutemasterdetails,
  action
) {
  switch (action.type) {
    case actions.DELETE_ROUTEMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.DELETE_ROUTEMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.DELETE_ROUTEMASTERDETAILS_FAILURE:
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

function updateRouteMasterApi(
  state = initStateUpdateRoutemasterdetails,
  action
) {
  switch (action.type) {
    case actions.UPDATE_ROUTEMASTERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.UPDATE_ROUTEMASTERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case actions.UPDATE_ROUTEMASTERDETAILS_FAILURE:
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
  routeMasterApi,
  createRouteMasterApi,
  deleteRouteMasterApi,
  updateRouteMasterApi,
});
