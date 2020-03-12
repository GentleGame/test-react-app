import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import store from './store.js';

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
