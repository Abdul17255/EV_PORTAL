const breakdownReportApiActions = {
  GET_BREAKDOWNREPORT: "GET_BREAKDOWNREPORT",
  GET_BREAKDOWNREPORT_SUCCESS: "GET_BREAKDOWNREPORT_SUCCESS",
  GET_BREAKDOWNREPORT_FAILURE: "GET_BREAKDOWNREPORT_FAILURE",

  getBreakdownReportAPI: (data) => ({
    type: breakdownReportApiActions.GET_BREAKDOWNREPORT,
    payload: { data },
  }),

  getBreakdownReportAPISuccess: (saveStatusCode, result) => ({
    type: breakdownReportApiActions.GET_BREAKDOWNREPORT_SUCCESS,
    saveStatusCode,
    result,
  }),

  getBreakdownReportAPIFailure: (saveStatusCode, message) => ({
    type: breakdownReportApiActions.GET_BREAKDOWNREPORT_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default breakdownReportApiActions;
