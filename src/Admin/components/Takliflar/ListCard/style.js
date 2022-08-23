import styled from "styled-components";

const Container =styled.div`
    width: 100%;
    height: fit-content;
    padding: 5px 30px;
    background-color: #F5F8FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ismFamilya{
        width: 20%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.4px;
        color: #202F44;
    }
    .taklifNomi{
        width: 20%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.4px;
        color: #1E5DFE;
    }
    .sana{
        width: 20%;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.4px;
        color: #202F44;
    }
    .btn{
        width: 20%;
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

export 
{
    Container,
    Item,
}