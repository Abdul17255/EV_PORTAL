const fleetUptimeDetailsApiActions = {
  GET_FLEETUPTIMEDETAILS: "GET_FLEETUPTIMEDETAILS",
  GET_FLEETUPTIMEDETAILS_SUCCESS: "GET_FLEETUPTIMEDETAILS_SUCCESS",
  GET_FLEETUPTIMEDETAILS_FAILURE: "GET_FLEETUPTIMEDETAILS_FAILURE",

  getFleetUptimeDetailsAPI: (data) => ({
    type: fleetUptimeDetailsApiActions.GET_FLEETUPTIMEDETAILS,
    payload: { data },
  }),

  getFleetUptimeDetailsAPISuccess: (saveStatusCode, result) => ({
    type: fleetUptimeDetailsApiActions.GET_FLEETUPTIMEDETAILS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getFleetUptimeDetailsAPIFailure: (saveStatusCode, message) => ({
    type: fleetUptimeDetailsApiActions.GET_FLEETUPTIMEDETAILS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default fleetUptimeDetailsApiActions;
