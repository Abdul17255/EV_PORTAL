const chargerMapDashboardApiActions = {
  GET_CHARGERMAPDASHBOARD: "GET_CHARGERMAPDASHBOARD",
  GET_CHARGERMAPDASHBOARD_SUCCESS: "GET_CHARGERMAPDASHBOARD_SUCCESS",
  GET_CHARGERMAPDASHBOARD_FAILURE: "GET_CHARGERMAPDASHBOARD_FAILURE",

  getChargerMapDashboardAPI: (data) => ({
    type: chargerMapDashboardApiActions.GET_CHARGERMAPDASHBOARD,
    payload: { data },
  }),

  getChargerMapDashboardAPISuccess: (saveStatusCode, result) => ({
    type: chargerMapDashboardApiActions.GET_CHARGERMAPDASHBOARD_SUCCESS,
    saveStatusCode,
    result,
  }),

  getChargerMapDashboardAPIFailure: (saveStatusCode, message) => ({
    type: chargerMapDashboardApiActions.GET_CHARGERMAPDASHBOARD_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default chargerMapDashboardApiActions;
