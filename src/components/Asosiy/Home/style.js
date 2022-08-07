import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 38px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LeftWrapp = styled.div`
    display: flex;
    flex-direction: column;
    .title{
        width: 549px;
        height: 118px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 49px;
        line-height: 59px;
        letter-spacing: 0.02em;
        color: #066AC9;
    }
    span{
        color: black;
    }
    .description{
        width: 480px;
        height: 48px; 
        margin-top : 20px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.02em;

        color: rgba(0, 0, 0, 0.5);
    }
    .cards{
        display: flex;
        margin-top: 45px;
        gap: 24px;
        .card{
            padding: 15px 20px;
            display: flex;
            align-items: center;
            width: 187px;
            height: 70px;
            background: rgba(52, 52, 255, 0.3);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
        }
    }
    .card-info{
        margin-left: 10px;
    }
    .card__info{
        width: 40px;
        height: 24px;
        font-style: normal;
        font-weight: 580;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #000000;
    }
    .teachers{
        width: 53px;
        height: 16px;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #000000;
    }

`
const RightWrapp = styled.div``

export
{
    Container, 
    LeftWrapp,
    RightWrapp,
}