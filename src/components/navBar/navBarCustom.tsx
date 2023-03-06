import { FC, useState, useEffect } from "react";
import { Menu, Icon, Button, Image } from "semantic-ui-react";
import { setVisible } from "src/components/sideBar/sideBarCustomAction";
import { useNavigate } from "react-router-dom";
import { handleItemClick } from "./navBarCustomAction";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { Constants } from "src/utils";
import { logOutAction } from "src/views";
import { BossPicture, EmployedPicture, HomeIcon, LogOutIcon } from "src/assets";
import "./styles.css";

const NavBarCustom: FC = (): JSX.Element => {
  // Router hook

  const redirectInstance = useNavigate();

  //Redux state
  const {
    navBar: { hoverTab },
    sideBar: { visible },
    general_events: {
      user_credentials: { role },
    },
  }: {
    navBar: { hoverTab: string };
    sideBar: { visible: boolean };
    general_events: { user_credentials: { role: string } };
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
        icon={<Image avatar src={HomeIcon} />}
        active={hoverTab === "home"}
        onClick={() => {
          handleItemClick("home");
          goTo(Constants.HOME);
        }}
      />

      <Menu.Item
        name="Profile"
        icon={
          <Image
            avatar
            src={role === "admin" ? BossPicture : EmployedPicture}
          />
        }
        active={hoverTab === "profile"}
        onClick={() => {
          handleItemClick("profile");
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
            icon={<Image avatar src={LogOutIcon} />}
            active={hoverTab === "log out"}
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
