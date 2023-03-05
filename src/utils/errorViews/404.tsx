import React from "react";
import { Link } from "react-router-dom";
import { CardContent, Header, Icon } from "semantic-ui-react";
import "./styles.css";

const Error404: React.FC = () => {
  return (
    <CardContent className="error-page">
      <CardContent className="background"></CardContent>
      <CardContent className="error-container">
        <Header as="h2" color="black" textAlign="center">
          <Icon name="exclamation triangle" color="black" />
          Oops! Page not found.
        </Header>
        <p className="error-message">
          We can't seem to find the page you're looking for.
        </p>
        <Link to="/" className="error-link">
          Go to Homepage
        </Link>
      </CardContent>
    </CardContent>
  );
};

export default Error404;
