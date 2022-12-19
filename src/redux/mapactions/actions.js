const mapActionApiActions = {
    GET_MAPACTION: "GET_MAPACTION",
    GET_MAPACTION_SUCCESS: "GET_MAPACTION_SUCCESS",
    GET_MAPACTION_FAILURE: "GET_MAPACTION_FAILURE",
  
    getMapActionAPI: (data) => ({
      type: mapActionApiActions.GET_MAPACTION,
      payload: { data },
    }),
  
    getMapActionAPISuccess: (saveStatusCode, result) => ({
      type: mapActionApiActions.GET_MAPACTION_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getMapActionAPIFailure: (saveStatusCode, message) => ({
      type: mapActionApiActions.GET_MAPACTION_FAILURE,
      saveStatusCode,
      message,
    }),
  };
  
  export default mapActionApiActions;