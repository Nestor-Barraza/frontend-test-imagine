import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false

};

const slice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        changeStateSideBar(state, { payload: { isVisible } }: {
            payload: {
                isVisible: boolean
            }
        }) {

            return { ...state, visible: isVisible }

        }
    }
})

export const { reducer } = slice;
export const { changeStateSideBar } = slice.actions;