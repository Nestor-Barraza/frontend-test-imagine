import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  DropdownProps,
  Form,
  FormInputProps,
  Grid,
  Header,
  Icon,
  Label,
  Message,
  Segment,
} from "semantic-ui-react";
import { Constants } from "src/utils/";
import { Alert, Parallax, showAlertAction } from "src/components";
import { signUpAction } from "src/views";
import "./styles.css";

//Import validations
const {
  FORM_VALIDATIONS: { PASSWORD_REGEX, PHONE_REGEX },
} = Constants;
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

const roleOptions = [
  { key: "admin", text: "Admin", value: "admin" },
  { key: "user", text: "User", value: "user" },
];

const SignUp = () => {
  const goTo = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    switch (true) {
      case !formValues.email ||
        !formValues.password ||
        !formValues.phone ||
        !formValues.role ||
        !formValues.full_name ||
        !formValues.confirmPassword:
        // eslint-disable-next-line no-lone-blocks
        {
          setIsSubmitting(false);
          showAlertAction(
            { code: "Empty field", message: "There can be no empty fields" },
            "error"
          );
        }

        break;

      case !PHONE_REGEX.test(formValues.phone):
        // eslint-disable-next-line no-lone-blocks
        {
          setIsSubmitting(false);
          showAlertAction(
            {
              code: "Invalid content field",
              message: "Please enter a valid phone number. Please try again",
            },
            "error"
          );
        }

        break;
      case !PASSWORD_REGEX.test(formValues.password):
        // eslint-disable-next-line no-lone-blocks
        {
          setIsSubmitting(false);
          showAlertAction(
            {
              code: "Invalid password",
              message:
                "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*). Please try again",
            },
            "error"
          );
        }

        break;
      case formValues.password !== formValues.confirmPassword:
        // eslint-disable-next-line no-lone-blocks
        {
          setIsSubmitting(false);
          showAlertAction(
            {
              code: "Password no match",
              message: "The password and confirmPassword does not match",
            },
            "error"
          );
        }

        break;

      default:
        // eslint-disable-next-line no-lone-blocks
        {
          setTimeout(async () => {
            const responseSignUp = await signUpAction(
              formValues.full_name,
              formValues.role,
              formValues.phone,
              formValues.email,
              formValues.password
            );
            if (responseSignUp) {
              goTo(Constants.HOME);
            }
            setIsSubmitting(false);
          }, 2000);
        }
        break;
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: FormInputProps
  ) => {
    const { name, value } = data;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheck = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    { name, value }: DropdownProps
  ) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      goTo(Constants.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  return (
    <>
      <Parallax />

      <Grid
        textAlign="center"
        className="signup-container"
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="orange" textAlign="center">
            <Icon name="user plus" />
            Create your account
          </Header>
          <Alert />
          <Form size="large">
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
              <Card.Group className="form-select">
                <Label>
                  <Icon
                    className="form-select-icon"
                    name={
                      formValues.role === "admin" ? "chess king" : "chess pawn"
                    }
                  />
                </Label>
                <Form.Select
                  className="form-select-input"
                  fluid
                  options={roleOptions}
                  name="role"
                  placeholder="Select role"
                  value={formValues.role}
                  onChange={handleCheck}
                />
              </Card.Group>

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
                type="number"
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
                onClick={handleSubmit}
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
    </>
  );
};
export default SignUp;
