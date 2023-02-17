import { useState } from 'react';
import {
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import { MenuCustom } from 'src/components/index';

const SidebarCustom = () => {
    
    const [visible, setVisible] = useState<boolean>(false);
    return ( 
        <Grid columns={1}>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible
              width='thin'
            >
              <MenuCustom/>
            </Sidebar>
  
            <Sidebar.Pusher dimmed={visible}>
              <Segment basic>
               
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
     );
}
 
export default SidebarCustom;