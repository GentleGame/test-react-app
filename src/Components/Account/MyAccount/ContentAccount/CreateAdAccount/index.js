import React, { Component } from 'react';
import { Divider, Row, Col, Avatar } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

class CreateAdAccount extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='account-content__wrapper'>
                <Divider orientation='left'>Создание объявления</Divider>
                <h4 style={{textAlign:'center'}}>В данном разделе можно будет создать объявление о предоставлении места для рекламы</h4>
         </div>)
    }
}

export default CreateAdAccount;
