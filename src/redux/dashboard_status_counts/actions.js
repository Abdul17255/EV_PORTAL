const dashboardStatusCountsApiActions = {
  GET_DASHBOARDSTATUSCOUNTS: "GET_DASHBOARDSTATUSCOUNTS",
  GET_DASHBOARDSTATUSCOUNTS_SUCCESS: "GET_DASHBOARDSTATUSCOUNTS_SUCCESS",
  GET_DASHBOARDSTATUSCOUNTS_FAILURE: "GET_DASHBOARDSTATUSCOUNTS_FAILURE",

  getDashboardStatusCountsAPI: (data) => ({
    type: dashboardStatusCountsApiActions.GET_DASHBOARDSTATUSCOUNTS,
    payload: { data },
  }),

  getDashboardStatusCountsAPISuccess: (saveStatusCode, result) => ({
    type: dashboardStatusCountsApiActions.GET_DASHBOARDSTATUSCOUNTS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getDashboardStatusCountsAPIFailure: (saveStatusCode, message) => ({
    type: dashboardStatusCountsApiActions.GET_DASHBOARDSTATUSCOUNTS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default dashboardStatusCountsApiActions;
