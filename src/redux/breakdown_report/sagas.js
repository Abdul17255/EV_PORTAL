import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { REPORT_API } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getBreakdownReportApiSagas(data) {
  const { payload } = data;
  let url = REPORT_API;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getBreakdownReportAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getBreakdownReportAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_BREAKDOWNREPORT, getBreakdownReportApiSagas),
  ]);
}
