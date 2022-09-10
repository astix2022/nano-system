import styled from "styled-components"; 
import { ReactComponent as telegram } from "../../assets/icons/telegram2.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram2.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook2.svg";
import { ReactComponent as youtube } from "../../assets/icons/youtube2.svg";
import { ReactComponent as app } from "../../assets/icons/AppStore.svg";
import { ReactComponent as play } from "../../assets/icons/google-play.svg";


const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 100px;
    margin-top: 40px;

    p{
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width:885px) {
        padding: 0px 50px;
    }
    @media screen and (max-width:784px) {
        padding: 0px 50px;
    }

    @media screen and (max-width:571px) {
       padding: 0px 10px;
        }
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width:1115px) {
        flex-direction: column;
    }

`
const WrapLeft = styled.div`
    width: 40%;
    height: 445px;

    .mapouter{
        width: 100%;
        height: 100%;

        .gmap_canvas{
            width: 100%;
            height: 100%;

            @media screen and (max-width:784px) {
                text-align: center;
            }

            .gmap_iframe{
                width: 100%;
                height: 100%;
            }
        }
    }

    @media screen and (max-width:1115px) {
        width: 100%;
    }
`
const WrapRight = styled.div`
    width: 60%;
    height: 300px;
    padding-left: 20px;
    margin-left: 10px;

    .wrap_title{
        font-size: 26px;

        @media screen and (max-width:504px) {
            font-size: 22px;
        }
    }

    @media screen and (max-width:1115px) {
        width: 100%;
        margin-top: 30px;
        margin-left: 0px;
        padding-left: 0px;
    }

    @media screen and (max-width:784px) {
        text-align: center;
    }
`

const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .wrp_item{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;

        @media screen and (max-width:784px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        }
    }

    .wrp_item_app{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 30px;

        @media screen and (max-width:784px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        }
    }

    .wrap_item_title{
        font-size: 18px;
        color: rgba(0, 0, 0, 1);
        @media screen and (max-width:504px) {
            font-size: 15px;
        }
    }

    .wrap_item_des{
        font-size: 16px;
        color: rgba(58, 58, 58, 1);

        @media screen and (max-width:504px) {
            font-size: 13px;
        }
    }

    .icons{
        display: flex;
        gap: 10px;
    }

    .icons_app{
        display: flex;
        gap: 40px;
    }

    .footer_des{
        width: 100%;
        margin-top: 30px;
        @media screen and (max-width:504px) {
            padding: 0px 40px;
        }
    }
    
    .footer_des_title{
        font-size: 15px;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 20px;
        @media screen and (max-width:504px) {
            font-size: 12px;
        }
    }
`

const Icon = styled.div``
Icon.Telegram =styled(telegram)`
    width:30px;
`
Icon.Instagram =styled(instagram)`
    width:30px;
`
Icon.Facebook =styled(facebook)`
    width:30px;
`
Icon.Youtube =styled(youtube)`
    width:30px;
`

Icon.Play =styled(play)``

Icon.App =styled(app)``

export {Container,Wrapper,WrapLeft,WrapRight,Item,Icon}