import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import 'antd/dist/antd.css';
import App from './App.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Kek from './Kek.js';


ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route exact path='/kek' render={()=>{return <h1>Hello kek!</h1>}} />
        <Route path='/kek/:number' component={Kek} />
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
