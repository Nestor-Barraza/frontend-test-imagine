import { Outlet } from "react-router-dom";
import { CardContent } from "semantic-ui-react";
import "./styles.css";
const PublicLayout = () => {
  return (
    <CardContent className="container-publiclayout">
      <Outlet />
    </CardContent>
  );
};

export default PublicLayout;
