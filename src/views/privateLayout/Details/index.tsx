import { FC } from "react";
import { CardContent } from "semantic-ui-react";
import { CardCustom } from "src/components";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { IphonePicture, XiaomiPicture } from "src/assets";
import "./styles.css";
import { formaterMoney } from "src/views/redux";
const Details: FC = (): JSX.Element => {
  //Redux state
  const {
    general_events: {
      product: { description, enterpriseNIT, price, title, unitsAvailable },
    },
  }: {
    general_events: {
      product: {
        description: string;
        enterpriseNIT: string;
        price: number;
        title: string;
        unitsAvailable: number;
      };
    };
  } = useSelector((state: RootState) => state);

  return (
    <CardContent>
      <CardCustom
        header={<b className="key-card-title">{title}</b>}
        imageCard={title.includes("IPhone") ? IphonePicture : XiaomiPicture}
        children={
          <CardContent>
            <p>
              <b className="key-card"> Description:</b> {description}
              <br />
              <b className="key-card"> Amount:</b> {unitsAvailable} <br />
              <b className="key-card"> Enterprise NIT : </b> {enterpriseNIT}
            </p>
          </CardContent>
        }
        meta={<CardContent />}
        extra={
          <>
            <b className="key-card">Price:</b>
            <b className="key-card-money">{formaterMoney(price)}</b>
          </>
        }
      />
    </CardContent>
  );
};

export default Details;
