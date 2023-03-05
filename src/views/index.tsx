import { Home, Profile, Details } from "./privateLayout";
import { SignIn, SignUp } from "./publicLayout";
import {
  GeneralEventsReducer,
  logOutAction,
  signUpAction,
  signInAction,
  getProductAction,
  formaterMoney,
  formatPhoneNumber
} from "./redux";
export {
  //Private layout
  Home,
  Profile,
  Details,
  //Public layout
  SignIn,
  SignUp,
  //Redux
  GeneralEventsReducer,
  logOutAction,
  signUpAction,
  signInAction,
  getProductAction,
  formaterMoney,
  formatPhoneNumber
};
