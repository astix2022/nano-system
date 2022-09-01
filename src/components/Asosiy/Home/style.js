import styled from "styled-components";
import { ReactComponent as eye } from "../../../assets/icons/eye.svg";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 100px;
    margin-top: 10px;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    `
const WrapLeft = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .des_img{
        width: 100%;
        border-radius: 5px;
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
    }

    .title_des{
        font-weight: 500;
        font-size: 14px;
    }

`
const Result =styled.div`
    width: 100%;
    display: flex;

    .result_date{
        color: #9E9E9E;
        font-size: 13px;
        margin-top: 3px;
    }

    .border{
        width: 2px;
        height: 16px;
        background-color: #9E9E9E;
        margin-top: 3px;
        margin-left: 5px;
    }

    .viewed{
        display: flex;
    }

    .viewed_des{
        color: #9E9E9E;
        font-size: 13px;
        margin-top: 3px;
    }

`

const Icon = styled.div``



Icon.Eye = styled(eye)`
    /* width: 30px; */
`


const WrapRight = styled.div`
    width: 40%;
    border-left: 1px solid #1E5DFE;
    
    .wrap{
        padding-left: 24px;
    }

    .title_des{
        font-weight: 600;
        font-size: 20px;
        color: #3A3A3A;
    }
`
export {Container,Wrapper,WrapLeft,WrapRight,Imgs,Title,Result,Icon}