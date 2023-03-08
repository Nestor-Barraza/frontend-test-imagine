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
  ENPOINT: process.env.REACT_APP_ENPOINT,
});

export default Constants;
