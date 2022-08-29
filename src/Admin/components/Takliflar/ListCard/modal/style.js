import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    .modal_wrapper{
        padding: 20px 30px;
        width: 600px;
        height: fit-content;
        background-color: white;
        
    }
    .title{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        color: #9E9E9E;
    }
    .tavsif{
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        color: #3A3A3A;
    }
    .click{
        margin-top: 15px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        gap: 10px;
        width: 145px;
        height: 35px;
        background: #1E5DFE;
        border-radius: 5px;
        border: none;
        color: #ffffff;
    }

`
export
{
    Container,
}
