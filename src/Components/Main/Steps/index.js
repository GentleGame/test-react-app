import React, { Component } from 'react'
import { Steps, Divider, Row, Col} from 'antd';
import './index.css'

const { Step } = Steps;

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {current:0}
        
    }

    componentDidMount(){
        setInterval(()=>{
            if(this.state.current==3){
                this.setState({current:0})
            }else{
                this.setState({current:this.state.current+1})
            }
        },2000)
    }

    handlerChange = (current)=>{
        this.setState({current:current})
    }

    render() {
        return (
            <div className = "steps">
                <Row justify='center'>
                    <Col >
                <Steps current={this.state.current} onChange={this.handlerChange} size = "large" >
                    <Step title="Шаг 1" description="Пройди простую регистрацию" />
                    <Step title="Шаг 2" description="Заполни и выложи своё предложение" />
                    <Step title="Шаг 3" description="Получи средства от заказчиков" />
                </Steps>
                </Col>
                </Row>
            </div>
        )
    }
}
