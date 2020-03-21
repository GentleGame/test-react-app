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
                <Divider className='label-block'>Advantages</Divider>
                <Row justify='space-between'>
                    <Col>
                        <CardRegalia text='Вы нам не верите??' image={Book}/>
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
