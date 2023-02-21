import { Menu, Icon, Button } from 'semantic-ui-react';
import { setVisible } from 'src/components/sideBar/sideBarCustomAction';
import { useNavigate } from 'react-router-dom';
import { handleItemClick } from './navBarCustomAction';
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { FC } from 'react'
import './styles.css';

const NavBarCustom: FC = (): JSX.Element => {

    // Router hook 

    const redirectInstance = useNavigate();

    //Redux state
    const {
        navBar: { hoverTab },
    }: {
        navBar: { hoverTab: string }
    }
        = useSelector((state: RootState) => state);


    // Redirect function
    const goTo = (route: string) => {
        redirectInstance(route)
    }



    return (
        <Menu className='navBar-container' pointing secondary>
            <Menu.Item
                name='home'
                active={hoverTab === 'home'}
                onClick={() => { handleItemClick('home'); goTo('/') }}
            />
            <Menu.Item
                name='galery'
                active={hoverTab === 'galery'}
                onClick={() => { handleItemClick('galery'); goTo('/galery') }}
            />
            <Menu.Item
                name='friends'
                active={hoverTab === 'friends'}
                onClick={() => handleItemClick('friends')}
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    content={<Button className='button-only-icon' onClick={setVisible}><Icon className='icon-inside-button' name='bars' /></Button>}
                />
            </Menu.Menu>
        </Menu>
    );
}

export default NavBarCustom;