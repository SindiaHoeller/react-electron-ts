import React from 'react';
import { Icons } from '../img/Icons';

type HomeType = {
};

const Home = (props: HomeType): JSX.Element => {
    return (
        <>
            <img src={Icons.icon} alt='icon'/>
            <h1>Home Page</h1>
        </>
    );
};

export default Home;
