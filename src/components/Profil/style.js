import styled from "styled-components";
import { ReactComponent as user } from "../../assets/icons/profil_user.svg";
import { ReactComponent as back } from "../../assets/icons/profil_back.svg";

const Icon = styled.img``
const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color:  #FAFAFA;
    padding-bottom: 70px;
`
const Nav = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0px 55px;

    .nav_wrap{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }
    
    .nav_back{
        font-weight: 500;
        font-size: 16px;
        color: #3A3A3A;
    }
    `
Icon.Back = styled(back)`
    width: 25px;
    height: 15px;
    cursor: pointer;
`

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 100px;
    margin-top: 24px;
    `

const WrapTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;
    `

const List = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    .login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        
        .login_user{
            font-weight: 500;
            font-size: 16px;
            color: #3A3A3A;
        }
        
        .login_id{
            font-weight: 500;
            font-size: 12px;
            color: #9E9E9E;
        }
    }

    .edit{
        position: relative;
        top: 18px;
        left: -40px;
        font-weight: 500;
        font-size: 13px;
        color: #1E5DFE;
        cursor: pointer;
        text-decoration: underline;
    }
    `

Icon.User =styled(user)`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    `

const WrapBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    gap: 20px;
    `

const Card = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #ffffff;
    border-radius: 5px;

    .table{
        padding: 0px 5px;
        margin: 10px;
    }
    `

const CardTitle = styled.div`
    width: 100%;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 20px;
    padding: 10px 24px;

    .card_title{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card_title_des{
    font-weight: 500;
    font-size: 25px;
    color: #202F44;
    }

    .card_title_num{
        font-weight: 400;
        font-size: 12px;
        color: #202F44;
    }
`

// Icon.Ariza = styled(ariza)`
//     width: 80px;
//     height: 80px;
// `
// Icon.Taklif = styled(taklif)`
//     width: 60px;
//     height: 60px;
// `
export {
    Container,
    Nav,
    Wrapper,
    WrapTop,
    WrapBottom,
    List,
    Card,
    Icon,
    CardTitle
}