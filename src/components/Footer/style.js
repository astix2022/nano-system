import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 50px 100px;
    margin-top: 100px;
    background-color: #3A3A3A;
    @media screen and (max-width:1115px) {
        padding: 70px 50px 60px 50px;
    }
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width:1005px) {
        flex-direction: column;
        gap: 30px;
    }
`



const WrapLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapleft_title{
        font-weight: 400;
        font-size: 20px;
        color:  #FFFFFF;
        margin-bottom: 30px;

        @media screen and (max-width:482px) {
            font-size: 16px;
        }
    }

    .wrapleft_des{
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;

        @media screen and (max-width:482px) {
            font-size: 13px;
        }
    }
`

const WrapCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapcenter_title{
        font-weight: 400;
        font-size: 20px;
        color:  #FFFFFF;
        margin-bottom: 30px;

        @media screen and (max-width:482px) {
            font-size: 16px;
        }
    }

    .inputs{
        display: flex;
        align-items: center;
        gap: 10px;

        @media screen and (max-width:482px) {
        flex-direction: column;
        }
    }

    .inputs_input{
        border: none;
        width: 200px;
        height: 50px;
        padding: 0px 20px;
        border-radius: 5px;

        @media screen and (max-width:482px) {
            width: 300px;
            height: 40px;
        }

        @media screen and (max-width:482px) {
            width: 250px;
            height: 40px;
        }
    }

    .btn{
        width: 132px;
        height: 43px;
        margin-top: 24px;
        outline: none;
        background-color: transparent;
        border: 1px solid #FFFFFF;
        border-radius: 3px;
        color: #ffffff;

        @media screen and (max-width:482px) {
            width: 120px;
            height: 35px;
        }
    }
`

const WrapRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapright_title{
        font-weight: 400;
        font-size: 20px;
        color:  #FFFFFF;
        margin-bottom: 30px;

        @media screen and (max-width:482px) {
            font-size: 16px;
        }
    }

    .wrpright_link{
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        margin-bottom: 5px;

        @media screen and (max-width:482px) {
            font-size: 13px;
        }
    }

    .wrapright_des{
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;

        @media screen and (max-width:482px) {
            font-size: 13px;
        }
    }
`

export {Container,Wrapper,WrapLeft,WrapRight,WrapCenter}