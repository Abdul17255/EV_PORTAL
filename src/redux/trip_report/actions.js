const tripReportApiActions = {
  GET_TRIPREPORT: "GET_TRIPREPORT",
  GET_TRIPREPORT_SUCCESS: "GET_TRIPREPORT_SUCCESS",
  GET_TRIPREPORT_FAILURE: "GET_TRIPREPORT_FAILURE",

  getTripReportAPI: (data) => ({
    type: tripReportApiActions.GET_TRIPREPORT,
    payload: { data },
  }),

  getTripReportAPISuccess: (saveStatusCode, result) => ({
    type: tripReportApiActions.GET_TRIPREPORT_SUCCESS,
    saveStatusCode,
    result,
  }),

  getTripReportAPIFailure: (saveStatusCode, message) => ({
    type: tripReportApiActions.GET_TRIPREPORT_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default tripReportApiActions;
