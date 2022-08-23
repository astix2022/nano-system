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
    .logo{
        margin-left: 16px;
        margin-top: 23px;
    }
    .active{
		color: #9E9E9E;
        background-color: #ade8f4;
        border-right: 3px solid #00b4d8;
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
        background-color: #caf0f8;
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