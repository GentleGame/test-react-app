import React, { Component } from 'react'
import {
    Form,
    Input,
    Button,
    notification,
    Divider
  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import '../index.css'

 @observer class index extends Component {

    constructor(props){
        super(props)
    }

    handlerAuth2 = ()=>{
        this.props.store.form.handlerAuth()
    }

    handlerChange = (e)=>{
        this.props.store.registration.setData(e.target)
    }

          handlerSubmit = ()=>{
            this.props.store.registration.sendReq()
          }
    render() {
        return (
            <div className = "form">
            <Form name="normal_login" className="login-form" onChange = {this.handlerChange} >
            <Divider style={{fontWeight:"500"}}>Персональные данные</Divider>
                <Form.Item rules={[{ required: true, message: 'Введите своё имя' }]} >
                    <Input name="firstname"  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя"/>
                </Form.Item>

                <Form.Item rules={[{ required: true, message: 'Введите свою фамилию' }]}>
                    <Input name="lastname" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Фамилия" />
                </Form.Item>

                <Form.Item  rules={[{ required: true, message: 'Введите имя аккаунта Tik-Tok' }]}>
                    <Input name="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя аккаунта в Tik-Tok" />
                </Form.Item>

                <Divider  style={{fontWeight:"500"}}>Аккаунт</Divider>
                <Form.Item rules={[{ required: true, message: 'Введите свой e-mail' }]}>
                    <Input name="email" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                </Form.Item>
                <Form.Item name = "password" rules={[{ required: true, message: 'Введите пароль' }]} hasFeedback>
                    <Input name="password" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Пароль" />
                </Form.Item>
                <Form.Item name="c_password" dependencies={['password']} hasFeedback rules={[
      {
        required: true,
        message: 'Подтвердите свой пароль',
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('Пароли не совпадют');
        },
      }),
    ]}
  >
    <Input name="c_password" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Подтверждение пароля" />
  </Form.Item>

                <Form.Item className='login-form-btn-block'>
                    <Button type="primary" htmlType="submit" onClick = {this.handlerSubmit} className="login-form-button" block>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                
            </Form>
            <p >Уже есть аккаунт? <a onClick = {this.handlerAuth2}>Войти</a></p>
            </div>
        )
    }
}

export default index;