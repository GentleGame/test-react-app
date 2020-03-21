import React from 'react'
import Card from '../LastOffers/Card/index'
import { Row,Col,Carousel, Divider } from 'antd'
import './index.css'
import { observer } from 'mobx-react'


@observer class Index extends React.Component {
    
    constructor(props){
        super(props)
    }
    render(){return (
        <div className = "cards_page">
            <Divider className='label-block'>Лучшие предложения</Divider>
        <Row justify = "space-between">
           {this.props.store.topOffers.data.map((el,id)=>{ return <Card likes = {el.likes} name = {el.channel_name} followers = {el.followers} views = {el.views} image = {el.image} key = {id}/>})}
        </Row>
        </div>
    )
    }
}

export default Index;