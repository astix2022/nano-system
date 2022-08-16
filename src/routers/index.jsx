import React from "react";
import Navbar from '../components/Navbar'
import { Routes, Route, Navigate } from "react-router-dom";
import {navbar} from '../utils/navbar'
import Signin from "../pages/Signin";

const Routers =()=>{   
    return(
        <div>
            {
                localStorage.getItem('token') ?
                <Routes>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route element={<Navbar/>}>
                            {
                            navbar.map(({id, element, path, hidden})=>{
                                return !hidden &&(
                                    <Route key={id} path={path} element={element}/>
                                    )
                                })
                            }
                    </Route>
                    <Route path="/" element={<Navigate to={'/asosiy'}/>}/>
                    <Route>
                        {
                            navbar.map(({id, element, path, hidden})=>{
                                return hidden &&(
                                    <Route key={id} path={path} element={element}/>
                                )
                            })
                        }
                    </Route>
                </Routes> 
                : 
                null
            }
            
        </div>
    )
}  
export default Routers