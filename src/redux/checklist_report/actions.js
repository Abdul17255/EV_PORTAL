const checklistReportApiActions = {
  GET_CHECKLISTREPORT: "GET_CHECKLISTREPORT",
  GET_CHECKLISTREPORT_SUCCESS: "GET_CHECKLISTREPORT_SUCCESS",
  GET_CHECKLISTREPORT_FAILURE: "GET_CHECKLISTREPORT_FAILURE",

  getChecklistReportAPI: (data) => ({
    type: checklistReportApiActions.GET_CHECKLISTREPORT,
    payload: { data },
  }),

  getChecklistReportAPISuccess: (saveStatusCode, result) => ({
    type: checklistReportApiActions.GET_CHECKLISTREPORT_SUCCESS,
    saveStatusCode,
    result,
  }),

  getChecklistReportAPIFailure: (saveStatusCode, message) => ({
    type: checklistReportApiActions.GET_CHECKLISTREPORT_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default checklistReportApiActions;
