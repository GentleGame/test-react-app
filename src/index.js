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
            <h1>{store.count}</h1>
            <button onClick={store.increment}>+</button>
            <button onClick={store.decrement}>-</button>
        </div>
        );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
