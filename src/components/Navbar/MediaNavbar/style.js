import styled from "styled-components";
import  {NavLink}  from 'react-router-dom'


const Conatiner = styled.div`
    width: 100%;
    height: 100%;
    z-index: 999;
    position: fixed;
    @media (min-width: 800px) {
        display: none;
    }
    .active{
        border-bottom: 1px solid red;
    }
    .nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        .profil{
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #1E5DFE;
            padding-bottom: 5px;
            cursor: pointer;
            :hover{
                color: red;
            }
        }
    }
    .logOut{
        color: #1E5DFE;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #1E5DFE;
        padding-bottom: 5px;
        cursor: pointer;
       :hover{
            color: red;
        }
    }
`

const Wrapper = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: #3A3A3A;
    position: fixed;
    top: 0;
    right: 0;
`

const Link = styled(NavLink)`
    font-style: normal;
    font-weight: 300;
    font-size: 14px; 
    display: flex;
    align-items: center;
    text-align: center;
    color: #1E5DFE;
    padding-bottom: 5px;
    cursor: pointer;
    color: #1E5DFE;
    :hover{
        color: red !important;
    }
`
const Back = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    padding: 28px 22px;
    span{
        cursor: pointer;
        color: #1E5DFE;
    }
`

export
{
    Conatiner,
    Wrapper,
    Link,
    Back,
}