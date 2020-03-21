import React, { Component } from 'react';
import './index.css';

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

export class Navigation extends Component {
    render() {
        return (
            <nav>
                <Row className='nav-block' justify='space-between' style={{padding: "0 15px"}}>
                    <Col span={2}>
                        <img src={logo} style={{width: '60px'}}/>
                    </Col>
                    <Col span={20}>
                       <Row justify='space-around'>
                        <Col span={12}>
                                <Row justify='space-between'>
                                    <Col className='nav-block__col'>
                                        <Link><a className='nav-block__link'>Главная</a></Link>
                                    </Col>
                                    <Col className='nav-block__col'>
                                        <Link><a className='nav-block__link'>Заказы</a></Link>
                                    </Col>
                                    <Col className='nav-block__col'>
                                        <Link><a className='nav-block__link'>О нас</a></Link>
                                    </Col>
                                    <Col className='nav-block__col'>
                                        <Link><a className='nav-block__link'>Кек</a></Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={6}>
                                <Row gutter={10}>
                                    <Col className='nav-block__col'>
                                        <Link><a className='nav-block__link create-offer-btn'>Создать заказ</a></Link>
                                    </Col>
                                    <Col className='nav-block__col'>
                                        <Link><a className='nav-block__link'>Вход</a></Link>
                                    </Col>
                                </Row>
                            </Col>
                       </Row>
                    </Col>
                </Row>
            </nav>
        );
    }
}

export default Navigation;
