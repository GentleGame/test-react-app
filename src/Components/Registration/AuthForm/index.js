import React, { Component } from 'react'
import { Form, Input, Button, Checkbox,Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../index.css'

export default class index extends Component {

    constructor(props){
        super(props)
    }

    handlerClick=()=>{
        this.props.store.form.handlerReg()
    }

    handlerChange = (e)=>{
        this.props.store.authorization.setData(e.target)
    }

    render() {
        return (
            <div className='form'>
                <img className='main-logo' />
                <Form name="normal_login" className="login-form" onChange = {this.handlerChange}>
                    <Form.Item name="e-mail" rules={[{ required: true, message: 'Введите email' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="e-mail" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль' }]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Пароль" />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className='login-form-remember-me'>Запомнить меня</Checkbox>
                        </Form.Item>

                    </Form.Item>

                    <Form.Item className='login-form-btn-block'>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
                Нет аккаунта? <a onClick = {this.handlerClick}>Регистрация!</a>
            </div>
        )
    }
}
