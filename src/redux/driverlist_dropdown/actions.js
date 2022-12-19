const driverlistDropdownApiActions = {
  GET_DRIVERLISTDROPDOWN: "GET_DRIVERLISTDROPDOWN",
  GET_DRIVERLISTDROPDOWN_SUCCESS: "GET_DRIVERLISTDROPDOWN_SUCCESS",
  GET_DRIVERLISTDROPDOWN_FAILURE: "GET_DRIVERLISTDROPDOWN_FAILURE",

  getDriverlistDropdownAPI: (data) => ({
    type: driverlistDropdownApiActions.GET_DRIVERLISTDROPDOWN,
    payload: { data },
  }),

  getDriverlistDropdownAPISuccess: (saveStatusCode, result) => ({
    type: driverlistDropdownApiActions.GET_DRIVERLISTDROPDOWN_SUCCESS,
    saveStatusCode,
    result,
  }),

  getDriverlistDropdownAPIFailure: (saveStatusCode, message) => ({
    type: driverlistDropdownApiActions.GET_DRIVERLISTDROPDOWN_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default driverlistDropdownApiActions;
