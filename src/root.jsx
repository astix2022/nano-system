import React from "react";
import {useNavigate} from 'react-router-dom'
import Router from './routers'
import RouterSaytbar from "./Admin/RouterSaytbar";

const Root = () =>{
  const navigate = useNavigate()
    if(localStorage.getItem('role' === 'ceo')){
      return <RouterSaytbar/> && navigate('/dashboard')
    }
    else if(localStorage.getItem('role' === 'user')){
      return <Router/> && navigate('/asosiy')
    }
    else{
      return <Router/> && navigate('/asosiy')
    }
}
export default Root