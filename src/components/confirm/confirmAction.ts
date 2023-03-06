//Libs

import { showConfirm } from "./confirmSlice";
import { store } from "src/app/store";

//Open confirm
export const showConfirmAction = (
  isVisibleConfirm: boolean,
  message: string,
  confirmObjectId: string
) => {
  // Show alert
  store.dispatch(
    showConfirm({
      isVisibleConfirm,
      confirmObjectId,
      message,
    })
  );
};
