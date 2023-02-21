import { ReactNode } from 'react';
import {
  Grid,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import { MenuCustom, NavBarCustom } from 'src/components/index';
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";

import './styles.css';

type SidebarCustomProps = {
  children: ReactNode;
};
const SidebarCustom = ({ children }: SidebarCustomProps) => {

  //Redux state
  const {
    sideBar: { visible },
  }: {
    sideBar: { visible: boolean }
  }
    = useSelector((state: RootState) => state);
  return (
    <Grid className='grid-sidebar' columns={1}>
      <Grid.Column>
        <NavBarCustom />
        <Sidebar.Pushable className='grid-sidebar-segment' >
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            direction='right'
            visible={visible}
            width='thin'
          >
            <MenuCustom />
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default SidebarCustom;

