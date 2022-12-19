const vehicleSummaryReportApiActions = {
    GET_VEHICLESUMMARYREPORT: "GET_VEHICLESUMMARYREPORT",
    GET_VEHICLESUMMARYREPORT_SUCCESS: "GET_VEHICLESUMMARYREPORT_SUCCESS",
    GET_VEHICLESUMMARYREPORT_FAILURE: "GET_VEHICLESUMMARYREPORT_FAILURE",
  
    getvehicleSummaryReportAPI: (data) => ({
      type:vehicleSummaryReportApiActions.GET_VEHICLESUMMARYREPORT,
      payload: { data },
    }),
  
    getvehicleSummaryReportAPISuccess: (saveStatusCode, result) => ({
      type:vehicleSummaryReportApiActions.GET_VEHICLESUMMARYREPORT_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getvehicleSummaryReportAPIFailure: (saveStatusCode, message) => ({
      type: vehicleSummaryReportApiActions.GET_VEHICLESUMMARYREPORT_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default vehicleSummaryReportApiActions;
  