const driverReportingDetailsApiActions = {
    GET_DRIVERREPORTINGDETAILS: "GET_DRIVERREPORTINGDETAILS",
    GET_DRIVERREPORTINGDETAILS_SUCCESS: "GET_DRIVERREPORTINGDETAILS_SUCCESS",
    GET_DRIVERREPORTINGDETAILS_FAILURE: "GET_DRIVERREPORTINGDETAILS_FAILURE",
  
    getDriverReportingDetailsAPI: (data) => ({
      type: driverReportingDetailsApiActions.GET_DRIVERREPORTINGDETAILS,
      payload: { data },
    }),
  
    getDriverReportingDetailsAPISuccess: (saveStatusCode, result) => ({
      type: driverReportingDetailsApiActions.GET_DRIVERREPORTINGDETAILS_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getDriverReportingDetailsAPIFailure: (saveStatusCode, message) => ({
      type: driverReportingDetailsApiActions.GET_DRIVERREPORTINGDETAILS_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default driverReportingDetailsApiActions;