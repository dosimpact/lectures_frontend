import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../Pages/Couter/state/reducer";
import todoReducer from "../Pages/Todo/state/reducer";

import reduxLogger from "redux-logger";
import myLogger from "./middlewares/my-logger";

/* rootReducer , middleWares  */
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, reduxLogger))
);
