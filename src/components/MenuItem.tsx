import React from 'react';
import { NavLink } from 'react-router-dom';

type MenuItemType = {
    icon: string;
    linkTo: string;
    label: string;
};

const MenuItem = ({ icon, linkTo, label }: MenuItemType): JSX.Element => {
    return (
        <NavLink to={linkTo} className="menu-item">
            <img src={icon} alt={label} />
            <label>{label}</label>
        </NavLink>
    );
};

export default MenuItem;
