import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Tag, Space } from 'antd';
// import 'antd/dist/antd.css'; 
import { Button } from 'antd';


const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>

      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default App;
