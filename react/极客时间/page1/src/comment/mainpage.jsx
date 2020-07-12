import React, { Component } from 'react';
import Head from './head/Head';
import { Layout,Button } from 'antd';
import  './mainpage.css';

const { Header, Footer, Content } = Layout;
class MainPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Layout>
                    <Header style={{color:"#FFF"}}>
                        <Head/>
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
                <Button type="primary">Primary Button</Button>
            </div>
         );
    }
}
 
export default MainPage;