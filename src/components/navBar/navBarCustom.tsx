import { FC, useState, useEffect } from "react";
import { Menu, Icon, Button } from "semantic-ui-react";
import { setVisible } from "src/components/sideBar/sideBarCustomAction";
import { useNavigate } from "react-router-dom";
import { handleItemClick } from "./navBarCustomAction";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { Constants } from "src/utils";
import { logOutAction } from "src/views";
import "./styles.css";

const NavBarCustom: FC = (): JSX.Element => {
  // Router hook

  const redirectInstance = useNavigate();

  //Redux state
  const {
    navBar: { hoverTab },
    sideBar: { visible },
  }: {
    navBar: { hoverTab: string };
    sideBar: { visible: boolean };
  } = useSelector((state: RootState) => state);

  // Redirect function
  const goTo = (route: string) => {
    redirectInstance(route);
  };

  //Local state
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  useEffect(() => {
    function manejarCambioDeTamanio() {
      if (window.innerWidth <= 768) {
        // hidden menu
        setIsMenuHidden(true);
        setVisible(false);
      } else {
        // Show menu
        setIsMenuHidden(false);
      }
    }

    window.addEventListener("resize", manejarCambioDeTamanio);

    return () => {
      window.removeEventListener("resize", manejarCambioDeTamanio);
    };
  }, []);

  return (
    <Menu className="navBar-container" pointing secondary>
      <Menu.Item
        name="home"
        icon="home"
        active={hoverTab === "home"}
        onClick={() => {
          handleItemClick("home");
          goTo(Constants.HOME);
        }}
      />

      <Menu.Item
        name="catalogue"
        icon="boxes"
        active={hoverTab === "catalogue"}
        onClick={() => {
          handleItemClick("catalogue");
          goTo(Constants.PROFILE);
        }}
      />
      <Menu.Menu position="right">
        {isMenuHidden ? (
          <Menu.Item
            content={
              <Button
                className="button-only-icon"
                onClick={() => setVisible(!visible)}
              >
                <Icon className="icon-inside-button" name="bars" />
              </Button>
            }
          />
        ) : (
          <Menu.Item
            name="Log out"
            icon="log out"
            active={hoverTab === "catalogue"}
            onClick={() => {
              goTo(Constants.SIGNIN);
              logOutAction();
            }}
          />
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default NavBarCustom;
