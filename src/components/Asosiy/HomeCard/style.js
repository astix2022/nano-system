import styled from "styled-components";
import {ReactComponent as eye} from '../../../assets/icons/eye-eye.svg'


const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 5px;
    .card-title{
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        color: #3A3A3A;
        @media screen and (max-width:706px) {
            font-size: 14px;
        }

        @media screen and (max-width:483px) {
            font-size: 13px;
        }
    }
    .card-dec{
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        color: #000000;

        @media screen and (max-width:706px) {
            font-size: 12px;
        }

        @media screen and (max-width:483px) {
            font-size: 11px;
        }
    }
    .card-date{
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #9E9E9E;

        @media screen and (max-width:706px) {
            font-size: 12px;
        }

        @media screen and (max-width:483px) {
            font-size: 11px;
        }
    }
`
const Eye = styled(eye)``
export
{
    Container,
    Eye,
}