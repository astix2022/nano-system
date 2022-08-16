import styled from "styled-components";

const Container =styled.div`
    position: relative;
    right: 33px;
    .menu{
        width: 100%;
        border: none;
        background-color: transparent;
        color: #9E9E9E;
        font-size: 16px;
        
        .ant-menu-submenu{
            margin-top: -35px;
            margin-bottom: -30px;
            padding-bottom: 15px;
        }
        .ant-menu-submenu-arrow{
            color: #9E9E9E;
        }
        .ant-menu-submenu-title{
            :active{
                background-color: white;
            }
        }
        .ant-menu-inline{
            background-color: white;
            .ant-menu-item{
                background-color: white;
            }
        } 
    }
`

export
{
    Container,
}
