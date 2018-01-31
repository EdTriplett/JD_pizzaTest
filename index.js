// import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.js'

// Note: this is the entry point for your application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors to pass all the scenarios listed in the readme.

ReactDOM.render(<App />, document.getElementById('app'));