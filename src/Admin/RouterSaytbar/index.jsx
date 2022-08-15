import React from "react";
import Saytbar from '../components/Saytbar'
import { Routes, Route, Navigate } from "react-router-dom";
import {saytbar} from '../utils/saytbar'

const RouterSaytbar =()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={'/dashboard'}/>}></Route>
                <Route element={<Saytbar/>}>
                        {
                            saytbar.map(({id, element, path,})=>{
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
export default RouterSaytbar 