import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 10px 40px;
    `
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    `

const Card = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 40px 30px;
    margin-top: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 17px -4px rgba(173, 176, 178, 0.2);
    
    .card_item{
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card_item_btn_wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .card_item_btn{
    width: 110px;
    height: 40px;
    background: #3434FF;
    border: none;
    outline: none;
    color: white;
    border-radius: 5px;
    }

    .car_item_title{
        font-weight: 600;
    }
`
export {Container,Wrapper,Card}