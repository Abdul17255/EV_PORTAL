const breakdownChargersApiActions = {
  GET_BREAKDOWNCHARGERS: "GET_BREAKDOWNCHARGERS",
  GET_BREAKDOWNCHARGERS_SUCCESS: "GET_BREAKDOWNCHARGERS_SUCCESS",
  GET_BREAKDOWNCHARGERS_FAILURE: "GET_BREAKDOWNCHARGERS_FAILURE",

  getBreakdownChargersAPI: (data) => ({
    type: breakdownChargersApiActions.GET_BREAKDOWNCHARGERS,
    payload: { data },
  }),

  getBreakdownChargersAPISuccess: (saveStatusCode, result) => ({
    type: breakdownChargersApiActions.GET_BREAKDOWNCHARGERS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getBreakdownChargersAPIFailure: (saveStatusCode, message) => ({
    type: breakdownChargersApiActions.GET_BREAKDOWNCHARGERS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default breakdownChargersApiActions;
