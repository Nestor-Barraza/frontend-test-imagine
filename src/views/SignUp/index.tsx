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
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { Constants } from "src/utils/";
import { Alert, showAlertAction } from "src/components";

interface FormValues {
  full_name: string;
  role: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const initialFormValues: FormValues = {
  full_name: "",
  role: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  //Redux state
  const {
    general_events: {
      user_credentials: { access_token },
    },
  }: {
    general_events: { user_credentials: { access_token: string } };
  } = useSelector((state: RootState) => state);

  const goTo = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (
      !formValues.email ||
      !formValues.password ||
      !formValues.phone ||
      !formValues.role ||
      !formValues.full_name ||
      !formValues.confirmPassword
    ) {
      setIsSubmitting(false);
      showAlertAction(
        { name: "Campo vacío", message: "No pueden haber campos vacíos" },
        "error"
      );
    } else {
      setTimeout(() => {
        console.log(formValues);
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

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (access_token) {
      goTo(Constants.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues, access_token]);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Icon name="user plus" />
          Create your account
        </Header>
        <Alert />
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="full_name"
              placeholder="Full name"
              value={formValues.full_name}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="role"
              placeholder="Role"
              value={formValues.role}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              type="email"
              name="email"
              placeholder="E-mail address"
              value={formValues.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="phone"
              iconPosition="left"
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formValues.phone}
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
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              action={{
                icon: showConfirmPassword ? "eye slash" : "eye",
                onClick: toggleShowConfirmPassword,
              }}
            />

            <Button
              color="black"
              fluid
              size="large"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </Segment>
        </Form>

        <Message>
          Do you already have an account?{" "}
          <Link to={Constants.SIGNIN}>Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default SignUp;
