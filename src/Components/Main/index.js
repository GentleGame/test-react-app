import React, { Component } from 'react';
import './index.css';
import Header from './Header/index'
import Steps from './Steps/index'
import Regalia from '../Regalia';

import Navigation from './Navigation/index';

export class Main extends Component {
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
            </div>

        );
    }
}

export default Main;
