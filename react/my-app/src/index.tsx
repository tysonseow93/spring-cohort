import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import Hello from './components/Hello'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);
ReactDOM.render(
    <Hello name="Samwise" enthusiasmLevel={1}/>,
    document.getElementById('hello') as HTMLElement
);

registerServiceWorker();
