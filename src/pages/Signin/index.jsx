import React,{useRef} from 'react'
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Container, Wrapper } from './style'

const Signin = () => {
  const LoginRef = useRef('')
  const PwRef = useRef('')
  const navigate = useNavigate()

  const {mutate} = useMutation(()=>{
    return fetch(`http://nano-system.5p-agency.uz/api/v1/users//login`, {method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({login:LoginRef.current.value, password:PwRef.current.value})})
      .then(res=> res.json())
    },
    {
      onSuccess:(res)=>{
        localStorage.setItem('token',res.token)
        if(res.token) navigate('/asosiy')
        console.log(res);
      },
      onError:(err)=>{
      }
    })


  const OnSubmit = () =>{
    mutate()
  } 
  return (
    <Container>
      <Wrapper>
        <h2 className='title'>Login</h2>
        <div className='hr'></div>
        <p className='sub-title'>Xush kelibsiz!</p>
        <p className='description'>Username</p>
        <input ref={LoginRef} type="text" placeholder='Enter your username'/>
        <p className='description'>Password</p>
        <input ref={PwRef} type="text" placeholder='Enter your password'/>
        <button onClick={OnSubmit}>LOGIN</button>
      </Wrapper>
    </Container>   
  )
}

export default Signin
