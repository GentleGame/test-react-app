import React, { Component } from 'react';
import './index.css';
import ContentAccount from './ContentAccount';
import { Row, Col } from 'antd';



class MyAccount extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <Row className='label'>
                        <Col span={24}><h1 style={{textAlign:'center', marginBottom:0}}>Мой аккаунт</h1></Col>
                    </Row>
                    <Row className='wrapper-content'>
                            <ContentAccount store={this.props.store}/>
                    </Row>
                </div>
            </div>
        );
    }
}

export default MyAccount;
