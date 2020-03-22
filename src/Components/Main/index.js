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
<<<<<<< HEAD
                <Header/>
=======
                <section style={{height:'auto'}}>
                    <Navigation store = {this.props.store}/>
                    <Header/>
                </section>
>>>>>>> d14c732cc08c9517e23210029a27808a43145ee8
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
