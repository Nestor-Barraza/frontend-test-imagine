// Components
import Alert from './alert/Alert'
import MenuCustom from './menu/MenuCustom'
import SidebarCustom from './sideBar/sideBarCustom'
import NavBarCustom from './navBar/navBarCustom'
import SliderCustom from './slider/sliderCustom'
// Reducers
import { reducer as AlertReducer } from './alert/alertSlice'
import { reducer as MenuCustomReducer } from './menu/menuCustomSlice'
import { reducer as SideBarCustomReducer } from './sideBar/sideBarCustomSlice'
import { reducer as NavBarCustomReducer } from './navBar/navBarCustomSlice'
import { reducer as SliderCustomReducer } from './slider/sliderCustomSlice'

//Actions
import { listAllImages } from './slider/sliderCustomAction'

export {
    // Components
    Alert,
    MenuCustom,
    SidebarCustom,
    NavBarCustom,
    SliderCustom,
    // Reducers
    AlertReducer,
    MenuCustomReducer,
    SideBarCustomReducer,
    NavBarCustomReducer,
    SliderCustomReducer,
    // Actions
    listAllImages
}