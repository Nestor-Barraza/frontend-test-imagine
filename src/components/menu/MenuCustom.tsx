import { FC } from "react";
import { Image, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Constants } from "src/utils";
import { logOutAction } from "src/views";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { BossPicture, EmployedPicture, HomeIcon, LogOutIcon } from "src/assets";
import "./styles.css";

const AlertComponent: FC = (): JSX.Element => {
  //Redux state
  const {
    general_events: {
      user_credentials: { role },
    },
  }: {
    general_events: {
      user_credentials: {
        email: string;
        full_name: string;
        phone: string;
        role: string;
      };
    };
  } = useSelector((state: RootState) => state);
  //Redirect hook
  const goTo = useNavigate();

  return (
    <>
      <Menu.Item
        onClick={() => {
          goTo(Constants.HOME);
        }}
        as="a"
      >
        <Image avatar src={HomeIcon} />
        Home
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          goTo(Constants.PROFILE);
        }}
        as="a"
      >
        <Image avatar src={role === "admin" ? BossPicture : EmployedPicture} />
        Profile
      </Menu.Item>

      <Menu.Item
        className="menu-container"
        onClick={() => {
          goTo(Constants.SIGNIN);
          logOutAction();
        }}
        as="a"
      >
        <Image avatar src={LogOutIcon} />
        Log out
      </Menu.Item>
    </>
  );
};

export default AlertComponent;
