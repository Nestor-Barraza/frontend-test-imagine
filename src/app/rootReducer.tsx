import { combineReducers } from "@reduxjs/toolkit";
import { AlertReducer, MenuCustomReducer, SideBarCustomReducer, NavBarCustomReducer,  } from "src/components/index";
import { GeneralEventsReducer } from "src/views";

export const rootReducer = combineReducers({
  alert: AlertReducer,
  menu: MenuCustomReducer,
  sideBar: SideBarCustomReducer,
  navBar: NavBarCustomReducer,
  general_events: GeneralEventsReducer,
});
