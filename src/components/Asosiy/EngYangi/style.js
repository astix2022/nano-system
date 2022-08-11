import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: 97px 0 45px 0;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LeftWrapp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    span{
        color: #0152AE;
    }
    .sub-title{
        font-style: normal;
        font-weight: 400;
        font-size: 31px;
        line-height: 38px;
    }
    .room{
        width: 500px;
    }
`
const RightWrapp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    .book{
        height: 85px;
    }
`

const Card =styled.div`
    display: flex;
    width: 500px;
    height: 85px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    cursor: pointer;
    .tub-title{
        width: 300px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 520;
        font-size: 20px;
        line-height: 25px;
        color: #000000;
        margin: 10px 0 0 15px;
    }
`

export
{
    Container,
    LeftWrapp,
    RightWrapp,
    Card,
}