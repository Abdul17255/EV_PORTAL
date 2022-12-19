const liveTripTrackSummaryApiActions = {
  GET_LIVETRIPTRACKSUMMARY: "GET_LIVETRIPTRACKSUMMARY",
  GET_LIVETRIPTRACKSUMMARY_SUCCESS: "GET_LIVETRIPTRACKSUMMARY_SUCCESS",
  GET_LIVETRIPTRACKSUMMARY_FAILURE: "GET_LIVETRIPTRACKSUMMARY_FAILURE",

  getLiveTripTrackSummaryAPI: (data) => ({
    type: liveTripTrackSummaryApiActions.GET_LIVETRIPTRACKSUMMARY,
    payload: { data },
  }),

  getLiveTripTrackSummaryAPISuccess: (saveStatusCode, result) => ({
    type: liveTripTrackSummaryApiActions.GET_LIVETRIPTRACKSUMMARY_SUCCESS,
    saveStatusCode,
    result,
  }),

  getLiveTripTrackSummaryAPIFailure: (saveStatusCode, message) => ({
    type: liveTripTrackSummaryApiActions.GET_LIVETRIPTRACKSUMMARY_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default liveTripTrackSummaryApiActions;
