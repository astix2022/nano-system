import React from 'react'
import { Container, LeftWrapp, RightWrapp } from './style'
import Education from '../../../assets/imgs/education.png'
import { ReactComponent as User } from '../../../assets/icons/user-tie.svg'

const Home = () => {
  return (
    <Container>
        <LeftWrapp>
            <h1 className='title'>Chegarasiz  <span>o’qish, </span><span>sizning</span> qo’llaringizda!</h1>
            <p className='description'>Sayt ASTIX jamoasi tomonidan 45-maktab uchun yasaldi va foydalanishga topshirildi!</p>
            <div className='cards'>
              <div className="card">
                <span><User/></span>
                <span className='card-info'>
                  <div>50+</div>
                  <div>Ustozlar</div>
                </span>
              </div>
              <div className="card">
                <span></span>
                <span className='card-info'></span>
              </div>
            </div>
        </LeftWrapp>
        <RightWrapp>
            <img src={Education}/>
        </RightWrapp>
    </Container>
  )
}

export default Home