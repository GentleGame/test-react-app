import React, { Component } from 'react'
import axios from 'axios'
import Card from '../Main/LastOffers/Card/index.js'
import { Row,Col,Carousel, Divider } from 'antd'
import './index.css'

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {data:[]}

    }
    componentWillMount(){
        axios.get("http://atrokirina.beget.tech/api.php/getall",{headers:{
            'X-Access-Token' : '1234'}}).then(res=>{
                let d = res.data.response
                this.setState({data:d})
            })
    }

    render() {
        return (
            <div className = "cards_page">
            <Divider className='label-block'>Все предложения</Divider>
        <Row justify = "space-around">
           {this.state.data.map((el,id)=>{ return <Card likes = {el.likes} name = {el.channel_name} followers = {el.followers} views = {el.views} image = {el.image} key = {id}/>})}
        </Row>
        </div>
        )
    }
}
