import { FC } from "react";
import { useSelector } from "react-redux";
import { Confirm } from "semantic-ui-react";
import { RootState } from "src/app/store";
import { showConfirmAction } from "./confirmAction";
import { deleteEnterpriseAction } from "src/views";

const ConfirmCustom: FC = (): JSX.Element => {
  //Redux state
  const { isVisibleConfirm, message, confirmObjectId } = useSelector(
    (state: RootState) => state.confirm
  );

  //Function delete enterprise

  const deleteEnterprise = async () => {
    if (confirmObjectId !== "") {
      const deleteEnterprise = await deleteEnterpriseAction(confirmObjectId);
      if (deleteEnterprise) {
        showConfirmAction(false, "", "");
      }
    }
  };

  return (
    <div>
      <Confirm
        open={isVisibleConfirm}
        content={message}
        cancelButton="Never mind"
        confirmButton="Let's do it"
        onCancel={() => showConfirmAction(false, "", "")}
        onConfirm={deleteEnterprise}
      />
    </div>
  );
};

export default ConfirmCustom;
