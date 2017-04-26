import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import { BrowserRouter, Route, Link, hashHistory } from 'react-router-dom'


import App from './components/App.jsx';
import Paintings from './components/Paintings.jsx';

window.React = React

ReactDOM.render(
	<BrowserRouter history={hashHistory}>
		<App />
  </BrowserRouter>,
  document.querySelector('#root')
);
