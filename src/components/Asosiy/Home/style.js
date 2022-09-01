import styled from "styled-components";
import { ReactComponent as eye } from "../../../assets/icons/eye.svg";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px 100px;
    margin-top: 50px;

    @media screen and (max-width:1115px) {
        padding: 0px 40px;
    }

    .card{
        margin-top: 30px;
    }

`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;

    @media screen and (max-width:996px) {
        flex-direction: column;
    }
    `
const WrapLeft = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .des_img{
        width: 100%;
        border-radius: 5px;
    }

    @media screen and (max-width:996px) {
        width: 100%;
    }
`
const Imgs = styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 5px;
`

const Title = styled.div`
    width: 100%;
    padding: 12px;

    .title_title{
        font-weight: 600;
        font-size: 25px;
        color: #3A3A3A;

        @media screen and (max-width:706px) {
            font-size: 18px;
        }

        @media screen and (max-width:483px) {
            font-size: 16px;
        }
    }

    .title_des{
        font-weight: 500;
        font-size: 14px;

        @media screen and (max-width:706px) {
            font-size: 13px;
        }

        @media screen and (max-width:483px) {
            font-size: 11px;
        }
    }

`
const Result =styled.div`
    width: 100%;
    display: flex;
    gap:5px;

    .result_date{
        color: #9E9E9E;
        font-size: 13px;
        margin-top: 3px;

        @media screen and (max-width:706px) {
            font-size: 12px;
        }

        @media screen and (max-width:483px) {
            font-size: 10px;
        }
    }

    .border{
        width: 1px;
        height: 16px;
        background-color: #9E9E9E;
        margin-top: 3px;
    }

    .viewed{
        display: flex;
    }

    .viewed_des{
        color: #9E9E9E;
        font-size: 13px;
        display: flex;
        margin-top: 3px;

        @media screen and (max-width:706px) {
            font-size: 12px;
        }
    }

`

const Icon = styled.div``



Icon.Eye = styled(eye)``


const WrapRight = styled.div`
    width: 30%;
    border-left: 1px solid #1E5DFE;
    
    .wrap{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 24px;
    }

    .title_des{
        font-weight: 600;
        font-size: 20px;
        color: #3A3A3A;

        @media screen and (max-width:706px) {
            font-size: 18px;
        }

        @media screen and (max-width:483px) {
            font-size: 18px;
        }
    }

    .cards{
        gap: 10px;

        @media screen and (max-width:996px) {
            display: flex;
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width:996px) {
        width: 100%;
    }
`
export {Container,Wrapper,WrapLeft,WrapRight,Imgs,Title,Result,Icon}