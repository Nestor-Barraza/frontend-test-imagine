import { FC } from 'react';
import {
  Icon,
  Menu
} from 'semantic-ui-react';
import './styles.css';

const AlertComponent: FC = (): JSX.Element => {



  return (
    <>
      <Menu.Item as='a'>
        <Icon name='home' />
        Casa
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </>
  );
}

export default AlertComponent;