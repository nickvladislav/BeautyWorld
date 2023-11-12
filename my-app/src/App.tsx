import React, { useEffect } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import './App.css';

import { useAuth } from './contexts/AuthContext';

import { Breadcrumb, Button, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  const { isLoggedIn, logout, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return (
    <div style={{ background: '#ececec' }}>
    {isLoggedIn && (
      <>
        <Layout className="layout">

          <Header className='page-header'>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="1">
                 <Link to="/">Заявки</Link>
              </Menu.Item>
              <Menu.Item key="2">
                 <Link to="/employees">Мастера</Link>
              </Menu.Item>
              <Menu.Item key="3">
                 <Link to="/">Услуги</Link>
              </Menu.Item>
            </Menu>
            <Button className='logout-button' onClick={logout} type="primary">Logout</Button>
          </Header>

          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div className="site-layout-content">
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Beauty Saloon ©2022</Footer>
        </Layout>

      </>
    )}
  </div>
    // <>
    //   <header>
    //     <nav>
    //       <ul>
    //         <li><Link to="/">Заявки</Link></li>
    //         <li><Link to="/employees">Сотрудники</Link></li>
    //       </ul>
    //     </nav>

    //     <button onClick={logout}>Logout</button>
    //   </header>

    //   <main>
    //     <Outlet />
    //   </main>
    // </>
  )
}

export default App;
