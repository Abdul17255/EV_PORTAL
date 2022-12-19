import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import {
  ROUTE_MASTER_VIEW,
  ROUTE_MASTER_CREATE,
  ROUTE_MASTER_DELETE,
  ROUTE_MASTER_UPDATE,
} from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getRouteMasterApiSagas(data) {
  const { payload } = data;
  let url = ROUTE_MASTER_VIEW;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getRouteMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getRouteMasterAPIFailure(1));
  }
}

export function* createRouteMasterApiSagas(data) {
  const { payload } = data;
  let url = ROUTE_MASTER_CREATE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.createRouteMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.createRouteMasterAPIFailure(1));
  }
}

export function* deleteRouteMasterApiSagas(data) {
  const { payload } = data;
  let url = ROUTE_MASTER_DELETE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.deleteRouteMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.deleteRouteMasterAPIFailure(1));
  }
}

export function* updateRouteMasterApiSagas(data) {
  const { payload } = data;
  let url = ROUTE_MASTER_UPDATE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.updateRouteMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.updateRouteMasterAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_ROUTEMASTERDETAILS, getRouteMasterApiSagas),
    takeEvery(actions.CREATE_ROUTEMASTERDETAILS, createRouteMasterApiSagas),
    takeEvery(actions.DELETE_ROUTEMASTERDETAILS, deleteRouteMasterApiSagas),
    takeEvery(actions.UPDATE_ROUTEMASTERDETAILS, updateRouteMasterApiSagas),
  ]);
}
