import React, { Component } from 'react'
import {
    Form,
    Input,
    Button,
    notification,
    Divider
  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

export default class index extends Component {
    render() {
        return (
            <Form name="normal_login" className="login-form" onChange = {this.handlerChange} >
            <Divider style={{color:'white'}}>Indentity</Divider>
                <Form.Item rules={[{ required: true, message: 'Please input your firstname!' }]} value = "gjkjgkg">
                    <Input name="firstname"  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname"/>
                </Form.Item>

                <Form.Item rules={[{ required: true, message: 'Please input your lastname!' }]}>
                    <Input name="lastname" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
                </Form.Item>

                <Form.Item  rules={[{ required: true, message: 'Please input your Username!' }]}>
                    <Input name="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Divider  style={{color:'white'}}>Account</Divider>
                <Form.Item rules={[{ required: true, message: 'Please input your E-mail!' }]}>
                    <Input name="email" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                </Form.Item>
                <Form.Item name = "password" rules={[{ required: true, message: 'Please input your Password!' }]} hasFeedback>
                    <Input name="password" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item name="c_password" dependencies={['password']} hasFeedback rules={[
      {
        required: true,
        message: 'Please confirm your password!',
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('The two passwords that you entered do not match!');
        },
      }),
    ]}
  >
    <Input name="c_password" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm password" />
  </Form.Item>

                <Form.Item className='login-form-btn-block'>
                    <Button type="primary" htmlType="submit" onClick = {this.handlerSubmit} className="login-form-button" block>
                        Sign up!
                    </Button>
                    Or <a href="/login">sign in now!</a>
                </Form.Item>
            </Form>
        )
    }
}
