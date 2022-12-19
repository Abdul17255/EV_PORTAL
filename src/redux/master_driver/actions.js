const driverMasterApiActions = {
  GET_DRIVERMASTERDETAILS: "GET_DRIVERMASTERDETAILS",
  GET_DRIVERMASTERDETAILS_SUCCESS: "GET_DRIVERMASTERDETAILS_SUCCESS",
  GET_DRIVERMASTERDETAILS_FAILURE: "GET_DRIVERMASTERDETAILS_FAILURE",

  getDriverMasterAPI: (data) => ({
    type: driverMasterApiActions.GET_DRIVERMASTERDETAILS,
    payload: { data },
  }),

  getDriverMasterAPISuccess: (saveStatusCode, result) => ({
    type: driverMasterApiActions.GET_DRIVERMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getDriverMasterAPIFailure: (saveStatusCode, message) => ({
    type: driverMasterApiActions.GET_DRIVERMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),

  CREATE_DRIVERMASTERDETAILS: "CREATE_DRIVERMASTERDETAILS",
  CREATE_DRIVERMASTERDETAILS_SUCCESS: "CREATE_DRIVERMASTERDETAILS_SUCCESS",
  CREATE_DRIVERMASTERDETAILS_FAILURE: "CREATE_DRIVERMASTERDETAILS_FAILURE",

  createDriverMasterAPI: (data) => ({
    type: driverMasterApiActions.CREATE_DRIVERMASTERDETAILS,
    payload: { data },
  }),

  createDriverMasterAPISuccess: (saveStatusCode, result) => ({
    type: driverMasterApiActions.CREATE_DRIVERMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  createDriverMasterAPIFailure: (saveStatusCode, message) => ({
    type: driverMasterApiActions.CREATE_DRIVERMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),

  DELETE_DRIVERMASTERDETAILS: "DELETE_DRIVERMASTERDETAILS",
  DELETE_DRIVERMASTERDETAILS_SUCCESS: "DELETE_DRIVERMASTERDETAILS_SUCCESS",
  DELETE_DRIVERMASTERDETAILS_FAILURE: "DELETE_DRIVERMASTERDETAILS_FAILURE",

  deleteDriverMasterAPI: (data) => ({
    type: driverMasterApiActions.DELETE_DRIVERMASTERDETAILS,
    payload: { data },
  }),

  deleteDriverMasterAPISuccess: (saveStatusCode, result) => ({
    type: driverMasterApiActions.DELETE_DRIVERMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  deleteDriverMasterAPIFailure: (saveStatusCode, message) => ({
    type: driverMasterApiActions.DELETE_DRIVERMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),

  UPDATE_DRIVERMASTERDETAILS: "UPDATE_DRIVERMASTERDETAILS",
  UPDATE_DRIVERMASTERDETAILS_SUCCESS: "UPDATE_DRIVERMASTERDETAILS_SUCCESS",
  UPDATE_DRIVERMASTERDETAILS_FAILURE: "UPDATE_DRIVERMASTERDETAILS_FAILURE",

  updateDriverMasterAPI: (data) => ({
    type: driverMasterApiActions.UPDATE_DRIVERMASTERDETAILS,
    payload: { data },
  }),

  updateDriverMasterAPISuccess: (saveStatusCode, result) => ({
    type: driverMasterApiActions.UPDATE_DRIVERMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  updateDriverMasterAPIFailure: (saveStatusCode, message) => ({
    type: driverMasterApiActions.UPDATE_DRIVERMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default driverMasterApiActions;
