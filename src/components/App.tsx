import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import {Settings} from '../settings';
import Home from './Home';
import Menu from "./Menu";
import Options from "./Options";
import Tasks from './Tasks';

export function App() {
    // @ts-ignore
    return (
        <HashRouter>
            <Menu/>
            <div className="page">
                <Routes>
                    <Route path={Settings.routes.options} element={<Options/>}/>
                    <Route path={Settings.routes.tasks} element={<Tasks/>}/>
                    <Route path='*' element={<Home/>}/>
                </Routes>
            </div>
        </HashRouter>
    )
}