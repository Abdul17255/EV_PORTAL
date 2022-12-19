const tripMasterDetailsApiActions = {
  GET_TRIPMASTERDETAILS: "GET_TRIPMASTERDETAILS",
  GET_TRIPMASTERDETAILS_SUCCESS: "GET_TRIPMASTERDETAILS_SUCCESS",
  GET_TRIPMASTERDETAILS_FAILURE: "GET_TRIPMASTERDETAILS_FAILURE",

  getTripMasterDetailsAPI: (data) => ({
    type: tripMasterDetailsApiActions.GET_TRIPMASTERDETAILS,
    payload: { data },
  }),

  getTripMasterDetailsAPISuccess: (saveStatusCode, result) => ({
    type: tripMasterDetailsApiActions.GET_TRIPMASTERDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getTripMasterDetailsAPIFailure: (saveStatusCode, message) => ({
    type: tripMasterDetailsApiActions.GET_TRIPMASTERDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default tripMasterDetailsApiActions;
