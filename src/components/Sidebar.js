import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, AutoComplete,Modal, Button  } from 'antd';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Tablep from './GenConfic/PriorityConfic';
import EditP from './GenConfic/EditPriority';


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderDemo extends React.Component {
  
  state = {
    collapsed: false,
  }

  

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>view</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: AutoComplete }}>
            <Router>
            <Route path='/' exact strict render={
                    () =>{
                       return(  <Tablep/>);
                     }
                   }/>
                       
            
            <Route path='/Edit' exact strict render={
                    () =>{
                       return(  <EditP/>);
                     }
                   }/>

<Route path='/Cancel' exact strict render={
                    () =>{
                       return(   <Tablep/>);
                     }
                   }/>
                          
            </Router>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>sgic ©2018 Created by sgic</Footer>
        </Layout>
      </Layout>
    );
  }
}