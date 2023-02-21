//Imports
import { changeHoverTab } from "./navBarCustomSlice";
import { store } from "src/app/store";


// Change hover menu item
export const handleItemClick = (activeItem: string) => {
  store.dispatch(changeHoverTab({ activeItem }))
}

