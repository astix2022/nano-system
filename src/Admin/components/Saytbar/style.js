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
    background-color: #ffffff;
    flex-direction: column;
    gap: 24px;
    .logo{
        margin-left: 16px;
        margin-top: 23px;
    }
    .active{
		color: #0152AE;
        fill: #0152AE;
	}
    .wrap{
        display: flex;
        align-items: center;
        gap: 8px;
        padding-left: 34px;    
    }
`

const Result = styled.div`
    width:100% ;
    background-color: #FAFAFA;
`

const Link = styled(NavLink)`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #9E9E9E;
`
export
{
    Container,
    Wrapper,
    Result,
    Link
}