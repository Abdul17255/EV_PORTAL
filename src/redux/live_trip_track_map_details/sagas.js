import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { LIVE_TRIP_TRACK_MAP_DETAILS } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getLiveTripTrackMapDetailsApiSagas(data) {
  const { payload } = data;
  let url = LIVE_TRIP_TRACK_MAP_DETAILS;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getLiveTripTrackMapDetailsAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getLiveTripTrackMapDetailsAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      actions.GET_LIVETRIPTRACKMAPDETAILS,
      getLiveTripTrackMapDetailsApiSagas
    ),
  ]);
}
