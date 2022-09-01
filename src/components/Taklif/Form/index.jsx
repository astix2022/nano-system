import React,{useRef} from 'react'
import { Container } from './style'
import {useDispatch,useSelector} from 'react-redux'
import { taklif } from '../../../store/taklif'

const Form = () => {
  const nameRef = useRef('')
  const suggestNameRef = useRef('')
  const messageRef = useRef('')

  const dispatch = useDispatch()
  const store = useSelector((store)=> store.taklif) 
  const onSubmit = () =>{
    dispatch(
      taklif(
        {
          Name:nameRef.current.value,
          suggestName:suggestNameRef.current.value,
          message:messageRef.current.value,
        }
    ))
  }
  return (
    <Container>
        <div className='from'>
          {store.status}
            <h1 className='from__title'>TAKLIF BILDIRISH</h1>
            <p className='from__dec'>Quyidagi ma’lumotlarni to’ldirish orqali taklif yuboring.</p>
            <div className='from__inputs'>
                <input ref={nameRef} className='arizaNomi' type="text" placeholder='Ism Familiya*'/>
                <input ref={suggestNameRef} className='bolimNomi' type="text" placeholder='Taklif nomi*'/>
            </div>
            <textarea ref={messageRef} className='textarea' name="" id="" cols="30" rows="10" placeholder='Yozing'></textarea>
            <div className='btn_wrap'>
                <button onClick={onSubmit} className='btn'>Yuborish</button>
            </div>
        </div>
    </Container>
  )
}

export default Form