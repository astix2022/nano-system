import styled from "styled-components";
import {ReactComponent as eye} from '../../../assets/icons/eye-eye.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: fit-content;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #9E9E9E;
    .notImg{
        width: 100%;
    }
    .foter{
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
`
const Eye = styled(eye)``
export 
{
    Container,
    Eye,
}