import { ApiFetch } from "src/utils/";

//Get enterprise
export const sendEmailAction = async (email: string) => {
  try {
    await ApiFetch.post("/send-pdf/", {
      email,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
