import styled from "styled-components";
import  {NavLink}  from 'react-router-dom'


const Container  = styled.div`
    width: 100%;
    display: flex;
`

const Wrapper = styled.div`
    width: 260px;
    height: 100vh;
    border: 1px solid red;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Result = styled.div`
    width:100% ;
    border: 1px solid black;
`

const Link = styled(NavLink)`
  font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #9E9E9E;
`
export
{
    Container,
    Wrapper,
    Result,
    Link
}