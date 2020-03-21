import React from 'react'
import { Row, Col,Card, Avatar, Button } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function index(props) {
    return (
        <Col >
            <Card
    
    cover={
      <img
        alt="example"
        src="http://atrokirina.beget.tech/images/5e75427355331.png"
        style = {{width:"35vh"}}
      />
    }
    actions={[
      <Button >Подробнее</Button>
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>

        </Col>
    )
}
