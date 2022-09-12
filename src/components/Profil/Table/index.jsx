import { Table } from 'antd';
import locale from 'antd/lib/date-picker/locale/en_US';
import React from 'react';
import { Container } from './style'
const columns = [
  {
    title: 'Ariza nomi',
    width: 150,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Sana',
    width: 110,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Tizm',
    dataIndex: 'address',
    key: '1',
    width: 110,
  },
  {
    title: 'Ariza',
    dataIndex: 'ariza',
    key: '8',
  },


];
const info = JSON.parse(localStorage.getItem('info'))
// info.suggestions.map((value)=>{
//   return console.log(value.id);
// })

const data = [];

const App = () => (
  <Container>
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1000,
      y: 300,
    }}
    />
    </Container>
);

export default App;