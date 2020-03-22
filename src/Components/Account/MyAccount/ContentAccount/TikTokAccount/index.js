import React, { Component } from 'react';
import { Divider, Row, Col, Avatar } from 'antd';

class TikTokAccount extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='account-content__wrapper'>
                <Divider orientation='left'>Параметры TikTok аккаунта</Divider>
         </div>)
    }
}

export default TikTokAccount;
