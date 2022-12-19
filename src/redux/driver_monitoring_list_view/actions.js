const driverMonitoringviewApiActions = {
    GET_DRIVERMONITORINGVIEW: "GET_DRIVERMONITORINGVIEW",
    GET_DRIVERMONITORINGVIEW_SUCCESS: "GET_DRIVERMONITORINGVIEW_SUCCESS",
    GET_DRIVERMONITORINGVIEW_FAILURE: "GET_DRIVERMONITORINGVIEW_FAILURE",
  
    getDriverMonitoringViewAPI: (data) => ({
      type: driverMonitoringviewApiActions.GET_DRIVERMONITORINGVIEW,
      payload: { data },
    }),
  
    getDriverMonitoringViewAPISuccess: (saveStatusCode, result) => ({
      type: driverMonitoringviewApiActions.GET_DRIVERMONITORINGVIEW_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getDriverMonitoringViewAPIFailure: (saveStatusCode, message) => ({
      type: driverMonitoringviewApiActions.GET_DRIVERMONITORINGVIEW_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default driverMonitoringviewApiActions;
  