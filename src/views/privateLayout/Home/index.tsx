/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import {
  BtnPopUp,
  CardCustom,
  Parallax,
  openModalAction,
  showConfirmAction,
} from "src/components";
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
  EnterprisePicture,
  IphonePicture,
  MotorolaPicture,
  MovistarIcon,
  TigoIcon,
  WomIcon,
  XiaomiPicture,
} from "src/assets";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Constants } from "src/utils";

const Home: FC = (): JSX.Element => {
  //Redux state
  const {
    general_events: { enterprises, user_credentials },
  }: {
    general_events: { enterprises: any[]; user_credentials: any };
  } = useSelector((state: RootState) => state);

  // Router hook
  const goTo = useNavigate();

  useEffect(() => {
    getEnterprisesAction();
  }, []);

  if (
    !enterprises ||
    user_credentials.phone === 0 ||
    !user_credentials.full_name
  )
    return <Loader active size="medium" />;
  return (
    <div className="container-home">
      <Parallax />
      <Header color="orange" className="container-title" as="h1">
        <Icon name="building" /> All enterprises
      </Header>
      <Button
        color="green"
        className="bnt-add"
        onClick={() => openModalAction(true, "create-enterprise", {})}
      >
        <Icon name="plus" />
        Create a enterprise
      </Button>

      {/* All enterprises */}
      <Card.Group className="card-enterprise" itemsPerRow={3} stackable>
        {enterprises.map((item, key) => {
          return (
            <CardCustom
              fluid={false}
              key={key}
              imageCard={
                item.name.includes("WOM")
                  ? WomIcon
                  : item.name.includes("TIGO")
                  ? TigoIcon
                  : item.name.includes("MOVISTAR")
                  ? MovistarIcon
                  : EnterprisePicture
              }
              header={item.name}
              meta={`Address: ${item.address}`}
              extra={
                <CardContent>
                  <Icon name="mobile alternate" />
                  <b>Phone:</b> {item.phone}
                </CardContent>
              }
            >
              <>
                {item.products.length === 0 ? (
                  <CardContent>
                    <Message>
                      <Message.Header>No elements to display</Message.Header>
                      <p>Sorry, we couldn't find any device.</p>
                    </Message>
                    <Card.Group className="card-group-action">
                      <BtnPopUp
                        text="Create a product"
                        icon="plus"
                        color="green"
                        action={() =>
                          openModalAction(true, "create-product", item)
                        }
                      />
                      <BtnPopUp
                        text="Edit"
                        icon="edit"
                        color="brown"
                        action={() =>
                          openModalAction(true, "edit-enterprise", item)
                        }
                      />
                      <BtnPopUp
                        text="Remove"
                        icon="trash"
                        color="red"
                        action={() =>
                          showConfirmAction(
                            true,
                            `Are you sure to remove ${item.name} enterprise fo the list?`,
                            item.NIT,
                            "enterprise"
                          )
                        }
                      />
                    </Card.Group>
                  </CardContent>
                ) : (
                  <CardContent>
                    <Message>
                      <Card.Group
                        className="card-description"
                        itemsPerRow={3}
                        stackable
                      >
                        {item.products.map((article: any) => (
                          <CardContent
                            key={article._id}
                            onClick={() => {
                              getProductAction(article._id);
                              goTo(`${Constants.DETAILS}/${article._id}`);
                            }}
                          >
                            <Popup
                              header={article.title}
                              trigger={
                                <Image
                                  className="card-image"
                                  size="huge"
                                  src={
                                    article.title.includes("IPhone")
                                      ? IphonePicture
                                      : article.title.includes("Motorola")
                                      ? MotorolaPicture
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
                    </Message>
                    <Card.Group className="card-group-action">
                      <BtnPopUp
                        text="Create a product"
                        icon="plus"
                        color="green"
                        action={() =>
                          openModalAction(true, "create-product", item)
                        }
                      />
                      <BtnPopUp
                        text="Edit"
                        icon="edit"
                        color="brown"
                        action={() =>
                          openModalAction(true, "edit-enterprise", item)
                        }
                      />
                      <BtnPopUp
                        text="Remove"
                        icon="trash"
                        color="red"
                        action={() =>
                          showConfirmAction(
                            true,
                            `Are you sure to remove ${item.name} enterprise of the list?`,
                            item.NIT,
                            "enterprise"
                          )
                        }
                      />
                    </Card.Group>
                  </CardContent>
                )}
              </>
            </CardCustom>
          );
        })}
      </Card.Group>

      {/* Action user */}
      <Segment className="segment-home" placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="mail" />
                Send pdf by email
              </Header>
              <Button
                fluid
                onClick={() => openModalAction(true, "email", {})}
                color="facebook"
              >
                <Icon name="envelope" />
                Send pdf
              </Button>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="file pdf outline" />
                Download PDF
              </Header>
              <Button
                onClick={() => openModalAction(true, "download", {})}
                color="google plus"
                fluid
              >
                <Icon name="file pdf outline" />
                Download
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Home;
