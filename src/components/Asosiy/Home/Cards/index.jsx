import React from 'react'
import {Container,Wrapper} from './style'
import Card from '../../GenericCard'

const Cards = () => {
  return (
    <Container>
        <Wrapper>
            <Card/>
            <Card/>
            <Card/>
        </Wrapper>
    </Container>
  )
}

export default Cards