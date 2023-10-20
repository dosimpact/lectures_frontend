import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import myLogger from "./middlewares/myLogger";
import reduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";

import { todoReducer } from "../pages/todo/state/reducer";
import { queryReducer } from "../pages/common/state/queryReducer";
import { serverLogReducer } from "../pages/common/state/serverLogReducer";
import { cacheReducer } from "../pages/common/state/cacheReducer";
import flagReducer from "../pages/flag/state/reducer";

import { createBrowserHistory } from "history";
import { flagSaga } from "../pages/flag/state/sagas";

import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

export const customHistory = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

export function* rootSaga() {
  yield all([flagSaga()]);
}

const rootReducer = combineReducers({
  todo: todoReducer,
  serverLog: serverLogReducer,
  query: queryReducer,
  cache: cacheReducer,
  flag: flagReducer,
});

const rootMiddleWares = [
  //myLogger,
  reduxLogger,
  ReduxThunk.withExtraArgument({ history: customHistory }),
  sagaMiddleware,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...rootMiddleWares))
);

export default store;

sagaMiddleware.run(rootSaga);
