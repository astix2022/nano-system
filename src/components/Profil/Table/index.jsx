import { Table } from 'antd';
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
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Shikoyat ${i}`,
    age: '18.08.2022',
    address: `Maktab ${i}`,
    ariza: 'Maktabga ariza yozdim'
  });
}

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