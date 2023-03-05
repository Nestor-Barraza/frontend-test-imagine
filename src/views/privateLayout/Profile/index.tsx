import { FC } from "react";
import { CardContent } from "semantic-ui-react";
import { CardCustom } from "src/components";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { BossPicture, EmployedPicture } from "src/assets";
import { formatPhoneNumber } from "src/views/redux";
import "./styles.css";
const Profile: FC = (): JSX.Element => {
  //Redux state
  const {
    general_events: {
      user_credentials: { email, full_name, phone, role },
    },
  }: {
    general_events: {
      user_credentials: {
        email: string;
        full_name: string;
        phone: string;
        role: string;
      };
    };
  } = useSelector((state: RootState) => state);

  return (
    <CardContent>
      <CardCustom
        header={<b className="key-card-title">{full_name}</b>}
        imageCard={role === "admin" ? BossPicture : EmployedPicture}
        children={
          <CardContent>
            <p>
              <b className="key-card"> Role:</b> {role}
              <br />
              <b className="key-card"> Phone:</b> {formatPhoneNumber(phone)}{" "}
              <br />
            </p>
          </CardContent>
        }
        meta={<CardContent />}
        extra={
          <>
            <b className="key-card">Email:</b>
            <b className="key-card-money">{email}</b>
          </>
        }
      />
    </CardContent>
  );
};

export default Profile;
