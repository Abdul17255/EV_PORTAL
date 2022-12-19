const technicianFeedbackUpdateApiActions = {
    GET_FEEDBACKUPDATE: "GET_FEEDBACKUPDATE",
    GET_FEEDBACKUPDATE_SUCCESS: "GET_FEEDBACKUPDATE_SUCCESS",
    GET_FEEDBACKUPDATE_FAILURE: "GET_FEEDBACKUPDATE_FAILURE",
  
    getFeedbackUpdateAPI: (data) => ({
      type: technicianFeedbackUpdateApiActions.GET_FEEDBACKUPDATE,
      payload: { data },
    }),
  
    getFeedbackUpdateAPISuccess: (saveStatusCode, result) => ({
      type: technicianFeedbackUpdateApiActions.GET_FEEDBACKUPDATE_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getFeedbackUpdateAPIFailure: (saveStatusCode, message) => ({
      type: technicianFeedbackUpdateApiActions.GET_FEEDBACKUPDATE_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default technicianFeedbackUpdateApiActions;