import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 0 100px;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1335px) {
        padding: 0;
        height: fit-content;
    }
    .title{
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        color: #000000;
        @media (max-width:800px){
            font-size: 25px;
        }
    }
    .dec{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .description{
        width: fit-content;
        padding: 0 100px;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size:20px;
        color: #000000;
        @media (max-width:880px){
           display: none;
        }
    }
    .wrap{
        display: flex;
        justify-content: center;
        gap: 24px;
        @media (max-width:880px){
            position: relative;
            bottom: 100px;
        }
        @media (max-width:380px){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    button{
        width: 150px;
        height: 40px;
        background: #3434FF;
        border-radius: 5px;
        border:none;
        font-style: normal;
        font-weight: 400;
        color: #FFFFFF;

    }
`

export
{
    Container,

} 
    