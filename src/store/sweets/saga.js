import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { fetchJSON, getErrorMessage } from "../../helpers/api";

import * as sweetsActions from "./actions";
import * as sweetConstants from "./constants";

function* getChocolateData() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "applicarion/json"
    }
  };
  try {
    const response = yield call(fetchJSON, "/chocolate", options);
    yield put(sweetsActions.getChocolateDataSuccess(response));
  } catch (error) {
    const message = `getMarketsData error: ${getErrorMessage(error)}`;
    yield put(sweetsActions.getChocolateDataFailure(message));
  }
}

function* getCandyData() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "applicarion/json"
    }
  };
  try {
    const response = yield call(fetchJSON, "/candy", options);
    yield put(sweetsActions.getCandyDataSuccess(response));
  } catch (error) {
    const message = `getMarketsData error: ${getErrorMessage(error)}`;
    yield put(sweetsActions.getCandyDataFailure(message));
  }
}

function* getToffeeData() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "applicarion/json"
    }
  };
  try {
    const response = yield call(fetchJSON, "/toffee", options);
    yield put(sweetsActions.getToffeeDataSuccess(response));
  } catch (error) {
    const message = `getMarketsData error: ${getErrorMessage(error)}`;
    yield put(sweetsActions.getToffeeDataFailure(message));
  }
}

export function* watchGetChocolate(): Iterable<*> {
  yield takeEvery(sweetConstants.GET_CHOCOLATE_DATA, getChocolateData);
}

export function* watchGetCandy(): Iterable<*> {
  yield takeEvery(sweetConstants.GET_CANDY_DATA, getCandyData);
}

export function* watchGetToffee(): Iterable<*> {
  yield takeEvery(sweetConstants.GET_TOFFEE_DATA, getToffeeData);
}

function* sweetsSaga(): Iterable<*> {
  yield all([
    fork(watchGetChocolate),
    fork(watchGetCandy),
    fork(watchGetToffee)
  ]);
}

export default sweetsSaga;
