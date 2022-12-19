const opportunityChargingApiActions = {
  GET_OPPORTUNITYCHARGING: "GET_OPPORTUNITYCHARGING",
  GET_OPPORTUNITYCHARGING_SUCCESS: "GET_OPPORTUNITYCHARGING_SUCCESS",
  GET_OPPORTUNITYCHARGING_FAILURE: "GET_OPPORTUNITYCHARGING_FAILURE",

  getOpportunityChargingAPI: (data) => ({
    type: opportunityChargingApiActions.GET_OPPORTUNITYCHARGING,
    payload: { data },
  }),

  getOpportunityChargingAPISuccess: (saveStatusCode, result) => ({
    type: opportunityChargingApiActions.GET_OPPORTUNITYCHARGING_SUCCESS,
    saveStatusCode,
    result,
  }),

  getOpportunityChargingAPIFailure: (saveStatusCode, message) => ({
    type: opportunityChargingApiActions.GET_OPPORTUNITYCHARGING_FAILURE,
    saveStatusCode,
    message,
  }),
};

export default opportunityChargingApiActions;
