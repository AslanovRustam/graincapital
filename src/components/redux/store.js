import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const userReducer = createReducer([], {
  [actions.fetchUserSuccess]: (_, action) => {
    return action.payload;
  },
  [actions.addUserSuccess]: (state, action) => {
    return [action.payload, ...state];
  },
  [actions.deleteUserSuccess]: (state, action) => {
    return state.filter((user) => user.id !== action.payload);
  },
  [actions.updUserSuccess]: (state, action) => {
    return state.map((user) => {
      if (action.payload.id === user.id) {
        console.log("action.payload.id", action.payload.id);
        console.log("user.id", user.id);
        console.log("action.payload", action.payload);
        return { ...action.payload };
      }
      return user;
    });
  },
  [actions.filterSuccess]: (state, action) => {
    console.log("action.payload", action.payload);
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
