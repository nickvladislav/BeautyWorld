import React, { useEffect } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import './App.css';

import { useAuth } from './contexts/AuthContext';

// import {
//   OrderedListOutlined,
//   DollarOutlined,
//   UserOutlined,
//   ScissorOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';

function App() {
  const { isLoggedIn, logout, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Заявки</Link></li>
            <li><Link to="/employees">Сотрудники</Link></li>
          </ul>
        </nav>

        <button onClick={logout}>Logout</button>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

// function App() {
  
//   const { Header, Sider, Content } = Layout;
//   const [collapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   return (
//      <div className='App'>
//         <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           items={[
//             {
//               key: '1',
//               icon: <OrderedListOutlined />,
//               label: 'Заявки',
//             },
//             {
//               key: '2',
//               icon: <ScissorOutlined />,
//               label: 'Мастера',
//             },
//             {
//               key: '3',
//               icon: <DollarOutlined />,
//               label: 'Услуги',
//             },
//             {
//               key: '4',
//               icon: <UserOutlined />,
//               label: 'Клиенты',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }}>BeautyWorld</Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//           }}
//         >
//         </Content>
//       </Layout>
//     </Layout>
//      </div>
//   );
//     };

export default App;
