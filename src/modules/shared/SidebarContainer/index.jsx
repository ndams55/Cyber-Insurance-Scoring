import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;

const ContainerIcon = styled.div`
  div {
    width: 150px;
    height: 150px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  h2 {
    text-align: center;
    color: white;
  }
`;
export const Drawer = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: '100vh', backgroundColor: 'white' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        {!collapsed ? (
          <ContainerIcon>
            <div>
              <UserOutlined style={{ fontSize: 100, color: 'white' }} />
            </div>
            <h2>Administrateur</h2>
          </ContainerIcon>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', margin: 5 }}>
            <UserOutlined style={{ fontSize: 30, color: 'white' }} />
          </div>
        )}

        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <PlusOutlined />,
              label: 'Nouvelles entrées',
            },
            {
              key: '2',
              icon: <LogoutOutlined />,
              label: 'Deconnecter',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              style: { color: 'white', fontSize: 30, margin: 10 },
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
