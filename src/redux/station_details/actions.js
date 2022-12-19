const stationApiActions = {
  GET_STATION: "GET_STATION",
  GET_STATION_SUCCESS: "GET_STATION_SUCCESS",
  GET_STATION_FAILURE: "GET_STATION_FAILURE",

  getStationAPI: (data) => ({
    type: stationApiActions.GET_STATION,
    payload: { data },
  }),

  getStationAPISuccess: (saveStatusCode, result) => ({
    type: stationApiActions.GET_STATION_SUCCESS,
    saveStatusCode,
    result,
  }),

  getStationApiFailure: (saveStatusCode, message) => ({
    type: stationApiActions.GET_STATION_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default stationApiActions;
