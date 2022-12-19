const chargerEfficiencyApiActions = {
  GET_CHARGEREFFICIENCY: "GET_CHARGEREFFICIENCY",
  GET_CHARGEREFFICIENCY_SUCCESS: "GET_CHARGEREFFICIENCY_SUCCESS",
  GET_CHARGEREFFICIENCY_FAILURE: "GET_CHARGEREFFICIENCY_FAILURE",

  getChargerEfficiencyAPI: (data) => ({
    type: chargerEfficiencyApiActions.GET_CHARGEREFFICIENCY,
    payload: { data },
  }),

  getChargerEfficiencyAPISuccess: (saveStatusCode, result) => ({
    type: chargerEfficiencyApiActions.GET_CHARGEREFFICIENCY_SUCCESS,
    saveStatusCode,
    result,
  }),

  getChargerEfficiencyAPIFailure: (saveStatusCode, message) => ({
    type: chargerEfficiencyApiActions.GET_CHARGEREFFICIENCY_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default chargerEfficiencyApiActions;
