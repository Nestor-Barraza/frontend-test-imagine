import { createSlice } from "@reduxjs/toolkit";

interface Payload {
  isVisibleConfirm: boolean;
  confirmObjectId: string;
  message: string;
}

const initialState = {
  isVisibleConfirm: false,
  message: "Are you sure?",
  confirmObjectId: "",
};

const slice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    showConfirm(
      state,
      {
        payload: { isVisibleConfirm, confirmObjectId, message },
      }: { payload: Payload }
    ) {
      return {
        ...state,

        isVisibleConfirm,
        confirmObjectId,
        message,
      };
    },
  },
});

export const { reducer } = slice;

export const { showConfirm } = slice.actions;
