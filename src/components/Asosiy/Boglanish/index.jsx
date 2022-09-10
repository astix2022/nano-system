import React from 'react'
import { Container } from './style'
import {useNavigate} from 'react-router-dom'

const Boglanish = () => {
  const navigate = useNavigate()
  const submitTaklif = ()=>{
    navigate('/taklif')
  }
  const submitAriza = ()=>{
    navigate('/ariza')
  }
  return (
    <Container>
        <h1 className='title'>YOZIB QOLDIRING</h1>
        <div className='dec'>
          <p className='description'>
            Agarda maktab to’g’risida shikoyat yoki takliflaringiz bo’lsa ammo buni aytishdan uyalayotgan yoki
            shaxsingizni ma’lum qilishdan qo’rqsangiz shu saytda shaxsingizni ma’lum qilmasdan anonim tarzida shikoyat yoki takliflaringizni qoldira olasiz.
          </p>
        </div>
        <div className='wrap'>
          <button onClick={submitTaklif}>Taklif bildirish</button>
          <button onClick={submitAriza}>Ariza qolidirsh</button>
        </div>
    </Container>
  )
}

export default Boglanish