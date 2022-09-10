import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin-top: 96px;
    .listcard{
        width: 100%;
        padding: 0 100px;
        gap: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        @media (max-width: 1335px) {
            padding: 0 50px;
        }
    }
    .title{
        margin-bottom: 25px;
        width: 100%;
        padding: 0 105px;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        color: #3A3A3A;
        @media (max-width: 1335px) {
            text-align: center;
        }
        @media (max-width: 700px) {
            font-size: 15px;
            padding: 0 15px;
        }
    }

`



export  {Container,}