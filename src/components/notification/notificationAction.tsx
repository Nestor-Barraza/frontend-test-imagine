//Libs

import { showNotification } from "./notificationSlice";
import { store } from "src/app/store";

//Open confirm
export const showNotificationAction = (error: any) => {
  // Show alert
  store.dispatch(
    showNotification({
      type: error.code,
      message: error.message,
    })
  );
  // Hidden alert
  setTimeout(() => {
    store.dispatch(
      showNotification({
        type: "",
        message: "",
      })
    );
  }, 4000);
};
