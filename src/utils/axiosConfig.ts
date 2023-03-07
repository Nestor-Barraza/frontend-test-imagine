import Constanst from "src/utils/constants";
import axios from "axios";
import { showAlertAction, showNotificationAction } from "src/components";

//Axios instance
export const ApiFetch = axios.create({
  baseURL: Constanst.ENPOINT,
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
    if (error.code) {
      showNotificationAction(error);
      showAlertAction(error, "error");
    } else {
      showNotificationAction(error.response.data);
      showAlertAction(error.response.data, "error");
    }

    if (error.response.status === 401) {
      error.headers.Authorization = "";
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
    return Promise.reject(error);
  }
);
