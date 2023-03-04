import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_credentials: {
    access_token: "",
    refresh_token: "",
  },
};

const slice = createSlice({
  name: "general_events",
  initialState,
  reducers: {
    getCredentials(
      state,
      {
        payload: { access_token, refresh_token },
      }: { payload: { access_token: string; refresh_token: string } }
    ) {
      return {
        ...state,
        user_credentials: {
          access_token,
          refresh_token,
        },
      };
    },
  },
});

export const { reducer } = slice;

export const { getCredentials } = slice.actions;
