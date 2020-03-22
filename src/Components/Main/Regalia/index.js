import React, { Component } from 'react';
import './index.css';
import { Row, Col, Divider } from 'antd';
import CardRegalia from './CardRegalia';
import Nota from './images/nota.png';
import Book from './images/book.png';
import Bank from './images/bank.png';

export class Regalia extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='block-regalia'> 
                <Divider className='label-block'>Преимущества</Divider>
                <Row justify='space-between'>
                    <Col>
                        <CardRegalia text='Удобное выкладывание собственного профиля с его полной статистикой и пожеланиями в рекламе' image={Book}/>
                    </Col>
                    <Col>
                        <CardRegalia text='Взаимовыгодные отношения для каждой из сторон, без посредников' image={Nota}/>
                    </Col>
                    <Col>
                        <CardRegalia text='Быстрый и удобный поиск блоггером, которые будут продвигать ваши товары и услуги' image={Bank}/>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Regalia;
