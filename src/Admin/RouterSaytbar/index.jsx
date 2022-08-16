import React from "react";
import Saytbar from '../components/Saytbar'
import { Routes, Route, Navigate } from "react-router-dom";
import {saytbar} from '../utils/saytbar'
import Signin from "../../pages/Signin";

const RouterSaytbar =()=>{
    return(
        <> 
            <Routes>
                <Route path="/" element={<Navigate to={'/dashboard'}/>}/>
                <Route path="/login" element={<Signin/>}/>
                <Route element={<Saytbar/>}>
                    {
                    saytbar.map(({id, element, path})=>{
                        return(
                                <Route key={id} path={path} element={element}/>
                            )
                        })
                    }
                </Route>
            </Routes>
        

        </>
    )
} 
export default RouterSaytbar 