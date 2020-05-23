添加路由命令： yarn add react-router-dom


//给react 添加路由对象
//BrowserRouter 浏览器路由

import { BrowserRouter,Route } from 'react-router-dom';

``` html 
 <BrowserRouter>

    <div>
        //组件加载
      <Route exact path="/" component={Main}/>
      <Route exact path="/" component={About}/>

    </div>
  </BrowserRouter>,
  ``` 