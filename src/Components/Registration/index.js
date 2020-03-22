import React, { Component } from 'react'
import RegForm from './RegForm/index.js'
import { observer } from 'mobx-react';
import AuthForm from './AuthForm/index'
import './index.css'
import { Spin } from 'antd';

@observer class index extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Spin tip = "Проверяем..." spinning = {this.props.store.authorization.disabled}>
            <Spin tip = "Отправляем..." spinning = {this.props.store.registration.disabled}>
            <div className = "forms">
                {this.props.store.form.auth?<AuthForm store ={this.props.store}/>:<RegForm store ={this.props.store}/>}
            </div>
            </Spin>
            </Spin>
            
        )
    }
}

export default index;
