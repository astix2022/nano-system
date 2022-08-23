import React from 'react'
import { Container, Item } from './style'

const ListCard = ({info}) => {
  return (
    <Container>
      <Item>{info?.id || 'ID 1235781'}</Item>
      <Item className='ismFamilya'>{info?.Name || 'Mavluda Sultonova'}</Item>
      <Item className='taklifNomi'>{info?.suggestName || 'Taklif nomi '}</Item>
      <Item className='sana'>13.07.2022</Item>
      <button className='btn'>Click</button>
    </Container>
  )
}

export default ListCard