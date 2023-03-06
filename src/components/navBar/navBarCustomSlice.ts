import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hoverTab: ''
};

const slice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        changeHoverTab(state, { payload: { activeItem } }: {
            payload: {
                activeItem: string
            }
        }) {

            return { ...state, hoverTab: activeItem }

        }
    }
})

export const { reducer } = slice;
export const { changeHoverTab } = slice.actions;