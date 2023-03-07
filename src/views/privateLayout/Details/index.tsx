import { FC, useEffect, useState } from "react";
import { Button, Card, CardContent, Loader } from "semantic-ui-react";
import {
  BtnPopUp,
  CardCustom,
  openModalAction,
  showConfirmAction,
} from "src/components";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { IphonePicture, XiaomiPicture } from "src/assets";
import { formaterMoney } from "src/views/redux";
import { useNavigate } from "react-router-dom";
import { Constants } from "src/utils";
import "./styles.css";

const Details: FC = (): JSX.Element => {
  //Redux state
  const {
    general_events: {
      product: { id, description, enterpriseNIT, price, title, unitsAvailable },
      product,
    },
  }: {
    general_events: {
      product: {
        id: string;
        description: string;
        enterpriseNIT: string;
        price: number;
        title: string;
        unitsAvailable: number;
      };
    };
  } = useSelector((state: RootState) => state);

  //Local state
  const [isLoading, setIsLoading] = useState(false);
  // Router hook
  const goTo = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <CardContent className="container-details">
      <Button
        className="btn-back"
        color="black"
        onClick={() => goTo(Constants.HOME)}
        icon="arrow left"
      />
      {isLoading || !title ? (
        <Loader className="loader" active size="medium" />
      ) : (
        <div>
          <CardCustom
            fluid={false}
            header={<b className="key-card-title">{title}</b>}
            imageCard={title.includes("IPhone") ? IphonePicture : XiaomiPicture}
            children={
              <CardContent>
                <Card.Group className="card-group-action">
                  <BtnPopUp
                    text="Edit"
                    icon="edit"
                    color="brown"
                    action={() =>
                      openModalAction(true, "edit-product", product)
                    }
                  />
                  <BtnPopUp
                    text="Remove"
                    icon="trash"
                    color="red"
                    action={() =>
                      showConfirmAction(
                        true,
                        `Are you sure to remove ${title} enterprise of the list?`,
                        id,
                        'delete-product'
                      )
                    }
                  />
                </Card.Group>
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
        </div>
      )}
    </CardContent>
  );
};

export default Details;
