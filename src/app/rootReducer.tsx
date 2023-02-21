import { combineReducers } from "@reduxjs/toolkit";
import { AlertReducer, MenuCustomReducer, SideBarCustomReducer, NavBarCustomReducer, SliderCustomReducer } from "src/components/index";

export const rootReducer = combineReducers({
  alert: AlertReducer,
  menu: MenuCustomReducer,
  sideBar: SideBarCustomReducer,
  navBar: NavBarCustomReducer,
  slider: SliderCustomReducer,
});
