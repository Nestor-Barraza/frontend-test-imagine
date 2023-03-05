//Libs

import { changeStateSideBar } from "./sideBarCustomSlice";
import { store } from "src/app/store";

export const setVisible = (isVisible: boolean ) => {
  store.dispatch(changeStateSideBar({ isVisible: isVisible }));
};
