import Constanst from "src/utils/constants";
import axios from "axios";

//Axios instance
export const ApiFetch = axios.create({
  baseURL: Constanst.ENPOINT,
});
