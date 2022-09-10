import React from 'react'
import {Container,Wrapper,WrapLeft,WrapRight,Item,Icon} from './style'

const Aloqa = () => {
  return (
    <Container>
      <Wrapper>
        <WrapLeft>
        <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=urganch 45-IMI&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://goo.gl/maps/Tg4TqJdNVekN1V1TA">embed google maps in website</a></div></div>
        </WrapLeft>
        <WrapRight>
          <h1 className='wrap_title'>ALOQA MA’LUMOTLARI</h1>
          <Item>
          <div className='wrp_item'>
            <p className='wrap_item_title'>Bizning manzilimiz:</p>
            <p className='wrap_item_des'>Xorazm viloyati, Urganch tumani, Paxtakor qishloqi</p>
          </div>
          <div className='wrp_item'>
            <p className='wrap_item_title'>Bizning email manzil:</p>
            <a href="45-idumi@gmail.com">
            <p className='wrap_item_des'>45-idumi@gmail.com</p>
            </a>
          </div>
          <div className='wrp_item'>
            <p className='wrap_item_title'>Bizning rasmiy telefon raqamlarimiz:</p>
            <a href="tel:998931234567">
            <p className='wrap_item_des'>+998 (93) 123 45 67,</p>
            </a>
            <a href="tel:998931234567">
            <p className='wrap_item_des'>+998 (93) 123 45 67</p>
            </a>
          </div>
          <div className='wrp_item'>
            <p className='wrap_item_title'>Maktabimiz bosh direktori:</p>
            <p className='wrap_item_des'>Qozoqov Egambergan</p>
          </div>
          <div className='wrp_item'>
            <p className='wrap_item_title'>Maktab direktor o’rinbosari:</p>
            <p className='wrap_item_des'>Xajiyev Xajibek</p>
          </div>
          <div className='wrp_item'>
            <p className='wrap_item_title'>Bizning ijtimoiy tarmoqdagi sahifalarimiz:</p>
            <div className='icons'>
              <a href="#">
                <Icon.Telegram/>
              </a>
              <a href="#">
                <Icon.Instagram/>
              </a>
              <a href="#">
                <Icon.Facebook />
              </a>
              <a href="#">
                <Icon.Youtube/>
              </a>
            </div>
          </div>
          <div className='wrp_item_app'>
            <p className='wrap_item_title'>Ilovalar hovolasi:</p>
            <div className='icons_app'>
              <a href="#">
                <Icon.Play/>
              </a>
              <a href="#">
                <Icon.App/>
              </a>
            </div>
          </div>
          <div className='footer_des'>
            <p className='footer_des_title'>Sayt ASTIX Team tomonidan 45-IDUMI ga 5-sentabr 2022 da foydalanishga topshirildi va shu kundan beri foydalanilib kelinmo1qda.</p>
          </div>
          </Item>
        </WrapRight>
      </Wrapper>
    </Container>
  )
}

export default Aloqa