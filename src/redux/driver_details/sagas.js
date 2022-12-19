import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import { DRIVER_DETAILS } from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getDriverDetailsApiSagas(data) {
  const { payload } = data;
  let url =DRIVER_DETAILS;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getDriverdetailsAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getDriverdetailsAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_DRIVERDETAILS, getDriverDetailsApiSagas),
  ]);
}
