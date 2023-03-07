import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalChildrenRef: "",
  objectInfo: {
    name: "",
    address: "",
    phone: "",
    NIT: "",
    //Product props
    id: "",
    title: "",
    description: "",
    price: 0,
    unitsAvailable: 0,
  },
};
const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModalState(
      state,
      {
        payload: { isModalOpen, modalChildrenRef, objectInfo },
      }: {
        payload: {
          isModalOpen: boolean;
          modalChildrenRef: string;
          objectInfo: any;
        };
      }
    ) {
      return { ...state, isModalOpen, modalChildrenRef, objectInfo };
    },
  },
});

export const { reducer } = slice;
export const { changeModalState } = slice.actions;
