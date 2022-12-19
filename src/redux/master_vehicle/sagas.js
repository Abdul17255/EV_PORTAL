import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import * as dataAccess from "../../utils/ajax";
import {
  VEHICLE_MASTER_VIEW,
  VEHICLE_MASTER_CREATE,
  VEHICLE_MASTER_DELETE,
  VEHICLE_MASTER_UPDATE,
} from "../../constants/api-constants";

export const postLambda = async (url, payload) =>
  await dataAccess.postLambda(url, payload);

export function* getVehicleMasterApiSagas(data) {
  const { payload } = data;
  let url = VEHICLE_MASTER_VIEW;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.getVehicleMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.getVehicleMasterAPIFailure(1));
  }
}

export function* createVehicleMasterApiSagas(data) {
  const { payload } = data;
  let url = VEHICLE_MASTER_CREATE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.createVehicleMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.createVehicleMasterAPIFailure(1));
  }
}

export function* deleteVehicleMasterApiSagas(data) {
  const { payload } = data;
  let url = VEHICLE_MASTER_DELETE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.deleteVehicleMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.deleteVehicleMasterAPIFailure(1));
  }
}

export function* updateVehicleMasterApiSagas(data) {
  const { payload } = data;
  let url = VEHICLE_MASTER_UPDATE;
  try {
    let response = yield call(postLambda, url, payload);

    if (response) {
      yield put(actions.updateVehicleMasterAPISuccess(0, response));
    }
  } catch (error) {
    yield put(actions.updateVehicleMasterAPIFailure(1));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_VEHICLEMASTERDETAILS, getVehicleMasterApiSagas),
    takeEvery(actions.CREATE_VEHICLEMASTER, createVehicleMasterApiSagas),
    takeEvery(actions.DELETE_VEHICLEMASTER, deleteVehicleMasterApiSagas),
    takeEvery(actions.UPDATE_VEHICLEMASTER, updateVehicleMasterApiSagas),
  ]);
}
