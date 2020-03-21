import React, { Component } from 'react';
import './index.css';
import { Row, Col, Divider } from 'antd';
import CardRegalia from './CardRegalia';
import Nota from './images/nota.png';
import Book from './images/book.png';
import Bank from './images/bank.png';

export class Regalia extends Component {
    render() {
        return (
            <div className='block-regalia'> 
                <Divider className='label-block'>Преимущества</Divider>
                <Row justify='space-between'>
                    <Col>
                        <CardRegalia text='Удобное выкладывание собственного профиля с его полной статистикой и пожеланиями в рекламе' image={Book}/>
                    </Col>
                    <Col>
                        <CardRegalia text='Верните нам плиз 4к' image={Nota}/>
                    </Col>
                    <Col>
                        <CardRegalia text='Ваня с тульского ИБАСа, есчо' image={Bank}/>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Regalia;
