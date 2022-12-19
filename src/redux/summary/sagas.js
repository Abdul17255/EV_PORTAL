import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { MAP_STATUS_COUNTS_API } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getSummaryApiSagas(data) {
  const { payload } = data;
  let url = MAP_STATUS_COUNTS_API;
  try {
    let response = yield call(postLambda, url, payload);
    if (response) {
      yield put(actions.getSummaryAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getSummaryApiFailure(1));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_SUMMARY, getSummaryApiSagas)]);
}
