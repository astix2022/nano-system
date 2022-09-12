import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    .loading{
        position: absolute;
        z-index: 999;
    }
    .success{
        position: absolute;
        z-index: 99999;
        top: 20%;
    }
    .from{
        padding: 25px;
        margin-top: 50px;
        width: 500px;
        height: 450px;
        background: #FAFAFA;
        border-radius: 10px;
        @media (max-width: 555px) {
            width: 400px;
            height: fit-content;
        }
        @media (max-width: 430px) {
            width: 350px;
            height: fit-content;
        }
        @media (max-width: 375px) {
            width: 320px;
            height: fit-content;
        }
        @media (max-width: 340px) {
            width: 280px;
            height: fit-content;
        }
        @media (max-width: 300px) {
            width: 270px;
            height: fit-content;
        }
        .from__title{
            font-style: normal;
            font-weight: 600;
            font-size: 25px;
            text-align: center;
            @media (max-width: 555px) {
                font-size: 18px;
            }

        }
        .from__dec{
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            text-align: center;
            color: #9E9E9E;
            @media (max-width: 555px) {
                font-size: 12px;
            }
        }
        .from__inputs{
            width: 100%;
            margin-top: 25px;
            display: flex;
            gap: 5px;
            @media (max-width: 555px) {
                flex-direction: column;
            }
        }
        .arizaNomi{
            flex: 1;
            height: 45px;
            left: 0px;
            top: 10px;
            background: #FFFFFF;
            border: 1px solid #9E9E9E;
            border-radius: 5px;
            padding: 10px;
        }
        .bolimNomi{
            flex: 1;
            height: 45px;
            background: #FFFFFF;
            border: 1px solid #9E9E9E;
            border-radius: 5px;
            padding: 10px;
            @media (max-width: 555px) {
                margin-top: 10px;
            }
        }
        .textarea{
            margin-top: 25px;
            padding: 10px;
            width: 100%;
            height: 150px;
            background: #FFFFFF;
            border: 1px solid #9E9E9E;
            border-radius: 5px;
            @media (max-width: 555px) {
                margin-top: 10px;
            }
        }
        .btn_wrap{
            width: 100%;
            margin-top: 20px;
            text-align: center;
            @media (max-width: 555px) {
                margin-top: 10px;
            }
        }
        .btn{
            width: 150px;
            height: 35px;
            background: #1E5DFE;
            border-radius: 15px;
            border: none;
            font-weight: 400;
            color: #FAFAFA;
            &:disabled{
                opacity: 0.5;
            }
            
        }
        .btn:active {
            transform: scale(1) !important;
            opacity: 0.5 !important;
        }
    }
`

export
{
    Container,
}