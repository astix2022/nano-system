import React from 'react'
import {Container,Wrapper} from './style'

const Sarlavha = () => {
  return (
    <Container>
      <Wrapper>
      <form>
        <input className='input_name' placeholder='Nomi(Majburiy)' type="text" />
        <textarea className='tex_name' placeholder='Tavsifi' cols="30" rows="10"></textarea>
      </form>
      </Wrapper>
    </Container>
  )
}

export default Sarlavha