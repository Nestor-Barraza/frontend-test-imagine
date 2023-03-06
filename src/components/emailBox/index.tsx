import React, { useState } from "react";
import {
  Grid,
  Header,
  Icon,
  Form,
  Segment,
  Button,
  Message,
} from "semantic-ui-react";
import "./styles.css";
import { sendEmailAction } from "./emailAction";
import { openModalAction } from "../modal/modalAction";
interface FormValues {
  email: string;
}
const EmailForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "server.email.test2023@gmail.com",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (formValues.email) {
      const response = await sendEmailAction(formValues.email);
      if (response) {
        openModalAction(false, "", {});
        setFormValues({ email: "" });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Icon name="envelope outline" />
          Send us an email
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              type="email"
              name="email"
              placeholder="Your E-mail address"
              value="server.email.test2023@gmail.com"
              onChange={handleChange}
            />
            <Message icon='warning' color='yellow' content="At the moment a free tier is being used and emails can only be sent to the configured default address" />
            <Button
              color="black"
              fluid
              size="large"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              style={{ marginTop: "2rem" }}
            >
              Send Message
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default EmailForm;
