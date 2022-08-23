import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #0152AE;
`

const Wrapper = styled.div`
    padding: 30px 30px;
    width: 479px;
    height: fit-content;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    .title{
        width: 419px;
        height: 39px;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 39px;
        color:#ffffff;
    }
    .hr{
        width: 110px;
        height: 0px;
        border: 1px solid #FFFFFF;
        margin: 10px 0;
    }
    .sub-title{
        width: 419px;
        height: 24px;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }
    .description{
        width: 73px;
        height: 18px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 45px;
    }
    input{
        margin-top: 10px;
        width: 419px;
        height: 50px;
        outline: none;
        background: linear-gradient(109.46deg, rgba(201, 201, 201, 0.8) 1.57%, rgba(196, 196, 196, 0.1) 100%);
        /* opacity: 0.5; */
        backdrop-filter: blur(60px);
        border-radius: 7px;
        color: #ffffff;
        padding-left: 26px;
    }
    button{
        margin-top: 20px;
        width: 100%;
        height: 50px;
        background: #A5D9D0;
        border: none;
        border-radius: 7px;
    }
`

export {Container, Wrapper}