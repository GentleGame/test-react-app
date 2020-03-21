import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import 'antd/dist/antd.css';
import App from './App.js';



ReactDOM.render(
           <BrowserRouter>
            <App/>
            </BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
