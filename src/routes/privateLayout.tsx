import { Outlet } from "react-router-dom";
import { ConfirmCustom, ModalCustom, SidebarCustom } from "src/components";
const PrivateRoutes = () => {
  return (
    <SidebarCustom>
      <ModalCustom />
      <ConfirmCustom />
      <Outlet />
    </SidebarCustom>
  );
};

export default PrivateRoutes;
