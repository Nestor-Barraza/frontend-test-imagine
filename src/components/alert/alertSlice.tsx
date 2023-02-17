import { createSlice } from "@reduxjs/toolkit";

interface Alert {
    isVisibleAlert: boolean,
    type: string;
    severity: string;
    message: string;
}


const initialState = {
    alertContent: {
        isVisibleAlert:false,
        type: '',
        severity: '',
        message: '',
    }
    
};

const slice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert(state, { payload: {isVisibleAlert, type, severity, message } }: { payload: Alert }) {
         
        
            return {...state, alertContent:{
                isVisibleAlert,
                type,
                severity,
                message
            }}
        }, 
        
    }
})

export const { reducer } = slice;

export const { showAlert } = slice.actions;