const vehiclePerformanceDetailsApiActions = {
  GET_VEHICLEPERFORMANCEDETAILS: "GET_VEHICLEPERFORMANCEDETAILS",
  GET_VEHICLEPERFORMANCEDETAILS_SUCCESS:
    "GET_VEHICLEPERFORMANCEDETAILS_SUCCESS",
  GET_VEHICLEPERFORMANCEDETAILS_FAILURE:
    "GET_VEHICLEPERFORMANCEDETAILS_FAILURE",

  getVehiclePerformanceDetailsAPI: (data) => ({
    type: vehiclePerformanceDetailsApiActions.GET_VEHICLEPERFORMANCEDETAILS,
    payload: { data },
  }),

  getVehiclePerformanceDetailsAPISuccess: (saveStatusCode, result) => ({
    type: vehiclePerformanceDetailsApiActions.GET_VEHICLEPERFORMANCEDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getVehiclePerformanceDetailsAPIFailure: (saveStatusCode, message) => ({
    type: vehiclePerformanceDetailsApiActions.GET_VEHICLEPERFORMANCEDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default vehiclePerformanceDetailsApiActions;
