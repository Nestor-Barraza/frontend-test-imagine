import { Outlet } from "react-router-dom";
import { SidebarCustom } from "src/components";

const PrivateRoutes = () => {
  return (
    <SidebarCustom>
      <Outlet />
    </SidebarCustom>
  );
};

export default PrivateRoutes;
