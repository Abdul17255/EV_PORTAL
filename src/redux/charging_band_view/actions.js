const chargeBandApiActions = {
  GET_CHARGEBAND: "GET_CHARGEBAND",
  GET_CHARGEBAND_SUCCESS: "GET_CHARGEBAND_SUCCESS",
  GET_CHARGEBAND_FAILURE: "GET_CHARGEBAND_FAILURE",

  getChargeBandAPI: (data) => ({
    type: chargeBandApiActions.GET_CHARGEBAND,
    payload: { data },
  }),

  getChargeBandAPISuccess: (saveStatusCode, result) => ({
    type: chargeBandApiActions.GET_CHARGEBAND_SUCCESS,
    saveStatusCode,
    result,
  }),

  getChargeBandApiFailure: (saveStatusCode, message) => ({
    type: chargeBandApiActions.GET_CHARGEBAND_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default chargeBandApiActions;
