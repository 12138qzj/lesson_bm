import React, { Component } from 'react';
import Head from './head/Head';
import Con from './com/fristtab';
import { Layout,Button } from 'antd';
import  './mainpage.css';

class MainPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <div>
                <Head/>
               </div>
               <div>
               <Con/>

               </div>
                    {/* <Footer>Footer</Footer> */}
               
                {/* <Button type="primary">Primary Button</Button> */}
            </div>
         );
    }
}
 
export default MainPage;