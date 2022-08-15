import React from "react";
import Saytbar from './Admin/RouterSaytbar'
import Router from './routers'
import {useNavigate} from 'react-router-dom'

const Root = () =>{
  const navigate = useNavigate()
    if(localStorage.getItem('role' === 'ceo')){
      return <Saytbar/> && navigate('/dashboard')
    }
    else if(localStorage.getItem('role' === 'user')){
      return <Router/> && navigate('/asosiy')
    }
    else{
      return <Router/> && navigate('/asosiy')
    }
}
export default Root