import React from 'react';
import { Menu } from 'antd';
import arzilar from '../../../assets/icons/dash_arizalar.svg'
import {Container} from './style'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Arizalar', 'sub4', <img src={arzilar}/>, [
    getItem('Yangilar', '9'),
    getItem('Hammasi', '10'),
  ]),
];

const ArizaSelect = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Container>
      <Menu
        className='menu'
        onClick={onClick}
        style={{
          width: 245,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        />
    </Container>
  );
};

export default ArizaSelect;