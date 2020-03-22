import React, { Component } from 'react';
import { Menu, Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    LeftOutlined,
    SettingOutlined,
    ProfileOutlined,
    TeamOutlined,
    BookOutlined
  } from '@ant-design/icons';
  import InfoAccount from './InfoAccount'
<<<<<<< HEAD
  import SettingsAccount from './SettingsAccount';
  import CreateAdAccount from './CreateAdAccount';
  import TikTokAccount from './TikTokAccount';
  import CustomerAccount from './CustomerAccount';
=======
>>>>>>> 8977abd832094b443e8a3294f653bd58695fa0a6

  import {observer} from 'mobx-react'
  const { SubMenu } = Menu;

class MenuAccount extends Component {
    constructor(props){
      super(props)
    }


    state = {
        collapsed: false,
        keyMenu: 1
      };
      menuHandler = (obj) => {
        console.log(obj)
          this.setState({keyMenu: obj.key})
      }
      getItemComponent(key){
        switch(key){
          case '1':
            return <InfoAccount store={this.props.store}/>
          case '2':
<<<<<<< HEAD
            return <TikTokAccount store={this.props.store}/>
          case '3':
            return <CreateAdAccount  store={this.props.store}/>
          case '4':
            return <CustomerAccount store={this.props.store}/>
          case '5':
            return <SettingsAccount store={this.props.store}/>
=======
            return <div>Аккаунт</div>
          case '3':
            return <div>Объявление</div>
          case '4':
            return <div>Настройки</div>
>>>>>>> 8977abd832094b443e8a3294f653bd58695fa0a6
          default:
            return <InfoAccount store={this.props.store}/>
        }
      }
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (<Row style={{width:'100%',height:'100%'}}>
            <Col span={6}>
                 <div style={{ width: 256}}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Link to='/main'><Button type="primary" style={{ marginBottom: 16, marginLeft: 16 }}><LeftOutlined/>На главную</Button></Link>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          onSelect={this.menuHandler}
        >
          <Menu.Item key="1">
            <ProfileOutlined />
            <span>Информация об аккаунте</span>
          </Menu.Item>
          <Menu.Item key="2">
            <TeamOutlined />
            <span>Аккаунт в TikTok</span>
          </Menu.Item>
          <Menu.Item key="3">
            <BookOutlined />
            <span>Создание объявления</span>
          </Menu.Item>
          <Menu.Item key="4">
            <PieChartOutlined />
            <span>Работа с заказчиками</span>
          </Menu.Item>
          <Menu.Item key="5">
            <SettingOutlined />
            <span>Настройки</span>
          </Menu.Item>
          
        </Menu>
      </div>
          </Col>
            <Col span={16} offset={1}>
              {this.getItemComponent(this.state.keyMenu)}
            </Col>
          </Row>
        );
    }
}

export default MenuAccount;
