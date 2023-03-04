// Components
import Alert from "./alert/Alert";
import MenuCustom from "./menu/MenuCustom";
import SidebarCustom from "./sideBar/sideBarCustom";
import NavBarCustom from "./navBar/navBarCustom";

// Reducers
import { reducer as AlertReducer } from "./alert/alertSlice";
import { reducer as MenuCustomReducer } from "./menu/menuCustomSlice";
import { reducer as SideBarCustomReducer } from "./sideBar/sideBarCustomSlice";
import { reducer as NavBarCustomReducer } from "./navBar/navBarCustomSlice";

//Actions
import { showAlertAction } from "./alert/alertAction";

export {
  // Components
  Alert,
  MenuCustom,
  SidebarCustom,
  NavBarCustom,
  // Reducers
  AlertReducer,
  MenuCustomReducer,
  SideBarCustomReducer,
  NavBarCustomReducer,
  //Actions
  showAlertAction,
};
