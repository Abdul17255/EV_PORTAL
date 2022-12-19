const batteryTempGraphApiActions = {
  GET_BATTERYTEMPGRAPH: "GET_BATTERYTEMP",
  GET_BATTERYTEMPGRAPH_SUCCESS: "GET_BATTERYTEMP_SUCCESS",
  GET_BATTERYTEMPGRAPH_FAILURE: "GET_BATTERYTEMP_FAILURE",

  getBatteryTempGraphAPI: (data) => ({
    type: batteryTempGraphApiActions.GET_BATTERYTEMPGRAPH,
    payload: { data },
  }),

  getBatteryTempGraphAPISuccess: (saveStatusCode, result) => ({
    type: batteryTempGraphApiActions.GET_BATTERYTEMPGRAPH_SUCCESS,
    saveStatusCode,
    result,
  }),

  getBatteryTempGraphApiFailure: (saveStatusCode, message) => ({
    type: batteryTempGraphApiActions.GET_BATTERYTEMPGRAPH_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default batteryTempGraphApiActions;
