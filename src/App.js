import React from 'react';
import Header from "./Components/Header/index"
import Steps from "./Components/Steps/index"
import { Route } from 'react-router-dom';

import Main from './Components/Main';


class App extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return <div>
                <Header/>
                <Steps/>
            
        </div>
    }
}

export default App;