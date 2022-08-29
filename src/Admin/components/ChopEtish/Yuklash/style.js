import styled from "styled-components";
import { ReactComponent as sending} from "../../../../assets/icons/sending.svg";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 100px 100px 0px 100px;

    .steps{
        width: 100%;
    }

    .steps-content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background-color: #fafafa;
    /* border: 1px dashed #e9e9e9; */
    border-radius: 2px;
    }

    .steps-action {
    margin-top: 24px;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
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

const Inputs = styled.div`

.input_name{
        width: 100%;
        height: 50px;
        padding: 2px 20px;
        border:1px solid rgba(198, 185, 185, 0.3);
        border-radius: 5px;
        outline: none;
        margin-bottom: 20px;
    }

    .tex_name{
        width: 100%;
        border:1px solid rgba(198, 185, 185, 0.3);
        border-radius: 5px;
        outline: none;
        padding: 10px 20px 0px 20px;
    }
`
export {Container,Wrapper,Sending,Icon,Inputs}