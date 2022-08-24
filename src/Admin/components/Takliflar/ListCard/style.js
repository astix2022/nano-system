import styled from "styled-components";

const Container =styled.div`
    width: 100%;
    height: fit-content;
    padding: 5px 30px;
    background-color: #F5F8FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    height: fit-content;
    .idraqam{
        width: 20%;
    }
    .ismFamilya{
        width: 20%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #202F44;
    }
    .taklifNomi{
        width: 20%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #1E5DFE;
    }
    .sana{
        width: 20%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #202F44;

    }
    .button{
        width: 20%;
        display: flex;
        justify-content: flex-start;
    }
    .btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        gap: 10px;
        width: 45px;
        height: 22px;
        background: #1E5DFE;
        border: 1px solid #FFFFFF;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
    }
    
`
const Item =styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #3A3A3A;
`
const ClickComponent = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #00000095;
    user-select: none;
    .card{
        position: relative;
        width: 600px;
        height: fit-content;
        padding: 50px 50px;
        background-color: #ffffff;
        border: 1px solid #DDDDDD;
        .sub-title{
            color: #9E9E9E;
            font-size: 16px;
        }
        .dec{
            margin-top: 25px;
            font-size:13px;
            color: #3A3A3A;
        }
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    button{
        width: 120px;
        height: 35px;
        color: #ffffff;
        background-color: #1E5DFE;
        border: none;
    }
`

export 
{
    Container,
    Item,
    ClickComponent,
}