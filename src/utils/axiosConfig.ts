import Constanst from "src/utils/constants";
import axios from "axios";
import { showAlertAction, showNotificationAction } from "src/components";
import Constants from "src/utils/constants";

//Axios instance
export const ApiFetch = axios.create({
  baseURL: Constanst.ENPOINT,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? `Bearer ${localStorage.getItem("access_token")}`
      : "",
  },
});

// Interceptor request
ApiFetch.interceptors.request.use(
  (config) => {
    // Push dinamic token

    config.headers.Authorization = localStorage.getItem("access_token")
      ? `Bearer ${localStorage.getItem("access_token")}`
      : "";

    return config;
  },
  (error) => {
    // Keep error
    return Promise.reject(error);
  }
);

// Interceptor response
ApiFetch.interceptors.response.use(
  (response) => {
    showNotificationAction(response.data);
    return response;
  },
  (error) => {
    //show error
    showNotificationAction(error.response.data);
    showAlertAction(error.response.data, "error");
    if (error.response.status === 401) {
      //Redirect
      window.location.href = Constants.SIGNIN;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
    return Promise.reject(error);
  }
);
