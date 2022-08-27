import styled from "styled-components";
import { ReactComponent as chart } from "../../../assets/icons/Chart.svg"

const Container = styled.div`
    width: 100%;
    padding: 0 40px;
`
const Wrapper = styled.div`
    margin-top:25px;
    width: 100%;
    height: 100%;
    padding:25px 25px;
    background-color: #ffffff;
    border-radius: 15px;

`
const TableSection =  styled.div`
    .btn_alldelate{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 25px;
        background: #1E5DFE;
        border: 1px solid #FFFFFF;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #FFFFFF;
    }
`
const Settings =  styled.div`
    .sub-title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #000000;
    }
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .parametr{
        margin: 15px 0 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .count{
        display: flex;
        align-items: center;
         gap: 20px;
    }
    .search{
        input{
            width: 400px;
            height: 41px;
            padding: 12px 16px;
            border: 1px solid #E6E6E6;
            border-radius: 8px;
        }
    }
    .sort{
        width: 93px;
        height: 33px;
        background: #F1F4F9;
        border: 1px solid #E6E6E6;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 0.366667px;
        color: #202F44;
    }
    .hr{
        width: 100%;
        height: 1px;
        margin: 24px 0;
        background-color: #E6E6E6;
    }

`
const Icon = styled.span``
Icon.Chart = styled(chart)`
    position: relative;
    margin-bottom: 10px;
`

const Categories = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 30px;
    div{
        width: 20%;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #9E9E9E;
    }
    .read{
        display: flex;
        justify-content: flex-start;
    }
    .ismFamilya{
        width: 30%;
    }
 
`
export
{
    Container,
    Wrapper,
    TableSection,
    Settings,
    Icon,
    Categories
}