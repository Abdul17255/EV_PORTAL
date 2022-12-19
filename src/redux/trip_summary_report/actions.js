const tripSummaryReportApiActions = {
    GET_TRIPSUMMARYREPORT: "GET_TRIPSUMMARYREPORT",
    GET_TRIPSUMMARYREPORT_SUCCESS: "GET_TRIPSUMMARYREPORT_SUCCESS",
    GET_TRIPSUMMARYREPORT_FAILURE: "GET_TRIPSUMMARYREPORT_FAILURE",
  
    gettripSummaryReportAPI: (data) => ({
      type:tripSummaryReportApiActions.GET_TRIPSUMMARYREPORT,
      payload: { data },
    }),
  
    gettripSummaryReportAPISuccess: (saveStatusCode, result) => ({
      type:tripSummaryReportApiActions.GET_TRIPSUMMARYREPORT_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    gettripSummaryReportAPIFailure: (saveStatusCode, message) => ({
      type: tripSummaryReportApiActions.GET_TRIPSUMMARYREPORT_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default tripSummaryReportApiActions;
  