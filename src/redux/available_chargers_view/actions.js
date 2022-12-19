const availableChargersApiActions = {
  GET_AVAILABLECHARGERS: "GET_AVAILABLECHARGERS",
  GET_AVAILABLECHARGERS_SUCCESS: "GET_AVAILABLECHARGERS_SUCCESS",
  GET_AVAILABLECHARGERS_FAILURE: "GET_AVAILABLECHARGERS_FAILURE",

  getAvailableChargersAPI: (data) => ({
    type: availableChargersApiActions.GET_AVAILABLECHARGERS,
    payload: { data },
  }),

  getAvailableChargersAPISuccess: (saveStatusCode, result) => ({
    type: availableChargersApiActions.GET_AVAILABLECHARGERS_SUCCESS,
    saveStatusCode,
    result,
  }),

  getAvailableChargersAPIFailure: (saveStatusCode, message) => ({
    type: availableChargersApiActions.GET_AVAILABLECHARGERS_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default availableChargersApiActions;
