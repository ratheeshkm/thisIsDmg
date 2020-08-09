import { all, takeEvery, fork } from "redux-saga/effects";
import { SET_ALERT } from "./constants";
import { toast } from "react-toastify";

function* setAlert({ payload: { message, color, autoClose = false } }) {
  try {
    switch (color) {
      case "success":
        toast.success(message, { autoClose });
        break;
      case "warning":
        toast.warn(message, { autoClose });
        break;
      case "danger":
        toast.error(message, { autoClose });
        break;
      case "info":
        toast.info(message, { autoClose });
        break;
      default:
        console.warn("not acceptable");
        break;
    }
  } catch (error) {
    console.warn("could not create the alert");
  }
}

export function* watchSetAlert() {
  yield takeEvery(SET_ALERT, setAlert);
}

function* AlertSaga() {
  yield all([fork(watchSetAlert)]);
}

export default AlertSaga;
