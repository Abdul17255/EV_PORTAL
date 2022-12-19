const routeMasterApiActions = {
  GET_ROUTEMASTERDETAILS: "GET_ROUTEMASTERDETAILS",
  GET_ROUTEMASTERDETAILS_SUCCESS: "GET_ROUTEMASTERDETAILS_SUCCESS",
  GET_ROUTEMASTERDETAILS_FAILURE: "GET_ROUTEMASTERDETAILS_FAILURE",

  getRouteMasterAPI: (data) => ({
    type: routeMasterApiActions.GET_ROUTEMASTERDETAILS,
    payload: { data },
  }),

  getRouteMasterAPISuccess: (saveStatusCode, result) => ({
    type: routeMasterApiActions.GET_ROUTEMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getRouteMasterAPIFailure: (saveStatusCode, message) => ({
    type: routeMasterApiActions.GET_ROUTEMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),

  CREATE_ROUTEMASTERDETAILS: "CREATE_ROUTEMASTERDETAILS",
  CREATE_ROUTEMASTERDETAILS_SUCCESS: "CREATE_ROUTEMASTERDETAILS_SUCCESS",
  CREATE_ROUTEMASTERDETAILS_FAILURE: "CREATE_ROUTEMASTERDETAILS_FAILURE",

  createRouteMasterAPI: (data) => ({
    type: routeMasterApiActions.CREATE_ROUTEMASTERDETAILS,
    payload: { data },
  }),

  createRouteMasterAPISuccess: (saveStatusCode, result) => ({
    type: routeMasterApiActions.CREATE_ROUTEMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  createRouteMasterAPIFailure: (saveStatusCode, message) => ({
    type: routeMasterApiActions.CREATE_ROUTEMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),

  DELETE_ROUTEMASTERDETAILS: "DELETE_ROUTEMASTERDETAILS",
  DELETE_ROUTEMASTERDETAILS_SUCCESS: "DELETE_ROUTEMASTERDETAILS_SUCCESS",
  DELETE_ROUTEMASTERDETAILS_FAILURE: "DELETE_ROUTEMASTERDETAILS_FAILURE",

  deleteRouteMasterAPI: (data) => ({
    type: routeMasterApiActions.DELETE_ROUTEMASTERDETAILS,
    payload: { data },
  }),

  deleteRouteMasterAPISuccess: (saveStatusCode, result) => ({
    type: routeMasterApiActions.DELETE_ROUTEMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  deleteRouteMasterAPIFailure: (saveStatusCode, message) => ({
    type: routeMasterApiActions.DELETE_ROUTEMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),

  UPDATE_ROUTEMASTERDETAILS: "UPDATE_ROUTEMASTERDETAILS",
  UPDATE_ROUTEMASTERDETAILS_SUCCESS: "UPDATE_ROUTEMASTERDETAILS_SUCCESS",
  UPDATE_ROUTEMASTERDETAILS_FAILURE: "UPDATE_ROUTEMASTERDETAILS_FAILURE",

  updateRouteMasterAPI: (data) => ({
    type: routeMasterApiActions.UPDATE_ROUTEMASTERDETAILS,
    payload: { data },
  }),

  updateRouteMasterAPISuccess: (saveStatusCode, result) => ({
    type: routeMasterApiActions.UPDATE_ROUTEMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  updateRouteMasterAPIFailure: (saveStatusCode, message) => ({
    type: routeMasterApiActions.UPDATE_ROUTEMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default routeMasterApiActions;
