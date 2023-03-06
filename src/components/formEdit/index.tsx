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
import { editEnterpriseAction } from "src/views";
import "./styles.css";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
interface FormValues {
  name: string;
  address: string;
  phone: string;
  NIT: string;
}

const FormEdit = () => {

  //Redux state

  //Redux state
  const { objectInfo } = useSelector((state: RootState) => state.modal);

  //Local sates
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    address: "",
    phone: "",
    NIT: "",
  });
  useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  //Handle submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (
      !formValues.NIT ||
      !formValues.name ||
      !formValues.address ||
      !formValues.phone
    ) {
      setIsSubmitting(false);
      showAlertAction(
        { code: "Empty field", message: "There can be no empty fields" },
        "error"
      );
    } else {
      setTimeout(async () => {
        const responseUpdate = await editEnterpriseAction(
          formValues.NIT,
          formValues.name,
          formValues.address,
          formValues.phone
        );
        if (responseUpdate) {
          openModalAction(false, "", {});
        }
        setIsSubmitting(false);
      }, 2000);
    }
  }; //Handle change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: FormInputProps
  ) => {
    const { name, value } = data;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (objectInfo.name !== "" && formValues.name === "") {
      setFormValues({
        NIT: objectInfo.NIT,
        name: objectInfo.name,
        address: objectInfo.address,
        phone: objectInfo.phone,
      });
    }
  }, [formValues]);
  if (!objectInfo) return <Loader active size="medium" />;

  return (
    <Grid textAlign="center" className="form-edit-container" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Icon name="edit" color="blue" />
          Edit Enterprise
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
              update
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default FormEdit;
