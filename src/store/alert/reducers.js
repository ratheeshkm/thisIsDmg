import { DELETE_ALERT, SET_ALERT } from "./constants";

type AlertAction = {
  type: string,
  payload: {}
};

type State = {
  alerts: []
};

const INIT_STATE = {
  alerts: []
};

const Alerts = (state: State = INIT_STATE, action: AlertAction) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [
          ...state.alerts,
          {
            color: action.payload.color,
            message: action.payload.message,
            autoClose: action.payload.autoClose,
            isOn: true
          }
        ]
      };
    case DELETE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(
          (item, index) => index !== action.payload.index
        )
      };

    default:
      return { ...state };
  }
};

export default Alerts;
