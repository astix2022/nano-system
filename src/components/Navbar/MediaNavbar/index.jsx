import React from "react";
import { Back, Conatiner, Wrapper, Link} from "./style";
import { navbar } from "../../../utils/navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/login";


const MediaNavbar = ({active}) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    function logOut() {
        localStorage.clear();
        navigate("/signin");
        dispatch(logout());
    }
    return(
        <Conatiner onClick={()=> active(false)}>
            <Wrapper>
                <Back>
                    <span onClick={()=> active(false)}>X</span>
                </Back>
                <div className="nav">    
                {
                    navbar.map(({ id, title, path, hidden })=>{
                        return !hidden && (
                            <Link onClick={()=> active(false)} key={id} to={path}>
                                {title}
                            </Link>
                            )            
                        })
                    }
                <div onClick={()=> navigate('/profil')} className="profil">Profil</div>
                <div onClick={logOut} className="logOut">LogOut</div>
                </div>
            </Wrapper>
        </Conatiner>
    )
}
export default MediaNavbar