import React from 'react'
import { Container, LeftWrapp, RightWrapp, Card } from './style'
import Room from '../../../assets/imgs/room.png'
import Book from '../../../assets/imgs/book.png'
import Reveal from 'react-reveal/Reveal';

const EngYangi = () => {
  return (
    <Container>
        <Reveal left>
        <LeftWrapp>
            <h2 className='sub-title'><span>Eng</span> yangi</h2>
            <img className='room' src={Room} alt="" />
        </LeftWrapp>
        </Reveal>
        <Reveal right>

        <RightWrapp>
            <h2 className='sub-title'><span>Eng</span> yangilari</h2>
            <Card>
                <img className='book' src={Book} alt="" />
                <h2 className='tub-title'>O’quvchilar kitob topshiradign payt keldi.</h2>
            </Card>
            <Card>
                <img className='book' src={Book} alt="" />
                <h2 className='tub-title'>O’quvchilar kitob topshiradign payt keldi.</h2>
            </Card>
            <Card>
                <img className='book' src={Book} alt="" />
                <h2 className='tub-title'>O’quvchilar kitob topshiradign payt keldi.</h2>
            </Card>
            <Card>
                <img className='book' src={Book} alt="" />
                <h2 className='tub-title'>O’quvchilar kitob topshiradign payt keldi.</h2>
            </Card>
        </RightWrapp>
        </Reveal>
    </Container>
  )
}

export default EngYangi