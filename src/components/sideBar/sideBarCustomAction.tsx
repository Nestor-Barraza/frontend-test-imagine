//Libs

/*   import { showAlert } from "./navBarSlice"; */
import { changeStateSideBar } from "./sideBarCustomSlice";
import { store } from "src/app/store";



export const setVisible = () => {
  const getVisibleState = store.getState().sideBar.visible
  store.dispatch(changeStateSideBar({ isVisible: !getVisibleState }))
}

