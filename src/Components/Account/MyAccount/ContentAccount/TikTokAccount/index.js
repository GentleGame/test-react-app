import React, { Component } from 'react';
import { Divider, Row, Col, Avatar } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

class TikTokAccount extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='account-content__wrapper'>
                <Divider orientation='left'>Параметры TikTok аккаунта</Divider>
                <h4 style={{textAlign:'center'}}>Здесь вы можете заполнить или изменить параметры вашего TikTok аккаунта и отправить его на верификацию администрации сервиса</h4>
                <Row>
                    <Col span={24}>
                    <Form name="createad" {...layout}>
                    <Form.Item label="Логин в TikTok" name="username"  >
                        <Input defaultValue={this.props.store.authorization.authorized.username} disabled/>
                    </Form.Item>
                    <Row style={{width: '70%', margin:'0 auto', marginBottom:'20px'}}>
                    <Col span={6} style={{textAlign:'right'}}>
                        Статус верификации
                    </Col>
                    <Col span={14} offset={2} style={{color:'red', textAlign:'left'}} >
                        не верифицирован
                    </Col>
                </Row>
                    <Form.Item label="Количество followers" name="username" rules={[{ required: true, message: 'Введи количество подписчиков' }]} >
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Общее количество лайков" name="followers" rules={[{ required: true, message: 'Введи количество лайков' }]} >
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item label="Общее количество share" name="share" rules={[{ required: true, message: 'Введи количество share твоих видео' }]} >
                    <InputNumber/>
                    </Form.Item>
                    <Form.Item label="Описание" name="description" rules={[{ required: true, message: 'Введи количество share твоих видео' }]} >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Контакты для связи" name="contacts" rules={[{ required: true, message: 'Введи количество share твоих видео' }]} >
                        <Input.TextArea />
                    </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Сохранить изменения
                        </Button>
                        </Form.Item>
                    </Form>
                    </Col>
                </Row>
         </div>)
    }
}

export default TikTokAccount;
