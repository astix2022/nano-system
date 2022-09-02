import React from 'react'
import {Container,Wrapper,WrapLeft,WrapRight,WrapCenter} from './style'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <WrapLeft>
          <h1 className='wrapleft_title'>SAYT XARITASI</h1>
          <p className='wrapleft_des'>Bugungi yangiliklar</p>
          <p className='wrapleft_des'>Maktabdagi o’zgarishlar</p>
          <p className='wrapleft_des'>Maktabimiz yutuqlari</p>
          <p className='wrapleft_des'>Biz bilan a’loqa</p>
        </WrapLeft>
        <WrapCenter>
          <h1 className='wrapcenter_title'>WEB STUDIO XIZMATI</h1>
          <div className='inputs'>
            <input className='inputs_input' type="text"  placeholder='Ism Familiya'/>
            <input className='inputs_input' type="text" placeholder='Telefon raqam'/>
          </div>
          <button className='btn'>Yuborish</button>
        </WrapCenter>
        <WrapRight>
          <h1 className='wrapright_title'>Biz bilan a’loqa</h1>
          <a className='wrpright_link' href="45IDUMI@gmail.com">45IDUMI@gmail.com</a>
          <a className='wrpright_link' href="tel:998931234567">+998 (93) 123 45 67</a>
          <p className='wrapright_des'>Urganch, Paxtakor, 25-uy</p>
        </WrapRight>
      </Wrapper>
    </Container>
  )
}

export default Footer
