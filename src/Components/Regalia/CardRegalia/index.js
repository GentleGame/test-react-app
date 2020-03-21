import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.css';

export class CardRegalia extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='card-regalia'>
                <Row justify='center'><img src = {this.props.image}/></Row>
                <Row style={{marginTop:"10px", fontFamily:"Roboto"}}>{this.props.text}</Row>
            </div>
        );
    }
}
export default CardRegalia;
