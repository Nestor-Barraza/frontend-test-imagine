//Libs

import { ApiFetch } from "src/utils/";
import { getCredentials } from "./generalEventsSlice";
import { store } from "src/app/store";
import { showAlertAction } from "src/components";

//sign in
export const signInAction = async (email: string, password: string) => {
  try {
    const {
      data: { access_token, refresh_token },
    } = await ApiFetch.post("/sign-in", {
      email,
      password,
    });
    //Push credentials
    store.dispatch(getCredentials({ access_token, refresh_token }));

    return true;
  } catch (error) {
    showAlertAction(error, "error");
    return false;
  }
};
//Log out
export const logOutAction = async () => {
  try {
    //Push credentials
    store.dispatch(getCredentials({ access_token: "", refresh_token: "" }));
  } catch (error) {
    console.log(error);
  }
};
