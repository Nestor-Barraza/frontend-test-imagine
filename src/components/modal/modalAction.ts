import { store } from "src/app/store";
import { changeModalState } from "./modalSlice";

export const openModalAction = (isModalOpen: boolean, modalChildrenRef :string,objectInfo:object) => {
    if(!modalChildrenRef){
        store.dispatch(changeModalState({ isModalOpen:false, modalChildrenRef:"", objectInfo:{} }));
    }else{
        store.dispatch(changeModalState({ isModalOpen, modalChildrenRef,objectInfo }));
    }
 
};
