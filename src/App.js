import React from 'react';
import { Route } from 'react-router-dom';

import Main from './Components/Main';


class App extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        this.props.store.lastOffers.getData()
        this.props.store.topOffers.getData()
        this.props.store.authorization.checkCookie()
    }

    render(){
        return <div>
                <Main store = {this.props.store}/>
            
        </div>
    }
}

export default App;