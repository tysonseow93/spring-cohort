import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from "./Button";
import Event from "./Event"
import Day7 from "./Day7";


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Button />, document.getElementById('button'));
ReactDOM.render(<Event />, document.getElementById('event'));
ReactDOM.render(<Day7 />, document.getElementById('day7'));


registerServiceWorker();
