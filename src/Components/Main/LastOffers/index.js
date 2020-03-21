import React from 'react'
import Card from './Card/index'
import { Row,Col,Carousel, Divider } from 'antd'
import './index.css'
import { observer } from 'mobx-react'


@observer class Index extends React.Component {
    
    render(){return (
        <div className = "cards_page">
            <Divider className='label-block'>Последние предложения</Divider>
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