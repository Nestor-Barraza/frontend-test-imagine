import { FC, ReactNode } from "react";
import { Card, Image, Placeholder } from "semantic-ui-react";
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
       
      {!imageCard ? (
        <Placeholder.Image className="image-placeholder" square />
      ) : (
        <Image className="card-image" src={imageCard} wrapped ui={false} />
      )}
      <Card.Content>
        {!header ? (
          <Placeholder.Header>
            <Placeholder.Line length="very short" />
            <Placeholder.Line length="medium" />
          </Placeholder.Header>
        ) : (
          <Card.Header>{header}</Card.Header>
        )}
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>{children}</Card.Description>
      </Card.Content>
      <Card.Content extra>{extra}</Card.Content>
    </Card>
  );
};

export default CardCustom;
