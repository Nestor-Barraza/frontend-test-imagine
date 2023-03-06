import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
import { Constants } from "src/utils/";
import { signInAction } from "src/views";
import { Alert, Parallax, showAlertAction } from "src/components";
import "./styles.css";
interface FormValues {
  email: string;
  password: string;
}

const initialFormValues: FormValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const goTo = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (!formValues.email || !formValues.password) {
      setIsSubmitting(false);
      showAlertAction(
        { code: "Empty field", message: "There can be no empty fields" },
        "error"
      );
    } else {
      setTimeout(async () => {
        const responseLogin = await signInAction(
          formValues.email,
          formValues.password
        );
        if (responseLogin) {
          goTo(Constants.HOME);
        }
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  return (
    <>
      <Parallax />
      <Grid
        textAlign="center"
        className="signin-container"
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="orange" textAlign="center">
            <Icon name="user circle outline" />
            Log-in to your account
          </Header>
          <Alert />
          <Form size="large" >
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                type="email"
                name="email"
                placeholder="E-mail address"
                value={formValues.email}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                action={{
                  icon: showPassword ? "eye slash" : "eye",
                  onClick: toggleShowPassword,
                }}
              />
              <Button
                color="black"
                fluid
                size="large"
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Segment>
          </Form>

          <Message>
            New to us? <Link to={Constants.SIGNUP}>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SignIn;
