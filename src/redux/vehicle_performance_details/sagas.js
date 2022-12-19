import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { DASHBOARD_STATUS_COUNTS_API } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getVehiclePerformanceDetailsApiSagas(data) {
  const { payload } = data;
  let url = DASHBOARD_STATUS_COUNTS_API;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getVehiclePerformanceDetailsAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getVehiclePerformanceDetailsAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      actions.GET_VEHICLEPERFORMANCEDETAILS,
      getVehiclePerformanceDetailsApiSagas
    ),
  ]);
}
