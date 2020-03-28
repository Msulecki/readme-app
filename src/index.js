import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './components/App';


ReactDOM.render(
    <Router basename={'/readme-app'}>
        <App />
    </Router>, document.getElementById('root'));

serviceWorker.register();

