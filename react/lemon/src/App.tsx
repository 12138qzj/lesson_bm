import * as React from 'react';
import { Header, About } from './components';
import {Button} from 'antd';




export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
      <About />
      <Button>按钮</Button>
      <Button>按钮2</Button>
    </div>
  );
}