import styled from "styled-components";
import { ReactComponent as play } from "../../../assets/icons/GooglePlay.svg";
import { ReactComponent as app } from "../../../assets/icons/AppStore.svg";

import { ReactComponent as facebook } from "../../../assets/icons/facebook2.svg";
import { ReactComponent as instagram } from "../../../assets/icons/instagram2.svg";
import { ReactComponent as telegram } from "../../../assets/icons/telegram2.svg";
import { ReactComponent as youtube } from "../../../assets/icons/youtube2.svg";

const Container = styled.div`
    width: 100%;
    height: 647px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .sub-title{
        margin-right: 49%;
        margin-bottom: 15px;
    }

    .sub-title::after{
        content: 'aloqa:';
        color: var(--primaryColor);
    }
`

const Wrapper = styled.div`
    width: 818px;
    height: 540px;
    display: flex;
    flex-direction: column;
    padding: 30px 24px;
    background: rgba(253, 253, 253, 0.9);
    border: 0.2px solid #000000;
    box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
` 

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 54px;


    .adress{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .adress-title{
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    color: #000000;
    }

    .adress-des{
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    }

    .link{
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
        transition-duration: 0.5s;
    }

    .link:hover{
        color: var(--primaryColor);
    }

    .app{
        display: flex;
        gap: 27px;
    }
`

const Icon = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
`

Icon.Play = styled(play)``
Icon.App = styled(app)``
Icon.Facebook = styled(facebook)``
Icon.Instagram = styled(instagram)``
Icon.Telegram = styled(telegram)``
Icon.Youtube = styled(youtube)``

const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .bottom-title{
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    }
`

export {Container,Wrapper,Title,Icon,Bottom}