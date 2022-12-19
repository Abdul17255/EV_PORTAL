import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import combineReducers from "./root-reducer";
import combineSagas from "./root-saga";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middleware = [];
  middleware.push(sagaMiddleware);
  const store = createStore(
    combineReducers,
    initialState,
    applyMiddleware(...middleware)
  );
  sagaMiddleware.run(combineSagas);
  return store;
}
