import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import {
  DRIVER_MASTER_VIEW,
  DRIVER_MASTER_CREATE,
  DRIVER_MASTER_DELETE,
  DRIVER_MASTER_UPDATE,
} from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getDriverMasterApiSagas(data) {
  const { payload } = data;
  let url = DRIVER_MASTER_VIEW;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getDriverMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getDriverMasterAPIFailure(1));
  }
}

export function* createDriverMasterApiSagas(data) {
  const { payload } = data;
  let url = DRIVER_MASTER_CREATE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.createDriverMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.createDriverMasterAPIFailure(1));
  }
}

export function* deleteDriverMasterApiSagas(data) {
  const { payload } = data;
  let url = DRIVER_MASTER_DELETE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.deleteDriverMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.deleteDriverMasterAPIFailure(1));
  }
}

export function* updateDriverMasterApiSagas(data) {
  const { payload } = data;
  let url = DRIVER_MASTER_UPDATE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.updateDriverMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.updateDriverMasterAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_DRIVERMASTERDETAILS, getDriverMasterApiSagas),
    takeEvery(actions.CREATE_DRIVERMASTERDETAILS, createDriverMasterApiSagas),
    takeEvery(actions.DELETE_DRIVERMASTERDETAILS, deleteDriverMasterApiSagas),
    takeEvery(actions.UPDATE_DRIVERMASTERDETAILS, updateDriverMasterApiSagas),
  ]);
}
