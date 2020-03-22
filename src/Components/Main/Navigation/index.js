import React, { Component } from 'react';
import './index.css';
import Registration from '../../Registration/index.js'

import { Row, Col, Affix, Modal, Drawer} from 'antd';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import tiktok from './images/tiktok_logo.png'
import { observer } from 'mobx-react';

@observer class Navigation extends Component {

    constructor(props){
        super(props)
        this.state = {visible:false}
    }
    handlerClick = ()=>{
        this.setState({visible:true})
    }
    
      onClose = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    render() {
        return (
            <Affix>
                <nav>
                    <div className='container'>
                        <Row className='nav-block' justify='space-between' style={{padding: "0 15px"}}>
                            <Col span={2}>
                                <span className='tik-tok-logo'>Bots&Dots</span>
                            </Col>
                            <Col span={16}>
                            <Row justify='space-between'>
                                <Col span={12}>
                                        <Row justify='space-between'>
                                            <Col className='nav-block__col'>
                                                <Link><a className='nav-block__link'>Главная</a></Link>
                                            </Col>
                                            <Col className='nav-block__col'>
                                                <Link><a className='nav-block__link'>Предложения</a></Link>
                                            </Col>
                                            <Col className='nav-block__col'>
                                                <Link><a className='nav-block__link'>О нас</a></Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={6}>
                                        <Row gutter={30}>
                                            <Col className='nav-block__col'>
                                                <Link><a className='nav-block__link create-offer-btn'>Создать заказ</a></Link>
                                            </Col>
                                            <Col className='nav-block__col'>
                                                <Link onClick = {this.handlerClick}><a className='nav-block__link'>Вход</a></Link>
                                            </Col>
                                        </Row>
                                    </Col>
                            </Row>
                            </Col>
                        </Row>
                    </div>
                    <Drawer 
                    width = {310}
                        title = {this.props.store.form.title}
                        placement="right"
                        closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}>
                            <Registration store = {this.props.store}/>

                    </Drawer>
                </nav>
            </Affix>
        );
    }
}

export default Navigation;
