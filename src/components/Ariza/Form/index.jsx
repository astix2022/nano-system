import React from 'react'
import { Container } from './style'

const Form = () => {
  return (
    <Container>
        <div className='from'>
            <h1 className='from__title'>ARIZA QOLDIRISH</h1>
            <p className='from__dec'>Quyidagi ma’lumotlarni to’ldirish orqali ariza yuboring.</p>
            <div className='from__inputs'>
                <input className='arizaNomi' type="text" placeholder='Ariza nomi*'/>
                <input className='bolimNomi' type="text" placeholder='Bo’limni tanlang'/>
            </div>
            <textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Yozing'></textarea>
            <div className='btn_wrap'>
                <button className='btn'>Yuborish</button>
            </div>
        </div>
    </Container>
  )
}

export default Form