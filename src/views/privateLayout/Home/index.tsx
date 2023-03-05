/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import { CardCustom } from "src/components";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { getEnterprisesAction, getProductAction } from "src/views/redux";
import {
  Card,
  Loader,
  Icon,
  Image,
  CardContent,
  Popup,
} from "semantic-ui-react";
import {
  IphonePicture,
  MovistarIcon,
  TigoIcon,
  WomIcon,
  XiaomiPicture,
} from "src/assets";
const Home: FC = (): JSX.Element => {
  //Redux state
  const {
    general_events: { enterprises },
  }: {
    general_events: { enterprises: any[] };
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    getEnterprisesAction();
  }, []);
  if (!enterprises) return <Loader active size="medium" />;
  return (
    <Grid stackable>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={9}>
        <Header className="container-title" as="h1">
          Show enterprises
        </Header>
        <br />
        <Card.Group itemsPerRow={3} stackable>
          {enterprises.map(({ NIT, name, address, phone, products }, key) => (
            <CardCustom
              key={key}
              imageCard={
                name === "WOM"
                  ? WomIcon
                  : name === "TIGO"
                  ? TigoIcon
                  : MovistarIcon
              }
              header={name}
              meta={`Address: ${address}`}
              extra={
                <CardContent>
                  <Icon name="mobile alternate" />
                  <b>Phone:</b> {phone}
                </CardContent>
              }
            >
              <>
                {products.length === 0 ? (
                  <CardContent></CardContent>
                ) : (
                  <Card.Group
                    className="card-description "
                    itemsPerRow={3}
                    stackable
                  >
                    {products.map((article: any) => (
                      <CardContent
                        key={article._id}
                        onClick={() => {
                          getProductAction(article._id);
                        }}
                      >
                        <Popup
                          header={article.title}
                          trigger={
                            <Image
                              className="card-image"
                              size="tiny"
                              src={
                                article.title.includes("IPhone")
                                  ? IphonePicture
                                  : XiaomiPicture
                              }
                              avatar
                              alt={article.title}
                            />
                          }
                        />
                      </CardContent>
                    ))}
                  </Card.Group>
                )}
              </>
            </CardCustom>
          ))}
        </Card.Group>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>
  );
};

export default Home;
