const vehiclelistDropdownApiActions = {
  GET_VEHICLELISTDROPDOWN: "GET_VEHICLELISTDROPDOWN",
  GET_VEHICLELISTDROPDOWN_SUCCESS: "GET_VEHICLELISTDROPDOWN_SUCCESS",
  GET_VEHICLELISTDROPDOWN_FAILURE: "GET_VEHICLELISTDROPDOWN_FAILURE",

  getVehiclelistDropdownAPI: (data) => ({
    type: vehiclelistDropdownApiActions.GET_VEHICLELISTDROPDOWN,
    payload: { data },
  }),

  getVehiclelistDropdownAPISuccess: (saveStatusCode, result) => ({
    type: vehiclelistDropdownApiActions.GET_VEHICLELISTDROPDOWN_SUCCESS,
    saveStatusCode,
    result,
  }),

  getVehiclelistDropdownAPIFailure: (saveStatusCode, message) => ({
    type: vehiclelistDropdownApiActions.GET_VEHICLELISTDROPDOWN_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default vehiclelistDropdownApiActions;
