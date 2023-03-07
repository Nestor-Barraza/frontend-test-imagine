// Components
import Alert from "./alert/Alert";
import MenuCustom from "./menu/MenuCustom";
import SidebarCustom from "./sideBar/sideBarCustom";
import NavBarCustom from "./navBar/navBarCustom";
import CardCustom from "./card/index";
import NotificationCustom from "./notification";
import EmailBox from "./emailBox";
import ModalCustom from "./modal";
import DownloadPdf from "./downloadPdf";
import FormEdit from "./formEdit";
import BtnPopUp from "./btnPopUp";
import ConfirmCustom from "./confirm";
import Parallax from "./parallax";
import FormAdd from "./formAdd";
import FormAddProduct from "./formAddProduct";
import FormEditProduct from "./formEditProduct";
// Reducers
import { reducer as AlertReducer } from "./alert/alertSlice";
import { reducer as MenuCustomReducer } from "./menu/menuCustomSlice";
import { reducer as SideBarCustomReducer } from "./sideBar/sideBarCustomSlice";
import { reducer as NavBarCustomReducer } from "./navBar/navBarCustomSlice";
import { reducer as NotificationCustomReducer } from "./notification/notificationSlice";
import { reducer as ModalCustomReducer } from "./modal/modalSlice";
import { reducer as ConfirmReducer } from "./confirm/confirmSlice";

//Actions
import { showAlertAction } from "./alert/alertAction";
import { showNotificationAction } from "./notification/notificationAction";
import { openModalAction } from "./modal/modalAction";
import { sendEmailAction } from "./emailBox/emailAction";
import { downloadPdfAction } from "./downloadPdf/donwloadPdfAction";
import { showConfirmAction } from "./confirm/confirmAction";

export {
  // Components
  Alert,
  MenuCustom,
  SidebarCustom,
  NavBarCustom,
  CardCustom,
  NotificationCustom,
  EmailBox,
  ModalCustom,
  DownloadPdf,
  FormEdit,
  BtnPopUp,
  ConfirmCustom,
  Parallax,
  FormAdd,
  FormAddProduct,
  FormEditProduct,
  // Reducers
  AlertReducer,
  MenuCustomReducer,
  SideBarCustomReducer,
  NavBarCustomReducer,
  NotificationCustomReducer,
  ModalCustomReducer,
  ConfirmReducer,
  //Actions
  showAlertAction,
  showNotificationAction,
  openModalAction,
  sendEmailAction,
  downloadPdfAction,
  showConfirmAction,
};
