import styled from "styled-components";
import {ReactComponent as eye} from '../../../assets/icons/eye-eye.svg'


const Container = styled.div`
    width: 364px;
    height: 200px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid red;
    .card-title{
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
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
`
const Eye = styled(eye)``
export
{
    Container,
    Eye,
}