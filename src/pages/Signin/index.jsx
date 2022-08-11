import React,{useRef} from "react";
import { Button, Container, Input, Line, Wrapper } from "./style";
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const pwRef = useRef('')
  const userNameRef = useRef('')
  const navigate = useNavigate()

  const {mutate} = useMutation('login',()=>{
    return fetch(`http://nano-system.5p-agency.uz/api/v1/users//login`,{method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({login:userNameRef.current.value, password:pwRef.current.value})})
      .then(res=> res.json())
    },
    {
      onSuccess:(res)=>{
        localStorage.setItem('token', res.token)
        // if(res.token !==null) navigate('/asosiy')
        // console.log(res);
        // console.log(res.authenticationToken);
      },
      onError:(err)=>{
        // console.log(err);
      }
    })
 

  const onSubmit = ()=>{
    mutate()
    // if(localStorage.getItem('token'))  navigate('/')
    // else if (localStorage.getItem('token') ===null) 
    
  }  
  return (
    <Container>
      <div className="block-center">
        <Wrapper>
          <div className="title">Login</div>
          <Line></Line>
          <div className="description">Xush kelibsiz!</div>
          <div className="inputs">
            <div className="description">Username</div>
              <Input ref={userNameRef}/>
            <div className="description">Password</div>
              <Input ref={pwRef}/>
            <br /><br />
            <div className="des">Forgot Password?</div>
          </div>
          {/* {
            userNameRef.current.value !=='' && pwRef.current.value !=='' && */}
          <Button onClick={onSubmit}>
            <div className="block-center">LOGIN</div>
          </Button>
          <div className="center">
            <span>Register </span>Here
          </div>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Signin;
