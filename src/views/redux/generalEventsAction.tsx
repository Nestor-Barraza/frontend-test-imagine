//Libs

import { ApiFetch, Constants } from "src/utils/";
import {
  getCredentials,
  getEnterprises,
  getProduct,
  updateProduct,
} from "./generalEventsSlice";
import { store } from "src/app/store";
//[Private layout]

//Get enterprises
export const getEnterprisesAction = async () => {
  try {
    const { data } = await ApiFetch.get("/enterprise/");

    store.dispatch(getEnterprises({ enterprises: data }));
  } catch (error) {
    console.log(error);
  }
};

//[Enterprise]

//Get enterpriseby NIT
export const getEnterpriseByNITAction = async (NIT: string) => {
  try {
    const { data } = await ApiFetch.get(`/enterprise/${NIT}`);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
//Create enterprise
export const createEnterpriseAction = async (
  name: string,
  address: string,
  phone: string
) => {
  try {
    const response = await ApiFetch.post("/enterprise/create", {
      name,
      address,
      phone,
    });

    if (response) {
      //Refresh list
      getEnterprisesAction();
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
//Edit enterprise
export const editEnterpriseAction = async (
  NIT: string,
  name: string,
  address: string,
  phone: string
) => {
  try {
    const editEnterprise = await ApiFetch.put("/enterprise/update", {
      name,
      address,
      phone,
      NIT,
    });
    if (editEnterprise) {
      getEnterprisesAction();
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
//Delete enterprise
export const deleteEnterpriseAction = async (NIT: string) => {
  try {
    const response = await ApiFetch.delete(`/enterprise/delete/${NIT}`);
    if (response) {
      //Refresh list
      getEnterprisesAction();
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//[Product]

//Get Product
export const getProductAction = async (NIT: string) => {
  try {
    const {
      data: { _id, description, enterpriseNIT, price, title, unitsAvailable },
    } = await ApiFetch.get(`/product/${NIT}`);
    //Push product info
    store.dispatch(
      getProduct({
        id: _id,
        description,
        enterpriseNIT,
        price,
        title,
        unitsAvailable,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
//Create Product
export const createProductAction = async (
  title: string,
  description: string,
  price: number,
  unitsAvailable: number,
  enterpriseNIT: string
) => {
  try {
    const response = await ApiFetch.post("/product/", {
      title,
      description,
      price,
      unitsAvailable,
      enterpriseNIT,
    });
    if (response) {
      getEnterprisesAction();
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
//Edit Product
export const editProductAction = async (
  id: string,
  title: string,
  description: string,
  price: number,
  unitsAvailable: number
) => {
  try {
    const response = await ApiFetch.put("/product/update", {
      id,
      title,
      description,
      price,
      unitsAvailable,
    });

    if (response) {
      //Push product info
      store.dispatch(
        updateProduct({
          description,
          price,
          title,
          unitsAvailable,
        })
      );
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
//Delete product
export const deleteProductAction = async (id: string) => {
  try {
    const response = await ApiFetch.delete(`/product/${id}`);
    if (response) {
      //Refresh list
      getEnterprisesAction();
      //Redirect
      window.location.href = Constants.HOME;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//Log out
export const logOutAction = async () => {
  try {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  } catch (error) {
    console.log(error);
  }
};
//Get token
export const getTokenBody = (token: any) => {
  if (token) {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);
    //Push credentials
    store.dispatch(
      getCredentials({
        email: payload.email,
        full_name: payload.full_name,
        phone: payload.phone,
        role: payload.role,
      })
    );
  }
};

//[Public layout]

//sign in
export const signInAction = async (email: string, password: string) => {
  try {
    const {
      data: { access_token, refresh_token },
    } = await ApiFetch.post("/sign-in", {
      email,
      password,
    });
    //Push credentials

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    //Decode token
    getTokenBody(access_token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//sign up
export const signUpAction = async (
  full_name: string,
  role: string,
  phone: string,
  email: string,
  password: string
) => {
  try {
    const response = await ApiFetch.post("/sign-up", {
      full_name,
      role,
      phone,
      email,
      password,
    });
    console.log(response);
    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

//Formater price
export const formaterMoney = (price: number) => {
  return price.toLocaleString("es-CO", { style: "currency", currency: "COP" });
};
//Formater phone
export const formatPhoneNumber = (phoneNumber: string) => {
  // Remove all non-numeric characters from the phone number
  const numericPhoneNumber = phoneNumber.replace(/\D/g, "");

  // Check if the phone number length is correct
  if (numericPhoneNumber.length !== 10) {
    throw new Error("Invalid phone number");
  }

  // Divide the phone number into its corresponding parts
  const areaCode = numericPhoneNumber.substring(0, 3);
  const firstPart = numericPhoneNumber.substring(3, 6);
  const secondPart = numericPhoneNumber.substring(6, 10);

  // Return the formatted phone number
  return `(${areaCode}) ${firstPart}-${secondPart}`;
};
