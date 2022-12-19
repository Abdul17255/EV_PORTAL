const tripUploadApiActions = {
    GET_UPLOAD_TRIP_EXCEL: "GET_UPLOAD_TRIP_EXCEL",
    GET_UPLOAD_TRIP_EXCEL_SUCCESS: "GET_UPLOAD_TRIP_EXCEL_SUCCESS",
    GET_UPLOAD_TRIP_EXCEL_ERROR: "GET_UPLOAD_TRIP_EXCEL_ERROR",
   
  
    getTripUploadAPI: (data) => ({
      type: tripUploadApiActions.GET_UPLOAD_TRIP_EXCEL,
      payload: { data },
    }),
  
    getTripUploadAPISuccess: (saveStatusCode, result) => ({
      type: tripUploadApiActions.GET_UPLOAD_TRIP_EXCEL_SUCCESS,
      saveStatusCode,
      result,
    }),
  
    getTripUploadAPIFailure: (saveStatusCode, message) => ({
      type: tripUploadApiActions.GET_UPLOAD_TRIP_EXCEL_ERROR,
      saveStatusCode,
      message,
    }),
  };
  
  export default tripUploadApiActions;