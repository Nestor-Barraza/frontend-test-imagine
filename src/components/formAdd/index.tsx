import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormInputProps,
  Grid,
  Header,
  Icon,
  Loader,
  Segment,
} from "semantic-ui-react";
import { Alert, openModalAction, showAlertAction } from "src/components";
import { createEnterpriseAction } from "src/views";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { Constants } from "src/utils";
import "./styles.css";

//Import validations
const {
  FORM_VALIDATIONS: { PHONE_REGEX },
} = Constants;
interface FormValues {
  name: string;
  address: string;
  phone: string;
}

const FormAdd = () => {
  //Redux state

  //Redux state
  const { objectInfo } = useSelector((state: RootState) => state.modal);

  //Local sates
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    address: "",
    phone: "",
  });
  useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  //Handle submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (!formValues.name || !formValues.address || !formValues.phone) {
      setIsSubmitting(false);
      showAlertAction(
        { code: "Empty field", message: "There can be no empty fields" },
        "error"
      );
      if (!PHONE_REGEX.test(formValues.phone)) {
        setIsSubmitting(false);
        showAlertAction(
          {
            code: "Invalid content field",
            message: "Please enter a valid phone number. Please try again",
          },
          "error"
        );
      } else {
        setTimeout(async () => {
          // go to create
          const createEnterprise = await createEnterpriseAction(
            formValues.name,
            formValues.address,
            formValues.phone
          );
          if (createEnterprise) {
            openModalAction(false, "", {});
          }
          setIsSubmitting(false);
        }, 2000);
      }
    }
  }; //Handle change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: FormInputProps
  ) => {
    const { name, value } = data;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {}, [formValues]);

  if (!objectInfo) return <Loader active size="medium" />;

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          <Icon name="plus" color="blue" />
          Create a Enterprise
        </Header>
        <Alert />
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="building"
              iconPosition="left"
              type="text"
              name="name"
              placeholder="Enterprise name"
              value={formValues.name}
              onChange={handleChange}
            />

            <Form.Input
              fluid
              icon="map"
              iconPosition="left"
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
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

            <Button
              color="black"
              fluid
              size="large"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Create
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default FormAdd;
