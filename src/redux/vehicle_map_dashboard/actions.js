const vehicleMapDashboardApiActions = {
  GET_VEHICLEMAPDASHBOARD: "GET_VEHICLEMAPDASHBOARD",
  GET_VEHICLEMAPDASHBOARD_SUCCESS: "GET_VEHICLEMAPDASHBOARD_SUCCESS",
  GET_VEHICLEMAPDASHBOARD_FAILURE: "GET_VEHICLEMAPDASHBOARD_FAILURE",

  getVehicleMapDashboardAPI: (data) => ({
    type: vehicleMapDashboardApiActions.GET_VEHICLEMAPDASHBOARD,
    payload: { data },
  }),

  getVehicleMapDashboardAPISuccess: (saveStatusCode, result) => ({
    type: vehicleMapDashboardApiActions.GET_VEHICLEMAPDASHBOARD_SUCCESS,
    saveStatusCode,
    result,
  }),

  getVehicleMapDashboardAPIFailure: (saveStatusCode, message) => ({
    type: vehicleMapDashboardApiActions.GET_VEHICLEMAPDASHBOARD_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default vehicleMapDashboardApiActions;
