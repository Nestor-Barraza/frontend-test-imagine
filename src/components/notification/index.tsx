import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

interface NotificationCustomProps {}

const NotificationCustom: React.FC<NotificationCustomProps> = (props) => {
  //Redux state
  const { type, message } = useSelector(
    (state: RootState) => state.notification
  );
  useEffect(() => {
    if (type && message) {
      toast(message);
    }
  }, [type, message]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
};

export default NotificationCustom;
