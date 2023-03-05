// Components
import Alert from "./alert/Alert";
import MenuCustom from "./menu/MenuCustom";
import SidebarCustom from "./sideBar/sideBarCustom";
import NavBarCustom from "./navBar/navBarCustom";
import CardCustom from "./card/index";
import NotificationCustom from "./notification";

// Reducers
import { reducer as AlertReducer } from "./alert/alertSlice";
import { reducer as MenuCustomReducer } from "./menu/menuCustomSlice";
import { reducer as SideBarCustomReducer } from "./sideBar/sideBarCustomSlice";
import { reducer as NavBarCustomReducer } from "./navBar/navBarCustomSlice";
import { reducer as NotificationCustomReducer } from "./notification/notificationSlice";

//Actions
import { showAlertAction } from "./alert/alertAction";
import { showNotificationAction } from "./notification/notificationAction";

export {
  // Components
  Alert,
  MenuCustom,
  SidebarCustom,
  NavBarCustom,
  CardCustom,
  NotificationCustom,
  // Reducers
  AlertReducer,
  MenuCustomReducer,
  SideBarCustomReducer,
  NavBarCustomReducer,
  NotificationCustomReducer,
  //Actions
  showAlertAction,
  showNotificationAction,
};
