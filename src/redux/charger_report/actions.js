const chargersReportApiActions = {
    GET_CHARGERSREPORT: "GET_CHARGERSREPORT",
    GET_CHARGERSREPORT_SUCCESS: "GET_CHARGERSREPORT_SUCCESS",
    GET_CHARGERSREPORT_FAILURE: "GET_CHARGERSREPORT_FAILURE",
  
    getChargersReportAPI: (data) => ({
      type: chargersReportApiActions.GET_CHARGERSREPORT,
      payload: { data },
    }),
  
    getChargersReportAPISuccess: (saveStatusCode, result) => ({
      type: chargersReportApiActions.GET_CHARGERSREPORT_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getChargersReportAPIFailure: (saveStatusCode, message) => ({
      type: chargersReportApiActions.GET_CHARGERSREPORT_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default chargersReportApiActions;
  