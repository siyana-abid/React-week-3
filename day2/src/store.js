import { createStore, combineReducers } from "redux";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function authReducer(state = false, action) {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  isLoggedIn: authReducer
});

const store = createStore(rootReducer);

export default store;