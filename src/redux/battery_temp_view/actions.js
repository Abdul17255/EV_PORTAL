const batteryTempApiActions = {
  GET_BATTERYTEMP: "GET_BATTERYTEMP",
  GET_BATTERYTEMP_SUCCESS: "GET_BATTERYTEMP_SUCCESS",
  GET_BATTERYTEMP_FAILURE: "GET_BATTERYTEMP_FAILURE",

  getBatteryTempAPI: (data) => ({
    type: batteryTempApiActions.GET_BATTERYTEMP,
    payload: { data },
  }),

  getBatteryTempAPISuccess: (saveStatusCode, result) => ({
    type: batteryTempApiActions.GET_BATTERYTEMP_SUCCESS,
    saveStatusCode,
    result,
  }),

  getBatteryTempApiFailure: (saveStatusCode, message) => ({
    type: batteryTempApiActions.GET_BATTERYTEMP_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default batteryTempApiActions;
