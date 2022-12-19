import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { VOLVO_API } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getChargerMapDashboardApiSagas(data) {
  const { payload } = data;
  let url = VOLVO_API;
  try {
    let response = yield call(postLambda, url, payload);
    if (response) {
      yield put(actions.getChargerMapDashboardAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getChargerMapDashboardAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_CHARGERMAPDASHBOARD, getChargerMapDashboardApiSagas),
  ]);
}
