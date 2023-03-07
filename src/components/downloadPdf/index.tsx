import React, { useState, FC } from "react";
import { Grid, Header, Icon, Form, Segment, Button } from "semantic-ui-react";
import "./styles.css";
import { openModalAction } from "../modal/modalAction";
import { downloadPdfAction } from "./donwloadPdfAction";
import { Alert, showAlertAction } from "..";
interface FormValues {
  namePdf: string;
}
const DownloadPdf: FC = (): JSX.Element => {
  const [formValues, setFormValues] = useState<FormValues>({
    namePdf: "",
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

    if (formValues.namePdf) {
      const response = await downloadPdfAction(formValues.namePdf);
      if (response) {
        openModalAction(false, "", {});
        setFormValues({ namePdf: "" });
      }
    } else {
      showAlertAction(
        { code: "Empty field", message: " Add a name for your pdf file" },
        "error"
      );
    }

    setIsSubmitting(false);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          <Icon color="blue"  name="envelope outline" />
          Download product inventory
        </Header>
        <Alert />
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="file pdf outline"
              iconPosition="left"
              type="text"
              name="namePdf"
              placeholder="add a name to your file"
              value={formValues.namePdf}
              onChange={handleChange}
            />

            <Button
              color="google plus"
              fluid
              icon="file pdf outline"
              size="large"
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              style={{ marginTop: "2rem" }}
            >
              Download Pdf
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default DownloadPdf;
