import { SET_ALERT, DELETE_ALERT } from "./constants";

type AlertAction = {
  type: string,
  payload: {}
};

export const setAlert = (
  message: string,
  color: string,
  autoClose: number
): AlertAction => ({
  type: SET_ALERT,
  payload: { message, color, autoClose }
});

export const deleteAlert = (index: number): AlertAction => ({
  type: DELETE_ALERT,
  payload: { index }
});
