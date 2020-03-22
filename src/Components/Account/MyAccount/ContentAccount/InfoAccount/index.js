import React, { Component } from 'react';
import { Divider, Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {observer} from 'mobx-react'

@observer class InfoAccount extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.store.authorization.checkCookie()
      }
    render() {
        return (
            <div className='account-content__wrapper'>
                <Divider orientation='left'>Информация об аккаунте</Divider>
                <Row>
                    <Col span={6}>
                        <Avatar size={128} icon={<UserOutlined />}/>
                    </Col>
                    <Col span={16} offset={2}>
                       <Row>
                            <Divider>Основная информация</Divider>
                                <Col span={12}>
                                    <Row>
                                        Имя
                                    </Row>
                                    <Row>
                                        Фамилия
                                    </Row>
                                    <Row>
                                        E-mail
                                    </Row>
                                    <Row>
                                        Привязанный аккаунт в TikTok
                                    </Row>
                                    <Row>
                                        Статус верификации
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <Row>
                                        {this.props.store.authorization.authorized.firstname}
                                    </Row>
                                    <Row>
                                        {this.props.store.authorization.authorized.lastname}
                                    </Row>
                                    <Row>
                                        {this.props.store.authorization.authorized.email}
                                    </Row>
                                    <Row>
                                        {this.props.store.authorization.authorized.username}
                                    </Row>
                                    <Row>
                                        не верифицирован
                                    </Row>
                                </Col>
                                <Divider>Техническая информация</Divider>
                                <Col span={12}>
                                    <Row>
                                        {this.props.store.authorization.authorized.date}
                                    </Row>
                                    <Row>
                                        {/* {this.props.store.authorization.authorized} */}
                                    </Row>
                                </Col>
                           <Col span={12}>
                               
                           </Col>
                       </Row> 
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InfoAccount;
