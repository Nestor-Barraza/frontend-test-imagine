//Libs

  import { showAlert } from "./alertSlice";
  import { store } from "src/app/store";
  const { dispatch } = store;
  
  //Open confirm
  export const openModalConfirm = (type:string, severity:string, message:string) => {

// Show alert
   
    dispatch(
        showAlert({
          isVisibleAlert:true,
            type,
            severity,
            message
        })
    )
// Hidden alert
    setTimeout(() => {
      dispatch(
        showAlert({
          isVisibleAlert:false,
            type,
            severity,
            message
        })
    )
      
    }, 2000);
  };
