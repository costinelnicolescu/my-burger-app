import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import MenuToggle from '../SideDrawer/MenuToggle/MenuToggle';

const toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <MenuToggle click={props.menu}/>
            <Logo height='80%'/>
            <nav className='DesktopOnly'>
                <NavItems />
            </nav>
        </header>
    );
}

export default toolbar;
