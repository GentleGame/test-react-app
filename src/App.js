import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './Components/Main';


class App extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return <div>
            <BrowserRouter>
                <Route exact path='/' component={Main} />
            </BrowserRouter>
        </div>
    }
}

export default App;