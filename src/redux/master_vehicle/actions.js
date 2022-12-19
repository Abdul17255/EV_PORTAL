const vehicleMasterApiActions = {
  GET_VEHICLEMASTERDETAILS: "GET_VEHICLEMASTERDETAILS",
  GET_VEHICLEMASTERDETAILS_SUCCESS: "GET_VEHICLEMASTERDETAILS_SUCCESS",
  GET_VEHICLEMASTERDETAILS_FAILURE: "GET_VEHICLEMASTERDETAILS_FAILURE",

  ///// vehicle master view

  getVehicleMasterAPI: (data) => ({
    type: vehicleMasterApiActions.GET_VEHICLEMASTERDETAILS,
    payload: { data },
  }),

  getVehicleMasterAPISuccess: (saveStatusCode, result) => ({
    type: vehicleMasterApiActions.GET_VEHICLEMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getVehicleMasterAPIFailure: (saveStatusCode, message) => ({
    type: vehicleMasterApiActions.GET_VEHICLEMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),

  ///// vehicle master create

  CREATE_VEHICLEMASTER: "CREATE_VEHICLEMASTER",
  CREATE_VEHICLEMASTER_SUCCESS: "CREATE_VEHICLEMASTER_SUCCESS",
  CREATE_VEHICLEMASTER_FAILURE: "CREATE_VEHICLEMASTER_FAILURE",

  createVehicleMasterAPI: (data) => ({
    type: vehicleMasterApiActions.CREATE_VEHICLEMASTER,
    payload: { data },
  }),

  createVehicleMasterAPISuccess: (saveStatusCode, result) => ({
    type: vehicleMasterApiActions.CREATE_VEHICLEMASTER_SUCCESS,
    saveStatusCode,
    result,
  }),

  createVehicleMasterAPIFailure: (saveStatusCode, message) => ({
    type: vehicleMasterApiActions.CREATE_VEHICLEMASTER_FAILURE,
    saveStatusCode,
    message,
  }),

  ///// vehicle master delete

  DELETE_VEHICLEMASTER: "DELETE_VEHICLEMASTER",
  DELETE_VEHICLEMASTER_SUCCESS: "DELETE_VEHICLEMASTER_SUCCESS",
  DELETE_VEHICLEMASTER_FAILURE: "DELETE_VEHICLEMASTER_FAILURE",

  deleteVehicleMasterAPI: (data) => ({
    type: vehicleMasterApiActions.DELETE_VEHICLEMASTER,
    payload: { data },
  }),

  deleteVehicleMasterAPISuccess: (saveStatusCode, result) => ({
    type: vehicleMasterApiActions.DELETE_VEHICLEMASTER_SUCCESS,
    saveStatusCode,
    result,
  }),

  deleteVehicleMasterAPIFailure: (saveStatusCode, message) => ({
    type: vehicleMasterApiActions.DELETE_VEHICLEMASTER_FAILURE,
    saveStatusCode,
    message,
  }),

  ///// vehicle master update

  UPDATE_VEHICLEMASTER: "UPDATE_VEHICLEMASTER",
  UPDATE_VEHICLEMASTER_SUCCESS: "UPDATE_VEHICLEMASTER_SUCCESS",
  UPDATE_VEHICLEMASTER_FAILURE: "UPDATE_VEHICLEMASTER_FAILURE",

  updateVehicleMasterAPI: (data) => ({
    type: vehicleMasterApiActions.UPDATE_VEHICLEMASTER,
    payload: { data },
  }),

  updateVehicleMasterAPISuccess: (saveStatusCode, result) => ({
    type: vehicleMasterApiActions.UPDATE_VEHICLEMASTER_SUCCESS,
    saveStatusCode,
    result,
  }),

  updateVehicleMasterAPIFailure: (saveStatusCode, message) => ({
    type: vehicleMasterApiActions.UPDATE_VEHICLEMASTER_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default vehicleMasterApiActions;
