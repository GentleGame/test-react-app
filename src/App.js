import React from 'react';
import { Route } from 'react-router-dom';

import Main from './Components/Main';


class App extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return <div>
                <Main/>
            
        </div>
    }
}

export default App;