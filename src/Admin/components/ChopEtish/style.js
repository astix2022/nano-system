import styled from "styled-components";
import { ReactComponent as dowland } from "../../../assets/icons/dowland_1.svg";
import { ReactComponent as loaded_ones } from "../../../assets/icons/loaded_ones.svg";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 40px;
`

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 100px;
`

const Card = styled.div`
    width: 300px;
    height: 201px;
    border: 2px solid #ececec;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .dowland_title_wrap{
        width: 100%;
        height: 30%;
        margin-top: auto;
        padding: 5px 0px;
        border-top: 2px solid #ececec;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .dowland_title{
        font-weight: 400;
        font-size: 20px;
        color: #000;
        user-select: none;
    }
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
`
Icon.Dowland = styled(dowland)`
    width: 60px;
`

Icon.loadedOnes = styled(loaded_ones)`
    width: 60px;
`

export {Container,Wrapper,Card,Icon}