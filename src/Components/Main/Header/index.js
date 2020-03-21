import React from 'react'
import { Carousel,Row, Col } from 'antd';
import './index.css'
import mile from './img/mile.png'
import people from './img/pep.png'
import ura from './img/ura.png'

export default function index() {
    return (
        <Carousel autoplay>
            <div className = "container_header">
            <Row gutter = {120} justify = "center" >
                <Col >
                   <div className = "text_header">
                       <p id = "header_1">
                           Добро пожаловать!
                       </p>
                       <p id = "header_2">
                           Name - профессиональная биржа продвижения <span id = "tik_tok">TikTok</span>
                       </p>
                   </div>
                </Col>
                <Col >
                <div className = "img_header">
                <img id = "ura" src = {ura}/>
                </div>
                </Col>
            </Row>
            </div>
            <div className = "container_header">
            <Row gutter = {120} justify = "center" >
                <Col >
                   <div className = "text_header">
                       <p id = "header_1">
                           Легко и доступно!
                       </p>
                       <p id = "header_2">
                           Размещай объявления удобно и в пару кликов
                       </p>
                   </div>
                </Col>
                <Col >
                <div className = "img_header">
                <img id = "spacer" src = {people}/>
                </div>
                </Col>
            </Row>
            </div>
            <div className = "container_header">
            <Row gutter = {120} justify = "center" >
                <Col >
                   <div className = "text_header">
                       <p id = "header_1">
                           Рекламодатели здесь!
                       </p>
                       <p id = "header_2">
                           Зарабатывать на своём канале ещё никогда не было так просто
                       </p>
                   </div>
                </Col>
                <Col >
                <div className = "img_header">
                <img id = "mile" src = {mile}/>
                </div>
                </Col>
            </Row>
            </div>
        </Carousel>
    )
}
