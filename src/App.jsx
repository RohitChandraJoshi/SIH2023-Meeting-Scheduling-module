import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import SideMenu from './Components/SideMenu';
import routes from './Routes/routes';
import './App.css';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const titleStyle = {
  color: '#fff',
  textAlign: 'center',
  margin: '5px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

function App() {
  const contentStyle = {
    background: 'linear-gradient(to right, #e0e0e0, #ffffff)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    borderRadius: '8px',
    transition: 'background 0.3s, box-shadow 0.3s',
  };

  const headerStyle = {
    background: 'linear-gradient(45deg, #FFA07A 0%, #FFD700 25%, #FF8C00 50%, #FF4500 25%, #FF6347 25%)',
    borderBottom: '2px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 24px', // Add padding to the header
  };

  const imageUrl = require('G:/Projects/SIH 2023/meeting/meeting-2/src/features/myAppointments/Daco_4737920.png');

  return (
    <Router>
      <Layout>
        <Layout style={{ height: '100vh' }}>
          <Header className="site-layout-sub-header-background" style={headerStyle}>
            <div> {/* Left side of the header */}
              <img
                src={imageUrl}
                alt="Your Image Alt Text"
                style={{
                  maxWidth: '100%',
                  height: '50px',
                  // Add a white border
                  borderRadius: '4px', // Shadow for the image
                }}
              />
            </div>
            <Title style={titleStyle}>Welcome Student</Title> {/* Centered title */}
            {/* Add other elements for the right side of the header if needed */}
          </Header>
          <Content style={contentStyle}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  exact={true}
                  path={route.path}
                  key={route.title}
                  component={route.component}
                />
              ))}
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2023 Created by Arogya Squad
          </Footer>
        </Layout>
        <SideMenu />
      </Layout>
    </Router>
  );
}

export default App;
