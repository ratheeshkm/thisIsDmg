import { all } from "redux-saga/effects";
import sweetsSaga from "./sweets/saga";
//import alertSaga from "./alert/saga";

export default function* rootSaga(): Iterable<*> {
  yield all([sweetsSaga()]);
}
