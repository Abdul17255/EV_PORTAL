const liveTripTrackMapDetailsApiActions = {
  GET_LIVETRIPTRACKMAPDETAILS: "GET_LIVETRIPTRACKMAPDETAILS",
  GET_LIVETRIPTRACKMAPDETAILS_SUCCESS: "GET_LIVETRIPTRACKMAPDETAILS_SUCCESS",
  GET_LIVETRIPTRACKMAPDETAILS_FAILURE: "GET_LIVETRIPTRACKMAPDETAILS_FAILURE",

  getLiveTripTrackMapDetailsAPI: (data) => ({
    type: liveTripTrackMapDetailsApiActions.GET_LIVETRIPTRACKMAPDETAILS,
    payload: { data },
  }),

  getLiveTripTrackMapDetailsAPISuccess: (saveStatusCode, result) => ({
    type: liveTripTrackMapDetailsApiActions.GET_LIVETRIPTRACKMAPDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getLiveTripTrackMapDetailsAPIFailure: (saveStatusCode, message) => ({
    type: liveTripTrackMapDetailsApiActions.GET_LIVETRIPTRACKMAPDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default liveTripTrackMapDetailsApiActions;
