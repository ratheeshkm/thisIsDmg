// @flow

import { combineReducers } from "redux";
import Sweets from "./sweets/reducers";
import Alerts from "./alert/reducers";

const appReducer = combineReducers({
  Alerts,
  Sweets
});

const rootReducer = (state: any, action: any) => {
  // Clear all data in redux store to initial.
  // if (action.type === LOGOUT_USER) {
  //   state = undefined;
  // }

  return appReducer(state, action);
};

export default rootReducer;
