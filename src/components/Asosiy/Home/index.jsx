import React from 'react'
import { Container, LeftWrapp, RightWrapp } from './style'
import Education from '../../../assets/imgs/education.png'
import { ReactComponent as User } from '../../../assets/icons/user-tie.svg'
import { ReactComponent as Student } from '../../../assets/icons/student.svg'
// import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Home = () => {
  return (
    <Container>
      <Reveal left>
        <LeftWrapp>
            <h1 className='title'>Chegarasiz  <span>o’qish, </span><span>sizning</span> qo’llaringizda!</h1>
            <p className='description'>Sayt ASTIX jamoasi tomonidan 45-maktab uchun yasaldi va foydalanishga topshirildi!</p>
            <div className='cards'>
              <div className="card">
                <span><User/></span>
                <span className='card-info'>
                  <div className='card__info'>50+</div>
                  <div className='teachers'>Ustozlar</div>
                </span>
              </div>
              <div className="card">
                <span><Student/></span>
                <span className='card-info'>
                  <div className='card__info'>270+</div>
                  <div className='teachers'>O’quvchilar</div>
                </span>
              </div>
            </div>
        </LeftWrapp>
      </Reveal>
      <Reveal right>
        <RightWrapp>
            <img src={Education}/>
        </RightWrapp>
      </Reveal>
    </Container>
  )
}

export default Home