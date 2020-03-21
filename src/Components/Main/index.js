import React, { Component } from 'react';
import './index.css';

import Navigation from '../Navigation';

export class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Navigation/>
            </div>
        );
    }
}

export default Main;
