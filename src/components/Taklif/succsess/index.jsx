import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Container } from './style'

const Succsess = ({set}) => {
  return (
    <Zoom top>
      <Container>
          <p>Taklifingiz muofaqiyatli yuborildi!</p>
          <button onClick={()=> set(!true)}>okay</button>
      </Container>
    </Zoom>
  )
}

export default Succsess