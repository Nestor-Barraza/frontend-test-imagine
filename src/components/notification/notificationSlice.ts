import { createSlice } from "@reduxjs/toolkit";

interface Alert {
  type: string;
  message: string;
}

const initialState = {
  type: "",
  message: "",
};

const slice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(
      state,
      { payload: { type, message } }: { payload: Alert }
    ) {
      return {
        ...state,

        type,
        message,
      };
    },
  },
});

export const { reducer } = slice;

export const { showNotification } = slice.actions;
