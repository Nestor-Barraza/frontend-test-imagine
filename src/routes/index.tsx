import PrivateLayout from "./privateLayout";
import PublicLayout from "./publicLayout";
import { FC, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Constants, View404 } from "src/utils/";
import { Home, Profile, Details, SignIn, SignUp } from "src/views";
import { NotificationCustom } from "src/components";
import { getTokenBody } from "src/views/redux/generalEventsAction";

const RouterApp: FC = (): JSX.Element => {
  //Request Auth
  const RequireAuth = (children: JSX.Element) => {
    const redirectUrl = Constants.SIGNIN;
    //Redirect
    if (
      !localStorage.getItem("access_token") &&
      window.location.pathname !== Constants.SIGNIN
    )
      return <Navigate to={redirectUrl} />;
    return children;
  };

  useEffect(() => {
    getTokenBody(localStorage.getItem("access_token"));
  }, []);

  return (
    <BrowserRouter>
      <NotificationCustom />

      <Routes>
        {/* Private routes */}
        <Route path={Constants.HOME} element={<PrivateLayout />}>
          <Route index element={RequireAuth(<Home />)} />
          <Route path={Constants.PROFILE} element={<Profile />} />
          <Route path={`${Constants.DETAILS}/:id`} element={<Details />} />
        </Route>
        {/* Public routes */}
        <Route path={Constants.HOME} element={<PublicLayout />}>
          <Route path={Constants.SIGNUP} element={<SignUp />} />
          <Route path={Constants.SIGNIN} element={<SignIn />} />
          <Route path="*" element={<View404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
