const loginApiActions = {
  GET_LOGIN: "GET_LOGIN",
  GET_LOGIN_SUCCESS: "GET_LOGIN_SUCCESS",
  GET_LOGIN_FAILURE: "GET_LOGIN_FAILURE",

  getLoginAPI: (data) => ({
    type: loginApiActions.GET_LOGIN,
    payload: { data },
  }),

  getLoginAPISuccess: (saveStatusCode, result) => ({
    type: loginApiActions.GET_LOGIN_SUCCESS,
    saveStatusCode,
    result,
  }),

  getLoginApiFailure: (saveStatusCode, message) => ({
    type: loginApiActions.GET_LOGIN_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default loginApiActions;
