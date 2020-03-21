import React, { Component } from 'react'
import { Steps, Divider, Row, Col} from 'antd';
import './index.css'

const { Step } = Steps;

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {current:0}
    }

    handlerChange = (current)=>{
        this.setState({current:current})
    }

    render() {
        return (
            <div className = "steps">
                <Row justify = "center">
                    <Col>
                <Steps current={this.state.current} onChange={this.handlerChange} size = "large">
                    <Step title="Шаг 1" description="This is a description." />
                    <Step title="Шаг 2" description="This is a description." />
                    <Step title="Шаг 3" description="This is a description." />
                </Steps>
                </Col>
                </Row>
            </div>
        )
    }
}
