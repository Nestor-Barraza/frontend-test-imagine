import React, { useEffect, useState } from "react";
import { Alert, openModalAction, showAlertAction } from "src/components";
import { editProductAction } from "src/views";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
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
import "./styles.css";

interface FormValues {
  id: string;
  title: string;
  description: string;
  price: number;
  unitsAvailable: number;
}

const FormAddProduct = () => {
  //Redux state

  //Redux state
  const { objectInfo } = useSelector((state: RootState) => state.modal);

  //Local sates
  const [formValues, setFormValues] = useState<FormValues>({
    id: "",
    title: "",
    description: "",
    price: 0,
    unitsAvailable: 0,
  });
  useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  //Handle submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (
      !formValues.id ||
      !formValues.title ||
      !formValues.description ||
      formValues.price === 0
    ) {
      setIsSubmitting(false);
      showAlertAction(
        { code: "Empty field", message: "There can be no empty fields" },
        "error"
      );
    } else {
      setTimeout(async () => {
        // go to create
        const createEnterprise = await editProductAction(
          formValues.id,
          formValues.title,
          formValues.description,
          formValues.price,
          formValues.unitsAvailable
        );
        if (createEnterprise) {
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
    if (objectInfo.title !== "" && formValues.title === "") {
      setFormValues({
        id: objectInfo.id,
        title: objectInfo.title,
        description: objectInfo.description,
        price: objectInfo.price,
        unitsAvailable: objectInfo.unitsAvailable,
      });
    }
  }, [formValues]);

  if (!objectInfo) return <Loader active size="medium" />;

  return (
    <Grid
      textAlign="center"
      className="form-edit-container"
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Icon name="edit" color="blue" />
          Edit a product
        </Header>
        <Alert />
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="box"
              iconPosition="left"
              type="text"
              name="title"
              placeholder="Product name"
              value={formValues.title}
              onChange={handleChange}
            />

            <Form.Input
              fluid
              icon="file"
              iconPosition="left"
              type="text"
              name="description"
              placeholder="Description"
              value={formValues.description}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="money"
              iconPosition="left"
              type="number"
              name="price"
              placeholder="Price"
              value={formValues.price}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="clipboard check"
              iconPosition="left"
              type="number"
              name="unitsAvailable"
              placeholder="Units Available"
              value={formValues.unitsAvailable}
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
              Edit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default FormAddProduct;
