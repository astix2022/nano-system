import styled from "styled-components";
import { ReactComponent as sending } from "../../../../../assets/icons/sending.svg";

const Container = styled.div`
    width: 100%;
    height: 350px;
`
const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`

const Sending = styled.div`
    .input_file[type="file"]{
        display: none;
    }

    .label_wrap{
        width: 100%;
        display: inline-block;
        height: 70px;
        background-color: white;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0px 15px;
        cursor: pointer;
        border-radius: 5px;
    }

    .label_title{
        color: #1E5DFE;
        font-weight: 400;
        font-size: 18px;
    }
`
const Icon = styled.div``

Icon.Sending = styled(sending)`
    width: 70px;
`

const Result = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-top: 20px;

    .result_title{
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
    }
`

const List = styled.div`
    width: 100%;
    height: 40px;
    background-color: white;
`
export {Container,Wrapper,Sending,Icon,Result,List}