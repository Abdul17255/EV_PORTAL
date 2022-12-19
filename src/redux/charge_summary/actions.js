const chargeSummaryApiActions = {
  GET_CHARGESUMMARY: "GET_CHARGESUMMARY",
  GET_CHARGESUMMARY_SUCCESS: "GET_CHARGESUMMARY_SUCCESS",
  GET_CHARGESUMMARY_FAILURE: "GET_CHARGESUMMARY_FAILURE",

  getChargeSummaryAPI: (data) => ({
    type: chargeSummaryApiActions.GET_CHARGESUMMARY,
    payload: { data },
  }),

  getChargeSummaryAPISuccess: (saveStatusCode, result) => ({
    type: chargeSummaryApiActions.GET_CHARGESUMMARY_SUCCESS,
    saveStatusCode,
    result,
  }),

  getChargeSummaryApiFailure: (saveStatusCode, message) => ({
    type: chargeSummaryApiActions.GET_CHARGESUMMARY_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default chargeSummaryApiActions;
