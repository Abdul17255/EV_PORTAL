import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { TRIP_UPLOAD_API } from "../../constants/api-constants";

export const postMultipart = async (url, payload) =>
  await dataAccess.postMultipart(url, payload);

export function* getTripUploadApiSagas(data) {
  const { payload } = data;
  let url = TRIP_UPLOAD_API;
  try {
    let response = yield call(postMultipart, url, payload);
    if (response) {
      yield put(actions.getTripUploadAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getTripUploadAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_UPLOAD_TRIP_EXCEL,getTripUploadApiSagas)]);
}
