import { combineReducers } from "@reduxjs/toolkit";
import { AlertReducer } from "src/components/index";

export const rootReducer = combineReducers({
  alert: AlertReducer,
});
