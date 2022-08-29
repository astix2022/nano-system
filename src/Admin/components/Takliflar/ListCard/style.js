import styled from "styled-components";

const Container =styled.div`
    width: 100%;
    height: fit-content;
    padding: 5px 30px;
    background-color: #F5F8FF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    height: fit-content;
    .idraqam{
        flex: 1;
    }
    .ismFamilya{
        padding-left: 20px;
        flex-basis: 250px;
        font-style: normal; 
        font-weight: 500;
        font-size: 14px;
        color: #202F44;
    }
    .taklifNomi{
        flex: 2;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #1E5DFE;
    }
    .sana{
        flex-basis: 200px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #202F44;
    }
    .button{
        flex: 2;
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
    .btn_delate{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 60px;
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
    .active{
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #2d6a4f;
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