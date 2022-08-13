import React from "react";
import Saytbar from './Admin/RouterSaytbar'
import Router from './routers'

const count = 5
const Root = () =>{
    if(count === 5){
      return  <Router/>
    }
    else if (count === 6){
       return <Saytbar/>
    }
}
export default Root