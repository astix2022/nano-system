import styled from "styled-components";
import {ReactComponent as eye} from '../../../assets/icons/eye-eye.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: fit-content;
    background: #FFFFFF;
    border-left: 1px solid #1E5DFE;
    padding-left: 10px;

    .img{
        width: 100%;
        border-radius: 5px;
    }
    .notImg{
        width: 100%;
        border-radius: 5px;
    }
    .foter{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 12px;
        .card-title{
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            color: #3A3A3A;
        }
        .card-dec{
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            color: #000000;
        }
        .card-date{
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            color: #9E9E9E;
        }
    }

    @media screen and (max-width:1115px) {
        width: 450px;
    }

    @media screen and (max-width:1006px) {
       width: 390px;
    }

    @media screen and (max-width:887px) {
       width:350px;
    }

    @media screen and (max-width:810px) {
       width:320px;
    }

    @media screen and (max-width:747px) {
       width: 300px;
    }

    @media screen and (max-width:747px) {
       width: 270px;
    }

    @media screen and (max-width:648px) {
       width: 250px;
    }

    @media screen and (max-width:607px) {
       width: 240px;
    }

    @media screen and (max-width:607px) {
       width: 100%;
    }
`
const Eye = styled(eye)``
export 
{
    Container,
    Eye,
}