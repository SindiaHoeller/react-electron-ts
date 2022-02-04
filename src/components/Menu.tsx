import React from 'react';
import MenuItem from "./MenuItem";
import {Icons, MenuIcons} from '../img/Icons';
import {Settings} from '../settings';

type MenuType = {
};

const Menu = (props: MenuType): JSX.Element => {
    return (
        <div className='menu'>
            <MenuItem icon={Icons.logo} linkTo={Settings.routes.home} label='Home'/>
            <MenuItem icon={MenuIcons.tasks} linkTo={Settings.routes.tasks} label='Tasks'/>
            <MenuItem icon={MenuIcons.options} linkTo={Settings.routes.options} label='Options'/>
        </div>
    );
};

export default Menu;
