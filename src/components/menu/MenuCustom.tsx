import { FC } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { Constants } from "src/utils";
import { logOutAction } from "src/views";
import "./styles.css";

const AlertComponent: FC = (): JSX.Element => {
  const goTo = useNavigate();
  return (
    <>
      <Menu.Item
        onClick={() => {
          goTo(Constants.HOME);
        }}
        as="a"
      >
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          goTo(Constants.PROFILE);
        }}
        as="a"
      >
        <Icon name="boxes" />
        catalogue
      </Menu.Item>

      <Menu.Item
      className="btn-menu"
        onClick={() => {
          goTo(Constants.SIGNIN);
          logOutAction();
        }}
        as="a"
      >
        <Icon name="log out" />
        Log out
      </Menu.Item>
    </>
  );
};

export default AlertComponent;
