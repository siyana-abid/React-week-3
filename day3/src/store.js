
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./reducers";
import logger from "./logger";

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
