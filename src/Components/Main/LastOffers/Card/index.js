import React from 'react'
import { Row, Col,Card, Avatar, Button } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined,EyeOutlined, LikeOutlined } from '@ant-design/icons';
import './index.css'

const { Meta } = Card;

export default function index(props) {
    return (
        <Col >
            <Card className = "pictures"

            hoverable = {true}
    
    cover={
      <img
        alt="example"
        src={props.image}
        style = {{width:"35vh"}}
      />
    }
    actions={[
      <Button >Подробнее</Button>
    ]}
  >
    <Meta
      title={props.name}
    />
    <Row justify = "space-between" >
      <Col >
        <Meta
        description={props.followers}
        avatar = {<UserOutlined />}
      />
      </Col>
      <Col  >
      <Meta
        avatar = {<EyeOutlined />}
        description={props.views}
      
      />
      </Col>
      <Col >
      <Meta
        avatar = {<LikeOutlined />}
        description={props.likes}
      
      />
      </Col>
    </Row>
  </Card>

        </Col>
    )
}
