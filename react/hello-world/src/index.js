import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Duplicate from "./components/Duplicate";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Duplicate />, document.getElementById('duplicate'));
registerServiceWorker();
