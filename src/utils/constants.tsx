const Constants = Object.freeze({
  //Local Routes
  HOME: "/",
  PROFILE: "/profile",
  DETAILS: "details",
  SIGNIN: "/sign_in",
  SIGNUP: "/sign_up",
  //Server routes
  FETCH_ROUTES: {
    //Public routes
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    // Private routes
    URL_BASE_PRODUCT: "/product/",
    UPDATE_PRODUCT: "/product/update",
    URL_BASE_ENTERPRISE: "/enterprise/",
    CREATE_ENTERPRISE: "/enterprise/create",
    UPDATE_ENTERPRISE: "/enterprise/update",
    DELETE_ENTERPRISE: "/enterprise/delete/",
  },
  FORM_VALIDATIONS: {
    //Email Validation
    REGEX_EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    //Password Validation
    PASSWORD_REGEX:
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
    //Phone Validation
    PHONE_REGEX: /^(\+)?[1-9]\d{8,13}$/,
  },
  ENPOINT: process.env.REACT_APP_ENPOINT,
});

export default Constants;
