const driverDetailsApiActions = {
    GET_DRIVERDETAILS: "GET_DRIVERDETAILS",
    GET_DRIVERDETAILS_SUCCESS: "GET_DRIVERDETAILS_SUCCESS",
    GET_DRIVERDETAILS_FAILURE: "GET_DRIVERDETAILS_FAILURE",
  
    getDriverdetailsAPI: (data) => ({
      type: driverDetailsApiActions.GET_DRIVERDETAILS,
      payload: { data },
    }),
  
    getDriverdetailsAPISuccess: (saveStatusCode, result) => ({
      type: driverDetailsApiActions.GET_DRIVERDETAILS_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getDriverdetailsAPIFailure: (saveStatusCode, message) => ({
      type: driverDetailsApiActions.GET_DRIVERDETAILS_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default driverDetailsApiActions;
  