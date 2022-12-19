import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { DRIVER_MONITORING_VIEW } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getDriverMonitoringViewApiSagas(data) {
  const { payload } = data;
  let url =DRIVER_MONITORING_VIEW;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getDriverMonitoringViewAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getDriverMonitoringViewAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_DRIVERMONITORINGVIEW, getDriverMonitoringViewApiSagas),
  ]);
}
