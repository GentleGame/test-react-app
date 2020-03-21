import React, { Component } from 'react';
import './index.css';
import Header from './Header/index'
import Steps from './Steps/index'

import Regalia from '../Regalia';
import LastOffers from './LastOffers/index'

import Navigation from './Navigation/index';

export class Main extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
            <div className='container'>
                <Navigation/>
            </div>
                <Header/>
                <Steps/>
                <div className='container'>
                    <Regalia/>
                </div>
                <LastOffers store = {this.props.store}/>
            </div>

        );
    }
}

export default Main;
