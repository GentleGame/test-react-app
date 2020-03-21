import React, { Component } from 'react';
import './index.css';
import { Row, Col } from 'antd';

export class Footer extends Component {
    render() {
        return (
            <footer>
                    <Row justify='center'>
                        <Col className='footer__team-name'>Bots&Dots</Col>
                    </Row>
                    <Row justify='center'>
                        <Col>2020</Col>
                    </Row>
            </footer>
        );
    }
}

export default Footer;
