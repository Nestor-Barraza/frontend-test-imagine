import { createSlice } from "@reduxjs/toolkit";

interface Payload {
  isVisibleConfirm: boolean;
  confirmObjectId: string;
  message: string;
  element: string;
}

const initialState = {
  isVisibleConfirm: false,
  message: "Are you sure?",
  confirmObjectId: "",
  element: "",
};

const slice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    showConfirm(
      state,
      {
        payload: { isVisibleConfirm, confirmObjectId, message, element },
      }: { payload: Payload }
    ) {
      return {
        ...state,

        isVisibleConfirm,
        confirmObjectId,
        message,
        element,
      };
    },
  },
});

export const { reducer } = slice;

export const { showConfirm } = slice.actions;
