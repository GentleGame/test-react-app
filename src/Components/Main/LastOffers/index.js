import React from 'react'
import Card from './Card/index'
import { Row,Col,Carousel } from 'antd'
import './index.css'
import { observer } from 'mobx-react'


@observer class Index extends React.Component {
    
    render(){return (
        <div className = "cards_page">
            <h1 style = {{textAlign:'center'}}>Последние предложения</h1>
        <Row justify = "space-between">
           <Card/>
           <Card/>
           <Card/>
        </Row>
        </div>
    )
    }
}

export default Index;