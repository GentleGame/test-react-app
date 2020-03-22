import React, { Component } from 'react';
import './index.css';
import Header from './Header/index'
import Steps from './Steps/index'

import Regalia from './Regalia';
import LastOffers from './LastOffers/index'
import TopOffers from './topOffers/index'

export class Main extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Steps/>
                    <Regalia/>
                </div>
                <LastOffers store = {this.props.store}/>
                <TopOffers store = {this.props.store}/>
            </div>

        );
    }
}

export default Main;
