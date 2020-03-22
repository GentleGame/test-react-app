import React, { Component } from 'react';
import { Divider, Row, Col, Avatar } from 'antd';

class CustomersAccount extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='account-content__wrapper'>
                <Divider orientation='left'>Работа с заказчиками</Divider>
                <h4 style={{textAlign:'center'}}>В данном разделе будут отображаться сообщения от заказчиков</h4>
         </div>)
    }
}

export default CustomersAccount;
