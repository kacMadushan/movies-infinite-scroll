import React from 'react';
import ReactDOM from 'react-dom';
import MoviesApp from './container/MoviesApp';
import './styles/styles.scss';

const appRoot = document.getElementById('app');
ReactDOM.render(<MoviesApp />, appRoot);