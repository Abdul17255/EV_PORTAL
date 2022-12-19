import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { REPORT_CHARGERS_REPORT } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getChargersReportApiSagas(data) {
  const { payload } = data;
  let url = REPORT_CHARGERS_REPORT;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getChargersReportAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getChargersReportAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_CHARGERSREPORT, getChargersReportApiSagas),
  ]);
}
