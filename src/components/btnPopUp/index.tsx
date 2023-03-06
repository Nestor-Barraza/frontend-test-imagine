import { Button, Popup, SemanticCOLORS } from "semantic-ui-react";

type VoidFunction = () => void;

const BtnPopUp = ({
  text,
  icon,
  color,
  action,
}: {
  text: string;
  icon: string;
  color: SemanticCOLORS;
  action: VoidFunction;
}) => {
  return (
    <Popup
      header={text}
      trigger={<Button icon={icon} onClick={action} color={color} />}
    />
  );
};

export default BtnPopUp;
