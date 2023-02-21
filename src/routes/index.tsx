import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { SidebarCustom } from "src/components";
import { Constants } from 'src/utils';
import { Home, Galery } from "src/views";
const RouterApp = () => {
    return (
        <BrowserRouter>
            <SidebarCustom>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path={Constants.GALERY} element={<Galery />} />
                </Routes>
            </SidebarCustom>
        </BrowserRouter>
    );
}

export default RouterApp;