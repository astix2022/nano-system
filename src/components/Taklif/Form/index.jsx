import React,{useRef, useState} from 'react'
import { Container } from './style'
import {useDispatch,useSelector} from 'react-redux'
import { taklif } from '../../../store/taklif'
import Loading from '../../Loading'
import Succsess from '../succsess'

const Form = () => {
  const [active, setactive] = useState(false)
  const nameRef = useRef('')
  const suggestNameRef = useRef('')
  const messageRef = useRef('')

  const dispatch = useDispatch()
  const store = useSelector((store)=> store.taklif) 
  const add = useSelector((store)=> store.auth) 
  const userID = JSON.parse(localStorage.getItem("userId"))

  const [atribut ,setatribut] =useState(true)
	const change = ()=>{
		if(nameRef.current.value.length >= 1 && suggestNameRef.current.value.length >=1 && messageRef.current.value.length >=1){
			setatribut(!true) 
		}
		else{
			setatribut(true)
		}
	}
  setInterval(change, 1000);

  const onSubmit = () =>{
    dispatch(
      taklif(
        {
          Name:nameRef.current.value,
          suggestName:suggestNameRef.current.value,
          message:messageRef.current.value,
          userId:userID 
        }
    ))  
      nameRef.current.value = ''
      suggestNameRef.current.value = ''
      messageRef.current.value = ''
      setactive(!false)

  }
  return (
    <Container>
      <div className='success'>
          {store.status === 'success' && active && <Succsess set={setactive}/>}        
      </div>
      <div className='loading'>
        {store.status === 'pending' && <Loading/>}
      </div>
      <div className='from'>
        <h1 className='from__title'>TAKLIF BILDIRISH</h1>
        <p className='from__dec'>Quyidagi ma’lumotlarni to’ldirish orqali taklif yuboring.</p>
        <div className='from__inputs'>
          <input onChange={change} ref={nameRef} className='arizaNomi' type="text" placeholder='Ism Familiya*'/>
          <input onChange={change} ref={suggestNameRef} className='bolimNomi' type="text" placeholder='Taklif nomi*'/>
        </div>
        <textarea onChange={change} ref={messageRef} className='textarea' name="" id="" cols="30" rows="10" placeholder='Yozing'></textarea>
        <div className='btn_wrap'>
          <button disabled={atribut} onClick={onSubmit} className='btn'>Yuborish</button>
        </div>
      </div>
    </Container>
  )
}

export default Form