import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import store from './store.js';
import 'antd/dist/antd.css';

const style = { background: '#0092ff', padding: '8px 0' };

@observer class App extends React.Component{
    render(){
        return (
        <div className="App">
        </div>
        );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
