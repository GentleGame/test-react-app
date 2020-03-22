import React from 'react';
import { Route } from 'react-router-dom';

import Main from './Components/Main';
import MyAccount from './Components/Account/MyAccount';

import Navigation from './Components/Main/Navigation';
import Footer from './Components/Main/Footer';


class App extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        this.props.store.lastOffers.getData()
        this.props.store.topOffers.getData()
    }

    render(){
        return <div>
                <Navigation/>
                <Route exact path='/'><Main store = {this.props.store}/></Route>
                <Route exact path='/myaccount' component={MyAccount}/>
                <Footer/>
        </div>
    }
}

export default App;