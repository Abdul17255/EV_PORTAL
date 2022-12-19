const tripMasterUpdateApiActions = {
  GET_TRIPMASTERUPDATE: "GET_TRIPMASTERUPDATE",
  GET_TRIPMASTERUPDATE_SUCCESS: "GET_TRIPMASTERUPDATE_SUCCESS",
  GET_TRIPMASTERUPDATE_FAILURE: "GET_TRIPMASTERUPDATE_FAILURE",

  getTripMasterUpdateAPI: (data) => ({
    type: tripMasterUpdateApiActions.GET_TRIPMASTERUPDATE,
    payload: { data },
  }),

  getTripMasterUpdateAPISuccess: (saveStatusCode, result) => ({
    type: tripMasterUpdateApiActions.GET_TRIPMASTERUPDATE_SUCCESS,
    saveStatusCode,
    result,
  }),

  getTripMasterUpdateAPIFailure: (saveStatusCode, message) => ({
    type: tripMasterUpdateApiActions.GET_TRIPMASTERUPDATE_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default tripMasterUpdateApiActions;
