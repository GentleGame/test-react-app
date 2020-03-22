import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
        this.props.store.authorization.checkCookie()
    }

    render(){
        return <div>
                <Route exact path='/'>
                    <Redirect to='/main'/>
                    <Navigation store = {this.props.store}/>
                    <Route exact path='/main'><Main store = {this.props.store}/></Route>
                    <Footer/>
                </Route>
                <Route exact path='/main'>
                    <Navigation store = {this.props.store}/>
                    <Route exact path='/main'><Main store = {this.props.store}/></Route>
                    <Footer/>
                </Route>
                <Route exact path='/myaccount'><MyAccount store = {this.props.store}/></Route>
        </div>
    }
}

export default App;