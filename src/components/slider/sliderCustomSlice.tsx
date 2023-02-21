import { createSlice } from "@reduxjs/toolkit";

interface SliderState {
    sliderImages:  string[];
}

const initialState: SliderState = {
    sliderImages: [],
};

const slice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        pushAllImages(state, { payload: { result } }: {
            payload: {
                result:  string[]
            }
        }) {

            return { ...state, sliderImages: result }

        }
    }
})

export const { reducer } = slice;
export const { pushAllImages } = slice.actions;