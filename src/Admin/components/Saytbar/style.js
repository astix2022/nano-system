import styled from "styled-components";
import  {NavLink}  from 'react-router-dom'


const Container  = styled.div`
    width: 100%;
    display: flex;
`

const Wrapper = styled.div`
    width: 260px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    /* position: fixed; */
    /* border: 1px solid red; */
    .logo{
        margin-left: 16px;
        margin-top: 23px;
    }
    .active{
		color: #9E9E9E;
        background-color: #ced4da;
        border-right: 3px solid #adb5bd;
	}
    .wrapperFalse{
        width:250px;
        height: 25px;
        background-color: black;
    }
    .wrapperTrue{
        width:250px;
        height: 250px;
        background-color: black;
    }
    .logOut{
        /* display: inline-flex; */
        margin-left: 25px;
        width: fit-content;
        background-color: white;
        color: #9E9E9E;
        font-weight:420;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
    }
    
`

const Result = styled.div`
    width:100%;
    background-color: #FAFAFA;
`

const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding-left: 23px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #9E9E9E;
    gap: 5px;
    :hover{
        background-color: #e9ecef;
        color:  #9E9E9E !important;
    }
;
`
export
{
    Container,
    Wrapper,
    Result,
    Link
}