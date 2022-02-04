import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './styles/main.sass';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);