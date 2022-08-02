import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Layout, Menu } from 'antd';
import React, { ReactNode, useState } from 'react';
import { FaBuilding, FaClipboardList } from 'react-icons/fa';
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
export const Drawer = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: '100vh', backgroundColor: 'white' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className='logo' />
        {!collapsed ? (
          <ContainerIcon>
            <div>
              <UserOutlined style={{ fontSize: 100, color: 'white' }} />
            </div>
            <h2>Cyber Assurance</h2>
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
              icon: <FaClipboardList />,
              label: 'Souscription',
            },
            {
              key: '2',
              icon: <FaBuilding />,
              label: 'Entreprise',
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: 'Déconnecter',
            },
          ]}
        />
      </Sider>
      <Layout
        style={{ backgroundColor: 'white', marginLeft: collapsed ? 60 : 200 }}
      >
        <Header
          style={{
            padding: 0,
            position: 'fixed',
            zIndex: 1,
            width: '100%',
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
          style={{
            margin: '64px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
