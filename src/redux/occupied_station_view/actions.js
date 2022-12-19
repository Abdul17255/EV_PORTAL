const occupiedStationApiActions = {
  GET_OCCUPIEDSTATION: "GET_OCCUPIEDSTATION",
  GET_OCCUPIEDSTATION_SUCCESS: "GET_OCCUPIEDSTATION_SUCCESS",
  GET_OCCUPIEDSTATION_FAILURE: "GET_OCCUPIEDSTATION_FAILURE",

  getOccupiedStationAPI: (data) => ({
    type: occupiedStationApiActions.GET_OCCUPIEDSTATION,
    payload: { data },
  }),

  getOccupiedStationAPISuccess: (saveStatusCode, result) => ({
    type: occupiedStationApiActions.GET_OCCUPIEDSTATION_SUCCESS,
    saveStatusCode,
    result,
  }),

  getOccupiedStationApiFailure: (saveStatusCode, message) => ({
    type: occupiedStationApiActions.GET_OCCUPIEDSTATION_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default occupiedStationApiActions;
