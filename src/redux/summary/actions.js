const summaryApiActions = {
    GET_SUMMARY: "GET_SUMMARY",
    GET_SUMMARY_SUCCESS: "GET_SUMMARY_SUCCESS",
    GET_SUMMARY_FAILURE: "GET_SUMMARY_FAILURE",
  
    getSummaryAPI: (data) => ({
      type: summaryApiActions.GET_SUMMARY,
      payload: { data },
    }),
  
    getSummaryAPISuccess: (saveStatusCode, result) => ({
      type: summaryApiActions.GET_SUMMARY_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getSummaryApiFailure: (saveStatusCode, message) => ({
      type: summaryApiActions.GET_SUMMARY_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default summaryApiActions;
  