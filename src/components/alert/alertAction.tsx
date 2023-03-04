//Libs

import { showAlert } from "./alertSlice";
import { store } from "src/app/store";

//Open confirm
export const showAlertAction = (error: any, severity: string) => {
  // Show alert
  store.dispatch(
    showAlert({
      isVisibleAlert: true,
      type: error.name,
      severity,
      message: error.message,
    })
  );
  // Hidden alert
  setTimeout(() => {
    store.dispatch(
      showAlert({
        isVisibleAlert: false,
        type: "",
        severity: "",
        message: "",
      })
    );
  }, 4000);
};
