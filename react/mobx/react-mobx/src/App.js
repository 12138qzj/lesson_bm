import React from 'react';
import { Provider } from 'mobx-react'
import { Layout, Row, Col, Tabs } from 'antd';
import articleStore from './store/articleStore';
import Home from './Pages/home/index'

import logo from './logo.svg';
import './utils/axios.js';
import './App.css';
const { Header, Content, Footer } = Layout;
// const { TabPane } = Tabs;

const store = {
  articleStore
}
function App() {
  return (
    <Provider {...store} >
      <Layout>
        <Header>
        </Header>
        <Content className="site-layout">
          <Row>
            <Col offset={3} span={18}>
              <Home />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Provider>
  );
}


export default App;