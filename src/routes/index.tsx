import { FC, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Constants } from "src/utils/";
import { Home, Galery, SignIn, SignUp } from "src/views";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";

const RouterApp: FC = (): JSX.Element => {
  //Redux state
  const {
    general_events: {
      user_credentials: { access_token },
    },
  }: {
    general_events: { user_credentials: { access_token: string } };
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (!access_token && window.location.pathname !== Constants.SIGNIN) {
      window.location.href = Constants.SIGNIN;
    }
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={Constants.GALERY} element={<Galery />} />
        <Route path={Constants.SIGNUP} element={<SignUp />} />
        <Route path={Constants.SIGNIN} element={<SignIn />} />
        <Route path="*" element={<>404 Not Found!</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
