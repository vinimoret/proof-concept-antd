import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

import Search from './users/Search';
import MoreInfo from './users/MoreInfo';

const { Content, Sider } = Layout;

class Main extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <UserOutlined />
                <span>Search Users</span>
                <Link to="/main/search" />
              </Menu.Item>
              <Menu.Item key="2">
                <InfoCircleOutlined />
                <span>More Info</span>
                <Link to="/main/more-info" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Route exact path="/main/search" component={Search} />
              <Route exact path="/main/more-info" component={MoreInfo} />
            </Content>
            <Layout.Footer style={{ textAlign: 'center' }}>Footer Here</Layout.Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Main;
