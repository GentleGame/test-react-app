import React, { Component } from 'react';
import './index.css';
import Header from './Header/index'
import Steps from './Steps/index'
<<<<<<< HEAD
import Regalia from '../Regalia';
=======
import LastOffers from './LastOffers/index'
>>>>>>> f4add24d022956064b531e1b5914e3952797b777

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
<<<<<<< HEAD
                <div className='container'>
                    <Regalia/>
                </div>
=======
                <LastOffers/>
>>>>>>> f4add24d022956064b531e1b5914e3952797b777
            </div>

        );
    }
}

export default Main;
