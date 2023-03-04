import { FC } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Constants } from "src/utils";
import { logOutAction } from "src/views";

const AlertComponent: FC = (): JSX.Element => {
  const goTo = useNavigate();
  return (
    <>
      <Menu.Item as="a">
        <Icon name="home" />
        Casa
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          goTo(Constants.SIGNIN);
          logOutAction();
        }}
        as="a"
      >
        <Icon name="log out" />
        Cerrar sesión
      </Menu.Item>
    </>
  );
};

export default AlertComponent;
