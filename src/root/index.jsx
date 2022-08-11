import React from "react";
import Navbar from '../components/Navbar'
import { Routes, Route, Navigate } from "react-router-dom";
import {navbar} from '../utils/navbar'
import Signin from "../pages/Signin";

const Root =()=>{   
    return(
        <div>
            {/* {localStorage.getItem('token') ? */}
            <Routes>
                <Route path="/" element={<Navigate to={'/asosiy'}/>}/>
                <Route element={<Navbar/>}>
                    {
                        navbar.map(({id,element,path,})=>{
                            return (
                                <Route key={id} path={path} element={element}/>
                            )
                        })
                    }
                </Route>
            </Routes>
            
    
        </div>
    )
}  
export default Root