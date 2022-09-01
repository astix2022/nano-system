import styled from "styled-components";
import { ReactComponent as sending} from "../../../../assets/icons/sending.svg";
import { ReactComponent as back} from "../../../../assets/icons/profil_back.svg";

const Container = styled.div`   
    width: 100%;
    height: 100vh;
    .steps{
        width: 100%;
    }

    .exit{
        width: 100%;
        height: 60px;
        background-color: white;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        gap: 10px;
        padding: 0px 40px;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 40px;

    .buttuns{
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }
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

Icon.Back = styled(back)`
    width: 20px;
    cursor: pointer;
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
const Button = styled.button`
    width: 150px;
    height: 40px;
    background: #3434FF;
    border: none;
    outline: none;
    color: white;
    border-radius: 5px;
`
export {Container,Wrapper,Sending,Icon,Inputs,Button}