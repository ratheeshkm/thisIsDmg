import { createStore, applyMiddleware, compose } from "redux";
import createSageMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSageMiddleware();
let middlewares = [sagaMiddleware];

export function configureStore(initialState = {}) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);
  return store;
}
