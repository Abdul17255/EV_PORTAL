import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { TECHNICIAN_FEEDBACK_UPDATE } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getTechnicianFeedbackUpdateApiSagas(data) {
  const { payload } = data;
  let url = TECHNICIAN_FEEDBACK_UPDATE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getFeedbackUpdateAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getFeedbackUpdateAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_FEEDBACKUPDATE, getTechnicianFeedbackUpdateApiSagas),
  ]);
}
