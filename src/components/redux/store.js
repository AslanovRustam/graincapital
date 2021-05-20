import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const userReducer = createReducer([], {
  [actions.fetchUserSuccess]: (_, action) => {
    return action.payload;
  },
});

const rootReducer = combineReducers({
  users: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
