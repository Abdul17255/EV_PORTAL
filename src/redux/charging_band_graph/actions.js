const chargeBandGraphApiActions = {
  GET_CHARGEBANDGRAPH: "GET_CHARGEBANDGRAPH",
  GET_CHARGEBANDGRAPH_SUCCESS: "GET_CHARGEBANDGRAPH_SUCCESS",
  GET_CHARGEBANDGRAPH_FAILURE: "GET_CHARGEBANDGRAPH_FAILURE",

  getChargeBandGraphAPI: (data) => ({
    type: chargeBandGraphApiActions.GET_CHARGEBANDGRAPH,
    payload: { data },
  }),

  getChargeBandGraphAPISuccess: (saveStatusCode, result) => ({
    type: chargeBandGraphApiActions.GET_CHARGEBANDGRAPH_SUCCESS,
    saveStatusCode,
    result,
  }),

  getChargeBandGraphApiFailure: (saveStatusCode, message) => ({
    type: chargeBandGraphApiActions.GET_CHARGEBANDGRAPH_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default chargeBandGraphApiActions;
