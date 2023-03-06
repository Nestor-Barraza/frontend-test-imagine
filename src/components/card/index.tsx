import { FC, ReactNode } from "react";
import { Card, Image } from "semantic-ui-react";
import "./styles.css";

const CardCustom: FC<{
  children: ReactNode;
  imageCard: string;
  header: ReactNode;
  meta: ReactNode;
  extra: ReactNode;
  fluid: boolean;
}> = ({ children, imageCard, header, meta, extra, fluid }): JSX.Element => {
  return (
    <Card fluid={fluid} className="card-custom">
      <Image className="card-image" src={imageCard} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>{children}</Card.Description>
      </Card.Content>
      <Card.Content extra>{extra}</Card.Content>
    </Card>
  );
};

export default CardCustom;
